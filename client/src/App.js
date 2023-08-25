import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChatWindow, Home } from "./pages";
import ProtectRoute from "./routes/ProtectRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/chat"
          element={
            <ProtectRoute>
              <ChatWindow />
            </ProtectRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
