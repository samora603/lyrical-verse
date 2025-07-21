
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-900 rounded-lg p-8 border border-yellow-500/20">
                <h2 className="text-2xl font-bold text-yellow-400 mb-6 font-montserrat">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors resize-vertical"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-gray-900 rounded-lg p-8 border border-yellow-500/20">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-6 font-montserrat">Bookings & Collaborations</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <a 
                        href="mailto:bookings@odhil3.com" 
                        className="text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        bookings@odhil3.com
                      </a>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Management</h3>
                      <a 
                        href="mailto:management@odhil3.com" 
                        className="text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        management@odhil3.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gray-900 rounded-lg p-8 border border-yellow-500/20">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-6 font-montserrat">Follow Me</h2>
                  <div className="space-y-4">
                    <a 
                      href="https://instagram.com/odhil3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-white hover:text-yellow-400 transition-colors"
                    >
                      <span className="text-lg">📱</span>
                      <span>Youtube Music</span>
                    </a>
                    <a 
                      href="https://tiktok.com/@odhil3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-white hover:text-yellow-400 transition-colors"
                    >
                      <span className="text-lg">🎵</span>
                      <span>Spotify</span>
                    </a>
                    <a 
                      href="https://youtube.com/@odhil3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-white hover:text-yellow-400 transition-colors"
                    >
                      <span className="text-lg">📺</span>
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
