import { create } from 'zustand';
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from 'reactflow';

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  nodeIDs: {},

  /* Generate incremental node IDs per type */
  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };
    if (!newIDs[type]) newIDs[type] = 0;
    newIDs[type] += 1;

    set({ nodeIDs: newIDs });
    return `${type}-${newIDs[type]}`;
  },

  /* Add node */
  addNode: (node) => {
    set({ nodes: [...get().nodes, node] });
  },

  /* 👇 Handles ALL node changes (move, select, delete) */
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  /* 👇 Handles edge add/remove/update */
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  /* 👇 Handle new connections */
  onConnect: (connection) => {
    set({
      edges: addEdge(
        {
          ...connection,
          type: 'smoothstep',
          animated: true,
          markerEnd: {
            type: MarkerType.Arrow,
            width: 20,
            height: 20,
          },
        },
        get().edges
      ),
    });
  },

  /* Update node data */
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, [fieldName]: fieldValue };
        }
        return node;
      }),
    });
  },

  /* Clear everything */
  clearCanvas: () => {
    set({
      nodes: [],
      edges: [],
      nodeIDs: {},
    });
  },
}));
