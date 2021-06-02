import React from "react";
import { styled } from "../stitches.config";
import { Text, TextProps } from "./Text"
import { StitchesVariants } from "@stitches/core";

type PriceTagProps = {
  price: string;
} & TextProps & StitchesVariants<typeof StyledText>;

const StyledText = styled(Text, {
  display: "block",
  padding: "8px 10px",
  backgroundColor: "$yellow400",
  boxShadow: "2px 2px 0 $black",
  border: "1px solid $black",
  color: "$red500",
});

export const PriceTag = ({ price, ...rest }: PriceTagProps) => {
  return <StyledText font="casual" {...rest}>{price}</StyledText>;
};
