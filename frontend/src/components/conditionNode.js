import { BaseNode } from "../nodes/BaseNode";


export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      title="Condition"
      inputs={[`${id}-input`]}
      outputs={[`${id}-true`, `${id}-false`]}
    >
      <p>Conditional branching</p>
    </BaseNode>
  );
};
