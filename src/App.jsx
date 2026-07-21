import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BuyNow from "./pages/BuyNow";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<BuyNow />} />
    </Routes>
  );
}

export default App;