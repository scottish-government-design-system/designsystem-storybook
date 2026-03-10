import type { Meta, StoryObj } from '@storybook/html';
import { ButtonArgs } from '../button/button.stories';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './button-group.njk';

type MobileLayout = 'stacked' | 'inline' | 'wrap';
type Link = {
    linkText: string
    href: string
}

export type ButtonGroupArgs = {
    groupItems: (ButtonArgs|Link)[]
    mobileLayout?: MobileLayout
};

const meta: Meta<ButtonGroupArgs> = {
    title: 'Components/Button/Button group',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        groupItems: [
            {
                content: 'Button text',
                hasLinkStyle: false,
                isDisabled: false,
                isIconLeft: false,
                isIconOnly: false,
                isSecondary: true,
                isSmall: false
            },
            {
                content: 'Button text',
                hasLinkStyle: false,
                isDisabled: false,
                isIconLeft: false,
                isIconOnly: false,
                isSecondary: false,
                isSmall: false
            }
        ]
    },
    argTypes: {
        mobileLayout: {
            options: ['stacked', 'inline', 'wrap'],
            control: { type: 'select' },
            type: 'string'
        }
    }
};

export default meta;
type Story = StoryObj<ButtonGroupArgs>;

export const Default: Story = {};

export const Inline: Story = {
    name: 'Inline buttons on mobile',
    args: {
        mobileLayout: 'inline'
    }
};

export const Wrap: Story = {
    name: 'Wrap buttons on mobile',
    args: {
        mobileLayout: 'wrap'
    }
};

export const LastLink: Story = {
    name: 'Buttons and links',
    args: {
        groupItems: [
            ...meta.args.groupItems,
            {
                linkText: 'This is a link',
                href: '#'
            }
        ]
    }
};