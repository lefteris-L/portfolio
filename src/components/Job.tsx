import { ArrowDiagonal } from 'public/arrow'
import Skill from './Skill'

type Props = {
  period: string
  href: string
  title: string
  company: string
  description: string
  skills: string[]
}

const Job = (props: Props) => {
  const { period, href, title, company, description, skills } = props

  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label="Mar 2023 to Present"
        >
          {period}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <a
                className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} at ${company}`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {title} ·{" "}
                  <span className="inline-block">
                    {company} <ArrowDiagonal className='ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none' />
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal">
            {description}
          </p>
          <ul
            className="mt-2 flex flex-wrap"
            aria-label="Technologies used"
          >
            {skills.map(skill => <Skill key={skill}>{skill}</Skill>)}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default Job