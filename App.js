import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-black text-white py-6 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manish's Portfolio</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-[80vh] flex items-center justify-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
        <div className="text-center text-white">
          <motion.h2
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Manish
          </motion.h2>
          <p className="text-lg md:text-xl mt-4">Aspiring Web Developer & Designer</p>
          <Button className="mt-6 bg-blue-500 hover:bg-blue-600">Explore My Work</Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p>
            I am Manish, a passionate and dedicated web developer currently learning advanced
            web technologies. I aim to create clean, modern, and user-friendly web experiences that bring
            ideas to life.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-200 py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="text-center">
              <h3 className="text-xl font-bold">Project 1</h3>
              <p className="mt-2">Description of the project goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center">
              <h3 className="text-xl font-bold">Project 2</h3>
              <p className="mt-2">Description of the project goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center">
              <h3 className="text-xl font-bold">Project 3</h3>
              <p className="mt-2">Description of the project goes here.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <Button className="w-full bg-blue-500 hover:bg-blue-600">Send Message</Button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Manish. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
