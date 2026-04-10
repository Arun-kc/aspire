
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import TrainerModal from "@/components/TrainerModal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Programs />
      <Gallery />
      <Testimonials />
      <TrainerModal />
    </main>
  );
}
