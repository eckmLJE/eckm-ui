import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Headline } from '.'

export default {
  title: 'Components/Headline',
  component: Headline,
  args: {
    children: 'Headline text',
    align: undefined,
    level: undefined,
  },
  argTypes: {
    align: {
      control: { type: 'radio' },
    },
    level: {
      control: { type: 'radio' },
    },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Headline>

const Template: ComponentStory<typeof Headline> = (args) => (
  <Headline {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'Headline text',
  align: undefined,
  level: undefined,
}

export const Centered = Template.bind({})
Centered.args = {
  children: 'Headline text',
  align: 'center',
}
