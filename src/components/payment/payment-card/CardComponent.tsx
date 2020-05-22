import React, {useEffect, useState} from 'react';
import {Card, Box} from "@material-ui/core";
import LogoBoxComponent from "./logo-box/LogoBoxComponent";
import CardTitleComponent from "./CardTitleComponent";
import ReceiptComponent from "./receipt-box/ReceiptComponent";
import PaymentTypesComponent from "./payment-types/PaymentTypesComponent";
import jsonData from '../../../data/data.json';
import CardButtonComponent from "./CardButtonComponent";
import CardFooterComponent from "./CardFooterComponent";
import {usePaymentCardStyles} from "../PaymentJss";

const CardComponent = () => {
    const [data, setData] = useState({
                                name: '',
                                phoneNumber: '',
                                paidTo: '',
                                appointment: '',
                                price: '',
                                url: '',
                            });
    const classes = usePaymentCardStyles();

    useEffect(() => {
        setData(jsonData);
    }, []);

    return (
        <Card className={classes.card}>
            <Box className={classes.cardBox}>
                <LogoBoxComponent/>
                <CardTitleComponent/>
                <ReceiptComponent data={data}/>
                <PaymentTypesComponent/>
                <CardButtonComponent url={data.url}/>
                <CardFooterComponent />
            </Box>
        </Card>
    );
};

export default CardComponent;