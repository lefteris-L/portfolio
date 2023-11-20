import { ArrowDiagonal, ArrowRight } from "public/arrow";
import Skill from "./Skill";

const Experience = () => (
  <section
    id="experience"
    className="section mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Work experience"
  >
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Experience
      </h2>
    </div>
    <div>
      <ol className="group/list">
        <li className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <header
              className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label="Mar 2023 to Present"
            >
              Mar — Present
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://aylo.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Software Developer at Aylo"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Software Developer ·{" "}
                      <span className="inline-block">
                        Aylo <ArrowDiagonal className='ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none' />
                      </span>
                    </span>
                  </a>
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Deliver high-quality, robust production code for one of the
                company&apos;s most visited sites Mydirtyhobby.com. Migrate
                legacy code to newer ES versions, provide solutions for bugs as
                well as implementation of new features.
              </p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                <Skill>React</Skill>
                <Skill>Material UI</Skill>
                <Skill>JavaScript</Skill>
                <Skill>PHP</Skill>
                <Skill>Webpack</Skill>
                <Skill>Node</Skill>
                <Skill>Socket.io</Skill>
                <Skill>Redux</Skill>
                <Skill>GitLab</Skill>
                <Skill>Jira</Skill>
              </ul>
            </div>
          </div>
        </li>
        <li className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label="October 2022 to March"
            >
              Oct 2022 — Mar
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://mate.academy/en-eu/learn?course=fullstack-en"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Full-Stack Web Developer at Mate Academy (Bootcamp)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Full-Stack Web Developer ·{" "}
                      <span className="inline-block">
                        Mate Academy <ArrowDiagonal className='ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none' />
                      </span>
                    </span>
                  </a>
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Studied everything from JavaScript/TypeScript fundamentals to
                state management with Redux and back-end applications with Node.
                Implemented HTML/SCSS markup and full-stack applications with
                React/Node/PostgreSQL.
              </p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                <Skill>React</Skill>
                <Skill>Redux</Skill>
                <Skill>JavaScript</Skill>
                <Skill>TypeScript</Skill>
                <Skill>HTML</Skill>
                <Skill>CSS/SCSS</Skill>
                <Skill>Node</Skill>
                <Skill>PostgreSQL</Skill>
                <Skill>GitHub</Skill>
              </ul>
            </div>
          </div>
        </li>
      </ol>
      <div className="mt-12">
        <a
          className="group inline-flex items-center font-semibold leading-tight text-slate-200"
          aria-label="View Full Résumé"
          href="/resume.pdf"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full{" "}
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                Résumé
              </span>
              <ArrowRight
                className="arrowRight"
              />
            </span>
          </span>
        </a>
      </div>
    </div>
  </section>
);
export default Experience;
