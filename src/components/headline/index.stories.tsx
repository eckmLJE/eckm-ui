import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Headline } from '.'

export default {
  title: 'Components/Headline',
  component: Headline,
  args: {
    children: 'Headline text',
  },
} as ComponentMeta<typeof Headline>

const Template: ComponentStory<typeof Headline> = (args) => (
  <Headline {...args} />
)

export const Default = Template.bind({})

export const Centered = Template.bind({})
Centered.args = {
  align: 'center',
}

export const PrimaryColor = Template.bind({})
PrimaryColor.args = {
  color: 'primary',
}

export const SecondaryColor = Template.bind({})
SecondaryColor.args = {
  color: 'secondary ',
}
