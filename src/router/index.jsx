import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage'
import CharacterPage from '../pages/CharacterPage'
import LayoutPublic from "../layouts/LayoutPublic";
import SearchPage from "../pages/SearchPage";


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
            },
            {
                path:'/search',
                element:<SearchPage/>
            }

        ]
    }
   


])