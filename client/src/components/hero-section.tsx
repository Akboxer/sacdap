import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import classroomImage from "@assets/image_1748840779112.png";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-sacdap-light-grey to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-sacdap-grey mb-6">
              Skill & Career Development{" "}
              <span className="text-primary">& Placement</span>
            </h1>
            <p className="text-xl text-sacdap-accent-grey mb-8 leading-relaxed">
              Empowering professionals since 2021 with comprehensive training programs in 
              Accounting, Stock Market, and IT Technologies. Located in the heart of Gurgaon, Rajiv Nagar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg">
                  Explore Courses
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-sacdap-grey text-sacdap-grey hover:bg-sacdap-grey hover:text-white"
              >
                Download Brochure
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-sacdap-accent-grey">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-sacdap-accent-grey">Courses Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">85%</div>
                <div className="text-sm text-sacdap-accent-grey">Placement Rate</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src={classroomImage}
              alt="SACDAP Institute classroom with computers and students"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
