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
        I build SaaS and digital experiences for the web.
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
    </a>
    </li>
    </ul>
  </header>
)
export default Header