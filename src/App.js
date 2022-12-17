import "./styles.css";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Filieres from "./routes/filieres";
import LogIn from "./routes/login";
import Admin from "./routes/admin";
import AdminSysEdu from "./routes/admsysedu";
import AdminPlaning from "./routes/admplaning";
import AdminAddMsg from "./routes/admaddmsg";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/filieres" element={<Filieres />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/admin" element={<AdminAddTeacher />} /> */}
        <Route path="/admsysedu" element={<AdminSysEdu />} />
        <Route path="/admplaning" element={<AdminPlaning />} />
        <Route path="/admaddmsg" element={<AdminAddMsg />} />
      </Routes>
    </div>
  );
}
