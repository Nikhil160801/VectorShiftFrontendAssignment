import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const OutputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );

  return (
    <BaseNode title="Output" inputs={[`${id}-value`]}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <label
          style={{
            fontSize: 11,
            color: 'var(--muted-text)',
          }}
        >
          Name
        </label>

        <input
          value={currName}
          onChange={(e) => {
            setCurrName(e.target.value);
            updateNodeField(id, 'outputName', e.target.value);
          }}
          style={{
            width: '100%',
            padding: '4px 6px',
            fontSize: 12,
            borderRadius: 4,
            border: '1px solid var(--border)',
            background: 'transparent',
            color: 'var(--text)',
            outline: 'none',
          }}
          onFocus={(e) =>
            (e.currentTarget.style.border = '1px solid var(--accent)')
          }
          onBlur={(e) =>
            (e.currentTarget.style.border = '1px solid var(--border)')
          }
        />
      </div>
    </BaseNode>
  );
};
