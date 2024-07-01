import CustomLink from './CustomLink';

const About = () => (
  <section
    id="about"
    className="section mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="About me"
  >
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        About
      </h2>
    </div>
    <div>
      <p className="mb-4">
        Back in 2022, I decided to try my hand at creating custom MQL5
        trading algorithms and tumbled head first into the rabbit hole
        of coding and web development. Fast-forward to today, and
        I&apos;ve had the privilege of building software for a{" "}
        <CustomLink href="http://aylo.com">
          huge corporation
        </CustomLink>
        .
      </p>
      <p className="mb-4">
        My main focus these days is working
        on projects at{" "}
        <CustomLink href="http://aylo.com">Aylo</CustomLink> and studying to become a bug bounty hunter. I also work on projects for friends and family on occasion and build automation tools and scripts for anything that can be automated, using Bash.
      </p>
      <p>
        When I&apos;m not coding, I&apos;m usually cooking up something delish, spending time with family and friends, perfecting my techniques in MMA, or cruising down
        the street in my Golf Mk4.
      </p>
    </div>
  </section>
)
export default About