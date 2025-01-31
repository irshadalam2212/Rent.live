import Footer from "./components/footer"
import HeroSection from "./components/hero"
import Listing from "./components/listing"
import Login from "./components/login"
import Navbar from "./components/navbar"
import SignIn from "./components/signin"
import Trendings from "./components/trending"
import Addlisting from "./pages/addlisting"

const App = () => {
  return (
    <div className="w-11/12 mx-auto pb-3">
      {/* <Navbar />
      <HeroSection />
      <Listing />
      <Trendings />
      <Footer /> */}
      {/* <Login /> */}
      {/* <SignIn /> */}
      <Addlisting />
    </div>
  )
}

export default App