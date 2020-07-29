import React from 'react';
import Section from 'components/Section/section.component';
import Container from 'components/Container/container.component';
import Typography from 'components/Typography/typography.component';
import ButtonContainer from 'components/ButtonContainer/buttonContainer.component';
import LandingPageButton from './landingPageButton';

function About() {
  return (
    <Section id="about">
      <Container description>
        <Typography variant="h2" content="Why Choose Us" color="primary" />
        <Typography
          header
          content="With many years of experience in the electrical industry, we take
                    pride in our professionalism, punctuality, and customer service."
        />
        <Typography
          content="Our primary measure of success is customer satisfaction. We define customers
                    as employees, partners and clients. Our intent is to earn and maintain the respect and trust of
                    everyone we come in contact with when representing Emergency Electric, Inc."
        />
        <Typography
          content="We believe in a personal touch to making ourselves known in the market.
                    Referral and repeat business is important to us. We want every customer to be 100% satisfied with
                    our service and work. We are confident that we meet this goal and that is why we offer a 100%
                    customer satisfaction guarantee."
        />
        <ButtonContainer>
          <LandingPageButton
            content="What We Offer"
            link="services"
            round
            color="primary"
          />
          <LandingPageButton scrollButton round color="primary" />
        </ButtonContainer>
      </Container>
    </Section>
  );
}

export default About;
