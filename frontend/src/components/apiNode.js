import { BaseNode } from "../nodes/BaseNode";


export const ApiNode = ({ id }) => {
  return (
    <BaseNode
      title="API Request"
      inputs={[`${id}-input`]}
      outputs={[`${id}-response`]}
    >
      <p>Makes API call</p>
    </BaseNode>
  );
};
