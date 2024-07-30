import { FC, useContext, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchData } from "./promise";
import { ErrorContextCallback } from "./Layout";

const Contact: FC = (): JSX.Element | undefined => {
  const [searchParams] = useSearchParams();
  const rejected = searchParams.get("rejected");
  const data = fetchData(Boolean(rejected));
  const res = data.get();
  const setError = useContext(ErrorContextCallback);

  useEffect(() => {
    setError(undefined);
  }, [setError]);

  if (res) {
    return (
      <div>
        <p>{res}</p>
        <Link to={".."}>go back</Link>
      </div>
    );
  } else throw Error("コンポーネント内非同期処理のエラーです。");
};

export default Contact;
