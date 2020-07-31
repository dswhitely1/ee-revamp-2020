import React from 'react';
import Section from 'components/Section/section.component';
import Container from 'components/Container/container.component';
import Typography from 'components/Typography/typography.component';
import ButtonContainer from 'components/ButtonContainer/buttonContainer.component';
import LandingPageButton from 'views/LandingPage/landingPageButton';

function Goals() {
  return (
    <Section id="goals">
      <Container inverted description>
        <Typography variant="h2" content="Our Goals" color="secondary" />
        <Typography content="We are committed to excellence.  Our goal is to exceed your expectations.  Using our years of experience and expertise and by providing a dynamic and skilled team, we will ensure your projects are a complete success.  Our primary measure of success is customer satisfaction.  We define customers as employees, partners and clients.  Our intent is to earn and maintain the respect and trust of everyone we come in contact with when representing Emergency Electric Inc." />
        <ButtonContainer>
          <LandingPageButton
            content="Contact Us"
            color="secondary"
            round
            link="contact"
          />
          <LandingPageButton simple scrollButton size="lg" color="secondary" />
        </ButtonContainer>
      </Container>
    </Section>
  );
}

export default Goals;
