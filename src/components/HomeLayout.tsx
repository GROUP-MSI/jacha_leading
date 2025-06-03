
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";


interface HomeLayoutProp
{
  children : ReactNode
}

export const HomeLayout = ({children} : HomeLayoutProp) => 
{

 return (
    <div>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
 ); 
}