import Category from "../components/Category";
import LandingPage from "../components/LandingPage";
import LatestItems from "../components/LatestItems";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <div>
        <Navbar/>
        <LandingPage/>
        <Category/>
        <LatestItems/>
        <Partners/>
    </div>
  );
}
