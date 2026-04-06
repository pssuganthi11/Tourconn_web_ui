import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/img/logo.png"


const Footer = () => {
  return (
    <footer className="bg-gray-50  mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Image
              src={Logo}
              alt="Tourconn Logo"
              width={120}
              height={40}
              className="object-contain w-24 md:w-32 h-auto"
              priority
            />{" "}
            <p className="text-sm text-gray-500 leading-relaxed">
              Elevating the way you experience the world through high-end
              digital curation and local expertise.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Platform
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/about" className="hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/vendor" className="hover:text-gray-800">
                  Become a Vendor
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/contact" className="hover:text-gray-800">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-gray-800">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/terms" className="hover:text-gray-800">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-800">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 mt-10 pt-6 text-center border-[#1a706d]">
          <p className="text-xs text-gray-400">
            © 2026 Tourconn Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
