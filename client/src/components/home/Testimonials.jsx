export default function Testimonials() {
  const reviews = [
    {
      name: "Amit Sharma",
      role: "Content Creator",
      text: "This AI platform saved me hours every day. The dashboard is clean and tools are super fast.",
    },
    {
      name: "Priya Verma",
      role: "Startup Founder",
      text: "Best AI SaaS I’ve used. Simple UI and powerful tools.",
    },
    {
      name: "Rahul Singh",
      role: "Freelancer",
      text: "Writing blogs and generating images is insanely easy now.",
    },
  ];

  return (
    <section className="bg-blue-300 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border shadow-sm"
            >
              <p className="text-gray-600 mb-4">“{item.text}”</p>
              <h4 className="text-red-600 font-semibold">{item.name}</h4>
              <span className="text-sm text-gray-800">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
