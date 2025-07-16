import { HeroSection, AdSlider, CertificateSlider, ProjectSlider, ContactCard } from '@/components';

export default function Home() {

    return (
      <main>
          <HeroSection/>
      
          <AdSlider>
            <CertificateSlider/>
          </AdSlider>

          <ProjectSlider/>
          
          <ContactCard/>
      </main>
    );
}
