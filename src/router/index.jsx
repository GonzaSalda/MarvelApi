import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage'
import CharacterPage from '../pages/CharacterPage'
import LayoutPublic from "../layouts/LayoutPublic";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<LayoutPublic/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:'/character/:id',
                element:<CharacterPage/>
            }

        ]
    }
   


])