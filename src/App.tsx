import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Route>
    </Routes>
  );
}
