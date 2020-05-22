import React from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import {useReceiptAmountDetailStyles} from "../../../PaymentJss";

interface IAmountDetailProps {
    price: string;
}

const ReceiptAmountDetailComponent = (props: IAmountDetailProps) => {
    const classes = useReceiptAmountDetailStyles();
    const { price } = props;

    return (
        <Box className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    className={classes.detailBox}
                >
                    <Grid item>
                        <Typography className={classes.detailTitle}>
                            Məbləğ
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.detailValue}>
                            { price } Azn
                        </Typography>
                    </Grid>
                </Grid>
            <Box className={classes.triangle}></Box>
        </Box>
    );
};

export default ReceiptAmountDetailComponent;