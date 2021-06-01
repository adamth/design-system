import React from "react";
import { styled } from "../stitches.config";
import { StitchesVariants } from "@stitches/core";

type PriceTagProps = {
  price: string;
} & StitchesVariants<typeof StyledDiv>;

const StyledDiv = styled("div", {
  display: "block",
  padding: "8px 10px",
  backgroundColor: "$yellowLight",
  boxShadow: "2px 2px 0 #000",
  border: "1px solid #000",
  color: "$red",
  fontFamily: "$casual",
  fontSize: "22px",
});

export const PriceTag = ({ price, ...rest }: PriceTagProps) => {
  return <StyledDiv {...rest}>{price}</StyledDiv>;
};
