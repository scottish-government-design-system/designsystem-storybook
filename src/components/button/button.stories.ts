import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './button.njk';

type ButtonWidth = 'fluid' | 'fixed' | 'max';

type ComponentArgs = {
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

const meta: Meta<ComponentArgs> = {
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
        hasLinkStyle: {
            description: 'Make the button look like a link',
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        href: {
            control: { type: 'text' },
            description: 'Href attribute, changes element to <code>&lt;a&gt;</code> if set',
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        icon: {
            description: 'Name of the icon component to use',
            options: ['arrow_upward', 'calendar_today', 'cancel', 'check_circle', 'chevron_left', 'chevron_right', 'close', 'description', 'double_chevron_left', 'double_chevron_right' ,'error', 'expand_less', 'expand_more', 'list', 'priority_high', 'search'],
            control: { type: 'select' },
            type: 'string'
        },
        isDisabled: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        isIconLeft: {
            description: 'Show icon on left of button',
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        isIconOnly: {
            description: 'Show only the icon',
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        isSecondary: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        isSmall: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        width: {
            options: ['fluid', 'fixed', 'max'],
            control: { type: 'radio' },
            type: 'string'
        }
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

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
    args: {
        width: 'fixed'
    }
};

export const MaxWidth: Story = {
    args: {
        width: 'max'
    }
};

export const small: Story = {
    args: {
        isSmall: true
    }
};

export const IconAfter: Story = {
    args: {
        icon: 'search'
    }
};

export const IconBefore: Story = {
    args: {
        icon: 'search',
        isIconLeft: true
    }
};

export const IconOnly: Story = {
    args: {
        icon: 'search',
        isIconOnly: true
    }
};

export const LinkButton: Story = {
    args: {
        href: '#foo'
    }
};

export const TextButton: Story = {
    args: {
        hasLinkStyle: true
    }
};
