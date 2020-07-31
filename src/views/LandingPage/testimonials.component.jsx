import React from 'react';
import Section from 'components/Section/section.component';
import Container from 'components/Container/container.component';
import GridContainer from 'components/Grid/gridContainer.component';
import GridItem from 'components/Grid/gridItem.component';
import Typography from 'components/Typography/typography.component';
import Card from 'components/Cards/Card/card.component';
import CardBody from 'components/Cards/CardBody/cardBody.component';

const testimonials = [
  {
    id: 0,
    author: 'Arlene W.',
    content: `They were very efficient, prompt and courteous. They even did a
        little bit extra that they really did not have to do. They were
        quick. I have used them twice now`,
  },
  {
    id: 1,
    content: `They do very good electrical work. They are friendly,
        conscientious about their work, arrive on time, charge fair
        prices and make good recommendations about our electrical
        service. I liked their personal touch, and helpful, attentive
        interest. I have used them twice and would use them again`,
    author: 'John Robertson',
  },
];

function Testimonials() {
  return (
    <Section id="testimonials">
      <Container description>
        <Typography variant="h4" content="Testimonials" color="primary" />
        <Typography
          variant="h2"
          content="Hear From Our Customers"
          color="primary"
        />
        <GridContainer>
          {testimonials.map(({ author, content, id }) => (
            <GridItem xs={12} sm={6} key={id}>
              <Card>
                <CardBody>
                  <Typography content={content} />
                  <cite>{author}</cite>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </Container>
    </Section>
  );
}

export default Testimonials;
