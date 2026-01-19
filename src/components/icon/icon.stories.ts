import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './icon.njk';

export type IconArgs = {
    isColouredIcon?: boolean
    isColouredParent?: boolean
    isFill?: boolean
    name: string
    size?: 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48
};

const meta: Meta<IconArgs> = {
    title: 'Components/Icon',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        name: 'search'
    },
    argTypes: {
        name: SGDSArgTypes.select({
            description: 'Name of the icon to use',
            options: ['arrow_upward', 'calendar_today', 'cancel', 'check_circle', 'chevron_left', 'chevron_right', 'close', 'description', 'double_chevron_left', 'double_chevron_right' ,'error', 'expand_less', 'expand_more', 'list', 'priority_high', 'search']
        }),
        size: SGDSArgTypes.select({
            description: 'Size of the icon',
            options: [16, 20, 24, 28, 32, 36, 40, 44, 48],
        })
    }
};

export default meta;
type Story = StoryObj<IconArgs>;

export const Default: Story = {};

export const InheritsColour: Story = {
    name: 'Inherits colour (default)',
    args: {
        isColouredParent: true
    },
    decorators: [
        (Story) => `<p class="coloured-icon">This icon ${Story()} inherits its colour from its parent. They are both red.`
    ]
};

export const SpecificColour: Story = {
    name: 'Specific colour',
    args: {
        isColouredIcon: true
    },
    decorators: [
        (Story) => `<p>This icon ${Story()} has its own specific colour. It is red.`
    ]
};
