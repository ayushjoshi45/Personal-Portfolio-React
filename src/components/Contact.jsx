import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    console.log(formData);
    await axios.post("https://personal-portfolio-react-backend.onrender.com/sendMail", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" }); // reset fields
  } catch (error) {
    alert("Failed to send message. Please try again later.");
    console.error(error);
  }
  setLoading(false);
};

// const handleSubmit = (e) => {
//   e.preventDefault();
//   setLoading(true);

//   // Just print the data
//   console.log("Form Data:", formData.email,formData.name,formData.message);

//   // Optional: Show an alert
//   alert("Form data logged in console!");

//   // Reset fields
//   setFormData({ name: "", email: "", message: "" });

//   setLoading(false);
// };



  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="flex flex-col mb-6 gap-1">
      <h1 className="text-4xl font-bold text-white text-center ">Get In Touch</h1>
      <div className=" w-32 h-[5px] bg-[#6200EE] rounded mx-auto"></div>
      </div>
      <form onSubmit={handleSubmit} className="bg-[#222222] p-4 rounded-lg shadow-lg">
        <div className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-md bg-[#333333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6200EE]"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-[#333333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6200EE]"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Enter your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-md bg-[#333333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6200EE] h-32"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 mt-4 text-white bg-[#6200EE] rounded-full hover:bg-[#7B1EFF] transition-all duration-300 disabled:bg-gray-500"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
