'use client';

import Link from 'next/link';
import { FaInstagram, FaTwitter, FaGithub, FaCarAlt, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about-us', icon: <FaCarAlt className="w-4 h-4" /> },
    { name: 'Our Location', href: '#', icon: <FaMapMarkerAlt className="w-4 h-4" /> },
    { name: 'Contact Us', href: '#', icon: <FaPhoneAlt className="w-4 h-4" /> },
    { name: 'Email Us', href: '#', icon: <FaEnvelope className="w-4 h-4" /> },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: <FaInstagram className="w-5 h-5" />,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: <FaTwitter className="w-5 h-5" />,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: <FaGithub className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="relative w-full bg-background/80 backdrop-blur-md border-t border-secondary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          {/* Grid section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand section */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <Link 
                href="/" 
                className="flex items-center group"
              >
                <span className="text-3xl flex items-center font-bold text-secondary transition-colors">
                  C
                  <span className="inline-flex items-center mx-[-2px]">
                    <FaCarAlt className="w-7 h-7 transform group-hover:scale-110 transition-transform" />
                  </span>
                  r
                </span>
                <span className="text-3xl font-bold text-secondary transition-colors">Rent</span>
              </Link>
              <p className="mt-6 text-base text-foreground/70">
                Your trusted partner for hassle-free car rentals. Experience comfort and reliability on every journey.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-base text-foreground/70 hover:text-secondary transition-colors duration-300 flex items-center gap-2"
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-base text-foreground/70 hover:text-secondary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Social Media</h3>
              <div className="flex items-center space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground/70 hover:text-secondary transition-colors duration-300 transform hover:scale-110"
                  >
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-12 pt-8 border-t border-secondary/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-foreground/70">
                &copy; {new Date().getFullYear()}{" "}
                <span className="text-secondary font-medium hover:text-primary transition-colors duration-300">
                  CarRent
                </span>
                . All rights reserved.
              </p>
              <p className="text-sm text-foreground/70">
                Designed with{" "}
                <span className="text-red-500 animate-pulse">❤️</span>
                {" "}by{" "}
                <a 
                  href="#" 
                  className="text-secondary hover:text-primary transition-colors duration-300"
                >
                  Alan Alkalifa
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;