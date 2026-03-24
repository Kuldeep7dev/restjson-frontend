import { Routes, Route, useLocation, Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Pages/Home";
import Docs from "./Pages/Docs";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import PublicLayout from "./Layout/PublicLayout";
import UnPublic from "./Layout/UnPublic";

import Dashboard from "./Component/Dashboard/Dashboard";
import AdminPanel from "./Pages/DashboardPages/AdminPanel";
import Reports from "./Pages/DashboardPages/Reports";
import SignUp from "./Pages/DashboardPages/SignUp";
import Login from "./Component/Dashboard/Login";

function App() {
  const location = useLocation();

  return (
    <div style={{ fontFamily: "Space Mono", userSelect: "none" }}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          <Route element={<PublicLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
          </Route>

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          {/* DASHBOARD + SIDEBAR */}

          <Route element={<UnPublic />}>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
