import { GraduationCap, Briefcase, Clock, Award } from "lucide-react";

export function WhyChooseSacdap() {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description: "Industry professionals with years of experience"
    },
    {
      icon: Briefcase,
      title: "Placement Support",
      description: "Dedicated placement assistance for all students"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Weekend and evening batches available"
    },
    {
      icon: Award,
      title: "Certified Programs",
      description: "Industry-recognized certifications"
    }
  ];

  return (
    <section className="py-20 bg-sacdap-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sacdap-grey mb-4">Why Choose SACDAP?</h2>
          <p className="text-xl text-sacdap-accent-grey max-w-3xl mx-auto">
            We're committed to providing quality education and ensuring your career success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-sacdap-grey mb-3">{feature.title}</h3>
                <p className="text-sacdap-accent-grey text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
