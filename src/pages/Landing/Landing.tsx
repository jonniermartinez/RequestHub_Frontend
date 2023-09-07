import { Nav } from "@/components";
import { Hero } from "@/components/Hero/Hero";
import { Features } from "@/components";
import { Testimonios } from "@/components";

function Landing() {
  return (
    <div className="mb-80">
      <Nav></Nav>
      <Hero></Hero>
      <Features />
      <Testimonios />
    </div>
  );
}
export default Landing;
