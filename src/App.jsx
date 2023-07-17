import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Whatsapp from "./pages/whtsapp/Whatsapp";
import ReactGA from "react-ga";

const trackingId = "G-CSX36HKJXZ";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Whatsapp />} />

        <Route path="/whatsapp" element={<Whatsapp />} />
      </Routes>
    </Router>
  );
}

export default App;
