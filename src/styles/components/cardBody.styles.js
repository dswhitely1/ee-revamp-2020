import { makeStyles } from '@material-ui/core/styles';
import { hexToRgb } from 'styles/common';
import { whiteColor } from 'styles/common';

export const cardBodyStyles = makeStyles(() => ({
  cardBody: {
    padding: '0.9375rem 20px',
    flex: '1 1 auto',
    WebkitBoxFlex: 1,
    position: 'relative',
  },
  cardBodyBackground: {
    position: 'relative',
    zIndex: 2,
    minHeight: 280,
    paddingTop: 40,
    paddingBottom: 40,
    maxWidth: 440,
    margin: '0 auto',
  },
  cardBodyPlain: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  cardBodyFormHorizontal: {
    paddingLeft: 15,
    paddingRight: 15,
    '& form': {
      margin: 0,
    },
  },
  cardPricing: {
    padding: '15px !important',
    margin: '0 !important',
  },
  cardSignUp: {
    padding: '0 30px',
  },
  cardBodyColor: {
    borderRadius: 6,
    '& h1,& h2,& h3': {
      '& small': {
        color: `rgba(${hexToRgb(whiteColor)}, 0.8)`,
      },
    },
  },
  cardBodyProfile: {
    marginTop: 15,
  },
  cardBodyCalendar: {
    padding: '0 !important',
  },
}));
