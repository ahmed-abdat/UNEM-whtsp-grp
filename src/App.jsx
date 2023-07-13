import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





// const Whatsapp = lazy(() => import("./pages/whtsapp/Whatsapp"));

import Whatsapp from "./pages/whtsapp/Whatsapp";












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
