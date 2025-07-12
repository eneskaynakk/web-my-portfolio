import { HeroSection, AdSlider, CertificateSlider, ProjectSlider } from '@/components';

export default function Home() {

    return (
      <main>
          <HeroSection/>
      
          <AdSlider>
            <CertificateSlider/>
          </AdSlider>

          <ProjectSlider/>
      </main>
    );
}
