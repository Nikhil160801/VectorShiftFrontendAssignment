import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  width = 200,
  children,
}) => {
  return (
    <div
      style={{
        width,
        padding: 10,
        borderRadius: 8,

        /* 👇 THEME COLORS GO HERE */
        background: 'var(--node-bg)',
        border: '1px solid var(--border)',
        color: 'var(--text)',

        fontSize: 12,
      }}
    >
      {/* Node title */}
      <div
        style={{
          fontWeight: 600,
          marginBottom: 6,
          color: 'var(--text)',
        }}
      >
        {title}
      </div>

      {/* Input handles */}
      {inputs.map((id, index) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          style={{
            top: 40 + index * 20,
            background: 'var(--accent)',
            border: '1px solid var(--border)',
          }}
        />
      ))}

      {/* Node content */}
      <div>{children}</div>

      {/* Output handles */}
      {outputs.map((id, index) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={{
            top: 40 + index * 20,
            background: 'var(--accent)',
            border: '1px solid var(--border)',
          }}
        />
      ))}
    </div>
  );
};
