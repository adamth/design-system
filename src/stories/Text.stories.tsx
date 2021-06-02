import React from "react";
import { Story, Meta } from "@storybook/react";

import { Text, TextProps } from "../components/Text";

export default {
  title: "Example/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args}>This is a sample block of text</Text>;

export const Primary = Template.bind({});
Primary.args = {
  size: "md",
};

