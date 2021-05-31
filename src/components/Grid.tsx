import { StitchesVariants } from "@stitches/core";
import React, { ReactNode } from "react";
import { styled } from "../stitches.config";

export type GridProps = {
  children?: ReactNode;
} & StitchesVariants<typeof StyledDiv>;

const StyledDiv = styled("div", {
  display: "grid",
  variants: {
    gap: {
      1: {
        gap: "$1",
      },
      2: {
        gap: "$4",
      },
      3: {
        gap: "$8",
      },
      4: {
        gap: "$12",
      },
    },
    cols: {
      1: {
        gridTemplateColumns: "1fr",
      },
      2: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
      3: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      4: {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
      5: {
        gridTemplateColumns: "repeat(5, 1fr)",
      },
      6: {
        gridTemplateColumns: "repeat(6, 1fr)",
      },
      7: {
        gridTemplateColumns: "repeat(7, 1fr)",
      },
      8: {
        gridTemplateColumns: "repeat(8, 1fr)",
      },
      9: {
        gridTemplateColumns: "repeat(9, 1fr)",
      },
      10: {
        gridTemplateColumns: "repeat(10, 1fr)",
      },
      11: {
        gridTemplateColumns: "repeat(11, 1fr)",
      },
      12: {
        gridTemplateColumns: "repeat(12, 1fr)",
      },
    },
  },
});

export const Grid = ({ cols, gap, ...rest }: GridProps) => {
  return <StyledDiv cols={cols} gap={gap} {...rest} />;
};
