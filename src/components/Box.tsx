import { StitchesVariants } from "@stitches/core";
import React, { ReactNode } from "react";
import { styled } from "../stitches.config";

export type BoxProps = {
  children?: ReactNode;
} & StitchesVariants<typeof StyledDiv>;

const StyledDiv = styled("div", {});

export const Box = (props: BoxProps) => {
  return <StyledDiv {...props} />;
};
