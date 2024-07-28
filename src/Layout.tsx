import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  Suspense,
  useState,
} from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import Loading from "./Loading";

export const ErrorContext = createContext<string | undefined>(undefined);
export const ErrorContextCallback = createContext<Dispatch<string | undefined>>(
  () => {}
);

const ErrorComponents = () => {
  return <p>エラーバウンダリーでキャッチ</p>;
};

const Layout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const [err, setErr] = useState<string | undefined>(undefined);
  return (
    <Suspense fallback={<Loading />}>
      <ReactErrorBoundary FallbackComponent={ErrorComponents}>
        <ErrorContextCallback.Provider value={setErr}>
          <ErrorContext.Provider value={err}>{children}</ErrorContext.Provider>
        </ErrorContextCallback.Provider>
      </ReactErrorBoundary>
    </Suspense>
  );
};

export default Layout;
