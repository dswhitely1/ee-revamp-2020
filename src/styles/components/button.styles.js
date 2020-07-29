import { makeStyles } from '@material-ui/core';
import {
  behanceColor,
  blackColor,
  dangerColor,
  dribbbleColor,
  facebookColor,
  googleColor,
  grayColor,
  hexToRgb,
  infoColor,
  linkedinColor,
  pinterestColor,
  redditColor,
  successColor,
  tumblrColor,
  twitterColor,
  warningColor,
  whiteColor,
  youtubeColor,
} from 'styles/common';

function colorButton(color) {
  return {
    backgroundColor: color,
    boxShadow:
      '0 2px 2px 0 rgba(' +
      hexToRgb(color) +
      ', 0.14), 0 3px 1px -2px rgba(' +
      hexToRgb(color) +
      ', 0.2), 0 1px 5px 0 rgba(' +
      hexToRgb(color) +
      ', 0.12)',
    '&:hover,&:focus': {
      backgroundColor: color,
      boxShadow:
        '0 14px 26px -12px rgba(' +
        hexToRgb(color) +
        ', 0.42), 0 4px 23px 0px rgba(' +
        hexToRgb(blackColor) +
        ', 0.12), 0 8px 10px -5px rgba(' +
        hexToRgb(color) +
        ', 0.2)',
    },
  };
}

export const buttonStyles = makeStyles((theme) => ({
  root: {
    minHeight: 'auto',
    minWidth: 'auto',
    backgroundColor: grayColor[0],
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(
      grayColor[0]
    )}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      grayColor[0]
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(grayColor[0])}, 0.12)`,
    border: 'none',
    borderRadius: 3,
    position: 'relative',
    padding: '12px 30px',
    margin: '.3125rem 1px',
    fontSize: 12,
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: 0,
    willChange: 'box-shadow, transform',
    transition:
      'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    lineHeight: 1.42857143,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    '&:hover,&:focus': {
      color: whiteColor,
      backgroundColor: grayColor[0],
      boxShadow:
        '0 14px 26px -12px rgba(' +
        hexToRgb(grayColor[0]) +
        ', 0.42), 0 4px 23px 0px rgba(' +
        hexToRgb(blackColor) +
        ', 0.12), 0 8px 10px -5px rgba(' +
        hexToRgb(grayColor[0]) +
        ', 0.2)',
    },
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      position: 'relative',
      display: 'inline-block',
      top: 0,
      marginTop: '-1em',
      marginBottom: '-1em',
      fontSize: '1.1rem',
      marginRight: 4,
      verticalAlign: 'middle',
    },
    '& svg': {
      position: 'relative',
      display: 'inline-block',
      top: 0,
      width: 18,
      height: 18,
      marginRight: 4,
      verticalAlign: 'middle',
    },
    '&$justIcon': {
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        marginTop: 0,
        position: 'absolute',
        width: '100%',
        transform: 'none',
        left: 0,
        top: 0,
        height: '100%',
        lineHeight: '41px',
        fontSize: 20,
      },
    },
  },
  fullWidth: {
    width: '100%',
  },
  primary: colorButton(theme.palette.primary.main),
  secondary: colorButton(theme.palette.secondary.main),
  warning: colorButton(warningColor[0]),
  danger: colorButton(dangerColor[0]),
  info: colorButton(infoColor[0]),
  success: colorButton(successColor[0]),
  white: {
    '&,&:hover,&:focus': {
      color: grayColor[0],
      backgroundColor: whiteColor,
    },
  },
  twitter: colorButton(twitterColor),
  facebook: colorButton(facebookColor),
  youtube: colorButton(youtubeColor),
  google: colorButton(googleColor),
  linkedIn: colorButton(linkedinColor),
  pinterest: colorButton(pinterestColor),
  tumblr: colorButton(tumblrColor),
  github: {
    backgroundColor: grayColor[7],
    boxShadow:
      '0 2px 2px 0 rgba(' +
      hexToRgb(grayColor[6]) +
      ', 0.14), 0 3px 1px -2px rgba(' +
      hexToRgb(grayColor[6]) +
      ', 0.2), 0 1px 5px 0 rgba(' +
      hexToRgb(grayColor[6]) +
      ', 0.12)',
    '&:hover,&:focus': {
      backgroundColor: grayColor[7],
      boxShadow:
        '0 14px 26px -12px rgba(' +
        hexToRgb(grayColor[6]) +
        ', 0.42), 0 4px 23px 0px rgba(' +
        hexToRgb(blackColor) +
        ', 0.12), 0 8px 10px -5px rgba(' +
        hexToRgb(grayColor[6]) +
        ', 0.2)',
    },
  },
  behance: colorButton(behanceColor),
  dribbble: colorButton(dribbbleColor),
  reddit: colorButton(redditColor),
  simple: {
    '&,&:focus,&:hover': {
      color: whiteColor,
      background: 'transparent',
      boxShadow: 'none',
    },
    '&$primary': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.palette.primary.main,
      },
    },
    '&$info': {
      '&,&:focus,&:hover,&:visited': {
        color: infoColor[0],
      },
    },
    '&$success': {
      '&,&:focus,&:hover,&:visited': {
        color: successColor[0],
      },
    },
    '&$warning': {
      '&,&:focus,&:hover,&:visited': {
        color: warningColor[0],
      },
    },
    '&$secondary': {
      '&,&:focus,&:hover,&:visited': {
        color: theme.palette.secondary.main,
      },
    },
    '&$danger': {
      '&,&:focus,&:hover,&:visited': {
        color: dangerColor[0],
      },
    },
    '&$twitter': {
      '&,&:focus,&:hover,&:visited': {
        color: twitterColor,
      },
    },
    '&$facebook': {
      '&,&:focus,&:hover,&:visited': {
        color: facebookColor,
      },
    },
    '&$google': {
      '&,&:focus,&:hover,&:visited': {
        color: googleColor,
      },
    },
    '&$linkedIn': {
      '&,&:focus,&:hover,&:visited': {
        color: linkedinColor,
      },
    },
    '&$pinterest': {
      '&,&:focus,&:hover,&:visited': {
        color: pinterestColor,
      },
    },
    '&$youtube': {
      '&,&:focus,&:hover,&:visited': {
        color: youtubeColor,
      },
    },
    '&$tumblr': {
      '&,&:focus,&:hover,&:visited': {
        color: tumblrColor,
      },
    },
    '&$github': {
      '&,&:focus,&:hover,&:visited': {
        color: grayColor[7],
      },
    },
    '&$behance': {
      '&,&:focus,&:hover,&:visited': {
        color: behanceColor,
      },
    },
    '&$dribbble': {
      '&,&:focus,&:hover,&:visited': {
        color: dribbbleColor,
      },
    },
    '&$reddit': {
      '&,&:focus,&:hover,&:visited': {
        color: redditColor,
      },
    },
  },
  transparent: {
    '&,&:hover,&:focus': {
      color: 'inherit',
      background: 'transparent',
      boxShadow: 'none',
    },
  },
  disabled: {
    opacity: 0.65,
    pointerEvents: 'none',
  },
  lg: {
    '&$justIcon': {
      '& .fab,& .fas,& .far,& .fal,& svg,& .material-icons': {
        marginTop: -4,
      },
    },
    padding: '1.125rem 2.25rem',
    fontSize: '0.875rem',
    lineHeight: 1.333333,
    borderRadius: '0.2rem',
  },
  sm: {
    '&$justIcon': {
      '& .fab,& .fas,& .far,& .fal,& svg,& .material-icons': {
        marginTop: 1,
      },
    },
    padding: '0.40625rem 1.25rem',
    fontSize: '0.6875rem',
    lineHeight: 1.5,
    borderRadius: '0.2rem',
  },
  round: {
    borderRadius: 30,
  },
  block: {
    width: '100% !important',
  },
  link: {
    '&,&:hover,&:focus': {
      backgroundColor: 'transparent',
      color: grayColor[0],
      boxShadow: 'none',
    },
  },
  justIcon: {
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 20,
    height: 41,
    minWidth: 41,
    width: 41,
    '& .fab,& .fas,& .far,& .fal,& svg,& .material-icons': {
      marginRight: 0,
    },
    '&$lg': {
      height: 57,
      minWidth: 57,
      width: 57,
      lineHeight: '56px',
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        fontSize: 32,
        lineHeight: '56px',
      },
      '& svg': {
        width: 32,
        height: 32,
      },
    },
    '&$sm': {
      height: 30,
      minWidth: 30,
      width: 30,
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        fontSize: 17,
        lineHeight: '29px',
      },
      '& svg': {
        width: 17,
        height: 17,
      },
    },
  },
}));
