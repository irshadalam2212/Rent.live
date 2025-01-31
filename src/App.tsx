import { Outlet } from "react-router-dom"
import Footer from "./components/footer"
import HeroSection from "./components/hero"
import Listing from "./components/listing"
import Login from "./components/login"
import Navbar from "./components/navbar"
import SignIn from "./components/signup"
import Trendings from "./components/trending"
import Addlisting from "./pages/addlisting"
import Home from "./pages/home"

// const App = () => {
//   return (
//     <div className="w-11/12 mx-auto pb-3">
//       <Navbar />
//       <Home />
//       <Login />
//       <SignIn />
//       <Addlisting />
//       <Footer />
//       <Outlet />
//     </div>

//   )
// }

// export default App


function App() {
  return (
    <div className="w-11/12 mx-auto pb-3">
      <Outlet />
    </div>
  );
}

export default App;