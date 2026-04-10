import HeroSection from "@/components/wedding/HeroSection";
import ScratchReveal from "@/components/wedding/ScratchReveal";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import CoupleGallery from "@/components/wedding/CoupleGallery";
import VenueSection from "@/components/wedding/VenueSection";
import Timeline from "@/components/wedding/Timeline";
import RSVPSection from "@/components/wedding/RSVPSection";
import AddToCalendar from "@/components/wedding/AddToCalendar";
import ThankYouSection from "@/components/wedding/ThankYouSection";
import ContactSection from "@/components/wedding/ContactSection";
import OrnamentalDivider from "@/components/wedding/OrnamentalDivider";
import FloatingPetals from "@/components/wedding/FloatingPetals";
import MusicToggle from "@/components/wedding/MusicToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingPetals />
      <MusicToggle />

      <HeroSection />
      <OrnamentalDivider variant="torn-top" />

      <ScratchReveal />
      <OrnamentalDivider variant="floral" />

      <CountdownTimer />
      <OrnamentalDivider variant="torn-top" />

      <CoupleGallery />
      <OrnamentalDivider variant="torn-bottom" />

      <VenueSection />
      <OrnamentalDivider variant="garland" />

      <Timeline />
      <OrnamentalDivider variant="torn-top" />

      <RSVPSection />
      <AddToCalendar />
      <OrnamentalDivider variant="garland" />

      <ThankYouSection />
      <OrnamentalDivider variant="floral" />
      <ContactSection />
    </div>
  );
};

export default Index;
