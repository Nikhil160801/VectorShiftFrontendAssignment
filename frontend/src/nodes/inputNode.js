import { useState } from 'react';
import { useStore } from '../store';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode title="Input" outputs={[`${id}-value`]}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Name */}
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
              updateNodeField(id, 'inputName', e.target.value);
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

        {/* Type */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <label
            style={{
              fontSize: 11,
              color: 'var(--muted-text)',
            }}
          >
            Type
          </label>

          <select
            value={inputType}
            onChange={(e) => {
              setInputType(e.target.value);
              updateNodeField(id, 'inputType', e.target.value);
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
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};
