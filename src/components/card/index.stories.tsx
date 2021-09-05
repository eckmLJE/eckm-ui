import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from ".";

export default {
  title: "Example/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "test",
};
