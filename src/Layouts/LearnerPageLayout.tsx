import { Outlet } from "react-router-dom";
import LearnerSidebar from "../LearnerComponents/LearnerSidebar";
import LearnerHeader from "../LearnerComponents/LearnerHeader";

const LearnerPageLayout = ()=>{
    return(
        <div className="min-h-screen flex">
            <aside className="flex-none h-screen sticky top-0">
             <LearnerSidebar/>
             </aside>
             <div className="flex-1 flex flex-col">
                <header className="flex-none sticky top-0">
                    <LearnerHeader/>
                </header>

             <main className="flex-1 overflow-auto bg-gray-50">
            <Outlet/>
             </main>
                </div>
        </div>
    )
}

export default LearnerPageLayout;