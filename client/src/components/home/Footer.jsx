export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm text-gray-500">
          © 2025 AI Tools. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-green-600">Privacy</a>
          <a href="#" className="hover:text-green-600">Terms</a>
          <a href="#" className="hover:text-green-600">Support</a>
        </div>
      </div>
    </footer>
  );
}
