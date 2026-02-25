import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './cookie-notification.njk';

export type CookieNotificationArgs = {
    isConfirmation?: boolean
};

const meta: Meta<CookieNotificationArgs> = {
    title: 'Components/Cookie notification',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {

    },
    argTypes: {

    },
    parameters: {
        layout: 'fullscreen'
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<CookieNotificationArgs>;

export const Default: Story = {};

export const Confirmation: Story = {
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    },
    args: {
        isConfirmation: true
    }
};
