import { FC } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from '../App'
import Home from '../pages/home'
import Login from '../components/login'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Privateroutes from './privateroutes'
import SignUp from '../components/signup'
const AppRoutes: FC = () => {
    const queryClient = new QueryClient({
        // defaultOptions: {
        //     queries: {
        //         refetchOnWindowFocus: Dev_Var === environments.development ? false : true,
        //     },
        // },
    });

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "home",
                    element: <Home />
                },
                {
                    index: true,
                    element: <Navigate to="home" />
                },
                {
                    path: "login",
                    element: <Login />
                },
                {
                    path: "signup",
                    element: <SignUp />
                },
                {
                    path: "/*",
                    element: <Privateroutes />
                }
            ]
        }
    ])

    return (
        // <QueryClientProvider client={queryClient} contextSharing={true}>
        // <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
        <RouterProvider router={router} />
        // </QueryClientProvider>
    );
};

export { AppRoutes }