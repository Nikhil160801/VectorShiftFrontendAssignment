import { BaseNode } from "../nodes/BaseNode";


export const DelayPipelineNode = ({ id }) => {
  return (
    <BaseNode
      title="Delay"
      inputs={[`${id}-input`]}
      outputs={[`${id}-output`]}
    >
      <p>Delays execution</p>
    </BaseNode>
  );
};
