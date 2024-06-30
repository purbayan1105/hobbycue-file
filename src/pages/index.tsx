import AboveFooter from "@/components/AboveFooter";
import Copyrights from "@/components/Copyrights";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Testimonial from "@/components/Testimonial";

const index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section2 />
      <Section3 />
      <Testimonial />
      <AboveFooter />
      <Footer />
      <Copyrights />
    </div>
  );
};

export default index;
