// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:8000/pipelines/parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nodes, edges }),
    });

    const data = await res.json();

    alert(
      `Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`
    );
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

