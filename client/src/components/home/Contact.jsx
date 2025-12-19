export default function Contact() {
  return (
    <section id="contact" className="bg-yellow-500 py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <form className="bg-gray-500 p-8 rounded-xl border space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-3 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border px-4 py-3 rounded-lg"
          ></textarea>

          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
