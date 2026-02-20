import SignInPage from "pages/auth/SignInPage";
import SignUpPage from "pages/auth/SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// test api route
// const response = await apiFetch("GET", "/api-key/info");
// console.log(response.status);
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
