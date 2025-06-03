import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "../components/HomeLayout";

export const HomeRouter = () => 
{
    return (
        <>
           <HomeLayout>
                <Routes>
                    <Route path="/" element={<></>}/>
                </Routes>
            </HomeLayout> 
        </>
    );
}