import React from "react";
import {Grid, Box, Typography} from "@material-ui/core";
import ReceiptIcon from '../../../../assets/img/receipt.png'
import {usePaymentReceiptHeaderStyles} from "../../PaymentJss";

const ReceiptHeaderComponent = () => {
    const classes = usePaymentReceiptHeaderStyles();

    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
        >
            <Grid item>
                <Box className={classes.iconBox}>
                    <img src={ReceiptIcon}/>
                </Box>
            </Grid>
            <Grid item>
                <Typography className={classes.title}>
                    Qaimə
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ReceiptHeaderComponent;