import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ClinicalAssessment from "../components/ClinicalAssessment";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ClinicalAssessment />
      </main>
      <Footer />
    </div>
  );
}
