import React from "react";
import {Box} from "@material-ui/core";
import ReceiptHeaderComponent from "./ReceiptHeaderComponent";
import ReceiptDetailsBoxComponent from "./receipt-details/ReceiptDetailsBoxComponent";
import ReceiptAmountDetailComponent from "./receipt-details/ReceiptAmountDetailComponent";
import {usePaymentReceiptStyles} from "../../PaymentJss";

interface IReceiptProps {
    data: any;
};

const ReceiptComponent = (props: IReceiptProps) => {
    const classes = usePaymentReceiptStyles();
    const { data } = props;

    return (
        <Box className={classes.root}>
            <Box className={classes.receiptBox}>
                <ReceiptHeaderComponent />
                <ReceiptDetailsBoxComponent data={data} />
            </Box>
            <ReceiptAmountDetailComponent price={data.price} />
        </Box>
    );
};

export default ReceiptComponent;