import React from "react";
import {Box, Typography} from "@material-ui/core";
import {usePaymentTypesStyles} from "../../PaymentJss";

const PaymentTypesTitleComponent = () => {
    const classes = usePaymentTypesStyles();

    return (
        <Box className={classes.titleBox}>
            <Typography className={classes.title}>
                ÖDƏNİŞ NÖVLƏRİ
            </Typography>
        </Box>
    );
};

export default PaymentTypesTitleComponent;