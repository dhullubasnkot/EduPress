import Navbar from "./components/navbar";
import FeaturedCourses from "./pages/featuredcourses";
import Hero from "./pages/hero";
import LearnLms from "./pages/LearnLMS";
import TopCategories from "./pages/topcategories";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopCategories />
      <FeaturedCourses />
      <LearnLms />
    </>
  );
}
