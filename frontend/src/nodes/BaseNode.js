import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  width = 200,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width,
        padding: 10,
        borderRadius: 8,

        background: 'var(--node-bg)',
        border: '1px solid var(--border)',
        color: 'var(--text)',

        fontSize: 12,

        /* 👇 PURPLE GLOW ON HOVER */
        boxShadow: isHovered
          ? '0 0 0 2px rgba(168, 85, 247, 0.8), 0 4px 12px rgba(168, 85, 247, 0.5)'
          : 'none',

        transition: 'box-shadow 0.15s ease',
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
