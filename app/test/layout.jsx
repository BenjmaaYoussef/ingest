import { Suspense } from "react";
import Header from "./components/Header";
import Loading from "./loading";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
