import { Suspense } from "react";
import { createClient } from "../utils/server";

export default async function Layout({ children }) {
  return (
    <div>
      <Suspense>{children}</Suspense>
    </div>
  );
}
