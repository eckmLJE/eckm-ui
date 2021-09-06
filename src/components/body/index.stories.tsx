import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Body } from '.'

export default {
  title: 'Components/Body',
  component: Body,
  argTypes: {
    align: {
      control: { type: 'radio' },
    },
    size: {
      control: { type: 'radio' },
    },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    as: { table: { disable: true } },
  },
} as ComponentMeta<typeof Body>

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Body text',
  align: undefined,
  size: undefined,
  bold: undefined,
}

export const Centered = Template.bind({})
Centered.args = {
  children: 'Body text',
  align: 'center',
}
