import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#0A0A0B] text-white py-6 px-6 border rounded-[16px] my-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Footer Text */}
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <p className="text-base">© {new Date().getFullYear()} Habib Ulla. All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <Link
            href="https://www.linkedin.com/in/habib-ulla/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/MD-HABIB-ULLA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base hover:text-gray-400 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="mailto:habibulla1278@gmail.com"
            className="text-base hover:text-red-400 transition-colors"
          >
            Email Me
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
