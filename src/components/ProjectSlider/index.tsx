
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  testedFeatures?: string;
  technologies: string;
  testsPerformed?: string;
  description?: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 'amazon-test-automation',
    title: 'Amazon Test Automation',
    testedFeatures: 'Product search, filtering, adding to cart',
    technologies: 'Java, Selenium, Cucumber, TestNG, POM, Allure Report, Commons Email',
    testsPerformed: 'End-to-End, Regression, UI',
    imageUrl: '/images/projectImage.jpg',
    link: 'https://github.com/eneskaynakk/amazon-test-automation',
  },
  {
    id: 'trendyol-test-automation',
    title: 'Trendyol Test Automation',
    testedFeatures: 'User login, product search, filtering, adding to cart',
    technologies: 'Java, Selenium, TestNG, POM, Jenkins, TestRail, Commons Email',
    testsPerformed: 'End-to-End, Smoke, Regression, UI',
    imageUrl: '/images/projectImage.jpg',
    link: 'https://github.com/eneskaynakk/trendyol-test-automation',
  },
  {
    id: 'instagram-mobile-test-automation',
    title: 'Instagram Mobile Test Automation',
    testedFeatures: 'User login, messaging, notes, profile search, profile page',
    technologies: 'Java, Appium, Cucumber, Logger, Jira, Allure Report, Commons Email',
    testsPerformed: 'End-to-End, Smoke, Regression, UI',
    imageUrl: '/images/projectImage.jpg',
    link: 'https://github.com/eneskaynakk/instagram-appium-automation-test-android',
  },
  {
    id: 'x-test-automation',
    title: 'X Test Automation',
    testedFeatures: 'User login, messaging, profile search, profile page',
    technologies: 'Java, Playwright, Cucumber, Logger, Jira, Allure Report, Commons Email',
    testsPerformed: 'End-to-End, Smoke, Regression, UI',
    imageUrl: '/images/projectImage.jpg',
    link: 'https://github.com/eneskaynakk/x-playwright-test-automation',
  },
  {
    id: 'web-movie-site',
    title: 'Web Movie Site',
    description: 'I developed a movie website where users can register, log in, and explore detailed information about films and TV shows. They can create a watchlist and discover content based on their interests.',
    technologies: 'Vue.js, Laravel, MySQL',
    imageUrl: '/images/projectImage.jpg',
    link: 'https://github.com/eneskaynakk/web-movie',
  },
  {
    id: 'web-my-portfolio',
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a sleek, responsive personal portfolio website to showcase my skills, projects, and professional experience.',
    technologies: 'Next.js',
    imageUrl: '/images/projectImage.jpg',
    link: 'https://github.com/eneskaynakk/web-my-portfolio',
  },
];

const ProjectSlider: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen ">

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-b-black/70 via-b-black/60 to-b-black/90 z-10"></div>
        <Image src="/images/seaImage.png" alt= "Sea Image" fill className='object-cover select-none' priority sizes='100vw'/>
      </div>

      <div className="relative z-20 container mx-auto px-4 mt-10 lg:px-0 lg:mt-24">
        <div className="flex items-center justify-center gap-2">

          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-fork-icon lucide-git-fork w-6 h-6 lg:w-10 lg:h-10">
            <circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/>
            <circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/>
            <path d="M12 12v3"/>
          </svg>

          <h1 className="text-2xl lg:text-4xl font-extrabold text-t-white text-center tracking-tight leading-tight">
            My <span className=" text-t-gold">Projects</span>
          </h1>
        </div>
        <div className="mx-auto border-b-4 sm:border-b-8 border-t-gold w-45 lg:w-68 mb-10 lg:mb-16 mt-1"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-b-light-black/50 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden ">
              <div className="relative w-full h-48 lg:h-56">

                <Image src={project.imageUrl} alt={project.title} fill className="project object-cover object-center group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority/>
              </div>

              <div className="p-6 lg:p-7">
                <h2 className="font-bold text-xl lg:text-2xl text-t-gold mb-3 leading-snug">
                  {project.title}
                </h2>

                <div className="mt-4 text-t-white text-base">

                  {project.testedFeatures && (
                  <p className="mb-1">
                    <b className="projectDetail font-semibold text-t-gold">Tested Features:</b> {project.testedFeatures}
                  </p>
                  )}
                  
                  <p className="mb-1">
                    <b className="font-semibold text-t-gold">Technologies Used:</b> {project.technologies}
                  </p>
                  
                  {project.description && (
                  <p>
                    <b className="font-semibold text-t-gold">Description:</b> {project.description}
                  </p>
                  )}

                  {project.testsPerformed && (
                    <p>
                      <b className="font-semibold text-t-gold">Tests Performed:</b> {project.testsPerformed}
                    </p>
                  )}
                  <div className='flex'>
                    <Link href={project.link} className="inline-flex ml-auto mt-6 items-center text-t-white hover:text-t-gold active:text-t-gold font-semibold transition-colors duration-200">
                        View Project

                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </Link>
                  </div>

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