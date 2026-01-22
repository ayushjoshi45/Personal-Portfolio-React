/**
 * Contact Component - Refactored with better structure
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
      await apiService.sendEmail(formData);
      setToast({ message: 'Message sent successfully!', type: 'success' });
    } catch (error) {
      setToast({ message: 'Failed to send message. Please try again.', type: 'error' });
      throw error;
    }
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit: onSubmit } = useForm(
    initialFormValues,
    handleSubmit
  );

  return (
    <section id="contact" className="w-full max-w-4xl mx-auto py-12">
      <div className="flex flex-col mb-6 gap-1">
        <h2 className="text-4xl font-bold text-white text-center">Get In Touch</h2>
        <div className="w-32 h-[5px] bg-[#6200EE] rounded mx-auto"></div>
      </div>

      <form onSubmit={onSubmit} className="bg-[#222222] p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col gap-6">
          <Input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={values.name}
            onChange={handleChange}
            required
            error={errors.name}
          />

          <Input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={values.email}
            onChange={handleChange}
            required
            error={errors.email}
          />

          <Textarea
            name="message"
            placeholder="Enter your Message"
            value={values.message}
            onChange={handleChange}
            required
            rows={6}
            error={errors.message}
          />

          {errors.submit && (
            <p className="text-red-500 text-center">{errors.submit}</p>
          )}

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>

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
