import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Accounting", href: "/accounting" },
    { name: "SACDAP 2.0", href: "/sacdap-2" },
    { name: "IT Courses", href: "/it-courses" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-primary">SACDAP</div>
              <div className="text-xs text-sacdap-grey">Since 2021</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                    location === item.href
                      ? "text-primary"
                      : "text-sacdap-grey hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-sacdap-grey hover:text-primary"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition duration-300 ${
                  location === item.href
                    ? "text-primary"
                    : "text-sacdap-grey hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full text-left bg-primary text-white hover:bg-primary/90">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
