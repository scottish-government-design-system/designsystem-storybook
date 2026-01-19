import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './notification-panel.njk';

export type NotificationPanelArgs = {
    ariaLive?: string
    content?: string
    heading: string
    headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    isAlert?: boolean
    isNeutral?: boolean
};

const meta: Meta<NotificationPanelArgs> = {
    title: 'Components/Notification panel',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: 'Your Saltire Scholarship Application form has been successfully submitted.',
        heading: 'Thank you'
    },
    argTypes: {
        ariaLive: SGDSArgTypes.ariaLive(),
        heading: {
            description: 'Title of the notification panel',
            type: {
                name: 'string',
                required: true
            }
        },
        headingLevel: SGDSArgTypes.headingLevel(),
        isNeutral: SGDSArgTypes.boolean(),
    }
};

export default meta;
type Story = StoryObj<NotificationPanelArgs>;

export const Default: Story = {};

export const WithoutContent: Story = {
    name: 'Without content',
    args: {
        content: undefined
    }
};

export const DifferentHeadingLevel: Story = {
    name: 'Different heading level',
    args: {
        headingLevel: 'h2'
    }
};

export const NeutralColour: Story = {
    name: 'Neutral colour',
    args: {
        content: 'We will get back to you with further details on how to complete your application once we review your details.',
        heading: 'Submission request sent',
        isNeutral: true
    }
}
