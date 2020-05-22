import React from 'react';
import {Typography, Box, Button} from "@material-ui/core";
import {usePaymentCardButtonStyles} from "../PaymentJss";

interface ICardButtonProps {
    url: string;
}

const CardButtonComponent = (props: ICardButtonProps) => {
    const classes = usePaymentCardButtonStyles();
    const { url } = props;

    return (
        <Box className={classes.box}>
            <Typography className={classes.text}>
                Ödə düyməsinə basaraq yuxarıda göstərilən məlumatlarla tanış olduğumu təsdiq edirəm
            </Typography>
            <Box className={classes.buttonBox}>
                <Button
                    className={classes.button}
                    href={url}
                >
                    ÖDƏ
                </Button>
            </Box>
        </Box>
    );
};

export default CardButtonComponent;