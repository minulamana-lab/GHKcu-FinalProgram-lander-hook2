const CheckIcon = () => (
  <svg
    className="h-5 w-5 sm:h-6 sm:w-6"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F9FAFB] to-white">
      <div className="mx-auto max-w-[1920px] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-[215px] lg:py-24">
        <div className="grid items-start gap-8 md:gap-12 lg:grid-cols-2">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            {/* Blur background */}
            <div className="absolute left-0 top-0 h-full w-full max-w-[639px] rounded-[40px] bg-gradient-to-br from-[#51A2FF] to-[#53EAFD] opacity-30 blur-[100px]" />
            
            {/* Image container */}
            <div className="relative left-0 top-0 h-auto w-full max-w-[639px] rounded-[20px] border border-white/20 bg-white/40 p-2 pb-[1px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:rounded-[40px] sm:p-[13px] lg:top-[90px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5a87171675a24feda4744a6d27efde30%2F9c4be666cfb743e9bf4c1830f5a04579?format=webp&width=800&height=1200"
                alt="BIOV8 Glow Stack Product"
                className="h-auto w-full rounded-[16px] object-cover sm:rounded-[32px]"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="relative order-1 flex flex-col justify-start pt-0 lg:order-2 lg:pt-[75px]">
            {/* Badge */}
            <div className="mb-[28px] inline-flex w-fit items-center gap-3 rounded-full border border-[#DBEAFE]/50 bg-[#EFF6FF]/80 px-[21px] py-[13px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.62467 10.3332C6.56515 10.1025 6.44489 9.89191 6.27641 9.72343C6.10793 9.55495 5.89738 9.43469 5.66667 9.37517L1.57667 8.32051C1.50689 8.3007 1.44547 8.25867 1.40174 8.2008C1.35801 8.14293 1.33435 8.07238 1.33435 7.99984C1.33435 7.9273 1.35801 7.85675 1.40174 7.79888C1.44547 7.74101 1.50689 7.69898 1.57667 7.67917L5.66667 6.62384C5.8973 6.56438 6.1078 6.44422 6.27627 6.27587C6.44474 6.10751 6.56504 5.8971 6.62467 5.66651L7.67933 1.57651C7.69894 1.50645 7.74092 1.44474 7.79888 1.40077C7.85684 1.35681 7.92759 1.33301 8.00033 1.33301C8.07308 1.33301 8.14383 1.35681 8.20179 1.40077C8.25974 1.44474 8.30173 1.50645 8.32133 1.57651L9.37533 5.66651C9.43485 5.89722 9.55511 6.10777 9.72359 6.27625C9.89207 6.44473 10.1026 6.56499 10.3333 6.62451L14.4233 7.67851C14.4937 7.69791 14.5557 7.73985 14.5999 7.79789C14.6441 7.85594 14.668 7.92688 14.668 7.99984C14.668 8.0728 14.6441 8.14374 14.5999 8.20179C14.5557 8.25983 14.4937 8.30177 14.4233 8.32117L10.3333 9.37517C10.1026 9.43469 9.89207 9.55495 9.72359 9.72343C9.55511 9.89191 9.43485 10.1025 9.37533 10.3332L8.32067 14.4232C8.30106 14.4932 8.25908 14.5549 8.20112 14.5989C8.14316 14.6429 8.07241 14.6667 7.99967 14.6667C7.92692 14.6667 7.85617 14.6429 7.79821 14.5989C7.74026 14.5549 7.69827 14.4932 7.67867 14.4232L6.62467 10.3332Z"
                  stroke="#155DFC"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3334 2V4.66667"
                  stroke="#155DFC"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6667 3.3335H12"
                  stroke="#155DFC"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.66663 11.3335V12.6668"
                  stroke="#155DFC"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33333 12H2"
                  stroke="#155DFC"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm leading-[21px] tracking-[-0.15px] text-[#155DFC]">
                Clinician-Guided Wellness Program
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-4 font-jakarta text-[32px] font-bold leading-[40px] tracking-[-0.8px] text-[#0A0A0A] sm:mb-6 sm:text-[48px] sm:leading-[58px] sm:tracking-[-1.2px] md:mb-8 md:text-[56px] md:leading-[68px] md:tracking-[-1.4px] lg:text-[64px] lg:leading-[79.2px] lg:tracking-[-1.677px]">
              Structured Skin & Recovery Support for Long-Term Vitality
            </h1>

            {/* Description */}
            <p className="mb-6 text-[16px] leading-[26px] tracking-[-0.3px] text-[#4A5565] sm:mb-8 sm:text-[18px] sm:leading-[29px] sm:tracking-[-0.35px] md:mb-10 md:text-[20px] md:leading-[32.5px] md:tracking-[-0.449px] lg:mb-12">
              The BIOV8 Glow Stack™ is our structured, clinician-guided program
              designed for individuals who want to feel confident in their skin
              and supported in their recovery journey.
            </p>

            {/* Feature list */}
            <div className="mb-8 flex flex-col gap-4 sm:gap-5 md:mb-10 md:gap-6 lg:mb-12">
              {/* Feature 1 */}
              <div className="flex items-start gap-3 sm:gap-4 md:gap-[23px]">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-[#2B7FFF] to-[#155DFC] shadow-[0_10px_15px_-3px_rgba(43,127,255,0.2),0_4px_6px_-4px_rgba(43,127,255,0.2)] sm:h-12 sm:w-12 sm:rounded-[16px]">
                  <CheckIcon />
                </div>
                <p className="flex-1 text-[14px] leading-[22px] tracking-[-0.25px] text-[#4A5565] sm:text-[16px] sm:leading-[26px] sm:tracking-[-0.312px]">
                  Consultations with qualified healthcare professionals to
                  discuss your goals and explore personalised, evidence-informed
                  care options.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3 sm:gap-4 md:gap-[23px]">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-[#2B7FFF] to-[#155DFC] shadow-[0_10px_15px_-3px_rgba(43,127,255,0.2),0_4px_6px_-4px_rgba(43,127,255,0.2)] sm:h-12 sm:w-12 sm:rounded-[16px]">
                  <CheckIcon />
                </div>
                <p className="flex-1 text-[14px] leading-[22px] tracking-[-0.25px] text-[#4A5565] sm:text-[16px] sm:leading-[26px] sm:tracking-[-0.312px]">
                  All treatment recommendations are doctor-reviewed and delivered
                  in accordance with Australia's regulatory framework.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3 sm:gap-4 md:gap-[23px]">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-[#2B7FFF] to-[#155DFC] shadow-[0_10px_15px_-3px_rgba(43,127,255,0.2),0_4px_6px_-4px_rgba(43,127,255,0.2)] sm:h-12 sm:w-12 sm:rounded-[16px]">
                  <CheckIcon />
                </div>
                <p className="flex-1 text-[14px] leading-[22px] tracking-[-0.25px] text-[#4A5565] sm:text-[16px] sm:leading-[26px] sm:tracking-[-0.312px]">
                  Ongoing clinical monitoring and support to help you maintain
                  consistency and accountability throughout your program.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-[22px]">
              <button className="group flex w-full items-center justify-center gap-[3px] rounded-[18px] bg-[#155DFC] px-[20px] py-[18px] shadow-[0_28.333px_35.417px_-7.083px_rgba(43,127,255,0.25),0_11.333px_14.167px_-8.5px_rgba(43,127,255,0.25)] transition-all duration-300 hover:scale-105 hover:bg-[#0d4ed4] hover:shadow-2xl active:scale-95 sm:w-auto sm:rounded-[22.667px] sm:px-[23px] sm:py-[23px]">
                <span className="text-center font-jakarta text-[18px] font-bold leading-[28px] tracking-[-0.35px] text-white sm:text-[22.667px] sm:leading-[34px] sm:tracking-[-0.443px]">
                  Buy Program
                </span>
                <svg
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 19.6659L13.6662 13.9997L8 8.3335"
                    stroke="white"
                    strokeWidth="1.88888"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button className="group flex h-[64px] w-[96px] items-center justify-center rounded-[18px] border-2 border-black bg-white shadow-[0_11.333px_14.167px_-8.5px_rgba(43,127,255,0.25)] transition-all duration-300 hover:scale-110 hover:bg-black sm:h-[80px] sm:w-[120px] sm:rounded-[22.667px]">
                <svg
                  className="h-6 w-6 fill-black transition-colors duration-300 group-hover:fill-white sm:h-8 sm:w-8"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
