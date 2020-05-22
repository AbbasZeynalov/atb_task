import React from "react";
import {Box, Typography} from "@material-ui/core";
import {usePaymentCardTitleStyles} from "../PaymentJss";

 const CardTitleComponent = () => {
     const classes = usePaymentCardTitleStyles();

     return (
        <Box className={classes.root}>
            <Typography className={classes.title}>
                ONLAYN ÖDƏNİŞ SƏHİFƏSİ
            </Typography>
        </Box>
     );
 };

 export default CardTitleComponent;