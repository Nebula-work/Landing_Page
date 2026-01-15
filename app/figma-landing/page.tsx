import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FigmaLandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/0 ">
        <div className="mx-auto w-full max-w-[1440px] flex h-20 items-center justify-center">
          <div className="w-full max-w-[1280px] flex h-11 items-center justify-between px-0">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/figma-assets/cloudhub-logo.svg"
                alt="Cloudhub"
                width={105}
                height={25}
                className="h-6 w-auto brightness-0 invert"
              />
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-10">
              <Link href="#" className="text-sm font-semibold  hover:opacity-80 flex items-center gap-1">
                Product
                <ChevronDown className="h-[18px] w-[18px] text-white" />
              </Link>
              <Link href="#" className="text-sm font-semibold  hover:opacity-80">
                Home
              </Link>
              <Link href="#" className="text-sm font-semibold  hover:opacity-80">
                Shop
              </Link>
              <Link href="#" className="text-sm font-semibold  hover:opacity-80">
                Pages
              </Link>
              <Link href="#" className="text-sm font-semibold  hover:opacity-80">
                Integrations
              </Link>
              <Link href="#" className="text-sm font-semibold  hover:opacity-80">
                Developers
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-5">
              <Link href="#" className="text-sm font-semibold text-white hover:opacity-80">
                Login
              </Link>
              <Button 
                className="bg-gradient-to-br from-[#FB432C] to-[#FF591E] text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-[inset_0px_-1.5px_0px_0px_rgba(255,255,255,0.32),inset_0px_0.5px_0px_0px_rgba(255,255,255,0.32)] hover:opacity-90"
              >
                Start for free
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[958px] flex items-center justify-center overflow-hidden bg-white">
          {/* Background Gradients */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Left gradient */}
            <div className="absolute left-0 top-[16px] w-[720.78px] h-[700.34px]">
              <Image
                src="/figma-assets/hero-gradient-left.svg"
                alt=""
                width={721}
                height={701}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Right gradient */}
            <div className="absolute right-0 top-[16px] w-[720.78px] h-[700.34px]">
              <Image
                src="/figma-assets/hero-gradient-right.svg"
                alt=""
                width={721}
                height={701}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Floating Images - positioned exactly as in Figma */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Image 1: x:152, y:325, w:88, h:88 */}
            <div className="absolute left-[152px] top-[325px] w-[88px] h-[88px]">
              <Image
                src="/figma-assets/floating-image-1.png"
                alt=""
                width={88}
                height={88}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Image 2: x:942, y:561, w:88, h:72 */}
            <div className="absolute left-[942px] top-[561px] w-[88px] h-[72px]">
              <Image
                src="/figma-assets/floating-image-2.png"
                alt=""
                width={88}
                height={72}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Image 3: x:296, y:485, w:88, h:88 */}
            <div className="absolute left-[296px] top-[485px] w-[88px] h-[88px]">
              <Image
                src="/figma-assets/floating-image-3.png"
                alt=""
                width={88}
                height={88}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Image 4: x:108, y:615, w:88, h:88 */}
            <div className="absolute left-[108px] top-[615px] w-[88px] h-[88px]">
              <Image
                src="/figma-assets/floating-image-4.png"
                alt=""
                width={88}
                height={88}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Image 5: x:1007, y:424, w:88, h:88 */}
            <div className="absolute left-[1007px] top-[424px] w-[88px] h-[88px]">
              <Image
                src="/figma-assets/floating-image-5.png"
                alt=""
                width={88}
                height={88}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Image 6: x:1180, y:284, w:88, h:88 */}
            <div className="absolute left-[1180px] top-[284px] w-[88px] h-[88px]">
              <Image
                src="/figma-assets/floating-image-6.png"
                alt=""
                width={88}
                height={88}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Play Button - positioned at x:670, y:427 */}
          <div className="absolute left-[670px] top-[427px] z-10 pointer-events-auto cursor-pointer">
            <div className="w-[94px] h-[93px] bg-gradient-to-br from-[#FB432C] to-[#FF591E] rounded-[24px] p-2 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <div className="w-[54px] h-[54px] bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/figma-assets/play-button.svg"
                  alt="Play"
                  width={49}
                  height={53}
                  className="ml-1"
                />
              </div>
            </div>
          </div>

          {/* Hero Content - positioned at x:132, y:173 */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-[132px] pt-[173px] pb-0">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-6 w-full max-w-[1192px]">
                  <h1 className="text-[84px] font-semibold leading-[89px] tracking-[-3.5px] text-center text-[#171717] w-full">
                    Create, inspect, and apply synthetic surveillance broadly.
                  </h1>
                  <p className="text-xl leading-[35px] text-center text-[#5F5F5F] w-full">
                    Start with a stunning homepage. Stay motivated without hurting your pocket.
                  </p>
                </div>
                <Button 
                  className="bg-gradient-to-br from-[#FB432C] to-[#FF591E] text-white rounded-full px-7 py-3 text-base font-semibold shadow-[inset_0px_-1.5px_0px_0px_rgba(255,255,255,0.32),inset_0px_0.5px_0px_0px_rgba(255,255,255,0.32)] hover:opacity-90"
                >
                  Start for free
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <span className="text-sm leading-[20px] text-[#A3A3A3]">Want to talk or get a live demo?</span>
                <Link href="#" className="text-sm leading-[20px] text-[#525252] hover:underline">
                  Get in touch →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Share Section */}
        <section className="w-full py-[88px] px-[77px] bg-white">
          <div className="container mx-auto max-w-[1280px]">
            <div className="flex items-center gap-[77px]">
              {/* Left Content */}
              <div className="flex-1 flex flex-col gap-10 max-w-[547px]">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="inline-flex items-center justify-center gap-2.5 px-3.5 py-1 bg-gradient-to-br from-[#FB432C] to-[#FF591E] rounded-full w-fit">
                      <span className="text-sm font-semibold text-white">Share</span>
                    </div>
                    <h2 className="text-[54px] font-semibold leading-[63px] tracking-[-1.5px] text-[#282828]">
                      Share anything you're working on.
                    </h2>
                  </div>
                  <p className="text-lg leading-[30px] text-[#5F6980]">
                    Campsite has been instrumental in keeping designers aware of each others' work-in-progress in a way that was previously slowing us down. It's also one of the only channels where.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-7">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#F6F6F6] flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#282828]" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M10 3L4.5 8.5 2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </div>
                    <span className="text-base text-[#282828]">Coded</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#F6F6F6] flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#282828]" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M10 3L4.5 8.5 2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </div>
                    <span className="text-base text-[#282828]">100% Secure</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#FB432C] to-[#FF591E] rounded-[29px] flex items-center justify-center">
                    <Play className="w-3 h-3 text-white ml-0.5" />
                  </div>
                  <span className="text-base font-semibold text-[#282828]">See how it works</span>
                </div>
              </div>

              {/* Right Image/Code Preview */}
              <div className="flex-1 max-w-[656px]">
                <div className="w-full h-[477px] bg-[#FAFAFA] rounded-[24px] p-[62px_70px]">
                  <div className="w-full h-[337px] bg-[#171717] rounded-[24px] p-1 shadow-lg">
                    <div className="w-full h-[42px] bg-[#313131] rounded-t-[24px] flex items-center justify-center">
                      <span className="text-[15px] font-mono text-[#D1D5DB]">api.check.ts</span>
                    </div>
                    <div className="w-full h-[293px] bg-[#171717] rounded-b-[24px] p-6">
                      <pre className="text-[15.5px] font-mono leading-[20px] text-left">
                        <span className="text-white">new</span>{"\n"}
                        <span className="text-[#00B51D]">ApiCheck</span><span className="text-white">('hello-api-1', {"{"}</span>{"\n"}
                        <span className="text-[#EEEEEE]">  name:</span> <span className="text-[#FD4B28]">'Hello API',</span>{"\n"}
                        <span className="text-[#EEEEEE]">  activated:</span> <span className="text-[#00B51D]">true,</span>{"\n"}
                        <span className="text-[#EEEEEE]">  request: {"{"}</span>{"\n"}
                        <span className="text-[#EEEEEE]">    method:</span> <span className="text-[#FD4B28]">'GET',</span>{"\n"}
                        <span className="text-[#EEEEEE]">    url:</span> <span className="text-[#FD4B28]">'https://api.checklyhq.com/public-stats',</span>{"\n"}
                        <span className="text-[#EEEEEE]">    assertions: [</span>{"\n"}
                        <span className="text-[#00B51D]">      AssertionBuilder.statusCode().equals(200)</span>{"\n"}
                        <span className="text-[#EEEEEE]">    ],</span>{"\n"}
                        <span className="text-[#EEEEEE]">  {"}"}</span>{"\n"}
                        <span className="text-white">{"})"}</span>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="w-full py-[88px] px-[80px] bg-white">
          <div className="container mx-auto max-w-[1280px]">
            <div className="flex items-center gap-[77px]">
              {/* Left Image/Component */}
              <div className="flex-1 max-w-[358px]">
                <div className="w-full bg-[#171717] rounded-[24px] p-[63px_24px] shadow-lg">
                  {/* Feedback list items */}
                  <div className="space-y-0">
                    {[
                      { name: "Buzz Usborne", status: "Pending" },
                      { name: "Gabriel Valdivia", status: "Done" },
                      { name: "Jochem Dierx", status: "Requested" },
                    ].map((item, idx) => (
                      <div key={idx} className="py-6 border-b border-white/5">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-[43px] h-[43px] rounded-full bg-[#000000]"></div>
                            <span className="text-[14px] font-semibold text-white">{item.name}</span>
                          </div>
                          <span className="text-[14px] text-[#9D9FA1]">{item.status}</span>
                        </div>
                      </div>
                    ))}
                    <div className="py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-[43px] h-[43px] rounded-full border border-white/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <span className="text-[14px] font-semibold text-[#FD4E26]">Add More</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-1">
                    <span className="text-[18px] font-semibold text-white">Looking for feedback?</span>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <div className="w-9 h-5 bg-gradient-to-br from-[#FB432C] to-[#FF591E] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1 flex flex-col gap-10 max-w-[547px]">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="inline-flex items-center justify-center gap-2.5 px-3.5 py-1 bg-gradient-to-br from-[#FB432C] to-[#FF591E] rounded-full w-fit">
                      <span className="text-sm font-semibold text-white">Feedback</span>
                    </div>
                    <h2 className="text-[54px] font-semibold leading-[63px] tracking-[-1.5px] text-[#000000]">
                      Better feedback at the right time.
                    </h2>
                  </div>
                  <p className="text-lg leading-[30px] text-[#6E6E6E]">
                    Campsite has been instrumental in keeping designers aware of each others' work-in-progress in a way that was previously slowing us down. It's also one of the only channels where.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#FB432C] to-[#FF591E] rounded-[29px] flex items-center justify-center">
                    <Play className="w-3 h-3 text-white ml-0.5" />
                  </div>
                  <span className="text-base font-semibold text-[#282828]">See how it works</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Time Here Section */}
        <section className="w-full py-20 px-20 bg-gradient-to-br from-[#FB432C] to-[#FF591E]">
          <div className="container mx-auto max-w-[1280px]">
            <div className="flex flex-col items-center gap-4 mb-16">
              <div className="text-base font-semibold text-white">Best time here</div>
              <h2 className="text-[54px] font-semibold leading-[63px] tracking-[-1.5px] text-center text-white max-w-[842px]">
                Better feedback at the right time.
              </h2>
            </div>
            {/* Dashboard Preview */}
            <div className="w-full max-w-[1150px] mx-auto h-[358px] bg-[#111111] border border-black/5 rounded-[24px] p-10 relative">
              <div className="absolute -top-10 left-10 w-[1068px] h-[307px] bg-[#222222] border border-black/5 rounded-[20px] shadow-lg">
                {/* Dashboard content placeholder */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-[68px] h-[67px] bg-white/9 rounded-lg flex items-center justify-center">
                      <div className="w-[39px] h-[39px] bg-white/20 rounded"></div>
                    </div>
                    <div>
                      <div className="text-[22px] font-medium text-white mb-1">Cloudhub</div>
                      <div className="text-[19px] text-[#737373]">2m ago in Brand</div>
                    </div>
                    <div className="ml-auto">
                      <div className="w-[157px] h-[48px] bg-gradient-to-br from-[#FB432C] to-[#FF591E] rounded-[42px] flex items-center justify-center">
                        <span className="text-[18px] font-medium text-white">View post</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-[1px] bg-black/2 mb-6"></div>
                  <div className="flex items-center gap-6">
                    <div className="flex -space-x-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-12 h-12 rounded-full bg-gray-600 border-2 border-[#111111]"></div>
                      ))}
                    </div>
                    <span className="text-[19px] text-[#737373]">3 people are looking for feedback this week</span>
                  </div>
                </div>
              </div>
              {/* Feature Cards */}
              <div className="absolute bottom-10 left-0 right-0 flex gap-4 justify-center">
                {[
                  { title: "Polls", desc: "Get a quick gut check from the team on design options." },
                  { title: "Mentions", desc: "Mention anyone on your team to include them in a post." },
                  { title: "Resolve comments", desc: "Mark comments as resolved to keep the conversation focused." },
                ].map((item, idx) => (
                  <div key={idx} className="w-[376px] h-[173px] bg-[#111111] border border-black/5 rounded-[24px] p-6">
                    <div className="w-10 h-10 bg-gray-700 rounded mb-4"></div>
                    <div className="text-base font-semibold text-white mb-2">{item.title}</div>
                    <div className="text-base text-[#737373]">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Archive Section */}
        <section className="w-full py-20 px-20 bg-white">
          <div className="container mx-auto max-w-[1280px]">
            <div className="flex flex-col items-center gap-10">
              <h2 className="text-[54px] font-semibold leading-[63px] tracking-[-1.5px] text-center text-[#282828]">
                Your Archive of progress
              </h2>
              <div className="flex items-center gap-8">
                {/* Left Card */}
                <div className="w-[570px] h-[398px] bg-[#FCFCFC] border border-black/5 rounded-lg p-8">
                  <h3 className="text-lg font-semibold text-center text-[#171717] mb-12">
                    Projects
                    <br />
                    Organize, follow, and archive.
                  </h3>
                  <div className="w-full h-[319px] bg-white rounded-[14px] shadow-[0px_-4px_36px_0px_rgba(0,0,0,0.05)] p-7">
                    {/* Chart placeholder */}
                    <div className="w-full h-full bg-gray-100 rounded"></div>
                  </div>
                </div>
                {/* Right Card */}
                <div className="w-[570px] h-[398px] bg-[#FCFCFC] border border-black/5 rounded-lg p-8">
                  <div className="mb-6">
                    <div className="text-lg font-semibold text-[#171717] mb-2">Member profiles</div>
                    <div className="text-lg text-[#525252]">Automatic portfolios of your work.</div>
                  </div>
                  <div className="w-full h-[243px] bg-white rounded-[16px] shadow-[0px_-4px_36px_0px_rgba(0,0,0,0.05)] p-12">
                    {/* Chart placeholder */}
                    <div className="w-full h-full bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loved By Designers Section */}
        <section className="w-full py-20 px-20 bg-white">
          <div className="container mx-auto max-w-[1280px]">
            <div className="flex flex-col items-center gap-10">
              <h2 className="text-[54px] font-semibold leading-[63px] tracking-[-1.5px] text-center text-[#282828]">
                Loved By Designers At
              </h2>
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-center gap-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-[296px] h-[144px] bg-[#F9FAFB] rounded-[24px] flex items-center justify-center">
                      <div className="w-[215px] h-[112px] bg-gray-300 rounded"></div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-[296px] h-[144px] bg-[#F9FAFB] rounded-[24px] flex items-center justify-center">
                      <div className="w-[215px] h-[112px] bg-gray-300 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 px-20 bg-[#F9FAFB]">
          <div className="container mx-auto max-w-[1280px]">
            <div className="flex items-center gap-2">
              {/* Left Testimonial */}
              <div className="flex-1 max-w-[552px]">
                <p className="text-lg leading-[30px] text-[#171717] mb-6">
                  Cloudhub has emerged as an essential asset for the team at Patreon design. Amidst an accelerated expanding organization in which the product undergoes rapid changes, Campsite enables us to maintain visibility on what's transpiring across various teams — impeccably aligning with our pre-existing procedures.
                </p>
                <div className="w-[52px] h-[52px] bg-[#EBEBFF] rounded-lg mb-6"></div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <div className="text-base font-semibold text-[#171717]">Gabriel Valdivia</div>
                    <div className="text-sm text-[#737373]">Principal Product Designer, Patreon</div>
                  </div>
                </div>
              </div>
              {/* Right Testimonial */}
              <div className="flex-1 max-w-[552px]">
                <p className="text-lg leading-[30px] text-[#171717] mb-6">
                  Cloudhub has demonstrated exceptional worth in preserving open communication among designers regarding their current endeavors, a challenge that previously impeded our progress. It continually stands as a distinctive platform guiding our dialogue towards imagination and consistent review, an element I highly value. Moreover, it has accelerated our propensity for early-stage feedback beyond my expectations.
                </p>
                <div className="w-[52px] h-[52px] bg-[#101828] rounded-lg mb-6"></div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <div className="text-base font-semibold text-[#171717]">Buzz Usborne</div>
                    <div className="text-sm text-[#737373]">Principal Designer, Buildkite</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Increase Visibility Section */}
        <section className="w-full py-20 px-20 bg-white border-t border-black/5">
          <div className="container mx-auto max-w-[1280px]">
            <div className="flex items-center gap-[77px]">
              {/* Left Content */}
              <div className="flex-1 max-w-[552px]">
                <div className="w-[94px] h-[93px] bg-gradient-to-br from-[#FB432C] to-[#FF591E] rounded-[24px] p-2 flex items-center justify-center mb-8">
                  <div className="w-[54px] h-[54px] bg-white rounded-full flex items-center justify-center">
                    <Image
                      src="/figma-assets/play-button.svg"
                      alt="Play"
                      width={49}
                      height={53}
                      className="ml-1"
                    />
                  </div>
                </div>
                <h2 className="text-[26px] font-bold leading-[40px] text-[#171717] mb-4">
                  Increase your team's visibility and alignment
                </h2>
                <p className="text-xl leading-[28px] text-[#525252] mb-10">
                  Start for free, flexible for all teams.
                </p>
                <div className="flex items-center gap-5">
                  <Link href="#" className="text-sm font-semibold text-[#282828] hover:text-black">
                    Request a demo
                  </Link>
                  <Button 
                    className="bg-gradient-to-br from-[#FB432C] to-[#FF591E] text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-[inset_0px_-1.5px_0px_0px_rgba(255,255,255,0.32),inset_0px_0.5px_0px_0px_rgba(255,255,255,0.32)] hover:opacity-90"
                  >
                    Start for free
                  </Button>
                </div>
              </div>
              {/* Right would have dashboard preview */}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 px-20 bg-gradient-to-br from-[#FB432C] to-[#FF591E]">
          <div className="container mx-auto max-w-[1280px]">
            <div className="flex flex-col items-center gap-3 max-w-[941px] mx-auto">
              <h2 className="text-[63px] font-semibold leading-[73px] tracking-[-2.5px] text-center text-white max-w-[779px]">
                Keep every one in the loop
              </h2>
              <p className="text-xl leading-[35px] text-center text-white max-w-[485px]">
                All good things starts with a homepage. Get inspired without breaking your wallet.
              </p>
              <Button 
                className="bg-white text-[#282828] rounded-full px-7 py-3 text-base font-semibold hover:opacity-90 mt-3"
              >
                Start for free
              </Button>
            </div>
            {/* Dashboard Preview Image */}
            <div className="mt-16 w-full max-w-[1014px] mx-auto h-[505px] bg-[#050505] rounded-t-2xl relative">
              {/* Browser chrome */}
              <div className="h-[30px] bg-[#202020] rounded-t-2xl flex items-center gap-2 px-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#F83523]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFC40C]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#16C933]"></div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-[284px] h-[18px] bg-[#171819] rounded flex items-center gap-2 px-3">
                    <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-[13px] text-white/50">Search</span>
                  </div>
                </div>
              </div>
              {/* Dashboard content area */}
              <div className="h-[475px] bg-[#171819] rounded-b-2xl p-8">
                {/* Sidebar */}
                <div className="w-[166px] h-full bg-[#202123] rounded-lg float-left mr-8">
                  {/* Sidebar content */}
                </div>
                {/* Main content area with cards */}
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex-1 h-[232px] bg-[#1E1E1E] rounded-xl p-4 border border-white/20">
                      {/* Card content */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-20 px-20 bg-white border-t border-black/5">
          <div className="container mx-auto max-w-[1280px]">
            <div className="flex items-start gap-[140px] mb-10">
              {/* Logo */}
              <div className="w-[47px] h-[48px] bg-gradient-to-br from-[#FB432C] to-[#FF591E] rounded-xl flex items-center justify-center">
                <Image
                  src="/figma-assets/cloudhub-logo.svg"
                  alt="Cloudhub"
                  width={27}
                  height={27}
                  className="w-auto h-auto"
                />
              </div>

              {/* Links */}
              <div className="flex gap-[80px]">
                <div className="flex flex-col gap-4 w-[134px]">
                  <div className="text-sm font-semibold text-[#282828]">Product</div>
                  <div className="flex flex-col gap-3">
                    <Link href="#" className="text-sm text-[#5F6980] hover:text-[#282828]">Features</Link>
                    <Link href="#" className="text-sm text-[#5F6980] hover:text-[#282828]">Pricing</Link>
                    <Link href="#" className="text-sm text-[#5F6980] hover:text-[#282828]">Changelog</Link>
                    <Link href="#" className="text-sm text-[#5F6980] hover:text-[#282828]">Support</Link>
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-[134px]">
                  <div className="text-sm font-semibold text-[#282828]">Legal</div>
                  <div className="flex flex-col gap-3">
                    <Link href="#" className="text-sm text-[#5F6980] hover:text-[#282828]">Terms of Privacy</Link>
                    <Link href="#" className="text-sm text-[#5F6980] hover:text-[#282828]">Privacy Policy</Link>
                    <Link href="#" className="text-sm text-[#5F6980] hover:text-[#282828]">Security</Link>
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-[134px]">
                  <div className="text-sm font-semibold text-[#282828]">Company</div>
                  <div className="flex flex-col gap-3">
                    <Link href="#" className="text-sm text-[#5F6980] hover:text-[#282828]">Blog</Link>
                    <Link href="#" className="text-sm text-[#5F6980] hover:text-[#282828]">Contact</Link>
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-[134px]">
                  <div className="text-sm font-semibold text-[#282828]">Social</div>
                  <div className="flex flex-col gap-3">
                    <Link href="#" className="text-sm text-[#5F6980] hover:text-[#282828]">Dribbble</Link>
                    <Link href="#" className="text-sm text-[#5F6980] hover:text-[#282828]">Behance</Link>
                    <Link href="#" className="text-sm text-[#5F6980] hover:text-[#282828]">Discord</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-6 border-t border-black/5">
              <p className="text-sm text-[#5F6980]">All rights reserved.© 2024 DejectStudio</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
