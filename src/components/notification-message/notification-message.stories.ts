import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './notification-message.njk';

export type NotificationMessageArgs = {
    heading: string,
    headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    isDismissable?: boolean,
    content: string,
    state?: 'success' | 'error' | 'warning' | 'info'
};

const meta: Meta<NotificationMessageArgs> = {
    title: 'Components/Notification message',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        heading: "Tenant added successfully",
        headingLevel: "h3",
        content: "<p>You have added a tenant to the application.</p>"
    },
    argTypes: {
        headingLevel: SGDSArgTypes.headingLevel(),
        isDismissable: SGDSArgTypes.boolean({
            description: 'Whether to show a close button on the notification'
        }),
        state: SGDSArgTypes.state()
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<NotificationMessageArgs>;

export const Default: Story = {
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};

export const NoContent: Story = {
    name: 'No content',
    args: {
        content: undefined
    }
};

export const LinksInContent: Story = {
    name: 'Links in content',
    args: {
        content: `<p>You have added a tenant to the <a href="#">application</a>.
        Go to the <a href="#">tenant list</a> to view all tenants.</p>`
    }
};

export const CloseButton: Story = {
    name: 'Close button',
    args: {
        content: `<p>You have added a tenant to the <a href="#">application</a>.
        Go to the <a href="#">tenant list</a> to view all tenants.</p>`,
        isDismissable: true
    }
};

export const InfoState: Story = {
    name: 'Info state',
    args: {
        heading: 'Welcome to the mygov.scot app',
        state: 'info',
        content: `<p>This is a beta version. Not all features will be available.</p>`
    }
};

export const ErrorState: Story = {
    name: 'Error state',
    args: {
        heading: 'Something went wrong',
        state: 'error',
        content: `<p>That link does not seem to be working.<br>Please try again.</p>`
    }
};

export const WarningState: Story = {
    name: 'Warning state',
    args: {
        heading: 'Partial name match',
        state: 'warning',
        content: `<p>Please confirm that the name on the account is correct.</p>`
    }
};
