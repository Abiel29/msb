import HeroSection from '@/components/home/hero-section';
import KeySellingPoints from '@/components/home/key-selling-points';
import ServicesPreview from '@/components/home/services-preview';
import ProcessRoadmap from '@/components/home/process-roadmap';

import MainLayout from '@/components/layout/main-layout';
import PageWrapper from '@/components/ui/page-wrapper';
import FloatingActionButton from '@/components/ui/floating-action-button';

export default function Home() {
  return (
    <MainLayout>
      <PageWrapper>
        <div className="min-h-screen">
          <HeroSection />
          <KeySellingPoints />
          <ServicesPreview />
          <ProcessRoadmap />
        </div>
      </PageWrapper>
    </MainLayout>
  );
}
