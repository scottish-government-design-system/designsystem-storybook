import type { Meta, StoryObj } from '@storybook/html';
import argTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './tag.njk';

export type TagArgs = {
    colour?: string
    content: string
};

const meta: Meta<TagArgs> = {
    title: 'Components/Tag',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: 'Status'
    },
    argTypes: {
        colour: argTypes.tagColour(),
    }
};

export default meta;
type Story = StoryObj<TagArgs>;

export const Default: Story = {};
