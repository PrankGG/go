import { Routes, Route } from "react-router-dom";
import Redirect from "./Redirect";
import { Adsense } from "@ctrl/react-adsense";
export default function App() {
  return (
    <>
      <div className="m-auto text-center my-12">
        <img src="/logowhite.svg" alt="Logo" className="w-28 mb-4 mx-auto" />
        <Routes>
          <Route path="*" element={<Redirect />} />
        </Routes>
        <a href="https://prank.gg" className="text-xs block text-zinc-400 mt-1">
          Go back to Prank.GG.
        </a>
      </div>
      <div className="m-8">
        <Adsense client="ca-pub-5836961899645264" slot="1787632882" />
      </div>
    </>
  );
}
