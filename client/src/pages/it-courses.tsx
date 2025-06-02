import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, Database, Smartphone, Settings } from "lucide-react";
import { Link } from "wouter";

export default function ITCourses() {
  const courses = [
    {
      title: "Programming Languages",
      duration: "4-6 months",
      level: "Beginner to Advanced",
      description: "Master popular programming languages including Python, Java, JavaScript, and more with hands-on projects.",
      features: [
        "Python Programming",
        "Java Development",
        "JavaScript & Web Dev",
        "C++ Fundamentals",
        "Project Building",
        "Code Review Sessions"
      ]
    },
    {
      title: "Data Science & Analytics",
      duration: "6-8 months",
      level: "Intermediate",
      description: "Comprehensive data science program covering statistics, machine learning, and data visualization.",
      features: [
        "Statistics & Probability",
        "Machine Learning",
        "Data Visualization",
        "Python for Data Science",
        "SQL & Databases",
        "Real-world Projects"
      ]
    },
    {
      title: "SAP & Tally",
      duration: "2-4 months",
      level: "Beginner",
      description: "Business software training for SAP modules and Tally accounting software used in enterprises.",
      features: [
        "SAP FICO Module",
        "SAP MM Module",
        "Tally ERP 9",
        "GST in Tally",
        "Business Processes",
        "Certification Prep"
      ]
    },
    {
      title: "DevOps & System Design",
      duration: "5-7 months",
      level: "Advanced",
      description: "Learn modern DevOps practices, cloud computing, and system design for scalable applications.",
      features: [
        "Docker & Kubernetes",
        "AWS Cloud Services",
        "CI/CD Pipelines",
        "System Architecture",
        "Monitoring & Logging",
        "Automation Tools"
      ]
    },
    {
      title: "Android Development",
      duration: "4-6 months",
      level: "Intermediate",
      description: "Build mobile applications for Android platform using Java/Kotlin and modern development tools.",
      features: [
        "Java/Kotlin Programming",
        "Android Studio",
        "UI/UX Design",
        "Database Integration",
        "API Integration",
        "Play Store Publishing"
      ]
    },
    {
      title: "Web Development",
      duration: "6-8 months",
      level: "Beginner to Advanced",
      description: "Full-stack web development covering frontend, backend, and database technologies.",
      features: [
        "HTML, CSS, JavaScript",
        "React.js Framework",
        "Node.js Backend",
        "Database Management",
        "API Development",
        "Deployment & Hosting"
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
                IT <span className="text-primary">Courses</span>
              </h1>
              <p className="text-xl text-sacdap-accent-grey mb-8 leading-relaxed">
                Stay ahead in the digital age with our comprehensive technology courses. 
                From basic programming to advanced system design, we cover all aspects of modern IT education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                    Start Learning
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  View Curriculum
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="IT programming workspace with multiple monitors"
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
                <Code className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-sacdap-accent-grey">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sacdap-accent-grey">Job Placement</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sacdap-accent-grey">Specialized Tracks</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">Hands-on</div>
              <div className="text-sacdap-accent-grey">Project Based</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-sacdap-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sacdap-grey mb-4">Our IT Course Offerings</h2>
            <p className="text-xl text-sacdap-accent-grey max-w-3xl mx-auto">
              Comprehensive technology training programs designed to meet industry demands and career aspirations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-sacdap-grey">{course.title}</CardTitle>
                  <CardDescription className="text-sacdap-accent-grey">
                    {course.description}
                  </CardDescription>
                  <div className="flex gap-2 text-sm text-sacdap-accent-grey mt-2 flex-wrap">
                    <span className="bg-primary/10 px-2 py-1 rounded text-xs">{course.duration}</span>
                    <span className="bg-primary/10 px-2 py-1 rounded text-xs">{course.level}</span>
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
                      Enroll Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sacdap-grey mb-4">Technologies We Teach</h2>
            <p className="text-xl text-sacdap-accent-grey max-w-3xl mx-auto">
              Learn the most in-demand technologies and tools used by leading companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Python", "Java", "JavaScript", "React", "Node.js", "MySQL",
              "MongoDB", "AWS", "Docker", "Kubernetes", "Git", "Android"
            ].map((tech, index) => (
              <div key={index} className="text-center p-4 bg-sacdap-light-grey rounded-lg hover:shadow-md transition-shadow">
                <div className="text-lg font-semibold text-sacdap-grey">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Launch Your Tech Career
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the digital revolution with our comprehensive IT training programs. 
            Build the skills employers want and secure your future in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Start Your Journey
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Book Free Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
