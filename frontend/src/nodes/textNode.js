import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...text.matchAll(regex)].map(
      (m) => `${id}-${m[1]}`
    );
    setVariables(matches);
  }, [text, id]);

  const handleChange = (e) => {
    setText(e.target.value);
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + 'px';
  };

  return (
    <BaseNode
      title="Text"
      inputs={variables}
      outputs={[`${id}-output`]}
      width={220}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        style={{
          width: '100%',
          resize: 'none',
          background: 'transparent',
          color: 'var(--text)',
          border: '1px solid var(--border)',
          borderRadius: 4,
          padding: 6,
        }}
      />
    </BaseNode>
  );
};
