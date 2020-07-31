import { makeStyles } from '@material-ui/core/styles';
import { hexToRgb } from 'styles/common';
import { blackColor } from 'styles/common';
import { whiteColor } from 'styles/common';
import { grayColor, primaryColor } from 'styles/common';
import { infoColor } from 'styles/common';
import { successColor } from 'styles/common';
import { warningColor, dangerColor, secondaryColor } from 'styles/common';

const cardColor = (color) => ({
  background: `linear-gradient(60deg, ${color[1]}, ${color[4]})`,
  '& h1 small': {
    color: whiteColor,
    borderColor: `rgba(${hexToRgb(whiteColor)}, 0.3)`,
    '& b,& svg,& .fab,& .fas,& .far,& .material-icons': {
      color: whiteColor,
      fontWeight: 700,
    },
  },
});

export const cardStyles = makeStyles(() => ({
  card: {
    border: 0,
    marginBottom: 30,
    marginTop: 30,
    borderRadius: 6,
    color: `rgba(${hexToRgb(blackColor)}, 0.87)`,
    background: whiteColor,
    width: '100%',
    boxShadow: `0 1px 4px 0 rgba(${hexToRgb(blackColor)}, 0.14)`,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    wordWrap: 'break-word',
    fontSize: '.875rem',
  },
  cardPlain: {
    background: 'transparent',
    boxShadow: 'none',
  },
  cardProfile: {
    marginTop: 30,
    textAlign: 'center',
  },
  cardBlog: {
    marginTop: 60,
  },
  cardRaised: {
    boxShadow: `0 16px 38px -12px rgba(${hexToRgb(
      blackColor
    )}, 0.56), 0 4px 25px 0 rgba(${hexToRgb(
      blackColor
    )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(blackColor)}, 0.2)`,
  },
  cardBackground: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    textAlign: 'center',
    '&:after': {
      position: 'absolute',
      zIndex: 1,
      width: '100%',
      height: '100%',
      display: 'block',
      left: 0,
      top: 0,
      content: '""',
      backgroundColor: `rgba(${hexToRgb(blackColor)}, 0.56)`,
      borderRadius: 6,
    },
    '& small': {
      color: `rgba(${hexToRgb(whiteColor)}, 0.7) !important`,
    },
  },
  cardPricing: {
    textAlign: 'center',
    '&:after': {
      backgroundColor: `rgba(${hexToRgb(blackColor)}, 0.7) !important`,
    },
    '& ul': {
      listStyle: 'none',
      padding: 0,
      maxWidth: 240,
      margin: '10px auto',
      '& li': {
        color: grayColor[0],
        textAlign: 'center',
        padding: '12px 0',
        borderBottom: `1px solid rgba(${hexToRgb(grayColor[0])}, 0.3)`,
        '&:last-child': {
          border: 0,
        },
        '& b': {
          color: grayColor[2],
        },
        '& svg,& .fab,& .fas,& .far,& .fal,& .material-icons': {
          position: 'relative',
          top: 7,
        },
      },
    },
    '& h1': {
      marginTop: 30,
      '& small': {
        display: 'inline-flex',
        height: 0,
        fontSize: 18,
        '&:first-child': {
          position: 'relative',
          top: -17,
          fontSize: 26,
        },
      },
    },
  },
  cardPricingColor: {
    '& ul li': {
      color: whiteColor,
      borderColor: `rgba(${hexToRgb(whiteColor)}, 0.3)`,
      '& b,& svg,& .fab,& .fas,& .far,& .material-icons': {
        color: whiteColor,
        fontWeight: 700,
      },
    },
  },
  primary: cardColor(primaryColor),
  secondary: cardColor(secondaryColor),
  info: cardColor(infoColor),
  success: cardColor(successColor),
  warning: cardColor(warningColor),
  danger: cardColor(dangerColor),
  cardChart: {
    '& p': {
      marginTop: 0,
      paddingTop: 0,
    },
  },
  cardLogin: {
    transform: `translate3d(${hexToRgb(blackColor)})`,
    transition: 'all 300ms linear',
  },
}));
