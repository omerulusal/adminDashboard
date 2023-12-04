import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import Users from "./pages/users/Users"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import "./styles/global.scss"
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import Settings from "./pages/settings/Settings";
function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer"><Menu /></div>
          <div className="contentContainer"> <Outlet /> </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // Layout heryerde görunmeli bu yuzden sayfaları children olarak yolladım.
      children: [
        {
          path: "/",
          element: (<Home />)
        },
        {
          path: "/users",
          element: (<Users />)
        },
        {
          path: "/products",
          element: (<Products />)
        },
        {
          path: "/users/:id",
          element: (<User />)
        },
        {
          path: "/products/:id",
          element: (<Product />)
        },
        {
          path: "/settings",
          element: (<Settings />)
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App
