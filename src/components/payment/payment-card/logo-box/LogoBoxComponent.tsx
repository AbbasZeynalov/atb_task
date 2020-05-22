import React from "react";
import {Grid} from "@material-ui/core";
import MainLogo from '../../../../assets/img/logo.png'
import CallLogo from '../../../../assets/img/logo_call.png'
import LogoComponent from "./LogoComponent"
import {usePaymentCardLogoStyles} from "../../PaymentJss";

const LogoBoxComponent = () => {
    const classes = usePaymentCardLogoStyles();

    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            className={classes.root}
        >
            <Grid item>
               <LogoComponent
                   classes={classes.mainLogo}
                   logo={MainLogo}
               />
            </Grid>
            <Grid item>
                <LogoComponent
                    classes={classes.callLogo}
                    logo={CallLogo}
                />
            </Grid>
        </Grid>
    );
};

export default LogoBoxComponent;