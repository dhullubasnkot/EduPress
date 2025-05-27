import Navbar from "./components/navbar";
import FeaturedCourses from "./pages/featuredcourses";
import Hero from "./pages/hero";
import TopCategories from "./pages/topcategories";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopCategories />
      <FeaturedCourses />
    </>
  );
}
