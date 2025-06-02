import { HeroSection } from "@/components/hero-section";
import { CourseCategories } from "@/components/course-categories";
import { WhyChooseSacdap } from "@/components/why-choose-sacdap";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CourseCategories />
      <WhyChooseSacdap />
      <Testimonials />
    </div>
  );
}
