import MyNavbar from "./navbar";
import Footer from "./footer";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function MyPortfolio() {
  return (
    <div>
        <div className="sticky top-0 z-50">
            <MyNavbar/>
        </div>
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>
        <div>
            <Portfolio />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}