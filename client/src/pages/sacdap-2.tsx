import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, BarChart3, PieChart, Target } from "lucide-react";
import { Link } from "wouter";

export default function Sacdap2() {
  const courses = [
    {
      title: "Stock Market Fundamentals",
      duration: "2-3 months",
      level: "Beginner",
      description: "Learn the basics of stock market, investment principles, and market analysis for beginners.",
      features: [
        "Market Basics",
        "Investment Principles",
        "Risk Management",
        "Portfolio Building",
        "Market Analysis",
        "Live Trading Demo"
      ]
    },
    {
      title: "Technical Analysis",
      duration: "3-4 months",
      level: "Intermediate",
      description: "Master technical analysis tools, chart patterns, and trading strategies used by professional traders.",
      features: [
        "Chart Patterns",
        "Technical Indicators",
        "Trading Strategies",
        "Market Psychology",
        "Backtesting",
        "Real-time Analysis"
      ]
    },
    {
      title: "Options & Derivatives",
      duration: "2-3 months",
      level: "Advanced",
      description: "Advanced course on options trading, derivatives, and complex trading strategies for experienced traders.",
      features: [
        "Options Basics",
        "Derivative Instruments",
        "Option Strategies",
        "Greeks Analysis",
        "Risk Management",
        "Advanced Trading"
      ]
    },
    {
      title: "Investment Strategies",
      duration: "4-6 months",
      level: "All Levels",
      description: "Comprehensive course covering various investment strategies, portfolio management, and wealth building.",
      features: [
        "Investment Planning",
        "Portfolio Management",
        "Mutual Funds",
        "SIP Strategies",
        "Tax Planning",
        "Wealth Building"
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
                SACDAP <span className="text-primary">2.0</span>
              </h1>
              <p className="text-xl text-sacdap-accent-grey mb-8 leading-relaxed">
                Unlock the potential of financial markets with our comprehensive stock market and investment courses. 
                Learn from industry experts and master the art of trading and investment strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                    Start Trading Journey
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Download Course Guide
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Stock market trading setup with charts"
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
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sacdap-accent-grey">Active Traders</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">80%</div>
              <div className="text-sacdap-accent-grey">Profitable Students</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PieChart className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sacdap-accent-grey">Specialized Courses</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">Live</div>
              <div className="text-sacdap-accent-grey">Market Sessions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-sacdap-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sacdap-grey mb-4">Stock Market & Investment Courses</h2>
            <p className="text-xl text-sacdap-accent-grey max-w-3xl mx-auto">
              From beginner to advanced level, master the financial markets with our comprehensive course offerings
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sacdap-grey mb-4">Why Choose SACDAP 2.0?</h2>
            <p className="text-xl text-sacdap-accent-grey max-w-3xl mx-auto">
              Learn from the best with our unique approach to stock market education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-sacdap-grey mb-4">Live Market Training</h3>
              <p className="text-sacdap-accent-grey">
                Learn with real-time market data and live trading sessions guided by expert traders.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-sacdap-grey mb-4">Practical Approach</h3>
              <p className="text-sacdap-accent-grey">
                Focus on practical trading strategies and real-world application of investment concepts.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-sacdap-grey mb-4">Expert Mentorship</h3>
              <p className="text-sacdap-accent-grey">
                Get guidance from experienced traders and investment professionals with proven track records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Your Trading Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our community of successful traders and investors. Learn the skills needed to navigate 
            financial markets with confidence and achieve your investment goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Begin Trading Course
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Schedule Demo Class
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
