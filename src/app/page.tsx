import Navbar from "./components/navbar";
import ActiveExport from "./pages/activestudents";
import CenterBanner from "./pages/centerbanner";
import FeaturedCourses from "./pages/featuredcourses";
import Hero from "./pages/hero";
import { LatestArticles } from "./pages/latestArticle";
import LearnLms from "./pages/LearnLMS";
import StudentFeedBack from "./pages/studentfeedback";
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
      <StudentFeedBack />
      <LatestArticles />
    </>
  );
}
