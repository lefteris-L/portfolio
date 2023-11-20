import Image from "next/image";
import { ArrowDiagonal } from "public/arrow";
import Skill from "./Skill";
import Link from "next/link";

const Projects = () => (
  <section
    id="projects"
    className="section mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Selected projects"
  >
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Projects
      </h2>
    </div>
    <div>
      <ul className="group/list">
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <Link
                  className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://t.me/tmpGmailBot"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Temp Gmail Telegram Bot"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                  <span className="inline-block">
                    Temp Gmail Telegram{" "}
                    <span>
                      Bot{" "}
                      <ArrowDiagonal />
                    </span>
                  </span>
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Telegram bot that lets the user generate temporary gmails (backend) to use in order to avoid spam, with a separate inbox webpage (frontend).
              </p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used:"
              >
                <Skill>Node.js</Skill>
                <Skill>React</Skill>
                <Skill>Webpack</Skill>
                <Skill>Tailwind CSS</Skill>
                <Skill>MongoDB</Skill>
                <Skill>Stripe</Skill>
                <Skill>SendGrid</Skill>
                <Skill>Telegram Bot API</Skill>
              </ul>
            </div>
            <Link
              href="https://t.me/tmpGmailBot"
              target="_blank"
              rel="noreferrer"
              aria-label="Temp Gmail Telegram Bot"
            >
              <Image
                alt=""
                loading="lazy"
                width="200"
                height="48"
                decoding="async"
                data-nimg="1"
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                style={{ color: "transparent" }}
                src="/bot.png"
              />
            </Link>
          </div>
        </li>
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <Link
                  className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://logos.lefterisloizides.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="AI Logo Generator"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                  <span className="inline-block">
                    AI Logo Generator{" "}
                    <span>
                      App <ArrowDiagonal />
                    </span>
                  </span>
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Web app that lets the user generate highly customized logos
                using the DALL-E API.
              </p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used:"
              >
                <Skill>Next.js</Skill>
                <Skill>React</Skill>
                <Skill>TypeScript</Skill>
                <Skill>Tailwind CSS</Skill>
                <Skill>Styled Components</Skill>
                <Skill>PostgreSQL</Skill>
                <Skill>Prisma ORM</Skill>
                <Skill>Stripe</Skill>
                <Skill>AWS S3</Skill>
                <Skill>GCP (Google Cloud Platform)</Skill>
                <Skill>OpenAI API</Skill>
                <Skill>Vercel</Skill>
              </ul>
            </div>
            <Link
              href="https://logos.lefterisloizides.com"
              target="_blank"
              rel="noreferrer"
              aria-label="AI Logo Generator"
            >
              <Image
                alt=""
                loading="lazy"
                width="200"
                height="48"
                decoding="async"
                data-nimg="1"
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                style={{ color: "transparent" }}
                src="/logos.png"
              />
            </Link>
          </div>
        </li>
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <Link
                  className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://chat-gpt-api-l2r6.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="AI Article Summarizer"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                  <span className="inline-block">
                    AI Article{" "}
                    <span>
                      Summarizer <ArrowDiagonal />
                    </span>
                  </span>
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Web app for summarizing articles retrieved from URLs into
                comprehensive 2-3 paragraph text using the power of language
                models.
              </p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used:"
              >
                <Skill>React</Skill>
                <Skill>OpenAI API</Skill>
                <Skill>Rapid API</Skill>
                <Skill>Tailwind CSS</Skill>
              </ul>
            </div>
            <Link
              href="https://chat-gpt-api-l2r6.onrender.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="AI Article Summarizer"
            >
              <Image
                alt=""
                loading="lazy"
                width="200"
                height="48"
                decoding="async"
                data-nimg="1"
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                style={{ color: "transparent" }}
                src="/sumz.png"
              />
            </Link>
          </div>
        </li>
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <Link
                  className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://lefteris-l.github.io/layout_miami/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="MyBike landing page markup"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                  <span className="inline-block">
                    MyBike Landing Page{" "}
                    <span>
                      Markup <ArrowDiagonal />
                    </span>
                  </span>
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                A landing page for MyBike built with HTML and SCSS.
              </p>

              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used:"
              >
                <Skill>Responsive Web Design</Skill>
                <Skill>BEM</Skill>
                <Skill>HTML</Skill>
                <Skill>SCSS</Skill>
              </ul>
            </div>
            <Link
              href="https://lefteris-l.github.io/layout_miami/"
              target="_blank"
              rel="noreferrer"
              aria-label="MyBike landing page markup"
            >
              <Image
                alt=""
                loading="lazy"
                width="200"
                height="48"
                decoding="async"
                data-nimg="1"
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                style={{ color: "transparent" }}
                src="/mybike.png"
              />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  </section>
);
export default Projects;
