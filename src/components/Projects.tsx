import Project from './Project';

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
        <Project
          href='https://t.me/tmpGmailBot'
          name='Temp Gmail Telegram Bot'
          description='Telegram bot that lets the user generate temporary gmails (backend) to use in order to avoid spam, with a separate inbox webpage (frontend).'
          skills={['Node.js', 'React', 'Webpack', 'Tailwind CSS', 'MongoDB', 'Stripe', 'SendGrid', 'Telegram Bot API']}
          src='/bot.png'
        />
        <Project
          href='https://logos.lefterisloizides.com'
          name='AI Logo Generator App'
          description='Web app that lets the user generate highly customized logos
          using the DALL-E API.'
          skills={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Styled Components', 'PostgreSQL', 'Prisma ORM', 'Stripe', 'AWS S3', 'GCP (Google Cloud Platform)', 'OpenAI API', 'Vercel']}
          src='/logos.png'
        />
        <Project
          href='https://chat-gpt-api-l2r6.onrender.com/'
          name='AI Article Summarizer'
          description='Web app for summarizing articles retrieved from URLs into
          comprehensive 2-3 paragraph text using the power of language
          models.'
          skills={['React', 'OpenAI API', 'Tailwind CSS']}
          src='/sumz.png'
        />
        <Project
          href='https://lefteris-l.github.io/layout_miami/'
          name='MyBike landing page markup'
          description='A landing page for MyBike built with HTML and SCSS.'
          skills={['Responsive Web Design', 'BEM', 'HTML', 'SCSS']}
          src='/mybike.png'
        />
      </ul>
    </div>
  </section>
);
export default Projects;
