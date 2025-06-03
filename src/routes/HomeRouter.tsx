import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "../components/HomeLayout";

export const HomeRouter = () => 
{
    return (
        <>
           <HomeLayout>
                <Routes>
                    <Route path="/home" element={<></>}/>
                    <Route path="/features" element={<></>}/>
                    <Route path="/gallery" element={<></>}/>
                    <Route path="/contact" element={<></>}/>
                    <Route path="/download" element={<></>}/>
                </Routes>
            </HomeLayout> 
        </>
    );
}