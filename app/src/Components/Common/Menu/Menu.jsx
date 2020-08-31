import * as React from "react"
import { AppBar, Toolbar, Typography, IconButton, Button, Menu as MaterialMenu, MenuItem } from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory, Link } from "react-router-dom";
import { getFromLocaleStorage, removeFromLocaleStorage } from "../../../utils/localeStorage";
import { AUTH_KEY } from "../../../constants/auth";
import { SIGN_IN_BTN_TEST_ID, PROFILE_BTN_TEST_ID, LOG_OUT_BTN_TEST_ID } from "../../../constants/testId/Menu";
import { useStyles } from "./Menu.styles"

const ORIGIN = {
    vertical: 'top',
    horizontal: 'right',
};

export const Menu = (props) => {
    const classes = useStyles(props);
    const history = useHistory();
    const iconRef = React.useRef();
    const token = React.useMemo(() => getFromLocaleStorage(AUTH_KEY), []);
    const [isMenuOpen, changeMenuState] = React.useState(false);

    const handleOpenMenu = React.useCallback((event) => {
        changeMenuState(true);
    }, [changeMenuState]);
    const handleCloseMenu = React.useCallback((event) => {
        changeMenuState(false);
    }, [changeMenuState]);

    const handleProfile = React.useCallback((event) => {
        history.push("/profile");
    }, [history]);

    const handleLogout = React.useCallback((event) => {
        removeFromLocaleStorage(AUTH_KEY);
        history.push("/auth");
    }, [history]);

    const handleLogin = React.useCallback((event) => {
        history.push("/auth");
    }, [history]);



    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Link to="/home" className={classes.homeLink}>
                    <Typography variant="h6" >
                        Test cases
                    </Typography>
                </Link>
                {token ? (
                    <>
                        <IconButton
                            ref={iconRef}
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <MaterialMenu
                            id="menu-appbar"
                            anchorEl={iconRef.current}
                            anchorOrigin={ORIGIN}
                            keepMounted
                            transformOrigin={ORIGIN}
                            open={isMenuOpen}
                            onClose={handleCloseMenu}
                        >
                            <MenuItem testId={PROFILE_BTN_TEST_ID} onClick={handleProfile}>Profile</MenuItem>
                            <MenuItem testId={LOG_OUT_BTN_TEST_ID} onClick={handleLogout}>Logout</MenuItem>
                        </MaterialMenu>
                    </>
                ) : (
                        <Button testId={SIGN_IN_BTN_TEST_ID} color="inherit" onClick={handleLogin}>
                            Login
                        </Button>
                    )
                }

            </Toolbar>
        </AppBar>
    )
}