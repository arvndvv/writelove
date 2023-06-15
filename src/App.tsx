import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home.page";
import { Recommendations } from "./pages/recommendations/Recommendations.page";
import { Header } from "./components/header/Header.component";
import { GlobalStateProvider } from "./global/store";
import { AuthGuard, UnAuthGuard } from "./guards/AuthGuard";
import { Toaster } from "react-hot-toast";
import { SignIn } from "./pages/signIn/SignIn.page";
import { WriteRoutes } from "./constants/routes";

function App() {
  return (
    <GlobalStateProvider>
      <Toaster />
      <div className="container mx-auto p-5 base">
        <Routes>
          <Route path={WriteRoutes.HOME} element={<Header />}>
            <Route index element={<Home />}></Route>
            <Route
              path={WriteRoutes.SIGN_IN}
              element={<UnAuthGuard component={<SignIn />} />}
            ></Route>
            <Route
              path={WriteRoutes.RECOMMENDATIONS}
              element={<AuthGuard component={<Recommendations />} />}
            ></Route>
          </Route>
        </Routes>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
