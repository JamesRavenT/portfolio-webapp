import { layout } from '../../_config/layout';
import { useState } from 'react';
import ContactForm from './content/components/ContactForm';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate Formspree, EmailJS, or your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <div className={layout.page}>
      <ContactForm />

      {/* Footer */}
      <footer className="w-full mt-12 py-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 px-6">
        <span>© 2025 Raven Kun</span>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="mailto:raven@example.com"
            className="hover:text-cyan-400 transition"
          >
            Email
          </a>
          <a
            href="https://github.com/username"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
