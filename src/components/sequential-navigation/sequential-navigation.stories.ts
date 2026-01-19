import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './sequential-navigation.njk';

export type SequentialNavLinkArgs = {
    content: string
    href: string
    label: string
}

export type SequentialNavArgs = {
    label: string
    next: SequentialNavLinkArgs
    prev: SequentialNavLinkArgs
};

const meta: Meta<SequentialNavArgs> = {
    title: 'Components/Sequential navigation',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        label: "Article navigation",
        prev: {
            content: "Apply for or renew a Blue Badge",
            href: '#prev',
            label: "Previous"
        },
        next: {
            content: "Eligibility: who can have one?",
            href: '#next',
            label: "Next"
        }
    },
    argTypes: {
        next: SGDSArgTypes.hidden(),
        prev: SGDSArgTypes.hidden()
    }
};

export default meta;
type Story = StoryObj<SequentialNavArgs>;

export const Default: Story = {};

export const OnlyPrev: Story = {
    name: 'Only previous',
    args: {
        next: undefined
    }
};

export const OnlyNext: Story = {
    name: 'Only next',
    args: {
        prev: undefined
    }
};
