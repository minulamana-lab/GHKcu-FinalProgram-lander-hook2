export default function ClinicalAssessment() {
  return (
    <section className="mt-[-52px] w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 md:px-8 lg:px-[215px]">
        <div className="mx-auto max-w-[1455px]">
          {/* Badge */}
          <div className="mb-[28px] inline-flex w-fit items-center gap-3 rounded-full border border-[#DBEAFE]/50 bg-[#EFF6FF]/80 px-[21px] py-[13px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4460_1330)">
                <path
                  d="M6.62467 10.3332C6.56515 10.1025 6.44489 9.89191 6.27641 9.72343C6.10793 9.55495 5.89738 9.43469 5.66667 9.37517L1.57667 8.32051C1.50689 8.3007 1.44547 8.25867 1.40174 8.2008C1.35801 8.14293 1.33435 8.07238 1.33435 7.99984C1.33435 7.9273 1.35801 7.85675 1.40174 7.79888C1.44547 7.74101 1.50689 7.69898 1.57667 7.67917L5.66667 6.62384C5.8973 6.56438 6.1078 6.44422 6.27627 6.27587C6.44474 6.10751 6.56504 5.8971 6.62467 5.66651L7.67933 1.57651C7.69894 1.50645 7.74092 1.44474 7.79888 1.40077C7.85684 1.35681 7.92759 1.33301 8.00033 1.33301C8.07308 1.33301 8.14383 1.35681 8.20179 1.40077C8.25974 1.44474 8.30173 1.50645 8.32133 1.57651L9.37533 5.66651C9.43485 5.89722 9.55511 6.10777 9.72359 6.27625C9.89207 6.44473 10.1026 6.56499 10.3333 6.62451L14.4233 7.67851C14.4937 7.69791 14.5557 7.73985 14.5999 7.79789C14.6441 7.85594 14.668 7.92688 14.668 7.99984C14.668 8.0728 14.6441 8.14374 14.5999 8.20179C14.5557 8.25983 14.4937 8.30177 14.4233 8.32117L10.3333 9.37517C10.1026 9.43469 9.89207 9.55495 9.72359 9.72343C9.55511 9.89191 9.43485 10.1025 9.37533 10.3332L8.32067 14.4232C8.30106 14.4932 8.25908 14.5549 8.20112 14.5989C8.14316 14.6429 8.07241 14.6667 7.99967 14.6667C7.92692 14.6667 7.85617 14.6429 7.79821 14.5989C7.74026 14.5549 7.69827 14.4932 7.67867 14.4232L6.62467 10.3332Z"
                  stroke="#155DFC"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3333 2V4.66667"
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
                  d="M2.66667 11.3335V12.6668"
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
              </g>
              <defs>
                <clipPath id="clip0_4460_1330">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-sm leading-[21px] tracking-[-0.15px] text-[#155DFC]">
              Roadmap
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-6 font-jakarta text-[32px] font-bold leading-[40px] tracking-[-0.8px] text-[#0A0A0A] sm:mb-8 sm:text-[48px] sm:leading-[58px] sm:tracking-[-1.2px] md:mb-10 md:text-[56px] md:leading-[68px] md:tracking-[-1.4px] lg:mb-12 lg:text-[64px] lg:leading-[79.2px] lg:tracking-[-1.677px]">
            Structured Clinical Assessment & Review
          </h2>

          {/* Description */}
          <div className="space-y-4 text-[16px] leading-[26px] tracking-[-0.3px] text-[#4A5565] sm:space-y-6 sm:text-[18px] sm:leading-[29px] sm:tracking-[-0.35px] md:space-y-8 md:text-[20px] md:leading-[32.5px] md:tracking-[-0.449px]">
            <p>
              Every program begins with a comprehensive assessment, where our
              healthcare professionals review lifestyle factors, metabolic
              health, and personal goals to determine appropriate care pathways
              in line with Australian regulatory standards. Before any treatment
              pathway is considered, our practitioners take a thorough and
              measured approach to ensure care is appropriate and personalised.
            </p>

            <div>
              <p className="mb-4">As part of your program, we:</p>
              <ul className="ml-4 list-disc space-y-2 sm:ml-6">
                <li>
                  Confirm a clear clinical indication based on your presentation
                  and goals
                </li>
                <li>
                  Carefully review your medical history and screen for any
                  contraindications
                </li>
                <li>
                  Assess relevant baseline blood work where clinically
                  appropriate
                </li>
                <li>
                  Provide detailed discussion and obtain documented informed
                  consent
                </li>
                <li>
                  Schedule structured follow-up between 6–12 weeks to monitor
                  progress and review your plan
                </li>
              </ul>
            </div>

            <p>
              This ensures every recommendation is considered, individualised,
              and delivered within Australian regulatory standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
