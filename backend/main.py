# from fastapi import FastAPI, Form
# from pydantic import BaseModel
# from typing import List

# class Edge(BaseModel):
#     source: str
#     target: str

# class Pipeline(BaseModel):
#     nodes: list
#     edges: List[Edge]

# app = FastAPI()

# @app.get('/')
# def read_root():
#     return {'Ping': 'Pong'}

# @app.get('/pipelines/parse')
# def parse_pipeline(pipeline: str = Form(...)):
#     return {'status': 'parsed'}


# @app.post('/pipelines/parse')
# def parse_pipeline(pipeline: Pipeline):
#     graph = {}
#     for node in pipeline.nodes:
#         graph[node['id']] = []

#     for edge in pipeline.edges:
#         graph[edge.source].append(edge.target)

#     visited, stack = set(), set()

#     def has_cycle(v):
#         if v in stack:
#             return True
#         if v in visited:
#             return False
#         visited.add(v)
#         stack.add(v)
#         for n in graph[v]:
#             if has_cycle(n):
#                 return True
#         stack.remove(v)
#         return False

#     is_dag = not any(has_cycle(node) for node in graph)

#     return {
#         "num_nodes": len(pipeline.nodes),
#         "num_edges": len(pipeline.edges),
#         "is_dag": is_dag
#     }

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# ✅ ENABLE CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # allow frontend (localhost:3000)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: list
    edges: List[Edge]

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    graph = {node["id"]: [] for node in pipeline.nodes}

    for edge in pipeline.edges:
        graph[edge.source].append(edge.target)

    visited, stack = set(), set()

    def has_cycle(v):
        if v in stack:
            return True
        if v in visited:
            return False
        visited.add(v)
        stack.add(v)
        for n in graph[v]:
            if has_cycle(n):
                return True
        stack.remove(v)
        return False

    is_dag = not any(has_cycle(node) for node in graph)

    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag
    }