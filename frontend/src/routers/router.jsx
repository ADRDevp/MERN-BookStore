import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <h1>Home Page</h1>
            },
            {
                path: "/orders",
                element: <div>Orders Page</div>
            },
            {
                path: "/about",
                element: <div>About Page</div>
            }
        ]
    }]);

export default router;