import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './button.njk';

type ButtonWidth = 'fluid' | 'fixed' | 'max';

export type ButtonArgs = {
    content: string
    hasLinkStyle?: boolean;
    href?: string;
    icon?: string;
    isDisabled?: boolean
    isIconLeft?: boolean;
    isIconOnly?: boolean;
    isSecondary?: boolean;
    isSmall?: boolean;
    width?: ButtonWidth;
};

const meta: Meta<ButtonArgs> = {
    title: 'Components/Button',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: 'Button text',
        hasLinkStyle: false,
        isDisabled: false,
        isIconLeft: false,
        isIconOnly: false,
        isSecondary: false,
        isSmall: false
    },
    argTypes: {
        hasLinkStyle: SGDSArgTypes.boolean({
            description: 'Make the button look like a link'
        }),
        href: {
            control: { type: 'text' },
            description: '`href` attribute, changes element to `<a>` if set',
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        icon: {
            description: 'Name of the icon to use',
            options: ['arrow_upward', 'calendar_today', 'cancel', 'check_circle', 'chevron_left', 'chevron_right', 'close', 'description', 'double_chevron_left', 'double_chevron_right' ,'error', 'expand_less', 'expand_more', 'list', 'priority_high', 'search'],
            control: { type: 'select' },
            type: 'string'
        },
        isDisabled: SGDSArgTypes.boolean(),
        isIconLeft: SGDSArgTypes.boolean({
            description: 'Show icon on left of button'
        }),
        isIconOnly: SGDSArgTypes.boolean({
            description: 'Show only the icon'
        }),
        isSecondary: SGDSArgTypes.boolean(),
        isSmall: SGDSArgTypes.boolean(),
        width: {
            options: ['fluid', 'fixed', 'max'],
            control: { type: 'radio' },
            type: 'string'
        }
    }
};

export default meta;
type Story = StoryObj<ButtonArgs>;

export const Default: Story = {};

export const Secondary: Story = {
    args: {
        isSecondary: true
    }
};

export const Disabled: Story = {
    args: {
        isDisabled: true
    }
};

export const FixedWidth: Story = {
    name: 'Fixed width',
    args: {
        width: 'fixed'
    }
};

export const MaxWidth: Story = {
    name: 'Max width',
    args: {
        width: 'max'
    }
};

export const Small: Story = {
    args: {
        isSmall: true
    }
};

export const IconAfter: Story = {
    name: 'Icon after',
    args: {
        icon: 'search'
    }
};

export const IconBefore: Story = {
    name: 'Icon before',
    args: {
        icon: 'search',
        isIconLeft: true
    }
};

export const IconOnly: Story = {
    name: 'Icon only',
    args: {
        icon: 'search',
        isIconOnly: true
    }
};

export const LinkButton: Story = {
    name: 'Link button',
    args: {
        href: '#foo'
    }
};

export const TextButton: Story = {
    name: 'Text button',
    args: {
        hasLinkStyle: true
    }
};
