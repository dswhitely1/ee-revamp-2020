import { makeStyles } from '@material-ui/core/styles';
import { grayColor } from 'styles/common';

export const cardFooterStyle = makeStyles(() => ({
  cardFooter: {
    padding: 0,
    paddingTop: 10,
    margin: '0 15px 10px',
    borderRadius: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'transparent',
    border: 0,
  },
  cardFooterProfile: {
    marginTop: -15,
  },
  cardFooterPlain: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'transparent',
  },
  cardFooterPricing: {
    zIndex: 2,
  },
  cardFooterTestimonial: {
    display: 'block',
  },
  cardFooterStats: {
    borderTop: `1px solid ${grayColor[8]}`,
    marginTop: 20,
    '& svg': {
      position: 'relative',
      top: 4,
      marginRight: 3,
      marginLeft: 3,
      width: 16,
      height: 16,
    },
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      position: 'relative',
      top: 4,
      marginLeft: 3,
      marginRight: 3,
      fontSize: 16,
      lineHeight: '16px',
    },
  },
  cardFooterChart: {
    borderTop: `1px solid ${grayColor[8]}`,
  },
}));
