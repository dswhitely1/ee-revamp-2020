import { makeStyles } from '@material-ui/core';

export const typographyStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(3)
    },
    header: {
        fontWeight: "bolder"
    },
    spacing: {
        margin: theme.spacing(0),
        paddingTop: theme.spacing(4)
    },
    noMargin: {
        margin: theme.spacing(0)
    },
    title: {
        textTransform: 'uppercase',
        margin: theme.spacing(2,0)
    }
}))