import { FC, useContext, useEffect } from "react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { ErrorContextCallback } from "./Layout";

const ErrorElement: FC = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const setError = useContext(ErrorContextCallback);

  useEffect(() => {
    if (error instanceof Error) {
      console.log("Errorインスタンスです。");
      setError(error.message);
      navigate("..");
    } else if (isRouteErrorResponse(error)) {
      console.log("isRouteErrorResponseのエラーです。");
      setError(error.statusText);
      navigate("..");
    }
  }, [error, navigate, setError]);

  return null;
};

export default ErrorElement;
