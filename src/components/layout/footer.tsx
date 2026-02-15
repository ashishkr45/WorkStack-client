export default function Footer() {
  return (
    <footer className="bg-slate-50 rounded-2xl border border-blue-400 mt-16 mb-5 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand + tagline */}
          <div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <div className="flex gap-0.5">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              </div>
              WorkStack
            </div>

            <p className="mt-4 text-neutral-600 max-w-sm">
              Stay organized and boost productivity with collaborative
              project and task management.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-3">
              <h4 className="font-medium text-neutral-900">Company</h4>
              <ul className="space-y-2 text-neutral-600">
                <li><a href="#" className="hover:text-black">About Us</a></li>
                <li><a href="#" className="hover:text-black">Contact</a></li>
                <li><a href="#" className="hover:text-black">What's New</a></li>
                <li><a href="#" className="hover:text-black">Careers</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-neutral-900">Product</h4>
              <ul className="space-y-2 text-neutral-600">
                <li><a href="#" className="hover:text-black">Product</a></li>
                <li><a href="#" className="hover:text-black">Solutions</a></li>
                <li><a href="#" className="hover:text-black">Integrations</a></li>
                <li><a href="#" className="hover:text-black">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col md:flex-row justify-between text-sm text-neutral-500 gap-3">
          <p>© {new Date().getFullYear()} All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
