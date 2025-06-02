import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Accounting Graduate",
      content: "SACDAP's CA foundation course helped me clear my exams with excellent scores. The faculty is very supportive and knowledgeable.",
      initial: "P"
    },
    {
      name: "Rahul Kumar",
      role: "Stock Market Course",
      content: "The stock market course at SACDAP gave me practical knowledge. Now I'm successfully trading and managing my portfolio.",
      initial: "R"
    },
    {
      name: "Anita Singh",
      role: "Data Science Graduate",
      content: "The IT courses are comprehensive and up-to-date. I landed a great job as a Data Analyst thanks to SACDAP's training.",
      initial: "A"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sacdap-grey mb-4">Student Success Stories</h2>
          <p className="text-xl text-sacdap-accent-grey">Hear from our successful graduates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-sacdap-light-grey p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-sacdap-grey">{testimonial.name}</h4>
                  <p className="text-sm text-sacdap-accent-grey">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sacdap-grey italic mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400"
            alt="Students in classroom learning environment"
            className="rounded-2xl shadow-lg w-full h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
