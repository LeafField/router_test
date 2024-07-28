import { FC, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { fetchData } from "./promise";
import { ErrorContextCallback } from "./Layout";

const Contact: FC = (): JSX.Element | undefined => {
  const [view, setView] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const rejected = searchParams.get("rejected");
  const data = fetchData(Boolean(rejected));
  const res = data.get();
  const setError = useContext(ErrorContextCallback);

  useEffect(() => {
    if (res === "失敗です。") {
      setView(false);
      setError(res);
      navigate("..");
    } else {
      setError(undefined);
      setView(true);
    }
  }, [res, setError, navigate]);

  if (view) {
    return (
      <div>
        <p>{res}</p>
        <Link to={".."}>go back</Link>
      </div>
    );
  }
};

export default Contact;
