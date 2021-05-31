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
  px: "$9",
  py: "$3",
  variants: {
    size: {
      sm: {
        fontSize: "14px",
      },
      md: {
        fontSize: "24px",
      },
    },
    type: {
      primary: {
        bg: "$black",
        color: "white",
        "&:hover": {
          bg: "$gray800",
        },
        "&:active": {
          bg: "$gray700",
        },
      },
      secondary: {
        border: "1px solid",
        borderColor: "black",
        color: "black",
        "&:hover": {
          borderColor: "gray.800",
          color: "gray.800",
        },
        "&:active": {
          bg: "gray.50",
        },
      },
      action: {
        bg: "green.700",
        color: "white",
        "&:hover": {
          bg: "green.800",
        },
        "&:active": {
          bg: "green.600",
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
