import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './radio-group.njk';

export type RadioGroupArgs = {
    isInline?: boolean
    isSmall?: boolean
    name: string
};

const meta: Meta<RadioGroupArgs> = {
    title: 'Components/Radio/Radio group',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        name: 'default'
    },
    argTypes: {
        isInline: {
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
        name: {
            table: {
                disable: true,
            }
        }
    }
};

export default meta;
type Story = StoryObj<RadioGroupArgs>;

export const Default: Story = {};

export const SmallRadios: Story = {
    name: 'Small radios',
    args: {
        name: 'small',
        isSmall: true
    }
};

export const InlineRadios: Story = {
    name: 'Inline radios',
    args: {
        name: 'inline',
        isInline: true
    }
};
