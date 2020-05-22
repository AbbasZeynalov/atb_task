import React from "react";
import {Box} from "@material-ui/core";
import ReceiptDetailComponent from "./ReceiptDetailComponent";
import {useReceiptDetailsStyles} from "../../../PaymentJss";

const receiptDetailsArr = [
    {
        title: 'Ödəyən',
        key: 'name'
    },
    {
        title: 'Mobil nömrə',
        key: 'phoneNumber'
    },
    {
        title: 'Kimə ödənilir',
        key: 'paidTo'
    },
    {
        title: 'Təyinat',
        key: 'appointment'
    },
];

interface IReceiptDetailProps {
    data: any
};

const ReceiptDetailsBoxComponent = (props: IReceiptDetailProps) => {
    const classes = useReceiptDetailsStyles();
    const { data } = props;

    return (
        <Box className={classes.root}>
            {receiptDetailsArr.map((detail, index: number) => (
                <ReceiptDetailComponent
                    index={index}
                    key={detail.key}
                    title={detail.title}
                    value={data[detail.key]}
                />
            ))}
        </Box>
    );
};

export default ReceiptDetailsBoxComponent;