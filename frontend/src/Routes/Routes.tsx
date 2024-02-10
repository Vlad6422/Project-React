import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";

export const router = createBrowserRouter([
    {
        path:"/Project-React",
        element: <App/>,
        children:[
            {
                path: "",
                element: <HomePage/>
            },
            {
                path: "search",
                element: <SearchPage/>
            },
            {
                path: "company/:ticker",
                element: <CompanyPage/>
            }
        ]
    }
])