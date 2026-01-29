import { BaseNode } from "../nodes/BaseNode";

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      title="Math"
      inputs={[`${id}-a`, `${id}-b`]}
      outputs={[`${id}-result`]}
    >
      <p>Performs math operation</p>
    </BaseNode>
  );
};
