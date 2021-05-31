import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "md",
  type: "primary",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "md",
  type: "secondary",
  children: "Button",
};
