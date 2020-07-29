import { makeStyles } from '@material-ui/core';
import header from 'assets/header.jpg';

export const sectionStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(16,0)
    },
    inverted: {
        backgroundColor: '#351a1a',
        color: theme.palette.secondary,
    },
    header: {
        minHeight: theme.spacing(60),
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        [theme.breakpoints.up('md')]: {
            height: '100vh'
        },
        [theme.breakpoints.down('sm')]: {
            background: `linear-gradient(90deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 100%), url(${header})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
    }
}))