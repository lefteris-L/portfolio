import Link from 'next/link';
import { Gh } from 'public/github';
import { Ig } from 'public/instagram';
import { Li } from 'public/linkedin';

const Header = () => (
  <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-200">
        <Link href='/'>Lefteris Loizides</Link>
      </h1>
      <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
        Software Developer at Aylo
      </h2>
      <p className="mt-4 max-w-xs leading-normal">
        I builds SaaS and digital experiences for the web.
      </p>
      <nav className="nav hidden lg:block" aria-label="In-page jump links">
        <ul className="mt-16 w-max">
          <li>
            <a className="group flex items-center py-3 active" href="#about">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                About
              </span>
            </a>
          </li>
          <li>
            <a className="group flex items-center py-3" href="#experience">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Experience
              </span>
            </a>
          </li>
          <li>
            <a className="group flex items-center py-3" href="#projects">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Projects
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
    <li className="mr-5 text-xs">
      <a className="block hover:text-slate-200" href="https://github.com/lefteris-l" target="_blank" rel="noreferrer">
        <span className="sr-only">GitHub</span>
          <Gh />
      </a>
    </li>
    <li className="mr-5 text-xs">
      <a className="block hover:text-slate-200" href="https://instagram.com/lefteris.lz" target="_blank" rel="noreferrer">
        <span className="sr-only">Instagram</span>
      <Ig />
    </a>
    </li>
    <li className="mr-5 text-xs">
    <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/lefterisl/" target="_blank" rel="noreferrer">
      <span className="sr-only">LinkedIn</span>
        <Li />
    </a>
    </li>
    </ul>
  </header>
)
export default Header