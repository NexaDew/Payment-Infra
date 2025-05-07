import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Developers from "./pages/Developers";
import Company from "./pages/Company";
import Pricing from "./pages/Pricing";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/company" element={<Company />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}
