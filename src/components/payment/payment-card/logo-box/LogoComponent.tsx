import React from "react";
import {Box} from "@material-ui/core";

interface ILogoProps {
    classes: any;
    logo: string;
}

const LogoComponent = (props: ILogoProps) => {
    const { classes, logo } = props;

    return (
        <Box className={classes}>
            <img src={logo} />
        </Box>
    );
};

export default LogoComponent;