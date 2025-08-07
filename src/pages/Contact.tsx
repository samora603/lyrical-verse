import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram, FaTiktok, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    message_type: 'Booking',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill all required fields' });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({ type: 'success', message: 'Message sent successfully!' });
          setFormData({ name: '', email: '', message: '', message_type: 'Booking' });
          setTimeout(() => navigate('/thank-you'), 2000);
        },
        (error) => {
          setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
          console.error('EmailJS error:', error);
        }
      );
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
                {status && (
                  <div
                    className={`mb-4 p-3 rounded-lg text-center ${
                      status.type === 'success' ? 'bg-green-800 text-green-200' : 'bg-red-800 text-red-200'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Your name"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="message_type" className="block text-gray-300 mb-2">
                      Message Type
                    </label>
                    <select
                      id="message_type"
                      name="message_type"
                      value={formData.message_type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      aria-required="true"
                    >
                      <option value="Booking">Booking</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Fan Message">Fan Message</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors resize-vertical"
                      placeholder="Your message..."
                      aria-required="true"
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

              {/* Social Media */}
              <div className="space-y-8">
                <div className="bg-gray-900 rounded-lg p-8 border border-yellow-500/20">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-6 font-montserrat">Follow Me</h2>
                  <div className="space-y-4">
                    <a 
                      href="https://www.instagram.com/spotboimafia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-white hover:text-yellow-400 transition-colors"
                    >
                      <FaInstagram className="text-xl" />
                      <span>Instagram</span>
                    </a>
                    <a 
                      href="https://www.tiktok.com/@odhil3_?_t=ZM-8ybl7usOupU&_r=1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-white hover:text-yellow-400 transition-colors"
                    >
                      <FaTiktok className="text-xl" />
                      <span>TikTok</span>
                    </a>
                    <a 
                      href="tel:+254712345678" 
                      className="flex items-center space-x-3 text-white hover:text-yellow-400 transition-colors"
                    >
                      <FaPhoneAlt className="text-xl" />
                      <span>+254 705 820 422</span>
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
