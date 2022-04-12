import { MasterLayout } from "../_metronic/layout/MasterLayout"
import { NoRouteFound, Trending } from "./pages"


export const routes = [
    {
        path: '/',
        element: <MasterLayout />,
        children: [
            {
                path: 'trending',
                element: <Trending />
            }
        ]
    },
    {
        path: '*',
        element: <NoRouteFound />
    }
]