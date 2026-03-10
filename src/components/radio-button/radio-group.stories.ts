import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './radio-group.njk';

export type RadioGroupArgs = {
    isInline?: boolean
    isSmall?: boolean
    name: string
};

const meta: Meta<RadioGroupArgs> = {
    title: 'Components/Radio/Radio group',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    argTypes: {
        isInline: SGDSArgTypes.boolean(),
        isSmall: SGDSArgTypes.boolean(),
        name: SGDSArgTypes.hidden()
    }
};

export default meta;
type Story = StoryObj<RadioGroupArgs>;

export const Default: Story = {
    args: {
        name: 'default'
    }
};

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
