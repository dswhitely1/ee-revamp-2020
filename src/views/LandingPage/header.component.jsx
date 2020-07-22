import React from 'react';
import Section from 'components/Section/section.component';
import Container from 'components/Container/container.component';
import Button from 'components/CustomButtons/button.component';
import Typography from 'components/Typography/typography.component';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <Section header>
      <Container>
        <Typography
          variant="h1"
          color="primary"
          content="Emergency Electric Inc"
        />
        <Typography
          variant="h4"
          color="primary"
          content="24 Hour Service | Licensed and Insured | Residential and Commercial"
        />
        <Button color="primary" round component={RouterLink} to="/now-hiring">
          Apply Now
        </Button>
      </Container>
    </Section>
  );
}

export default Header;
