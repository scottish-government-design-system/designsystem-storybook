import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './card.njk';

export type CardArgs = {
    content?: string
    hasButtons?: boolean
    hasMetadata?: boolean
    hasNotification?: boolean
    heading?: string
    headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    icon?: string
    image?: string
    imageAspect?: string
    imageCover?: boolean
    imageWidth?: string
    isAdaptive?: boolean
    isGrey?: boolean
    isHorizontal?: boolean
    isHorizontalSmall?: boolean
    isNav?: boolean
    notificationDescription?: string
    notificationValue?: string
    status?: string
    tagName?: 'div' | 'li'
};

const meta: Meta<CardArgs> = {
    title: 'Components/Card',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: '<p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>',
        heading: 'About the Design System'
    },
    argTypes: {
        headingLevel: SGDSArgTypes.headingLevel({options: ['h2','h3','h4','h5','h6']}),
        hasButtons: SGDSArgTypes.boolean({
            if: { arg: 'isNav', truthy: false }
        }),
        hasMetadata: SGDSArgTypes.boolean(),
        hasNotification: SGDSArgTypes.boolean({
            if: { arg: 'icon' }
        }),
        icon: {
            control: { type: 'select' },
            options: ['none', 'article', 'bell', 'cog', 'folder', 'info', 'mail'],
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        image: {
            control: { type: 'select' },
            options: ['none', 'highland-cow', 'thistles'],
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        imageAspect: {
            control: { type: 'select' },
            options: ['none', 'default', 'ds_aspect-box--square', 'ds_aspect-box--43', 'ds_aspect-box--219'],
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        imageCover: SGDSArgTypes.boolean({
            description: '`imageCover` attribute, changes image to match height of card in horizontal layout'
        }),
        imageWidth: {
            control: { type: 'select' },
            description: '`imageWidth` attribute, sets the width of the image when in a horizontal layout',
            options: ['default', 'ds_card__media--narrow', 'ds_card__media--wide'],
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        isAdaptive: SGDSArgTypes.boolean({
            description: '`isAdaptive` attribute, sets the card to use the horizontal layout when it has sufficient space',
            if: { arg: 'isHorizontal', truthy: false }
        }),
        isHorizontal: SGDSArgTypes.boolean({
            description: '`isHorizontal` attribute, changes the card to always use the horizontal layout',
            if: { arg: 'isAdaptive', truthy: false }
        }),
        isHorizontalSmall: SGDSArgTypes.boolean({
            description: '`isHorizontalSmall` attribute, changes the card to use the horizontal layout at small viewport width',
            if: { arg: 'isHorizontal', truthy: false }
        }),
        isGrey: SGDSArgTypes.boolean(),
        isNav: SGDSArgTypes.boolean({
            description: '`isNav` attribute, changes card to become a single link if set'
        }),
        notificationDescription: {
            type: 'string',
            if: { arg: 'hasNotification', truthy: true }
        },
        notificationValue: {
            control: { type: 'select' },
            if: { arg: 'hasNotification', truthy: true },
            options: ['none', '9', '99', '99+'],
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        status: {
            type: 'string'
        },
        tagName: {
            control: { type: 'select' },
            options: ['div', 'li'],
            description: 'HTML tag to use for the component wrapper'
        }
    }
};

export default meta;
type Story = StoryObj<CardArgs>;

export const Default: Story = {
    args: {
    }
};

export const NavCard: Story = {
    name: 'Navigation card',
    args: {
        isNav: true
    }
};

export const ImageCard: Story = {
    name: 'Image card',
    args: {
        image: 'thistles',
        imageAspect: 'default',
        isNav: true
    }
};

export const MetadataCard: Story = {
    name: 'Card with metadata',
    args: {
        hasMetadata: true,
        isNav: true
    }
};

export const ButtonsCard: Story = {
    name: 'Card with button group',
    args: {
        hasButtons: true
    }
};

export const GreyCard: Story = {
    name: 'Grey card',
    args: {
        isGrey: true,
        isNav: true
    }
};

export const StatusCard: Story = {
    name: 'Card with status',
    args: {
        status: "Status",
        isNav: true
    }
};

export const IconCard: Story = {
    name: 'Card with icon',
    args: {
        icon: 'info',
        isNav: true
    }
};

export const DotNotificationCard: Story = {
    name: 'Card with dot notification',
    args: {
        hasNotification: true,
        notificationValue: 'none',
        notificationDescription: 'settings changed',
        icon: 'cog',
        isNav: true
    }
};

export const NotificationCard: Story = {
    name: 'Card with notification',
    args: {
        hasNotification: true,
        notificationValue: '99+',
        notificationDescription: 'unread messages',
        icon: 'mail',
        isNav: true
    }
};

export const ComplexCard: Story = {
    name: 'Card with all options',
    args: {
        hasButtons: true,
        hasMetadata: true,
        hasNotification: true,
        icon: 'mail',
        image: 'thistles',
        imageAspect: 'default',
        isGrey: true,
        notificationDescription: 'unread messages',
        notificationValue: '99+',
        status: "Status",
    }
};

export const AdaptiveCard: Story = {
    name: 'Card with adpative layout',
    args: {
        image: 'thistles',
        imageAspect: 'default',
        isAdaptive: true
    }
};        

export const HorizontalCard: Story = {
    name: 'Horizontal card with cover image',
    args: {
        content: '<p>The Design System is a catalogue of reusable styles, components and patterns from the Scottish Government.</p><p>The Design System is open source and free to use to build consistent and accessible online services.</p><p>It\'s designed and maintained by a multi-disciplinary team in the Scottish Government\'s Digital Directorate.</p>',
        image: 'thistles',
        imageAspect: 'default',
        imageCover: true,
        isHorizontal: true
    }
};

export const HorizontalCardSmall: Story = {
    name: 'Horizontal card at small width',
    args: {
        content: null,
        image: 'thistles',
        imageAspect: 'default',
        imageCover: true,
        isHorizontalSmall: true,
        isNav: true
    }
};