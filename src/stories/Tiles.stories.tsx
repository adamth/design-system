import React from "react";
import { Story, Meta } from "@storybook/react";

import { Tile } from "../components/Tile";
import { Grid } from "../components/Grid";

export default {
  title: "Example/Tiles",
  component: Tile,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story = () => {
  return (
    <Grid
      cols={{
        "@initial": 2,
        "@bp2": 3,
        "@bp3": 5,
      }}
      gap={{
        "@initial": 1,
        "@bp2": 2,
      }}
    >
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </Grid>
  );
};

export const Responsive = Template.bind({});
