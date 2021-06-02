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

const FilledBox = () => (
  <Box css={{ bg: "red", p: "$5", height: "100%", borderRadius: "4px" }} />
);

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  cols: 3,
  gap: 2,
  children: [
    <FilledBox />,
    <FilledBox />,
    <FilledBox />,
    <FilledBox />,
    <FilledBox />,
    <FilledBox />,
  ],
};

export const Complex = Template.bind({});
Complex.args = {
  cols: 6,
  rows: 6,
  gap: 2,
  children: [
    <GridItem rowSpan={6} colSpan={2}>
      <FilledBox />
    </GridItem>,
    <GridItem colSpan={4}>
      <FilledBox />
    </GridItem>,
    <GridItem rowSpan={2} colSpan={2}>
      <FilledBox />
    </GridItem>,
    <GridItem rowSpan={2} colSpan={2}>
      <FilledBox />
    </GridItem>,
    <GridItem rowSpan={3} colSpan={3}>
      <FilledBox />
    </GridItem>,
    <GridItem rowSpan={3}>
      <FilledBox />
    </GridItem>,
  ],
};

export const Responsive = Template.bind({});
Responsive.args = {
  cols: {
    "@initial": 2,
    "@bp2": 3,
    "@bp3": 6,
  },
  gap: 2,
  children: [
    <FilledBox />,
    <FilledBox />,
    <FilledBox />,
    <FilledBox />,
    <FilledBox />,
    <FilledBox />,
  ],
};
