import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <div>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route
          path="register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
      <Routes>
        <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
      <Routes>
        <Route path="write" element={user ? <Write /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="settings" element={user ? <Settings /> : <register />} />
      </Routes>
      <Routes>
        <Route path="post/:postId" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
