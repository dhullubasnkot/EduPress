import Navbar from "./components/navbar";
import ActiveExport from "./pages/activestudents";
import CenterBanner from "./pages/centerbanner";
import FeaturedCourses from "./pages/featuredcourses";
import Hero from "./pages/hero";
import LearnLms from "./pages/LearnLMS";
// import EducationBanner from "./pages/provideAmazing";
import TopCategories from "./pages/topcategories";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopCategories />
      <FeaturedCourses />
      <CenterBanner />
      <ActiveExport />
      <LearnLms />
      {/* <EducationBanner /> */}
    </>
  );
}
