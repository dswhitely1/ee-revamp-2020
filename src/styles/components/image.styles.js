import { makeStyles } from '@material-ui/core';
import { whiteColor } from 'styles/common';

export const imageStyles = makeStyles((theme) => ({
  image: {
    padding: theme.spacing(0.5),
    backgroundColor: whiteColor,
    border: '1px solid #dee236',
    borderRadius: 16,
    maxWidth: '100%',
    height: 'auto',
    verticalAlign: 'middle',
    margin: theme.spacing(2, 0),
  },
}));
