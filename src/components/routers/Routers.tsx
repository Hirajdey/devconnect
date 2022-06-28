import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../page-not-found/PageNotFound";
import SuspenseFallback from "../suspense-fallback/SuspenseFallback";

// Components
const HomeComponent = lazy(() => import('../pages/Home/Home'));
const AboutusComponent = lazy(() => import('../pages/Aboutus/Aboutus'));

const Routers = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/" element={<Suspense fallback={<SuspenseFallback/>}> <HomeComponent/> </Suspense>}/>
      <Route path="/aboutus" element={<Suspense fallback={<SuspenseFallback/>}> <AboutusComponent/> </Suspense>}/>
    </Routes>
  );
};

export default Routers;
