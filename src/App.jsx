import { useEffect, useRef, useState } from "react";
const skills = [
    {
        name: "HTML5",
        description:
            "Semantic markup, accessibility, SEO structure, and clean document flow.",
    },
    {
        name: "CSS3",
        description:
            "Flexbox, CSS Grid, media queries, responsive design, and modern animations.",
    },
    {
        name: "Git & GitHub",
        description:
            "Version control, branch management, pull requests, and code hosting.",
    },
    {
        name: "Vercel",
        description:
            "Continuous deployment, fast edge hosting, and live previews.",
    },
];

const projects = [
    {
        name: "Responsive Landing Page",
        description:
            "A clean marketing page built with CSS Grid and Flexbox, fully responsive across mobile and desktop.",
    },
    {
        name: "CSS-Only Gallery & UI",
        description:
            "An interactive card showcase and layout design using pure HTML5 and CSS3 styles.",
    },
];

const navigationLinks = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
];

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        if (!isMenuOpen) {
            return undefined;
        }

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isMenuOpen]);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <>
            <header className="navbar">
                <div className="container nav-container">
                    <a href="#" className="logo" onClick={closeMenu}>
                        Dev<span>Portfolio</span>
                    </a>
                    <button
                        ref={menuButtonRef}
                        className="nav-toggle"
                        type="button"
                        aria-label={
                            isMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="site-navigation"
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                    <nav
                        className={`nav-links${isMenuOpen ? " is-open" : ""}`}
                        id="site-navigation"
                    >
                        {navigationLinks.map(([label, href]) => (
                            <a href={href} key={href} onClick={closeMenu}>
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            <main>
                <section className="hero">
                    <div className="container hero-content">
                        <div className="hero-text">
                            <h1>
                                Hi, I'm{" "}
                                <span className="highlight">
                                    KIRABO VIVIAN FAVOUR
                                </span>
                            </h1>
                            <p className="tagline">
                                Frontend Developer crafting clean, responsive
                                web experiences with HTML, CSS, Git, and
                                Vercel.
                            </p>
                            <div className="hero-buttons">
                                <a
                                    href="#projects"
                                    className="btn primary-btn"
                                >
                                    View Projects
                                </a>
                                <a
                                    href="#contact"
                                    className="btn secondary-btn"
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </div>

                        <img
                            className="profile-photo"
                            src="/images/IMG-20260409-WA0112.jpg"
                            alt="KIRABO VIVIAN FAVOUR"
                            width="260"
                            height="260"
                        />
                    </div>
                </section>

                <section id="about" className="section about-section">
                    <div className="container">
                        <h2>Who I Am</h2>
                        <div className="about-card">
                            <p>
                                I am a passionate web developer focused on
                                writing semantic HTML5 and modern CSS3. I build
                                responsive, lightweight, single-page websites
                                without heavy dependencies, version-control my
                                work using <strong>Git &amp; GitHub</strong>,
                                and deploy seamlessly via <strong>Vercel</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="skills" className="section skills-section">
                    <div className="container">
                        <h2>My Tech Stack</h2>
                        <div className="skills-grid">
                            {skills.map((skill) => (
                                <article className="skill-card" key={skill.name}>
                                    <h3>{skill.name}</h3>
                                    <p>{skill.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="projects" className="section projects-section">
                    <div className="container">
                        <h2>Featured Projects</h2>
                        <div className="projects-grid">
                            {projects.map((project) => (
                                <article className="project-card" key={project.name}>
                                    <div className="project-info">
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                        <div className="project-links">
                                            <a
                                                href="https://github.com"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="link-btn"
                                            >
                                                GitHub Code
                                            </a>
                                            <a
                                                href="https://vercel.app"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="link-btn primary-link"
                                            >
                                                Live on Vercel
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="section contact-section">
                    <div className="container">
                        <h2>Let's Connect</h2>
                        <p>
                            Interested in working together or checking out more
                            of my code?
                        </p>
                        <div className="contact-links">
                            <a
                                href="mailto:your.email@example.com"
                                className="btn primary-btn"
                            >
                                Email Me
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="btn secondary-btn"
                            >
                                GitHub Profile
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="container">
                    <p>
                        &copy; 2026 KIRABO VIVIAN FAVOUR. Built with React,
                        CSS, and deployed on Vercel.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default App;
