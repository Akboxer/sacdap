import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import logoPath from "@assets/image_1748840688695.png";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Accounting", href: "/accounting" },
    { name: "SACDAP 2.0", href: "/sacdap-2" },
    { name: "IT Courses", href: "/it-courses" },
    { name: "Contact", href: "/contact" },
  ];

  const allCourses = [
    { name: "Chartered Accountancy (CA)", category: "Accounting", href: "/accounting" },
    { name: "Cost & Management Accountancy (CMA)", category: "Accounting", href: "/accounting" },
    { name: "Accounting Fundamentals", category: "Accounting", href: "/accounting" },
    { name: "Taxation & GST", category: "Accounting", href: "/accounting" },
    { name: "Stock Market Fundamentals", category: "SACDAP 2.0", href: "/sacdap-2" },
    { name: "Technical Analysis", category: "SACDAP 2.0", href: "/sacdap-2" },
    { name: "Options & Derivatives", category: "SACDAP 2.0", href: "/sacdap-2" },
    { name: "Investment Strategies", category: "SACDAP 2.0", href: "/sacdap-2" },
    { name: "Programming Languages", category: "IT Courses", href: "/it-courses" },
    { name: "Data Science & Analytics", category: "IT Courses", href: "/it-courses" },
    { name: "SAP & Tally", category: "IT Courses", href: "/it-courses" },
    { name: "DevOps & System Design", category: "IT Courses", href: "/it-courses" },
    { name: "Android Development", category: "IT Courses", href: "/it-courses" },
    { name: "Web Development", category: "IT Courses", href: "/it-courses" },
  ];

  const filteredCourses = searchQuery
    ? allCourses.filter(course =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredCourses.length > 0) {
      window.location.href = filteredCourses[0].href;
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-3">
              <img src={logoPath} alt="SACDAP Logo" className="h-12 w-12" />
              <div>
                <div className="text-2xl font-bold text-primary">SACDAP</div>
                <div className="text-xs text-sacdap-grey">Since 2021</div>
              </div>
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
              
              {/* Search */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSearch(!showSearch)}
                  className="text-sacdap-grey hover:text-primary"
                >
                  <Search className="h-4 w-4" />
                </Button>
                
                {showSearch && (
                  <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
                    <form onSubmit={handleSearch}>
                      <Input
                        type="text"
                        placeholder="Search courses..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="mb-2"
                        autoFocus
                      />
                    </form>
                    
                    {searchQuery && filteredCourses.length > 0 && (
                      <div className="max-h-60 overflow-y-auto">
                        {filteredCourses.map((course, index) => (
                          <Link
                            key={index}
                            href={course.href}
                            onClick={() => {
                              setShowSearch(false);
                              setSearchQuery("");
                            }}
                            className="block p-2 hover:bg-sacdap-light-grey rounded text-sm"
                          >
                            <div className="font-medium text-sacdap-grey">{course.name}</div>
                            <div className="text-xs text-sacdap-accent-grey">{course.category}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    {searchQuery && filteredCourses.length === 0 && (
                      <div className="text-sm text-sacdap-accent-grey p-2">
                        No courses found for "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <Link href="/contact">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSearch(!showSearch)}
              className="text-sacdap-grey hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
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

        {/* Mobile Search Dropdown */}
        {showSearch && (
          <div className="md:hidden bg-white border-t border-gray-200 p-4">
            <form onSubmit={handleSearch}>
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-2"
                autoFocus
              />
            </form>
            
            {searchQuery && filteredCourses.length > 0 && (
              <div className="max-h-60 overflow-y-auto">
                {filteredCourses.map((course, index) => (
                  <Link
                    key={index}
                    href={course.href}
                    onClick={() => {
                      setShowSearch(false);
                      setSearchQuery("");
                    }}
                    className="block p-2 hover:bg-sacdap-light-grey rounded text-sm"
                  >
                    <div className="font-medium text-sacdap-grey">{course.name}</div>
                    <div className="text-xs text-sacdap-accent-grey">{course.category}</div>
                  </Link>
                ))}
              </div>
            )}
            
            {searchQuery && filteredCourses.length === 0 && (
              <div className="text-sm text-sacdap-accent-grey p-2">
                No courses found for "{searchQuery}"
              </div>
            )}
          </div>
        )}
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
