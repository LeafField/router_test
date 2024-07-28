import { FC, PropsWithChildren, Suspense } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback={<p>...Now Loading</p>}>{children}</Suspense>;
};

export default Layout;
