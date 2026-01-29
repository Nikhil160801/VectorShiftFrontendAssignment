// inputNode.js

import { useState } from 'react';

import { useStore } from '../store';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore(state => state.updateNodeField);

  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <BaseNode title="Input" outputs={[`${id}-value`]}>
      <label>
        Name:
        <input
          value={currName}
          onChange={(e) => {
            setCurrName(e.target.value);
            updateNodeField(id, 'inputName', e.target.value);
          }}
        />
      </label>

      <label>
        Type:
        <select
          value={inputType}
          onChange={(e) => {
            setInputType(e.target.value);
            updateNodeField(id, 'inputType', e.target.value);
          }}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};
