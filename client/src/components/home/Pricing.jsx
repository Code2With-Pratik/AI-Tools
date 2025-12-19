export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold mb-12">Choose Your Plan</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Free Plan */}
          <div className="border rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-gray-600 mb-6">For beginners</p>

            <h4 className="text-4xl font-bold mb-6">₹0</h4>

            <ul className="space-y-3 text-sm text-gray-500 mb-8">
              <li>✔ Limited AI usage</li>
              <li>✔ Basic tools</li>
              <li>✔ Community support</li>
            </ul>

            <button className="w-full py-3 border rounded-lg hover:bg-gray-100">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-green-600 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-gray-600 mb-6">For professionals</p>

            <h4 className="text-4xl font-bold mb-6">₹499</h4>

            <ul className="space-y-3 text-sm text-gray-500 mb-8">
              <li>✔ Unlimited AI tools</li>
              <li>✔ Priority support</li>
              <li>✔ Faster responses</li>
            </ul>

            <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Upgrade Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
