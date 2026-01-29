// outputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const OutputNode = ({ id, data }) => {
  const updateNodeField = useStore(state => state.updateNodeField);

  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );

  return (
    <BaseNode title="Output" inputs={[`${id}-value`]}>
      <label>
        Name:
        <input
          value={currName}
          onChange={(e) => {
            setCurrName(e.target.value);
            updateNodeField(id, 'outputName', e.target.value);
          }}
        />
      </label>
    </BaseNode>
  );
};
