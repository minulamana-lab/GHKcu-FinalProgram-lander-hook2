export default function Header() {
  return (
    <header className="w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-sm">
      <div className="flex h-[88px] items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[87px]">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/90a32c1e60d3dfe71e92a07cf025b92e077f481e?width=256"
            alt="BIOV8 Logo"
            className="h-[28px] w-[100px] sm:h-[34.305px] sm:w-[128px]"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-12">
          <a
            href="#benefits"
            className="text-[15px] leading-[22.5px] tracking-[-0.234px] text-[#4A5565] transition-colors hover:text-[#155DFC]"
          >
            GOALS
          </a>
          <a
            href="#science"
            className="text-[15px] leading-[22.5px] tracking-[-0.234px] text-[#4A5565] transition-colors hover:text-[#155DFC]"
          >
            HOW IT WORKS
          </a>
          <a
            href="#testimonials"
            className="text-[15px] leading-[22.5px] tracking-[-0.234px] text-[#4A5565] transition-colors hover:text-[#155DFC]"
          >
            OUR PROGRAMS
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="https://biov8.com.au/collections/programs/products/glow-stack-program-1?variant=47271501693177"
          className="group flex h-9 items-center justify-center gap-2 rounded-[14px] bg-[#155DFC] px-4 py-2 text-xs shadow-[0_10px_15px_-3px_rgba(43,127,255,0.25),0_4px_6px_-4px_rgba(43,127,255,0.25)] transition-all duration-300 hover:scale-105 hover:bg-[#0d4ed4] hover:shadow-lg active:scale-95 sm:px-6 sm:text-sm"
        >
          <span className="text-center font-medium leading-5 tracking-[-0.15px] text-white transition-colors">
            Buy Program
          </span>
        </a>
      </div>
    </header>
  );
}
