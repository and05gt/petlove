import { lazy, Suspense } from "react";
import "./App.css";
import Layout from "./components/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader.jsx";
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const NewsPage = lazy(() => import("./pages/NewsPage.jsx"));
const NoticesPage = lazy(() => import("./pages/NoticesPage.jsx"));
const FriendsPage = lazy(() => import("./pages/FriendsPage.jsx"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage.jsx"));
const AddPetPage = lazy(() => import("./pages/AddPetPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
