import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Code, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import courseBannerImage from "@assets/image_1748840761058.png";

export function CourseCategories() {
  const categories = [
    {
      icon: Calculator,
      title: "Accounting",
      description: "Master the fundamentals and advanced concepts of accounting, taxation, and financial management with our comprehensive programs.",
      courses: [
        "Chartered Accountancy (CA)",
        "Cost & Management Accountancy (CMA)",
        "Accounting Fundamentals",
        "Taxation & GST"
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=250",
      href: "/accounting"
    },
    {
      icon: TrendingUp,
      title: "SACDAP 2.0",
      description: "Unlock the potential of financial markets with our comprehensive stock market and investment courses designed for modern traders.",
      courses: [
        "Stock Market Fundamentals",
        "Technical Analysis",
        "Options & Derivatives",
        "Investment Strategies"
      ],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=250",
      href: "/sacdap-2"
    },
    {
      icon: Code,
      title: "IT Courses",
      description: "Stay ahead in the digital age with our comprehensive technology courses from basic computer skills to advanced programming.",
      courses: [
        "Programming Languages",
        "Data Science & Analytics",
        "SAP & Tally",
        "DevOps & System Design"
      ],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=250",
      href: "/it-courses"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sacdap-grey mb-4">Our Course Categories</h2>
          <p className="text-xl text-sacdap-accent-grey max-w-3xl mx-auto">
            Choose from our three specialized domains designed to meet the demands of today's competitive job market
          </p>
        </div>

        {/* Course Technologies Banner */}
        <div className="text-center mb-12">
          <img
            src={courseBannerImage}
            alt="Technologies and courses offered at SACDAP - SAP, Accounting, Tally, Office, DevOps, Cloud Computing, AWS, AI"
            className="rounded-2xl shadow-lg w-full h-auto max-w-4xl mx-auto"
          />
          <p className="text-sm text-sacdap-accent-grey mt-4">
            Master industry-leading technologies including SAP, Tally, AWS, DevOps, and more
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-sacdap-grey mb-4">{category.title}</h3>
                  <p className="text-sacdap-accent-grey mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Course list */}
                  <div className="space-y-3 mb-8">
                    {category.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center text-sm text-sacdap-grey">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>

                  <img
                    src={category.image}
                    alt={`${category.title} workspace`}
                    className="rounded-xl mb-6 w-full h-48 object-cover"
                  />

                  <Link href={category.href}>
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      View All Courses
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
