import React from "react";
import {Box, Divider, Typography} from "@material-ui/core";
import {usePaymentCardFooterStyles} from "../PaymentJss";

const CardFooterComponent = () => {
    const classes = usePaymentCardFooterStyles();

    return (
        <Box className={classes.box}>
            <Divider className={classes.divider} />
            <Typography className={classes.text}>
                © 2020 | Azər Türk Bank tərəfindən təmin edilən 3D-Secure ödəmə xidmətləri
            </Typography>
        </Box>
    );
};

export default CardFooterComponent;