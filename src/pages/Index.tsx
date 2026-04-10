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
    <div className="min-h-screen overflow-x-hidden">
      <FloatingPetals />
      <MusicToggle />

      {/* Hero — cream background */}
      <div className="bg-background">
        <HeroSection />
      </div>

      {/* Torn edge: cream → card */}
      <OrnamentalDivider
        variant="torn-paper"
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--card))"
      />

      {/* Scratch Reveal — card background */}
      <div className="bg-card">
        <ScratchReveal />
      </div>

      {/* Flourish divider */}
      <div className="bg-card">
        <OrnamentalDivider variant="flourish" />
      </div>

      {/* Wave: card → background */}
      <OrnamentalDivider
        variant="wave-organic"
        fromColor="hsl(var(--card))"
        toColor="hsl(var(--background))"
      />

      {/* Countdown — cream background */}
      <div className="bg-background">
        <CountdownTimer />
      </div>

      {/* Torn paper: cream → card */}
      <OrnamentalDivider
        variant="torn-paper-reverse"
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--card))"
      />

      {/* Gallery — card background */}
      <div className="bg-card">
        <CoupleGallery />
      </div>

      {/* Torn paper: card → cream */}
      <OrnamentalDivider
        variant="torn-paper"
        fromColor="hsl(var(--card))"
        toColor="hsl(var(--background))"
      />

      {/* Venue — cream background */}
      <div className="bg-background">
        <VenueSection />
      </div>

      {/* Mandala divider */}
      <div className="bg-background">
        <OrnamentalDivider variant="mandala" />
      </div>

      {/* Wave: cream → card */}
      <OrnamentalDivider
        variant="wave-organic"
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--card))"
      />

      {/* Timeline — card background */}
      <div className="bg-card">
        <Timeline />
      </div>

      {/* Torn paper: card → cream */}
      <OrnamentalDivider
        variant="torn-paper-reverse"
        fromColor="hsl(var(--card))"
        toColor="hsl(var(--background))"
      />

      {/* RSVP — cream background */}
      <div className="bg-background">
        <RSVPSection />
        <OrnamentalDivider variant="floral-border" />
        <AddToCalendar />
      </div>

      {/* Vine garland transition */}
      <div className="bg-background">
        <OrnamentalDivider variant="vine-garland" />
      </div>

      {/* Wave: cream → card */}
      <OrnamentalDivider
        variant="wave-organic"
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--card))"
      />

      {/* Thank You — card background */}
      <div className="bg-card">
        <ThankYouSection />
      </div>

      {/* Footer garland */}
      <div className="bg-card">
        <OrnamentalDivider variant="footer-garland" />
      </div>

      {/* Torn paper: card → cream */}
      <OrnamentalDivider
        variant="torn-paper"
        fromColor="hsl(var(--card))"
        toColor="hsl(var(--background))"
      />

      {/* Contact/Footer — cream background */}
      <div className="bg-background">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
