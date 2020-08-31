import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(
  (theme) => ({
        homeLink: {
            color: theme.palette.common.white,
            textDecoration: "none",
        },
        toolbar: {
            justifyContent: "space-between",
        },
  }),
  { name: 'Menu' },
);
