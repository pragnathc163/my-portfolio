import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Pragnath Chintalapati - Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="skills" heading="Languages and Frameworks" />
        <ProjectsSection sectionId="projects" heading="My Favorite Projects" />
        <ContactSection sectionId="contact" heading="Let's Make An Impact." />
      </Page>
    </>
  );
}

