import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Recipes from './pages/Recipes';
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Register = lazy(() => import("./pages/Register"))
const Login = lazy(() => import("./pages/Login"))
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"))
const Profile = lazy(() => import("./pages/Profile"))
const Navbar = lazy(() => import("./components/Navbar"))
const PrivateRoute = lazy(() => import("./components/PrivateRoute"))
const CreateRecipe = lazy(() => import("./pages/CreateRecipe"))
const EditRecipe = lazy(() => import("./pages/EditRecipe"))
const Recipe = lazy(() => import("./pages/Recipe"))
const Footer = lazy(() => import("./components/Footer"))

function App() {
  return (
    <>
    <Suspense>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/' element={<PrivateRoute />}>
            <Route path="/recipes" element={<Recipes />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<PrivateRoute />}>
            <Route path="/recipes/:recipeId" element={<Recipe />} />
          </Route>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='/' element={<PrivateRoute />}>
            <Route path='/create-recipe' element={<CreateRecipe />} />
          </Route>
          <Route path='/' element={<PrivateRoute />}>
            <Route path='/edit-recipe/:recipeId' element={<EditRecipe />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
