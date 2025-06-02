import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sacdap-grey text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-primary mb-4">SACDAP</div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empowering careers through quality education since 2021. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/accounting"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  Accounting
                </Link>
              </li>
              <li>
                <Link
                  href="/sacdap-2"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  SACDAP 2.0
                </Link>
              </li>
              <li>
                <Link
                  href="/it-courses"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  IT Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Course Categories */}
          <div>
            <h4 className="font-semibold mb-4">Popular Courses</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  CA Foundation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  Stock Market Basics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  Data Science
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  Python Programming
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  SAP Training
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Rajiv Nagar, Gurgaon</p>
              <p>Haryana, India</p>
              <p>+91 98765 43210</p>
              <p>info@sacdap.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 SACDAP - Skill and Career Development and Placement. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
