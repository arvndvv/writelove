import React from "react";
import "./App.scss";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { Home } from "./pages/home/Home.page";
import { Recommendations } from "./pages/recommendations/Recommendations.page";
import { Header } from "./components/header/Header.component";
import { GlobalStateProvider } from "./global/store";
import AuthGuard from "./guards/AuthGuard";
import { Toaster } from "react-hot-toast";
import { SignIn } from "./pages/signIn/SignIn.page";
import { WriteRoutes } from "./constants/routes";
import ReadBlog from "./pages/read-blog/ReadBlog.page";
import PageNotFound from "./pages/404/404";
import UnAuthGuard from "./guards/unAuthGuard";

function Layout() {
  return (
    <div className="container mx-auto p-5 base">
      <Header />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <GlobalStateProvider>
      <Toaster />
      <Routes>
        <Route path={WriteRoutes.BASE} element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route element={<UnAuthGuard />}>
            <Route path={WriteRoutes.SIGN_IN} element={<SignIn />} />
          </Route>
          <Route element={<AuthGuard />}>
            <Route
              path={WriteRoutes.RECOMMENDATIONS}
              element={<Recommendations />}
            />
            <Route path={WriteRoutes.READ}>
              <Route index element={<Navigate to="../" />} />
              <Route path=":id" element={<ReadBlog />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </GlobalStateProvider>
  );
}

export default App;
