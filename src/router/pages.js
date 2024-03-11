import HomePage from "../pages/HomePage/HomePage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage.jsx";

export const publicRoutes = [
    { path: '/', element: HomePage },
    { path: '/login', element: LoginPage },
    { path: '/products', element: ProductPage },
    { path: '/products/:id', element: ProductDetailsPage },
]
