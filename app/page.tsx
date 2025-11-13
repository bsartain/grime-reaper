"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { FaArrowRight, FaPhone, FaEnvelope, FaHome, FaBroom, FaImage, FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder: In production, send to backend/email service like Formspree or Nodemailer
    console.log("Form submitted:", formData);
    alert("Message sent! (Demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 bg-black text-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">The Grime Reaper</h1>
          <ul className="flex space-x-6">
            <li>
              <button onClick={() => scrollToSection("hero")} className="hover:underline">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="hover:underline">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")} className="hover:underline">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("gallery")} className="hover:underline">
                Gallery
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("testimonials")} className="hover:underline">
                Testimonials
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:underline">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white">
        <Image
          src="https://contractor-plus-website.s3.us-east-2.amazonaws.com/Pressure_Washing_Business_3_4b3c207491.jpg"
          alt="Pressure Washing Hero"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10">
          <h2 className="text-5xl font-bold mb-4">The Grime Reaper</h2>
          <p className="text-2xl mb-8">Slaying Grime One Wash at a Time</p>
          <button onClick={() => scrollToSection("contact")} className="bg-blue-600 px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">
            Get a Free Quote <FaArrowRight className="inline ml-2" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg max-w-3xl mx-auto text-center">
            The Grime Reaper is your go-to pressure washing service, dedicated to banishing dirt, mold, and grime from your home or business. With
            years of experience and eco-friendly techniques, we restore surfaces to their former glory without harming the environment. Whether
            it&apos;s residential or commercial, we handle it all with precision and care.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaHome className="text-4xl mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-2">House Washing</h3>
              <p>Remove dirt, algae, and stains from siding and exteriors.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaBroom className="text-4xl mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-2">Driveway Cleaning</h3>
              <p>Blast away oil stains and grime for a spotless drive.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaImage className="text-4xl mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-2">Deck & Patio Restoration</h3>
              <p>Revive wood and concrete surfaces safely.</p>
            </div>
            {/* Add more services as needed */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">Ready to reap the grime? Contact us today!</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaPhone className="mr-2" /> (123) 456-7890
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2" /> info@thegrimereaper.com
                </li>
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
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
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-4 text-center">
        <p>&copy; 2025 The Grime Reaper. All rights reserved.</p>
      </footer>
    </div>
  );
}
