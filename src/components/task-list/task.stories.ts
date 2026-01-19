import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './task.njk';

export type TaskArgs = {
    content?: string
    headingLevel?: string
    href?: string
    id?: string
    status?: string
    title: string
};

const meta: Meta<TaskArgs> = {
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
        status: SGDSArgTypes.select({
            options: ['None', 'Complete', 'In progress', 'Not started', 'Cannot start yet']
        })
    }
};

export default meta;
type Story = StoryObj<TaskArgs>;

export const Default: Story = {};

export const NoDescription: Story = {
    name: 'No description',
    args: {
        content: undefined
    }
};

export const NoLink: Story = {
    name: 'No link',
    args: {
        href: undefined
    }
};

export const NoStatus: Story = {
    name: 'No status',
    args: {
        status: 'None'
    }
};
