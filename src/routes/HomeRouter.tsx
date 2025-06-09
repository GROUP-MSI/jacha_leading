import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "../components/HomeLayout";
import { HomeView } from "../views/HomeVIew";
import { GalleryView } from "../views/GalleryView";
import { ContactView } from "../views/ContactView";
import { FeaturesView } from "../views/FeaturesView";
import { DownloadView } from "../views/DownloadView";

export const HomeRouter = () => 
{
    return (
        <>
           <HomeLayout>
                <Routes>
                    <Route path="/home" element={<HomeView />}/>
                    <Route path="/features" element={<FeaturesView /> } />
                    <Route path="/gallery" element={<GalleryView /> }/>
                    <Route path="/contact" element={<ContactView /> }/>
                    <Route path="/download" element={<DownloadView /> }/>
                </Routes>
            </HomeLayout> 
        </>
    );
}