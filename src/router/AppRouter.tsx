import  { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../layouts/mainLayout.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import LogIn from "../pages/LogIn.tsx";

export const AppRouter = () => [
    // 사용자 권한.  => 일반사용자, 솬리자
    //     회원관리  => /admin/user/list
    // 이 관리 기능은 Javascript로 접근을 해야됨. 그래서 이 방식을 제공하고 있음.
    // (이 방식이 react-router가 권장하는 방식)
    const routes : RouteObject[] = [
        {
            element: <MainLayout />,
            path: "/",
            children: [
                { index: true, element: <Home /> },
                { path: "/about", element: <About /> },
            ],
        },
        {
            path: "/auth/login",
            element: <logIn />,
        },
    ];

    return createBrowserRouter(routes);
};