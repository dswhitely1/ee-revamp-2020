import React from 'react';
import Section from 'components/Section/section.component';
import Container from 'components/Container/container.component';
import Typography from 'components/Typography/typography.component';
import GridContainer from 'components/Grid/gridContainer.component';
import GridItem from 'components/Grid/gridItem.component';
import ButtonContainer from 'components/ButtonContainer/buttonContainer.component';
import LandingPageButton from './landingPageButton';
import Residential from 'assets/residential.jpg';
import Commercial from 'assets/commercial.jpg';
import Image from 'components/Image/image.component';

function Services() {
  return (
    <Section id="services">
      <Container inverted description>
        <Typography variant="h4" content="Services" />
        <Typography variant="h2" content="We Specialize In" />
        <GridContainer>
          <GridItem xs={12} sm={6}>
            <Image src={Residential} alt="Residential" />
            <Typography variant="h4" content="Residential" />
            <Typography content="Emergency Electric, Inc can assist with any type of residential renovation, whether you are building an extension to your home or installing recessed lights in your condo." />
          </GridItem>
          <GridItem xs={12} sm={6}>
            <Image src={Commercial} alt="Commercial" />
            <Typography variant="h4" content="Commercial" />
            <Typography content="Emergency Electric, Inc offers a variety of commercial services, by our commercial electrical contractors." />
          </GridItem>
        </GridContainer>
        <ButtonContainer>
          <LandingPageButton
            color="secondary"
            round
            content="What Others Say"
            link="testimonials"
          />
          <LandingPageButton scrollButton color="secondary" round />
        </ButtonContainer>
      </Container>
    </Section>
  );
}

export default Services;
