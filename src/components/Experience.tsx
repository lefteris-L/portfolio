import { ArrowRight } from "public/arrow";
import Job from './Job';

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
        <Job
          company='Aylo'
          description='Deliver high-quality, robust production code for one of the
          company&apos;s most visited sites Mydirtyhobby.com. Migrate
          legacy code to newer ES versions, provide solutions for bugs as
          well as implementation of new features.'
          href='https://aylo.com'
          period='Mar 2023 — Present'
          skills={['React', 'Material UI', 'JavaScript', 'PHP', 'Webpack', 'Node.js', 'Socket.io', 'Redux', 'GitLab', 'Jira']}
          title='Software Developer'
        />
        <Job
          company='Mate Academy'
          description='Studied everything from JavaScript/TypeScript fundamentals to
          state management with Redux and back-end applications with Node.
          Implemented HTML/SCSS markup and full-stack applications with
          React/Node/PostgreSQL.'
          href='https://mate.academy/en-eu/learn?course=fullstack-en'
          period='Oct 2022 — Mar'
          skills={['React', 'JavaScript', 'Node.js', 'Redux', 'TypeScript', 'HTML', 'CSS/SCSS', 'GitHub', 'PostgreSQL']}
          title='Full-Stack Web Developer'
        />
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
