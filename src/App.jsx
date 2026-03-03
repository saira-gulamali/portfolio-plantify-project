import SignInPage from "pages/auth/SignInPage";
import SignUpPage from "pages/auth/SignUpPage";
import PlantsListPage from "pages/PlantsListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";
import { SessionProvider } from "./context/SessionProvider";
// test api route
// const response = await apiFetch("GET", "/api-key/info");
// console.log(response.status);

function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RedirectToPlantsIfSignedIn>
                <SignInPage />
              </RedirectToPlantsIfSignedIn>
            }
          />

          <Route
            path="sign-up"
            element={
              <RedirectToPlantsIfSignedIn>
                <SignUpPage />
              </RedirectToPlantsIfSignedIn>
            }
          />
          <Route path="plants" element={<PlantsListPage />} />
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  );
}

export default App;
