import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

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
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
        Interested? Leave a message
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col gap-4 bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
          className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
