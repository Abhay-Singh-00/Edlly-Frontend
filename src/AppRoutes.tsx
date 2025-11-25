import React, {Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LearnerPageLayout from "./Layouts/LearnerPageLayout";
import LearnerDashboard from "./pages/LearnerDashboard";
import Profile from "./Components/Profile";
import AiTutor from "./Components/AiTutor";
import Post from "./Components/Post";

const AppRoutes =()=> {
    return (
       <Suspense fallback={<div>Loading...</div>}>
         <Routes>
        <Route path="/learner" element={<LearnerPageLayout/>} >
        <Route index element={<LearnerDashboard/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="posts" element={<Post/>}/>
        <Route path="aiTutor" element={<AiTutor/>}/>
        </Route>
       </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
      </Suspense>
    )
}

export default AppRoutes;
