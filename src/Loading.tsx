import { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="spinner-box">
      <div className="circle-border">
        <div className="circle-core"></div>
      </div>
    </div>
  );
};

export default Loading;
