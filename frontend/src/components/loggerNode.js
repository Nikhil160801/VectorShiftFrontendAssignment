import { BaseNode } from "../nodes/BaseNode";

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode title="Logger" inputs={[`${id}-input`]}>
      <p>Logs input</p>
    </BaseNode>
  );
};
