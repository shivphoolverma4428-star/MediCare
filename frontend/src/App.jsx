import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Services from "./pages/Services";
import Appointments from "./pages/Appointments";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookAppointment from "./pages/BookAppointment";
import Contact from './pages/Contact';
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/doctors"
          element={<Doctors />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/appointments"
          element={<Appointments />}
        />

        <Route
          path="/book/:doctorId"
          element={<BookAppointment />}
        />

        <Route path="/contact"
        element={<Contact />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;