import HeroSection from '../components/home/HeroSection';
import PracticeAreasSection from '../components/home/PracticeAreasSection';
import PrincipalSection from '../components/home/PrincipalSection';
import WhySection from '../components/home/WhySection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PracticeAreasSection />
      <PrincipalSection />
      <WhySection />
      <CTASection />
    </div>
  );
}