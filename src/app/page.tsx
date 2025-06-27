import { HeroSection, AdSlider, CertificateSlider, ProjectCard } from '@/components';

export default function Home() {

    return (
      <main className='bg-black'>
          <HeroSection/>
      
          <AdSlider/>
          
          <CertificateSlider/>

          <ProjectCard/>
      </main>
    );
}
