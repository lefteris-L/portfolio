import { useEffect, useState } from "react";
import Link from "next/link";
import socialLogos from "public/socialLogos";

const Header = () => {
  const [visible, setVisible] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          ({ intersectionRect: { bottom, top }, target: { id } }) => {
            switch (id) {
              case "about":
                setVisible(bottom > 70 ? id : "experience");
                break;
              case "projects":
                if (top === 0) break;
                if (top < window.innerHeight * 0.7) setVisible("experience");
                if (top < window.innerHeight * 0.4) setVisible(id);
                break;
              default:
                break;
            }
          },
        );
      },
      {
        threshold: Array(10)
          .fill(1)
          .map((n: number, i) => (n + i) / 10),
      },
    );

    document.querySelectorAll("section").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const e = document.querySelector(`[href="#${visible}"]`);
    const addClass = (el = e) => el?.classList.add("visible");
    const removeClass = (el = e) => el?.classList.remove("visible");

    document
      .querySelectorAll("a")
      .forEach((el) => visible !== el.id && removeClass(el));
    addClass();
  }, [visible]);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">Lefteris Loizides</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Software Developer at Aylo
          <br />
          (ISC)2 Member
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build digital experiences for the web and aspire to be an ethical
          hacker.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3" href="#about">
                <span className="navLine" />
                <span className="navText">About</span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#experience">
                <span className="navLine" />
                <span className="navText">Experience</span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects">
                <span className="navLine" />
                <span className="navText">Projects</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://github.com/lefteris-l"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-6 w-6"
            >
              {socialLogos.gh}
            </svg>
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://instagram.com/lefteris.lz"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Instagram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 1000 1000"
              className="h-6 w-6"
            >
              {socialLogos.ig}
            </svg>
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://www.linkedin.com/in/lefterisl/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              {socialLogos.in}
            </svg>
          </a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
