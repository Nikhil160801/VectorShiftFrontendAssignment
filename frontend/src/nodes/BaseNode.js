import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  width = 200,
}) => {
  return (
    <div
      style={{
        width,
        padding: '10px',
        border: '1px solid #333',
        borderRadius: '8px',
        background: '#fff',
      }}
    >
      {/* INPUT HANDLES */}
      {inputs.map((id, index) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          style={{ top: 40 + index * 20 }}
        />
      ))}

      <div style={{ fontWeight: 600, marginBottom: '6px' }}>{title}</div>

      <div>{children}</div>

      {/* OUTPUT HANDLES */}
      {outputs.map((id, index) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={{ top: 40 + index * 20 }}
        />
      ))}
    </div>
  );
};
