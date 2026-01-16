import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './radio-button.njk';

export type RadioButtonArgs = {
    checked?: boolean
    hintText?: string
    id: string
    isSmall?: boolean
    label: string
    name?: string
    value?: string
};

const meta: Meta<RadioButtonArgs> = {
    title: 'Components/Radio/Radio button',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        id: 'arrears',
        label: 'Arrears'
    },
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<RadioButtonArgs>;

export const Default: Story = {};

export const KitchenSink: Story = {
    name: 'Kitchen sink',
    args: {
        checked: true,
        hintText: 'This means you\'re paid for the period coming up, e.g. the month ahead',
        isSmall: false
    }
};

export const SmallRadio: Story = {
    name: 'Small radio',
    args: {
        isSmall: true
    }
};
