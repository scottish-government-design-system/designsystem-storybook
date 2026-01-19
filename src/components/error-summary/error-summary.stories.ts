import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './error-summary.njk';

type ErrorArgs = {
    content: string,
    href?: string
}

export type ErrorSummaryArgs = {
    errors: ErrorArgs[],
    title?: string
};

const meta: Meta<ErrorSummaryArgs> = {
    title: 'Components/Error summary',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        errors: [
            {
                content: 'Did this resolve your issue?',
                href: '#resolve'
            },
            {
                content: 'What topics are you interested in?',
                href: '#topics'
            },
            {
                content: 'Please provide more detail',
                href: '#more-detail'
            }
        ]
    }
};

export default meta;
type Story = StoryObj<ErrorSummaryArgs>;

export const Default: Story = {};
