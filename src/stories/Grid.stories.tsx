import React from "react";
import { Story, Meta } from "@storybook/react";

import { Grid, GridItem, GridProps } from "../components/Grid";
import { Box } from "../components/Box";

export default {
  title: "Example/Grid",
  component: Grid,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cols: {
    "@initial": 2,
    "@bp2": 4,
    "@bp3": 6,
  },
  rows: 3,
  gap: 2,
  children: [
    <GridItem
      rowSpan={{
        "@initial": 2,
        "@bp2": 2,
        "@bp3": 2,
      }}
      colSpan={{
        "@initial": 2,
        "@bp2": 4,
        "@bp3": 1,
      }}
    >
      <Box css={{ bg: "red", width:"100%", height: "100%" }}></Box>
    </GridItem>,
    <Box css={{ bg: "red", p: "$5", height: "100%" }}></Box>,
    <Box css={{ bg: "red", p: "$5", height: "100%" }}></Box>,
    <Box css={{ bg: "red", p: "$5", height: "100%" }}></Box>,
    <Box css={{ bg: "red", p: "$5", height: "100%" }}></Box>,
  ],
};
