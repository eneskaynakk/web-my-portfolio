import Link from 'next/link';
import Image from 'next/image';
export default function ResumePage() {
  return (
     <div className="relative min-h-screen bg-gray-900 text-gray-200 p-16 md:p-12 lg:p-18 font-sans">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 opacity-90"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-b-black/70 via-b-black/60 to-b-black/90 z-10"></div>
        <Image src="/images/mountain.jpg" alt= "Mountain Image" fill className='object-cover select-none' priority sizes='100vw'/>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl p-8 md:p-10 lg:p-12 mb-16">

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
          <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-700 border-4 border-t-gold flex items-center justify-center overflow-hidden">
            <Image src="/images/profileImage.jpg" alt='Profile Image' width={200} height={200} priority/>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-t-gold text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">ENES KAYNAK</h1>
            <h2 className="text-t-gold text-xl sm:text-2xl lg:text-3xl font-medium mb-6 opacity-90">SOFTWARE QUALITY ASSURANCE ENGINEER</h2>
            <h3 className="text-t-gold text-lg sm:text-xl font-semibold mb-3">SUMMARY</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I have two months of experience as a Software Testing Intern. During my internship, I did test automation
              with Java Selenium, API testing with Postman and manual testing. Through various courses and resources,
              I am constantly improving myself in this field so that software projects are error-free, quality and
              user-friendly. My goal is to ensure robust and reliable software solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-t-gold text-xl font-semibold mb-4 border-b border-t-gold pb-2">CONTACT</h3>
            <ul className="space-y-2 text-gray-300 text-base">
              <li><strong className="text-t-gold">Phone:</strong> +90 552 212 24 43</li>
              <li><strong className="text-t-gold">Email:</strong> kaynk.enes@gmail.com</li>
              <li><strong className="text-t-gold">Location:</strong> Istanbul, Türkiye</li>
              <li>
                <strong className="text-t-gold">LinkedIn:</strong>{' '}
                <Link href="https://linkedin.com/in/enes-kaynak" target="_blank" className="hover:text-t-gold underline transition duration-300">
                  linkedin.com/in/enes-kaynak
                </Link>
              </li>
              <li>
                <strong className="text-t-gold">GitHub:</strong>{' '}
                <Link href="https://github.com/eneskaynakk" target="_blank" className="hover:text-t-gold underline transition duration-300">
                  github.com/eneskaynak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-t-gold text-xl font-semibold mb-4 border-b border-t-gold pb-2">EDUCATION</h3>
            <div className="text-base">
              <p className="font-semibold">Istanbul Kultur University, Istanbul, Türkiye</p>
              <p className='text-gray-300'>Graduation Year: 2024</p>
              <p className='text-gray-300'>Associate Degree in Computer Programming</p>
              <p className='text-gray-300'>GPA: 3.73/4.0</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-t-gold text-xl font-semibold mb-4 border-b border-t-gold pb-2">CERTIFICATES</h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-300 text-base">
              <li><span className="text-t-gold"> Insider </span> - Quality Assurance Bootcamp 2024</li>
              <li><span className="text-t-gold"> Udemy </span> - Yazilim Test Uzmanligi Egitimi: Sifirdan Ileri Seviye</li>
              <li><span className="text-t-gold"> Techcareer.net </span> - Test QA LAB Bootcamp</li>
              <li><span className="text-t-gold">BTK Akademi </span> - API ve API Testi</li>
              <li><span className="text-t-gold"> Techcareer.net </span> - E2E Selenium Test Automation Workshop</li>
              <li><span className="text-t-gold"> Udemy </span> - Postman ile API (Arayuz) Testi ve Test Otomasyonu</li>
              <li><span className="text-t-gold"> Techcareer.net </span> - E2E API Automation & Load Test Workshop</li>
            </ul>
          </div>

          <div>
            <h3 className="text-t-gold text-xl font-semibold mb-4 border-b border-t-gold pb-2">SKILLS</h3>
            <ul className="space-y-2 text-gray-300 text-base">
              <li><span className="text-t-gold">Testing & Automation Tools:</span> Java, Selenium, Appium, TestNG, Cucumber</li>
              <li><span className="text-t-gold">Test Management & Reporting:</span> JIRA, Trello, TestRail</li>
              <li><span className="text-t-gold">Test Types:</span> Manual & Automation Test, Functional Tests (E2E, Smoke, Regression, UI), API, Load</li>
              <li><span className="text-t-gold">API & Database:</span> Postman, MSSQL, MySQL</li>
              <li><span className="text-t-gold">DevOps & CI/CD:</span> Git, GitHub, Jenkins</li>
              <li><span className="text-t-gold">Methodologies:</span> Agile, Scrum, Kanban, BDD, SDLC</li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-t-gold text-xl font-semibold mb-4 border-b border-t-gold pb-2">PROFESSIONAL EXPERIENCE</h3>
          <div className="text-gray-300 text-sm">
            <p className="font-bold text-base mb-2">Global Media - Software Testing Intern <span className="float-right text-base">(July 2024 - September 2024)</span></p>
            <ul className="list-disc ml-6 space-y-1 text-base">
              <li>I had the opportunity to increase my knowledge of Software Quality Assurance (SQA).</li>
              <li>I received detailed training on the basic principles and processes of SQA.</li>
              <li>I learned how we can maintain and improve the quality of software projects throughout their lifecycle.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-t-gold text-xl font-semibold mb-4 border-b border-t-gold pb-2">PROJECTS</h3>

          <div className="mb-6 text-gray-300 text-base">
            <p className="mt-4 font-bold">Amazon Test Automation</p>
            <p><span className="text-t-gold  font-medium"> Tested Features: </span> User login, Product search, filtering, adding to cart</p>
            <p><span className="text-t-gold font-medium"> Technologies Used: </span> Java, Selenium, Cucumber, TestNG, POM, Allure Report, Commons Email</p>
            <p><span className="text-t-gold font-medium"> Tests Performed: </span> End-to-End, Regression, UI</p>
          </div>

          <div className="mb-6 text-gray-300 text-base">
            <p className="font-bold">Trendyol Test Automation</p>
            <p><span className="text-t-gold font-medium"> Tested Features: </span> User login, product search, filtering, adding to cart</p>
            <p><span className="text-t-gold font-medium"> Technologies Used: </span> Java, Selenium, TestNG, POM, Jenkins, TestRail, Commons Email</p>
            <p><span className="text-t-gold font-medium">Tests Performed: </span> End-to-End, Smoke, Regression, UI</p>
          </div>

          <div className="mb-6 text-gray-300 text-base">
            <p className="font-bold">X Test Automation</p>
            <p><span className="text-t-gold font-medium"> Tested Features: </span> User login, messaging, profile search, profile page</p>
            <p><span className="text-t-gold font-medium"> Technologies Used:</span> Java, Playwright, Cucumber, Logger, Jira, Allure Report, Commons Email</p>
            <p><span className="text-t-gold font-medium">Tests Performed: </span> End-to-End, Smoke, Regression, UI</p>
          </div>
          
          <div className="mb-6 text-gray-300 text-base">
            <p className="font-bold">Instagram Mobile Test Automation (Android)</p>
            <p><span className="text-t-gold font-medium"> Tested Features: </span> User login, messaging, notes, profile search, profile page</p>
            <p><span className="text-t-gold font-medium"> Technologies Used:</span> Java, Appium, Cucumber, Logger, Jira, Allure Report, Commons Email</p>
            <p><span className="text-t-gold font-medium">Tests Performed: </span> End-to-End, Smoke, Regression, UI</p>
          </div>

          <div className="mb-6 text-gray-300 text-base">
            <p className="font-bold text-base">Personal Portfolio Website (Next.js)</p>
            <p>
              <span className="text-t-gold font-medium"> Description: </span> Designed and developed a sleek, responsive personal portfolio website to showcase my skills, projects, and professional experience.
            </p>
          </div>
          
          <div className="text-gray-300 text-base">
            <p className="font-bold text-base">Web Movie Site (Vue.js & Laravel)</p>
            <p>
              <span className="text-t-gold font-medium"> Description: </span> Developed a comprehensive movie website where users can register, log in, and explore detailed information about films and TV shows. Features include a personal watchlist and content discovery based on individual interests.
              
            </p>
          </div>
        </div>

      </div>
    </div>

                  
  )
}