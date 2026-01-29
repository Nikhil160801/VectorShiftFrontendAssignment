import { BaseNode } from './BaseNode';

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode title="Logger" inputs={[`${id}-input`]}>
      <p>Logs input</p>
    </BaseNode>
  );
};
