/**
 * Contact Component - Professional Design
 */

import React, { useState } from 'react';
import { apiService } from '../../services/api.service';
import { useForm } from '../../hooks/useForm';
import { Input, Textarea, Button, Toast } from '../common';

const Contact = () => {
  const [toast, setToast] = useState(null);

  const initialFormValues = {
    name: '',
    email: '',
    message: '',
  };

  const handleSubmit = async (formData) => {
    try {
      setToast({ message: 'Sending message...', type: 'info' });
      await apiService.sendEmail(formData);
      setToast({ message: 'Message sent successfully!', type: 'success' });
    } catch (error) {
      const errorMessage = error.message || 'Failed to send message. Please try again.';
      setToast({ message: errorMessage, type: 'error' });
      throw error;
    }
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit: onSubmit } = useForm(
    initialFormValues,
    handleSubmit
  );

  return (
    <section id="contact" className="w-full mx-auto py-24">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get in touch
        </h2>
        <p className="text-gray-400 max-w-xl text-base">
          Have a project in mind? Let's work together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - Contact Info */}
        <div className="space-y-8">
          <div>
            <p className="text-gray-500 text-sm mb-2">Email</p>
            <a href="mailto:ayushjoshi3725@gmail.com" className="text-white text-lg hover:text-gray-300 transition-colors">
              ayushjoshi3725@gmail.com
            </a>
          </div>

          <div>
            <p className="text-gray-500 text-sm mb-2">Location</p>
            <p className="text-white text-lg">Pithoragarh, Uttarakhand, India</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm mb-4">Social</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/ayushjoshi45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <span className="text-gray-700">•</span>
              <a
                href="https://www.linkedin.com/in/ayushjoshi45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-gray-700">•</span>
              <a
                href="https://x.com/ayushjoshi45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-3 pt-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 text-sm">Available for new projects</span>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Name</label>
              <Input
                type="text"
                name="name"
                placeholder="Your name"
                value={values.name}
                onChange={handleChange}
                required
                error={errors.name}
                className="w-full bg-[#111111] border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-gray-600 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-2 block">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={values.email}
                onChange={handleChange}
                required
                error={errors.email}
                className="w-full bg-[#111111] border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-gray-600 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-2 block">Message</label>
              <Textarea
                name="message"
                placeholder="Tell me about your project..."
                value={values.message}
                onChange={handleChange}
                required
                rows={5}
                error={errors.message}
                className="w-full bg-[#111111] border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-gray-600 focus:outline-none transition-colors resize-none"
              />
            </div>

            {errors.submit && (
              <p className="text-red-400 text-sm">{errors.submit}</p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black rounded-lg py-3 font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </Button>
          </form>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Contact;
