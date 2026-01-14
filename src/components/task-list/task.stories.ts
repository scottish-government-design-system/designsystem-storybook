import type { Meta, StoryObj } from '@storybook/html';
import argTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './task.njk';

export type ComponentArgs = {
    content?: string
    headingLevel?: string
    href?: string
    id?: string
    status?: string
    title: string
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Task list/Task',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        headingLevel: 'h3',
        href: '#',
        content: 'This is some additional content around this specific task.',
        status: 'In progress',
        title: 'This is another task'
    },
    argTypes: {
        status: {
            options: ['None', 'Complete', 'In progress', 'Not started', 'Cannot start yet'],
            control: { type: 'select' },
            type: 'string'
        },
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {};

export const NoDescription: Story = {
    args: {
        content: undefined
    }
};

export const NoLink: Story = {
    args: {
        href: undefined
    }
};

export const NoStatus: Story = {
    args: {
        status: 'None'
    }
};
