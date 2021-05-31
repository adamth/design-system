import React from "react";
import { Story, Meta } from "@storybook/react";

import { Grid, GridProps } from "../components/Grid";
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
  gap: 3,
  children: [
    <Box css={{ bg: "red", p: "$5" }}></Box>,
    <Box css={{ bg: "red", p: "$5" }}></Box>,
    <Box css={{ bg: "red", p: "$5" }}></Box>,
    <Box css={{ bg: "red", p: "$5" }}></Box>,
    <Box css={{ bg: "red", p: "$5" }}></Box>,
  ],
};
