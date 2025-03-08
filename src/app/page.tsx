import { Suspense } from "react";
import Ans from "./ans";

export default function Home() {
  return (
    <main>
      <h1>Ana! </h1>
      <div className="anas">
        <Suspense fallback={<p>Loading feed...</p>}>
          <Ans />
        </Suspense>
      </div>
    </main>
  );
}
