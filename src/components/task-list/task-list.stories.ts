import type { Meta, StoryObj } from '@storybook/html';
import argTypes from '../../../.storybook/sgdsArgTypes';
import { TaskArgs } from './task.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './task-list.njk';

export type TaskGroupArgs = {
    content?: string,
    title: string,
    tasks: TaskArgs[]
}

export type TaskListArgs = {
    groups: TaskGroupArgs[],
    groupHeadingLevel?: 'h2' | 'h3' | 'h4'
    headingLevel?: 'h2' | 'h3' | 'h4'
    intro?: string
    taskHeadingLevel?: 'h3' | 'h4' | 'h5'
    tasks: TaskArgs[]
    title?: string
};

const meta: Meta<TaskListArgs> = {
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
    },
    argTypes: {
        tasks: {
            description: 'An array of task items'
        },
        title: {
            description: 'The title of the task list',
            type: {
                name: 'string',
                required: true
            }
        }
    },
};

export default meta;
type Story = StoryObj<TaskListArgs>;

export const Default: Story = {};

export const WithoutHeadingAndIntro: Story = {
    name: 'Without heading and intro',
    args: {
        intro: null,
        title: null
    }
};

export const GroupedTasks: Story = {
    name: 'Grouped tasks',
    args: {
        groups: [
            {
                title: 'Heading for tasks',
                content: 'This information will be used to check what additional benefits you may be able to apply for.',
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
