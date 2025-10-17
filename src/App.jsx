const { VITE_API_KEY, VITE_API_BASE_URL } = import.meta.env;
console.log("API Key:", VITE_API_KEY);
console.log("API Base URL:", VITE_API_BASE_URL);

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
