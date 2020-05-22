import React from "react";
import {Grid, Typography, Divider} from "@material-ui/core";
import {useReceiptDetailsStyles} from "../../../PaymentJss";

interface IReceiptDetailProps {
    title: string;
    value: string;
    index?: number;
}

const ReceiptDetailComponent = (props: IReceiptDetailProps) => {
    const classes = useReceiptDetailsStyles();
    const {title, value, index} = props;

    return (
        <>
            { index === 2 && <Divider /> }
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                className={classes.detailBox}
            >
                <Grid item>
                    <Typography className={classes.detailTitle}>
                        {title}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.detailValue}>
                        {value}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default ReceiptDetailComponent;