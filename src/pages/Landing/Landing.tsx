import { Hero } from "@/components/Hero/Hero";
import { Features } from "@/components";
import { Testimonios } from "@/components";
import { Fotter } from "@/components";
import { Nav } from "@/components";

function Landing() {
  return (
    <div className=" mb-40">
      <Nav/>
      <Hero></Hero>
      <Features />
      <Testimonios />
      <Fotter />
    </div>
  );
}
export default Landing;
