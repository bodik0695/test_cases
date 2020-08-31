import * as React from "react";
import { Grid, Paper, TextField, Typography, Button } from "@material-ui/core"
import { AUTH_KEY } from "../../constants/auth";
import { LOGIN_BTN_TEST_ID, LOGIN_FIELD_TEST_ID, PSW_FIELD_TEST_ID } from "../../constants/testId/AuthPage";
import { getFromLocaleStorage, setToLocaleStorage } from "../../utils/localeStorage";
import { useStyles } from "./AuthPage.styles"

const TOKEN = 'DSFSDF7SD6F876DSF7DSF6DS86F6DS8F6';

export const AuthPage = (props) => {
    const classes = useStyles(props);
    const [login, changeLogin] = React.useState("");
    const [password, changePassword] = React.useState("");
    const [isLoginError, changeLoginError] = React.useState(false);
    const [isPasswordError, changePasswordError] = React.useState(false);


    const handleClick = React.useCallback(() => {
        if (login === "test123" && password === "test123") {
            props.history.push('/home');
            setToLocaleStorage(AUTH_KEY, TOKEN)
        }

        if (login !== "test123") {
            changeLoginError(true);
        } else {
            changeLoginError(false);
        }

        if (password !== "test123") {
            changePasswordError(true);
        } else {
            changePasswordError(false);
        }

    }, [login, password, props.history]);

    const handleChangeLogin = React.useCallback((event) => {
        changeLogin(event.target.value);
    }, [])

    const handleChangePassword = React.useCallback((event) => {
        changePassword(event.target.value);
    }, [])

    React.useEffect(() => {
        const token = getFromLocaleStorage(AUTH_KEY);

        if (token) {
            props.history.push('/home');
        }
    }, [props.history])

    return (
        <Grid container alignItems="center" justify="center" style={{ height: "100vh" }}>
            <Grid item>
                <form>
                    <Paper className={classes.paper}>
                        <Grid
                            className={classes.grid}
                            container
                            alignItems="center"
                            justify="center"
                            direction="column"
                            spacing={2}
                        >
                            <Grid item>
                                <Typography variant="h5">Login form</Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    testId={LOGIN_FIELD_TEST_ID}
                                    label="Login"
                                    variant="outlined"
                                    helperText={isLoginError && "Incorrect login"}
                                    error={isLoginError}
                                    onChange={handleChangeLogin}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    testId={PSW_FIELD_TEST_ID}
                                    type="password"
                                    label="Password"
                                    variant="outlined"
                                    helperText={isPasswordError && "Incorrect password"}
                                    error={isPasswordError}
                                    onChange={handleChangePassword} />
                            </Grid>
                            <Grid item>
                                <Button testId={LOGIN_BTN_TEST_ID} variant="outlined" color="primary" size="large" onClick={handleClick}>
                                    Ok
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </form>
            </Grid>
        </Grid>
    );
}