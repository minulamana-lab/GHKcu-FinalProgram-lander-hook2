export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#101828] to-[#000] px-4 pb-8 pt-12 sm:px-6 md:px-8 md:pb-12 md:pt-16 lg:px-16 lg:pb-16 lg:pt-20">
      <div className="mx-auto max-w-[1920px] px-0 lg:px-16">
        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mb-16 lg:grid-cols-4 lg:gap-12">
          {/* Column 1 - Logo & Tagline */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5a87171675a24feda4744a6d27efde30%2F6b2e8293fcad40b682afde15f7fbcbdc?format=webp&width=800&height=1200"
                alt="BIOV8 Logo"
                className="h-[34.305px] w-[128px]"
              />
            </div>
            <p className="text-sm leading-relaxed tracking-[-0.15px] text-gray-400">
              <span>We exist to help humans optimize their health performance and lifespan.</span>
            </p>
            <div className="flex items-center gap-4 mt-2">
              <img
                src="https://cdn.builder.io/o/assets%2F5a87171675a24feda4744a6d27efde30%2F029056bdfc4e4905a2c80027e958fd69?alt=media&token=df9cd4d4-7e2f-46f7-830f-9227b8155e7b&apiKey=5a87171675a24feda4744a6d27efde30"
                alt="Peptide"
                className="h-10 object-contain"
              />
              <img
                src="https://cdn.builder.io/o/assets%2F5a87171675a24feda4744a6d27efde30%2F6f965aa64b314ea6b987b705e0882c91?alt=media&token=1dc65b95-4530-491a-8341-251072a73a2e&apiKey=5a87171675a24feda4744a6d27efde30"
                alt="LegitScript Certified"
                className="h-10 object-contain"
              />
            </div>
          </div>

          {/* Column 2 - Product */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-medium leading-6 text-white">
              Contact Us
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#benefits"
                className="text-sm leading-6 tracking-[-0.15px] text-gray-400 transition-colors hover:text-white"
              >
                care@biov8.com.au
              </a>
              <a
                href="#science"
                className="text-sm leading-6 tracking-[-0.15px] text-gray-400 transition-colors hover:text-white"
              >
                Blog
              </a>
              <a
                href="#testimonials"
                className="text-sm leading-6 tracking-[-0.15px] text-gray-400 transition-colors hover:text-white"
              >
                Clinical Research
              </a>
            </nav>
          </div>

          {/* Column 3 - Company */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-medium leading-6 text-white">
              Member Care
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#about"
                className="text-sm leading-6 tracking-[-0.15px] text-gray-400 transition-colors hover:text-white"
              >
                Book Member Care
              </a>
              <a
                href="#research"
                className="text-sm leading-6 tracking-[-0.15px] text-gray-400 transition-colors hover:text-white"
              >
                Loyalty Program
              </a>
              <a
                href="#contact"
                className="text-sm leading-6 tracking-[-0.15px] text-gray-400 transition-colors hover:text-white"
              >
                Refund Policy
              </a>
            </nav>
          </div>

          {/* Column 4 - Legal */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-medium leading-6 text-white">About BIOV8</h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#privacy"
                className="text-sm leading-6 tracking-[-0.15px] text-gray-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-sm leading-6 tracking-[-0.15px] text-gray-400 transition-colors hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="#disclaimer"
                className="text-sm leading-6 tracking-[-0.15px] text-gray-400 transition-colors hover:text-white"
              >
                FAQ
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm leading-6 tracking-[-0.15px] text-gray-500">
            <span>© 2025 . BIOV8 Operated under license by Serious About Health Pty Ltd</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
