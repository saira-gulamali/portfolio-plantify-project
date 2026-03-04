import SignInPage from "pages/auth/SignInPage";
import SignUpPage from "pages/auth/SignUpPage";
import PlantsListPage from "pages/PlantsListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";
import { SessionProvider } from "./context/SessionProvider";
import RedirectToSignInIfSignOut from "shared-components/RedirectToSignInIfSignOut";

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
          <Route
            path="plants"
            element={
              <RedirectToSignInIfSignOut>
                <PlantsListPage />
              </RedirectToSignInIfSignOut>
            }
          />
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  );
}

export default App;
