import React from 'react';
import {Grid, Box} from "@material-ui/core";
import VisaImage from '../../../../assets/img/visa.png'
import {usePaymentTypesLogoStyles} from "../../PaymentJss";

const PaymentTypesLogoComponent = () => {
    const classes = usePaymentTypesLogoStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={2}
            className={classes.box}
        >
            <Grid item>
                <Box className={classes.logoBox}>
                    <img src={VisaImage} />
                </Box>
            </Grid>
            <Grid item>
                <Box className={classes.logoBox}>
                    <img src={VisaImage} />
                </Box>
            </Grid>
            <Grid item>
                <Box className={classes.logoBox}>
                    <img src={VisaImage} />
                </Box>
            </Grid>
            <Grid item>
                <Box className={classes.logoBox}>
                    <img src={VisaImage} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default PaymentTypesLogoComponent;