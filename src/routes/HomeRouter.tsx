import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "../components/HomeLayout";
import Gallery from "../views/GalleryView";
import Features from "../views/FeaturesView";
import { HomeView } from "../views/HomeVIew";

export const HomeRouter = () => 
{
    return (
        <>
           <HomeLayout>
                <Routes>
                    <Route path="/home" element={<HomeView />}/>
                    <Route path="/features" element={<Features />}/>
                    <Route path="/gallery" element={<Gallery />}/>
                    <Route path="/contact" element={<></>}/>
                    <Route path="/download" element={<></>}/>
                </Routes>
            </HomeLayout> 
        </>
    );
}