import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formspree.io/f/xeolyrbj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="bg-black text-white mx-5 flex flex-col  px-2 contact-form-monitor">
      <p className="text-xl lg:text-5xl font-bold mb-8 text-center">
        Interested? Leave a message
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-3 lg:gap-4 bg-gray-800 p-6 lg:p-8 rounded-xs shadow-lg"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="p-3 rounded-xs bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="p-3 rounded-xs bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={7}
          required
          className="p-3 rounded-xs bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          type="submit"
          className={`bg-cyan-600 hover:bg-cyan-700 transition-colors rounded py-3 mt-2 font-semibold ${
            status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>

        {status === 'success' && (
          <p className="text-green-400 mt-2">Message sent! Thank you.</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 mt-2">Something went wrong. Try again.</p>
        )}
      </form>
    </section>
  );
}
