import React from "react";
import {Box} from '@material-ui/core';
import PaymentTypesTitleComponent from "./PaymentTypesTitleComponent";
import PaymentTypesLogoComponent from "./PaymentTypesLogoComponent";
import {usePaymentTypesStyles} from "../../PaymentJss";

const PaymentTypesComponent = () => {
    const classes = usePaymentTypesStyles();

    return (
        <Box className={classes.root}>
            <PaymentTypesTitleComponent />
            <PaymentTypesLogoComponent />
        </Box>
    );
};

export default PaymentTypesComponent;