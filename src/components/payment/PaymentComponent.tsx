import React from 'react';
import {Box} from '@material-ui/core';
import CardComponent from "./payment-card/CardComponent";
import {usePaymentStyles} from "./PaymentJss";

const PaymentComponent = () => {
    const classes = usePaymentStyles();

    return (
        <Box mx='auto' className={classes.root}>
            <Box className={classes.cardBox}>
                <CardComponent />
            </Box>
        </Box>
    );
};

export default PaymentComponent;