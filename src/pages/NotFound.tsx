
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-jet-50 px-4">
        <div className="text-center max-w-lg animate-fade-up">
          <h1 className="text-7xl font-light text-jet-900 mb-4">404</h1>
          <p className="text-2xl text-jet-800 mb-6">Page Not Found</p>
          <p className="text-jet-600 mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="elegant-button inline-flex items-center space-x-2">
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
