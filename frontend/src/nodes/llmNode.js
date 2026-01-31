import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[`${id}-system`, `${id}-prompt`]}
      outputs={[`${id}-response`]}
    >
      <p
        style={{
          margin: 25,
          fontSize: 12,
          color: 'var(--muted-text)',
          lineHeight: 1.4,
        }}
      >
        This is an LLM node.
      </p>
    </BaseNode>
  );
};
