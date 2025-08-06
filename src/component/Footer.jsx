import React, { useState } from "react";

function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer className="bg-neutral-900 text-white py-8 mt-12">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-xl font-bold mb-2">Showcase Your Work</h3>
        <p className="mb-4">
          Are you an architect or client with a project to share? We welcome
          submissions of Nigerian and African architecture, case studies, and
          creative stories.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mb-4 grid gap-2 max-w-md mx-auto"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-2 rounded text-neutral-900"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-2 rounded text-neutral-900 outline-white border border-gray-300"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-2 rounded text-neutral-900 outline-white p-2 border border-gray-300"
            rows={3}
            required
          />
          <button
            type="submit"
            className="bg-white text-neutral-900 px-4 py-2 rounded font-semibold hover:bg-neutral-200 transition"
          >
            Send
          </button>
          {submitted && (
            <p className="text-green-400 mt-2">
              Thank you for reaching out!
            </p>
          )}
        </form>
        <div className="mb-4">
          <span>Contact us at: </span>
          <a
            href="mailto:blazeahu123@gmail.com"
            className="underline hover:text-neutral-300"
          >
            blazeahu123@gmail.com
          </a>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          > <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
            Twitter
          </a>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          > <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
<path d="M0 1.146C0 .513.526 0 1.176 0h13.648c.65 0 1.176.513 1.176 1.146v13.708c0 .633-.526 1.146-1.176 1.146H1.176c-.65 0-1.176-.513-1.176-1.146V1.146zm4.18 12.015V6.26h-3.2c-.017.009-.033.017-.05.025v6.87h3.2zM2.51 4.41c-.69 0-1.25-.56-1.25-1.25S1.82.91 2.51.91c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25zm11.2 9.07v-5.2c0-2.31-1.23-3.38-2.92-3.38-1.42 0-2.06 1.05-2.4 1.63v-.025h-.04v-1.37h-3.2v8.97h3.2v-4.9c0-1.3.66-1.92 1.48-1.92.8 0 1.25.6 1.25 1.98v4.84h3.2z"/>
</svg>
            Instagram
          </a>
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >   <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
      <path d="M0 1.146C0 .513.526 0 1.176 0h13.648c.65 0 1.176.513 1.176 1.146v13.708c0 .633-.526 1.146-1.176 1.146H1.176c-.65 0-1.176-.513-1.176-1.146V1.146zm4.18 12.015V6.26h-3.2c-.017.009-.033.017-.05.025v6.87h3.2zM2.51 4.41c-.69 0-1.25-.56-1.25-1.25S1.82.91 2.51.91c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25zm11.2 9.07v-5.2c0-2.31-1.23-3.38-2.92-3.38-1.42 0-2.06 1.05-2.4 1.63v-.025h-.04v-1.37h-3.2v8.97h3.2v-4.9c0-1.3.66-1.92 1.48-1.92.8 0 1.25.6 1.25 1.98v4.84h3.2z"/>
    </svg>
            LinkedIn
          </a>
        </div>
        <p className="text-sm text-neutral-400">
          &copy; {new Date().getFullYear()} Architect's Diary. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;