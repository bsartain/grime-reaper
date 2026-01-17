"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { FaPhone, FaEnvelope, FaHome, FaBroom, FaImage, FaQuoteLeft, FaStar, FaTrash, FaBars, FaTimes } from "react-icons/fa";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (Demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close menu after clicking a link
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Gallery", id: "gallery" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white text-black shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/images/logo.jpg" alt="Grime Reaper" width={120} height={60} className="object-contain" />
          </div>

          {/* Desktop Menu - Hidden below 730px */}
          <ul className="hidden max-[730px]:hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button onClick={() => scrollToSection(link.id)} className="hover:text-blue-600 hover:underline transition">
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button - Visible only ≤730px */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-3xl z-50" aria-label="Toggle menu">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu - Slides in from top */}
        <div
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          } lg:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="hover:text-blue-600 transition">
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white">
        <Image src="/images/caden.jpg" alt="Pressure Washing Hero" fill className="object-cover brightness-50" />
        <div className="relative z-10 px-6">
          <h2 className="text-5xl font-bold mb-4">The Grime Reaper</h2>
          <p className="text-2xl mb-8">Slaying Grime One Wash at a Time</p>
          <a href="tel:8033704697">
            <button className="bg-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
              Call or Text for a Free Quote
            </button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            The Grime Reaper is Rock Hill’s trusted pressure washing service, dedicated to removing dirt, mold, and grime from homes and businesses
            across the area. With years of local experience and eco-friendly cleaning techniques, we restore driveways, siding, decks, and other
            surfaces to their original shine—keeping your property clean and safe without harming the environment.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <FaTrash className="text-5xl mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-3">Trash Can Service</h3>
              <p className="text-gray-600">Eliminate odors and bacteria with professional cleaning</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <FaHome className="text-5xl mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-3">House Washing</h3>
              <p className="text-gray-600">Safe soft washing for siding, brick, and stucco</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <FaBroom className="text-5xl mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-3">Driveway Cleaning</h3>
              <p className="text-gray-600">Remove oil, rust, and years of buildup</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <FaImage className="text-5xl mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-3">Deck & Patio</h3>
              <p className="text-gray-600">Restore wood and concrete to look like new</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Before & After Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <Image
                src="https://t4.ftcdn.net/jpg/10/34/20/03/360_F_1034200308_HNpgCxL72iaEIgKtAobOKXUyY8F3QlS7.jpg"
                alt="Before/After 1"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <p className="text-center mt-2">Driveway Transformation</p>
            </div>
            <div className="relative">
              <Image
                src="https://homebusinessmag.com/wp-content/uploads/2020/01/image1.jpg"
                alt="Before/After 2"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <p className="text-center mt-2">Concrete Clean-Up</p>
            </div>
            <div className="relative">
              <Image src="https://i.redd.it/924m2tx72i411.jpg" alt="Before/After 3" width={600} height={400} className="rounded-lg" />
              <p className="text-center mt-2">Stairs Revival</p>
            </div>
            <div className="relative">
              <Image
                src="https://www.boredpanda.com/blog/wp-content/uploads/2023/05/satisfying-before-after-power-washing-pics-18-6475f6c2b10c5__700.jpg?utm_campaign=rebelboost_true"
                alt="Before/After 4"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <p className="text-center mt-2">Patio Refresh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaQuoteLeft className="text-3xl text-blue-600 mb-4" />
              <p className="mb-4">&quot;Amazing results! My driveway looks brand new.&quot;</p>
              <div className="flex items-center">
                <span className="font-semibold">John D.</span>
                <div className="ml-auto flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaQuoteLeft className="text-3xl text-blue-600 mb-4" />
              <p className="mb-4">&quot;Professional and efficient. Highly recommend!&quot;</p>
              <div className="flex items-center">
                <span className="font-semibold">Sarah K.</span>
                <div className="ml-auto flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            {/* Add more as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-full text-center">
            <div>
              <p className="text-lg mb-4">Ready to reap the grime? Contact us today!</p>
              <ul className="space-y-2 text-center w-full">
                <li className="flex justify-center">
                  <FaPhone className="mr-2" /> <a href="tel:8033704697">(803) 370-4697</a>
                </li>
                <li className="flex justify-center">
                  <FaEnvelope className="mr-2" /> <a href="mailto:rockhillgrimereaper@gmail.com">rockhillgrimereaper@gmail.com</a>
                </li>
              </ul>
            </div>
            {/* <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 border rounded"
                required
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 border rounded h-32"
                required
              />
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                Send Message
              </button>
            </form> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p>&copy; 2025 The Grime Reaper. All rights reserved.</p>
      </footer>
    </div>
  );
}
