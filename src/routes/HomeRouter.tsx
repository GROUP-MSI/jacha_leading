import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "../components/HomeLayout";
import Gallery from "../views/GalleryView";

export const HomeRouter = () => 
{
    return (
        <>
           <HomeLayout>
                <Routes>
                    <Route path="/home" element={<></>}/>
                    <Route path="/features" element={<></>}/>
                    <Route path="/gallery" element={<Gallery />}/>
                    <Route path="/contact" element={<></>}/>
                    <Route path="/download" element={<></>}/>
                </Routes>
            </HomeLayout> 
        </>
    );
}