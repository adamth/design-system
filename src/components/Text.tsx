import { StitchesVariants } from '@stitches/react';
import React, { ReactNode } from 'react'
import { styled } from "../stitches.config";

export type TextProps = {
  children?: ReactNode;
} & StitchesVariants<typeof StyledText>

const StyledText = styled("p", {
  fontFamily: "$sans",
  fontSize: "$md",
  variants: {
    font: {
      casual: {
        fontFamily: "$casual",
      }
    },
    size: {
      "sm": {
        "@initial": {
          fontSize: "$xs"
        },
        "@bp2": {
          fontSize: "$sm"
        },
      },
      "md": {
        "@initial": {
          fontSize: "$sm"
        },
        "@bp2": {
          fontSize: "$md"
        },
      },
      "lg": {
        "@initial": {
          fontSize: "$md"
        },
        "@bp2": {
          fontSize: "$lg"
        },
      },
    }
  }
})

export const Text = (props: TextProps) => {
  return (
    <StyledText {...props} />
  )
}
