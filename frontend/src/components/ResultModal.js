export const ResultModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,

        /* 👇 TRANSLUCENT BACKGROUND */
        background: 'rgba(0, 0, 0, 0.35)',
        backdropFilter: 'blur(6px)',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
      }}
    >
      <div
        style={{
          width: 320,
          padding: 18,
          borderRadius: 12,

          background: 'var(--panel-bg)',
          border: '1px solid var(--border)',
          color: 'var(--text)',

          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          📊 Pipeline Summary
        </div>

        {/* Content */}
        <div style={{ fontSize: 12, lineHeight: 1.7 }}>
          <div>🧩 Nodes: <b>{data.num_nodes}</b></div>
          <div>🔗 Edges: <b>{data.num_edges}</b></div>
          <div>
            🧠 DAG:{' '}
            <b style={{ color: data.is_dag ? '#22c55e' : '#ef4444' }}>
              {data.is_dag ? 'Valid' : 'Cycle Detected'}
            </b>
          </div>
        </div>

        {/* Actions */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 18,
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: '6px 14px',
              fontSize: 12,
              borderRadius: 6,
              border: '1px solid var(--border)',
              background: 'transparent',
              color: 'var(--text)',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
