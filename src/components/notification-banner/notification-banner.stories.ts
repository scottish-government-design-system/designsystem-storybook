import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './notification-banner.njk';

type NotificationBannerAergs = {
    content?: string
    hasColourIcon?: boolean
    hasIcon?: boolean
    hasInverseIcon?: boolean
    id?: string
    isDismissable?: boolean
    title: string
};

const meta: Meta<NotificationBannerAergs> = {
    title: 'Components/Notification banner',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: '<p>We need to tell you about <a href=\"#\">something</a></p>',
        title: 'Information'
    },
    argTypes: {
        hasColourIcon: SGDSArgTypes.boolean({
            description: 'Makes the icon display in the alternative colour scheme'
        }),
        hasIcon: SGDSArgTypes.boolean({
            description: 'Shows the \'high priority\' icon on the notification banner'
        }),
        hasInverseIcon: SGDSArgTypes.boolean({
            description: 'Makes the icon be inverted against a circle background'
        }),
        id: SGDSArgTypes.id(),
        isDismissable: SGDSArgTypes.boolean({
            description: 'Shows a \'close\' button on the notification banner'
        }),
        title: {
            description: 'A hidden title for the notification banner, useful for screen reader users',
            type: 'string'
        }
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<NotificationBannerAergs>;

export const Default: Story = {
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};

export const Dismissable: Story = {
    args: {
        isDismissable: true
    }
};

export const WithIcon: Story = {
    name: 'With icon',
    args: {
        hasColourIcon: true,
        hasInverseIcon: true,
        hasIcon: true
    }
};
