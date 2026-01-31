import { useState } from 'react';
import { useStore } from './store';
import { ConfirmModal } from './components/ConfirmModal';

export const ClearButton = () => {
  const clearCanvas = useStore((state) => state.clearCanvas);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <button
          onClick={() => setShowConfirm(true)}
          style={{
            padding: '6px 14px',
            fontSize: 12,
            borderRadius: 6,
            border: '1px solid #ef4444',
            background: '#ef4444',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Clear Canvas
        </button>
      </div>

      {showConfirm && (
        <ConfirmModal
          title="Clear Canvas"
          message="This will permanently remove all nodes and connections. This action cannot be undone."
          confirmText="Clear"
          onCancel={() => setShowConfirm(false)}
          onConfirm={() => {
            clearCanvas();
            setShowConfirm(false);
          }}
        />
      )}
    </>
  );
};
