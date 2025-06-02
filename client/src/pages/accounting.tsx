import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calculator, TrendingUp, BookOpen, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Accounting() {
  const courses = [
    {
      title: "Chartered Accountancy (CA)",
      duration: "3-5 years",
      level: "Foundation to Final",
      description: "Comprehensive CA preparation covering Foundation, Intermediate, and Final levels with expert guidance.",
      features: [
        "Foundation Course",
        "Intermediate Level",
        "Final Level",
        "Practical Training",
        "Mock Tests",
        "Career Guidance"
      ]
    },
    {
      title: "Cost & Management Accountancy (CMA)",
      duration: "2-3 years",
      level: "Foundation to Final",
      description: "Complete CMA course covering cost accounting, management accounting, and strategic management.",
      features: [
        "Foundation Course",
        "Intermediate Level",
        "Final Level",
        "Case Studies",
        "Industry Exposure",
        "Placement Support"
      ]
    },
    {
      title: "Accounting Fundamentals",
      duration: "3-6 months",
      level: "Beginner",
      description: "Basic accounting principles, bookkeeping, and financial statement preparation for beginners.",
      features: [
        "Basic Bookkeeping",
        "Financial Statements",
        "Accounting Principles",
        "Practical Exercises",
        "Certificate",
        "Job Assistance"
      ]
    },
    {
      title: "Taxation & GST",
      duration: "2-4 months",
      level: "Intermediate",
      description: "Comprehensive taxation course covering income tax, GST, and other indirect taxes.",
      features: [
        "Income Tax",
        "GST Implementation",
        "Tax Planning",
        "Return Filing",
        "Compliance",
        "Practical Training"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sacdap-light-grey to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-sacdap-grey mb-6">
                Accounting <span className="text-primary">Courses</span>
              </h1>
              <p className="text-xl text-sacdap-accent-grey mb-8 leading-relaxed">
                Master the fundamentals and advanced concepts of accounting, taxation, and financial management 
                with our comprehensive programs designed for aspiring chartered accountants and finance professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                    Enroll Now
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Download Syllabus
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional accounting workspace"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sacdap-accent-grey">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <div className="text-sacdap-accent-grey">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sacdap-accent-grey">Course Programs</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">Flexible</div>
              <div className="text-sacdap-accent-grey">Batch Timings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-sacdap-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sacdap-grey mb-4">Our Accounting Programs</h2>
            <p className="text-xl text-sacdap-accent-grey max-w-3xl mx-auto">
              Choose from our comprehensive accounting courses designed to build your expertise and advance your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-sacdap-grey">{course.title}</CardTitle>
                  <CardDescription className="text-sacdap-accent-grey">
                    {course.description}
                  </CardDescription>
                  <div className="flex gap-4 text-sm text-sacdap-accent-grey mt-2">
                    <span className="bg-primary/10 px-2 py-1 rounded">Duration: {course.duration}</span>
                    <span className="bg-primary/10 px-2 py-1 rounded">Level: {course.level}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-sacdap-grey">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Enroll in {course.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Accounting Career?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of successful professionals who started their journey at SACDAP. 
            Get expert guidance and comprehensive training to achieve your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Get Started Today
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
