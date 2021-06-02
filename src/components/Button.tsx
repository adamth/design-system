import { StitchesVariants } from "@stitches/core";
import { ReactNode } from "react";
import { styled } from "../stitches.config";

export type ButtonProps = { children?: ReactNode } & StitchesVariants<
  typeof StyledButton
>;

const StyledButton = styled("button", {
  fontWeight: "bold",
  borderRadius: "0",
  boxShadow: "2px 2px 0 0 rgb(0 0 0 / 10%)",
  "&:hover": {
    boxShadow: "2px 2px 0 0 rgb(0 0 0 / 30%)",
  },
  px: "$6",
  py: "$2",
  variants: {
    size: {
      sm: {
        fontSize: "$xs",
      },
      md: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "$lg",
      }
    },
    type: {
      primary: {
        bg: "$black",
        color: "white",
        "&:hover": {
          borderColor: "$grey800",
          bg: "$grey800",
        },
        "&:active": {
          bg: "$grey700",
        },
      },
      secondary: {
        border: "1px solid",
        borderColor: "black",
        color: "black",
        "&:hover": {
          borderColor: "$grey800",
          color: "$grey800",
        },
        "&:active": {
          bg: "$grey50",
        },
      },
      action: {
        bg: "$green500",
        color: "white",
        "&:hover": {
          borderColor: "$grey800",
          bg: "$green600",
        },
        "&:active": {
          bg: "$green500",
        },
      },
      link: {},
    },
  },
  defaultVariants: {
    type: "primary",
    size: "md",
  },
});

export const Button = (props: ButtonProps) => <StyledButton {...props} />;
