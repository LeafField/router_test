import { FC, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "./promise";

const Contact: FC = () => {
  const navigate = useNavigate();
  const data = fetchData(true);
  const res = data.get();

  useLayoutEffect(() => {
    if (res === "失敗です。") {
      navigate("..");
    }
  }, [data]);

  return (
    <div>
      <p>{res}</p>
      <Link to={".."}>go back</Link>
    </div>
  );
};

export default Contact;
