import React from 'react';
import Section from 'components/Section/section.component';
import Container from 'components/Container/container.component';
import Typography from 'components/Typography/typography.component';

function Services() {
  return (
    <Section id="services">
      <Container inverted description>
        <Typography variant="h4" content="Services" />
        <Typography variant="h2" content="We Specialize In" />
      </Container>
    </Section>
  );
}

export default Services;
