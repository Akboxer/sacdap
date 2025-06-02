import { ContactForm } from "@/components/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import officeImage from "@assets/image_1748840718095.png";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sacdap-light-grey to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-sacdap-grey mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-sacdap-accent-grey max-w-3xl mx-auto">
            Ready to start your learning journey? Contact us today and take the first step towards your career goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-sacdap-light-grey p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-sacdap-grey mb-6">Visit Our Institute</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sacdap-grey mb-1">Address</h4>
                    <p className="text-sacdap-accent-grey">
                      Rajiv Nagar, Gurgaon<br />
                      Haryana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sacdap-grey mb-1">Phone</h4>
                    <p className="text-sacdap-accent-grey">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sacdap-grey mb-1">Email</h4>
                    <p className="text-sacdap-accent-grey">info@sacdap.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sacdap-grey mb-1">Office Hours</h4>
                    <p className="text-sacdap-accent-grey">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Institute Image */}
              <div className="mt-8">
                <img
                  src={officeImage}
                  alt="SACDAP Institute Office with modern setup"
                  className="rounded-xl w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-sacdap-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sacdap-grey mb-4">Find Us</h2>
            <p className="text-sacdap-accent-grey">Located in the heart of Gurgaon, Rajiv Nagar</p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-sacdap-accent-grey mx-auto mb-4" />
              <p className="text-sacdap-grey font-semibold">Interactive Map</p>
              <p className="text-sacdap-accent-grey text-sm">Rajiv Nagar, Gurgaon</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sacdap-grey mb-4">Frequently Asked Questions</h2>
            <p className="text-sacdap-accent-grey">Common questions about our courses and admission process</p>
          </div>

          <div className="space-y-8">
            <div className="bg-sacdap-light-grey p-6 rounded-lg">
              <h3 className="font-semibold text-sacdap-grey mb-2">What is the admission process?</h3>
              <p className="text-sacdap-accent-grey">
                Simply fill out our contact form or visit our institute. Our counselors will guide you through 
                the course selection and enrollment process based on your career goals.
              </p>
            </div>

            <div className="bg-sacdap-light-grey p-6 rounded-lg">
              <h3 className="font-semibold text-sacdap-grey mb-2">Do you provide placement assistance?</h3>
              <p className="text-sacdap-accent-grey">
                Yes, we have a dedicated placement cell that provides 100% placement assistance to all our students. 
                We have partnerships with leading companies across various industries.
              </p>
            </div>

            <div className="bg-sacdap-light-grey p-6 rounded-lg">
              <h3 className="font-semibold text-sacdap-grey mb-2">What are the batch timings?</h3>
              <p className="text-sacdap-accent-grey">
                We offer flexible batch timings including morning, evening, and weekend batches to accommodate 
                working professionals and students.
              </p>
            </div>

            <div className="bg-sacdap-light-grey p-6 rounded-lg">
              <h3 className="font-semibold text-sacdap-grey mb-2">Are the courses certified?</h3>
              <p className="text-sacdap-accent-grey">
                Yes, all our courses come with industry-recognized certificates upon successful completion. 
                We also prepare students for various professional certifications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
