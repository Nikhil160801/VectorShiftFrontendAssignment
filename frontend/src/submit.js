import { useState } from 'react';
import { useStore } from './store';
import { ResultModal } from './components/ResultModal';

export const SubmitButton = () => {
  const { nodes, edges } = useStore();
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:8000/pipelines/parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nodes, edges }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
        <button
          onClick={handleSubmit}
          style={{
            padding: '6px 14px',
            fontSize: 12,
            borderRadius: 6,
            border: '1px solid var(--accent)',
            backgroundColor: 'var(--accent)',
            color: '#fff',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = 'var(--accent)')
          }
        >
          Submit
        </button>
      </div>

      {/* Custom Alert */}
      <ResultModal data={result} onClose={() => setResult(null)} />
    </>
  );
};
