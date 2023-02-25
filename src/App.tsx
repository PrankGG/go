import { Routes, Route } from "react-router-dom";
import Redirect from "./Redirect";
export default function App() {
  return (
    <div className="m-auto text-center">
      <img
        src="https://cdn.discordapp.com/attachments/927030276394217482/993629387012448306/logowhite.svg"
        alt="Logo"
        className="w-96"
      />
      <Routes>
        <Route path="*" element={<Redirect />} />
      </Routes>
      <a href="https://prank.gg" className="text-xs block text-zinc-400">
        Go back to Prank.GG.
      </a>
    </div>
  );
}
