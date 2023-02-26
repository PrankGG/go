import { Routes, Route } from "react-router-dom";
import Redirect from "./Redirect";
export default function App() {
  return (
    <div className="m-auto text-center mt-12">
      <img
        src="https://cdn.discordapp.com/attachments/927030276394217482/993629293714350110/logowhite.svg"
        alt="Logo"
        className="w-28 mb-4 mx-auto"
      />
      <Routes>
        <Route path="*" element={<Redirect />} />
      </Routes>
      <a href="https://prank.gg" className="text-xs block text-zinc-400 mt-1">
        Go back to Prank.GG.
      </a>
    </div>
  );
}
