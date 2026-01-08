import type { Meta, StoryObj } from '@storybook/html';
import argTypes from '../../../.storybook/sgdsArgTypes';
import { ComponentArgs as TaskArgs } from './task.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './task-list.njk';

type TaskGroupArgs = {
    title: string,
    tasks: TaskArgs[]
}

type ComponentArgs = {
    groups: TaskGroupArgs[],
    groupHeadingLevel?: 'h2' | 'h3' | 'h4'
    headingLevel?: 'h2' | 'h3' | 'h4'
    intro?: string
    taskHeadingLevel?: 'h3' | 'h4' | 'h5'
    tasks: TaskArgs[]
    title?: string
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Task list',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        intro: 'This is some introduction text for this task list.',
        headingLevel: 'h2',
        taskHeadingLevel: 'h3',
        tasks: [
            {
                href: '#',
                status: 'Complete',
                title: 'This is a task'
            },
            {
                href: '#',
                content: 'This is some additional content around this specific task.',
                status: 'In progress',
                title: 'This is another task'
            },
            {
                href: '#',
                status: 'Not started',
                title: 'This is yet another task which needs to be done'
            },
            {
                status: 'Cannot start yet',
                title: 'This is a task to perform last'
            }
        ],
        title: 'Heading for tasks'
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {};

export const WithoutHeadingAndIntro: Story = {
    args: {
        intro: null,
        title: null
    }
};

export const GroupedTasks: Story = {
    args: {
        groups: [
            {
                title: 'Heading for tasks',
                tasks: [
                    {
                        href: '#',
                        status: 'Complete',
                        title: 'This is a task'
                    },
                    {
                        href: '#',
                        content: 'This is some additional content around this specific task.',
                        status: 'Complete',
                        title: 'This is another task'
                    },
                    {
                        href: '#',
                        status: 'Complete',
                        title: 'This is yet another task which needs to be done'
                    },
                    {
                        href: '#',
                        status: 'Complete',
                        title: 'This is a task to perform last'
                    }
                ]
            },
            {
                title: 'Another heading for further tasks',
                tasks: [
                    {
                        href: '#',
                        content: 'This is some additional content around this specific task.',
                        status: 'In progress',
                        title: 'This is another task'
                    },
                    {
                        href: '#',
                        status: 'Not started',
                        title: 'This is yet another task which needs to be done'
                    },
                    {
                        status: 'Cannot start yet',
                        title: 'This is a task to perform last'
                    }
                ]
            },
            {
                title: 'A final list of tasks',
                tasks: [
                    {
                        status: 'Cannot start yet',
                        title: 'This is yet another task which needs to be done'
                    },
                    {
                        status: 'Cannot start yet',
                        title: 'This is a task to perform last'
                    }
                ]
            }
        ],
        groupHeadingLevel: 'h2',
        taskHeadingLevel: 'h3',
        intro: '',
        tasks: null,
        title: ''
    }
};
