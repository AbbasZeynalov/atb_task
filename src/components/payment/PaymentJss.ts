import {makeStyles, Theme} from "@material-ui/core";
import {
    darkTextColor,
    lightGreyColor,
    lightTextColor,
    mainBackgroundColor,
    mainCompanyColor
} from "../../config/constants/colors";
import {thickWeight, thinWeight} from "../../config/constants/weights";
import TriangleImage from '../../assets/img/triangle.png'

export const usePaymentStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: mainBackgroundColor,
        width: '100%'
    },
    cardBox: {
        paddingTop: theme.spacing(11),
        paddingBottom: theme.spacing(11)
    }
}));

export const usePaymentCardStyles = makeStyles((theme: Theme) => ({
    card: {
        width: 485,
        borderRadius: 20,
        margin: 'auto',
    },
    cardBox: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4)
    }
}));

export const usePaymentCardLogoStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(4)
    },
    mainLogo: {
        width: 70,
        height: 70
    },
    callLogo: {
        width: 60,
        height: 25
    }
}));

export const usePaymentCardTitleStyles = makeStyles((theme: Theme) => ({
    root: {
        textAlign: 'center',
        marginTop: theme.spacing(3)
    },
    title: {
        color: lightTextColor,
        fontSize: 20,
        fontWeight: 300
    }
}));

export const usePaymentReceiptStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(3),
        border: `2px solid ${lightGreyColor}`,
        borderBottom: 'none',
        boxSizing: 'border-box'
    },
    receiptBox: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(2)
    }
}));

export const usePaymentReceiptHeaderStyles = makeStyles((theme: Theme) => ({
    iconBox: {
        width: 27,
        height: 27,
        display: 'inline'
    },
    title: {
        fontSize: 22,
        color: lightTextColor,
        fontWeight: thinWeight,
        lineHeight: 1,
        marginTop: 4
    }
}));

export const useReceiptDetailsStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(3),
    },
    detailBox: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2)
    },
    detailTitle: {
        color: lightTextColor,
        fontSize: 14,
        lineHeight: 1
    },
    detailValue: {
        color: darkTextColor,
        fontWeight: thickWeight,
        fontSize: 14,
        lineHeight: 1
    }
}));

export const useReceiptAmountDetailStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: lightGreyColor,
        height: 80,
        position: 'relative'
    },
    triangle: {
        backgroundImage: `url(${TriangleImage})`,
        backgroundSize: '20px 10px',
        backgroundRepeat: 'repeat-x',
        height: 10,
        position: 'absolute',
        width: '100%',
        bottom: 0
    },
    detailBox: {
      padding: '25px 8px'
    },
    detailTitle: {
        fontSize: 18,
        fontWeight: thickWeight,
        color: darkTextColor
    },
    detailValue: {
        fontSize: 22,
        fontWeight: thickWeight,
        color: '#306D00'
    }
}));

export const usePaymentTypesStyles = makeStyles((theme: Theme) => ({
    root: {
      marginTop: theme.spacing(2)
    },
    titleBox: {
        textAlign: 'center',
        position: 'relative',
        '&::before': {
            content: '""',
            height: 2,
            width: 125,
            backgroundColor: lightGreyColor,
            position: 'absolute',
            left: 0,
            top: 7,
        },
        '&::after': {
            content: '""',
            height: 2,
            width: 125,
            backgroundColor: lightGreyColor,
            position: 'absolute',
            right: 0,
            top: 7,
        }
    },
    title: {
        lineHeight: 1,
        fontSize: 16,
        color: lightTextColor
    }
}));

export const usePaymentTypesLogoStyles = makeStyles((theme: Theme) => ({
    box: {
        marginTop: theme.spacing(2.5)
    },
    logoBox: {
        width: 28,
        height: 27
    }
}));

export const usePaymentCardButtonStyles = makeStyles((theme: Theme) => ({
    box: {
        textAlign: 'center',
        marginTop: theme.spacing(3)
    },
    text: {
        lineHeight: 1,
        fontSize: 10,
        color: lightTextColor
    },
    buttonBox: {
        textAlign: 'center',
        width: '100%',
        marginTop: theme.spacing(1.5)
    },
    button: {
        borderRadius: 5,
        backgroundColor: mainCompanyColor,
        width: 165,
        height: 40,
        color: 'white',
        '&:hover': {
            backgroundColor: mainCompanyColor,
        }
    }
}));

export const usePaymentCardFooterStyles = makeStyles((theme: Theme) => ({
    box: {
        marginTop: theme.spacing(5)
    },
    divider: {
        backgroundColor: lightGreyColor
    },
    text: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1.5),  
        fontSize: 10, 
        color: lightTextColor
    }
}));