import React from "react";
import Button from "@material-ui/core/Button";

export default {
  title: "MUI/Button",
  component: Button,
  argTypes: {
    color: { control: "text" },
    variant: { control: "text" },
    size: { control: "text" },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const ControlButton = Template.bind({});
ControlButton.args = {
  color: "secondary",
  variant: "contained",
  children: "text",
  size: "medium",
};

export const Primary = () => <Button color='primary'>Primary</Button>;
