import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout showHero><HomePage /></Layout>} />
      <Route path="/auth-callback" element={<AuthCallbackPage/>} />
      <Route 
        path="/search/:city" 
        element={
          <Layout showHero={false}>
            <SearchPage />
          </Layout>
        }
      />
      <Route 
        path="/detail/:restaurantId" 
        element={
          <Layout showHero={false}>
            <DetailPage />
          </Layout>
        }
      />
      
      <Route element={<ProtectedRoute/>}>
        <Route 
          path="/order-status" 
          element={
            <Layout>
              <OrderStatusPage />
            </Layout>
          } 
        />

        <Route 
          path="/user-profile" 
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          } 
        />
        <Route 
          path="/manage-restaurant" 
          element={
            <Layout>
              <ManageRestaurantPage />
            </Layout>
          } 
        />
      </Route>
      {/* <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>} /> */}
      <Route path="*" element={<Navigate to="/" />} />
      <Route 
        path="/privacy-policy" 
        element={
          <Layout>
            <PrivacyPolicy />
          </Layout>
        }
      />
      <Route 
        path="/terms-and-conditions" 
        element={
          <Layout>
            <TermsAndConditions />
          </Layout>
        }
      />

    </Routes>
  );
};

export default AppRoutes;