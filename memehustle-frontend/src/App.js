import React from "react";
import MemeForm from "./MemeForm";
import MemeFeed from "./MemeFeed";

function App() {
  return (
    <div className="min-h" >
      <h1 className="text-xl">
        MemeHustle
      </h1>
      <MemeForm />
      <MemeFeed />
    </div>
  );
}

export default App;

