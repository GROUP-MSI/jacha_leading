
import type { ReactNode } from "react";


interface HomeLayoutProp
{
  children : ReactNode
}

export const HomeLayout = ({children} : HomeLayoutProp) => 
{

 return (
    <div>
        {children}
    </div>
 ); 
}