import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './cookie-notification.njk';

export type CookieNotificationArgs = {
    isConfirmation?: boolean
};

const meta: Meta<CookieNotificationArgs> = {
    title: 'Components/Cookie notification',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {

    },
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<CookieNotificationArgs>;

export const Default: Story = {};

export const Confirmation: Story = {
    args: {
        isConfirmation: true
    }
};
