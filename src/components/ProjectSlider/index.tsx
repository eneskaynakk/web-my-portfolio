
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string;
  testsPerformed?: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 'amazon-test-automation',
    title: 'Amazon Test Automation',
    description: 'Developed automated tests for Amazon, covering product search, filtering, and adding items to the cart. This project ensures robust functionality and a seamless user experience.',
    technologies: 'Java, Selenium, Cucumber, TestNG, POM, Allure Report, Commons Email',
    testsPerformed: 'End-to-End, Regression, UI',
    imageUrl: '/images/projectImage.jpg',
    link: 'https://github.com/eneskaynakk/amazon-test-automation',
  },
  {
    id: 'trendyol-test-automation',
    title: 'Trendyol Test Automation',
    description: 'Implemented comprehensive test automation for Trendyol, including user login, product search, filtering, and cart management. Focused on delivering high-quality, reliable software.',
    technologies: 'Java, Selenium, TestNG, POM, Jenkins, TestRail, Commons Email',
    testsPerformed: 'End-to-End, Smoke, Regression, UI',
    imageUrl: '/images/projectImage.jpg',
    link: 'https://github.com/eneskaynakk/trendyol-test-automation',
  },
  {
    id: 'instagram-mobile-test-automation',
    title: 'Instagram Mobile Test Automation',
    description: 'Designed and executed mobile test automation for Instagram features like user login, messaging, notes, profile search, and profile page interactions. Ensures smooth mobile application performance.',
    technologies: 'Java, Appium, Cucumber, Logger, Jira, Allure Report, Commons Email',
    testsPerformed: 'End-to-End, Smoke, Regression, UI',
    imageUrl: '/images/projectImage.jpg',
    link: 'https://github.com/eneskaynakk/instagram-appium-automation-test-android',
  },
  {
    id: 'x-test-automation',
    title: 'X Test Automation',
    description: 'Created automated tests for the X platform, covering user login, messaging, profile search, and profile page functionalities. Focused on robust and reliable testing.',
    technologies: 'Java, Playwright, Cucumber, Logger, Jira, Allure Report, Commons Email',
    testsPerformed: 'End-to-End, Smoke, Regression, UI',
    imageUrl: '/images/projectImage.jpg',
    link: 'https://github.com/eneskaynakk/x-playwright-test-automation',
  },
  {
    id: 'web-movie-site',
    title: 'Web Movie Site',
    description: 'Developed a feature-rich movie website where users can register, log in, explore detailed information about films and TV shows, create a personalized watchlist, and discover content based on their interests. Built with modern web technologies for a seamless user experience.',
    technologies: 'Vue.js, Laravel, MySQL',
    imageUrl: '/images/projectImage.jpg',
    link: 'https://github.com/eneskaynakk/web-movie',
  },
  {
    id: 'web-my-portfolio',
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a sleek, responsive personal portfolio website to showcase my skills, projects, and professional experience. Features a clean UI and intuitive navigation to highlight my work effectively.',
    technologies: 'Next.js',
    imageUrl: '/images/projectImage.jpg',
    link: 'https://github.com/eneskaynakk/web-my-portfolio',
  },
];

const ProjectSlider: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 ">

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-b-black/70 via-b-black/60 to-b-black/90 z-10"></div>
        <Image src="/images/mountain.jpg" alt= "Mountain Image" fill className='object-cover select-none' priority sizes='100vw'/>
      </div>

      <div className="relative z-20 container mx-auto px-4 mt-10 lg:px-6 lg:px-8 lg:mt-48">
        <h1 className="project text-4xl lg:text-5xl lg:text-6xl font-extrabold text-t-white text-center mb-10 lg:mb-20 tracking-tight leading-tight">
          My <span className=" text-t-gold">Projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-b-light-black/50 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden ">
              <div className="relative w-full h-48 lg:h-56">

                <Image src={project.imageUrl} alt={project.title} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>

                <div className="absolute inset-0 h-99 bg-b-light-black/50 backdrop-blur-xl flex items-center justify-center p-4 opacity-0 group-focus:opacity-100 group-hover:opacity-100 transition-opacity duration-200 ease-in-out text-center">
                  <div className="text-white">
                    <h3 className="font-bold text-t-gold text-xl mb-2">{project.title}</h3>
                    <p className="text-sm leading-relaxed mb-4 line-clamp-4">
                      {project.description}
                    </p>
                    <Link href={project.link} className="inline-flex items-center text-t-white hover:text-t-gold font-semibold transition-colors duration-200">
                      View Project

                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-7">
                <h2 className="font-bold text-xl lg:text-2xl text-t-gold mb-3 leading-snug">
                  {project.title}
                </h2>

                <div className="mt-4 text-t-white text-sm">
                  <p className="mb-1">
                    <b className="font-semibold text-t-gold">Technologies:</b> {project.technologies}
                  </p>
                  {project.testsPerformed && (
                    <p>
                      <b className="projectDetail font-semibold text-t-gold">Tests Performed:</b> {project.testsPerformed}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;