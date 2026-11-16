import EditorialHero from "@/components/home/EditorialHero";
import PillarsSection from "@/components/home/PillarsSection";
import DLGTSPhilosophy from "@/components/home/DLGTSPhilosophy";
import FeaturedOpportunities from "@/components/home/FeaturedOpportunities";
import FeaturedEditorial from "@/components/home/FeaturedEditorial";
import CommunityCTA from "@/components/home/CommunityCTA";

export default function HomePage() {
  return (
    <div className="w-full">
      <EditorialHero />
      <PillarsSection />
      <DLGTSPhilosophy />
      <FeaturedOpportunities />
      <FeaturedEditorial />
      <CommunityCTA />
    </div>
  );
}
