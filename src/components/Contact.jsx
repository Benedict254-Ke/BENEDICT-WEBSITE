import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        "service_umfw1a9",
        "template_bnbphxc",
        form.current,
        "GoXdQONAAKn9qFScN"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        form.current.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch(() => {
        setLoading(false);
        setError(true);

        setTimeout(() => {
          setError(false);
        }, 3000);
      });
  };

  return (
    <motion.section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s work together — send me a message below.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid gap-4 max-w-xl mx-auto"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-800 border border-gray-700 outline-none focus:border-blue-400 transition"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-800 border border-gray-700 outline-none focus:border-blue-400 transition"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded bg-gray-800 border border-gray-700 outline-none focus:border-blue-400 transition resize-none"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 py-3 rounded font-semibold transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {success && (
          <div className="mt-6 text-green-400 text-lg font-semibold animate-bounce">
            Message sent successfully 🚀
          </div>
        )}

        {error && (
          <div className="mt-6 text-red-400 text-lg font-semibold">
            Message failed. Please try again.
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <a
            href="mailto:lulub8929@gmail.com"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Hire Me
          </a>

          <a
            href="https://wa.me/254713766014"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            WhatsApp Me
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-10">
          Designed and developed by Lulu B 💻
        </p>
      </div>
    </motion.section>
  );
}