import { StitchesVariants } from "@stitches/core";
import React, { ReactNode } from "react";
import { styled } from "../stitches.config";

export type ImageProps = {
  children?: ReactNode;
} & StitchesVariants<typeof StyledImg>;

const StyledImg = styled("img", {
  width: "100%",
  objectFit: "cover",
});

export const Image = (props: ImageProps) => {
  return <StyledImg {...props} />;
};
