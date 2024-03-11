import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Suspense>{children}</Suspense>
    </div>
  );
}
