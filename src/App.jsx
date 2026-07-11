import './App.css'

// ---------------------------------------------------------------------------
// TODO(kaleab): Replace every string below with real OroAcademy copy.
// This is placeholder text -- it is deliberately generic, not invented detail.
// Everything the page renders comes from this one object, so the JSX below
// should not need to change when you write the real words.
// ---------------------------------------------------------------------------
const content = {
  brand: 'OroAcademy',
  nav: [
    { label: 'Courses', href: '#courses' },
    { label: 'Why us', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Afaan Oromo, taught properly',
    // TODO: your real headline.
    title: 'Learn Afaan Oromo with confidence',
    // TODO: one or two sentences on who this is for.
    body: 'Structured lessons in reading, writing, and speaking Afaan Oromo — built for beginners and for heritage speakers reconnecting with the language.',
    primaryCta: { label: 'Start learning', href: '#courses' },
    secondaryCta: { label: 'See the courses', href: '#courses' },
  },
  // TODO: replace with your actual levels/courses, or delete ones you do not offer.
  courses: [
    {
      level: 'Level 1',
      title: 'Foundations',
      body: 'The alphabet (qubee), pronunciation, greetings, and the sentence patterns you use every day.',
    },
    {
      level: 'Level 2',
      title: 'Conversation',
      body: 'Hold a real conversation: verbs, tenses, questions, and the vocabulary of daily life.',
    },
    {
      level: 'Level 3',
      title: 'Fluency & Culture',
      body: 'Read, write, and discuss longer texts. Idiom, proverbs, and the culture behind the language.',
    },
  ],
  // TODO: replace with what actually makes OroAcademy different.
  why: [
    {
      title: 'Taught by native speakers',
      body: 'Every lesson is written and reviewed by fluent Afaan Oromo speakers.',
    },
    {
      title: 'Learn at your own pace',
      body: 'Short lessons you can fit around work or school. Nothing expires.',
    },
    {
      title: 'Speak from day one',
      body: 'Practice out loud in the first lesson, not the tenth.',
    },
  ],
  cta: {
    title: 'Ready to start?',
    body: 'Join the next intake and take your first lesson this week.',
    button: { label: 'Enroll now', href: '#contact' },
  },
  footer: {
    // TODO: real links.
    links: [
      { label: 'GitHub', href: 'https://github.com/Kal-eab/oroacademy' },
    ],
  },
}

function BookIcon() {
  return (
    <svg
      className="feature-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="presentation"
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function App() {
  return (
    <>
      <header id="nav">
        <a className="brand" href="#top">
          {content.brand}
        </a>
        <nav>
          <ul>
            {content.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="hero">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h1>{content.hero.title}</h1>
        <p className="lede">{content.hero.body}</p>
        <div className="cta-row">
          <a className="btn btn-primary" href={content.hero.primaryCta.href}>
            {content.hero.primaryCta.label}
          </a>
          <a className="btn btn-ghost" href={content.hero.secondaryCta.href}>
            {content.hero.secondaryCta.label}
          </a>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="courses">
        <h2 className="section-title">Courses</h2>
        <ul className="card-grid">
          {content.courses.map((course) => (
            <li className="card" key={course.title}>
              <span className="level">{course.level}</span>
              <h3>{course.title}</h3>
              <p>{course.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="ticks"></div>

      <section id="why">
        <h2 className="section-title">Why OroAcademy</h2>
        <ul className="feature-grid">
          {content.why.map((feature) => (
            <li key={feature.title}>
              <BookIcon />
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="ticks"></div>

      <section id="contact">
        <h2>{content.cta.title}</h2>
        <p>{content.cta.body}</p>
        <a className="btn btn-primary" href={content.cta.button.href}>
          {content.cta.button.label}
        </a>
      </section>

      <footer>
        <p>
          © {new Date().getFullYear()} {content.brand}
        </p>
        <ul>
          {content.footer.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  )
}

export default App
