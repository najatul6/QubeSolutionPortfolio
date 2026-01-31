import ContactCTA from "@/components/Home/ContactCTA";
import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Home/Portfolio";
import Services from "@/components/Home/Services";
import Stats from "@/components/Home/Stats";
import Testimonial from "@/components/Home/Testimonial";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <main className="bg-primary overflow-hidden">
      <Helmet>
        <title>Home | QubeSolutionLab - Global Digital Agency</title>
        <meta name="description" content="Leading global agency for Web Development, App Solutions, and Digital Marketing." />
        <meta property="og:title" content="QubeSolutionLab | Scaling Brands Globally" />
      </Helmet>
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonial />
      <ContactCTA />
    </main>
  );
};

export default Home;