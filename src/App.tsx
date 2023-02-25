import { Routes, Route } from "react-router-dom";
import Redirect from "./Redirect";
export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Redirect />} />
    </Routes>
  );
}
