import type { Meta, StoryObj } from '@storybook/html';
import argTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './checkbox.njk';

export type CheckboxArgs = {
    checked?: boolean
    hintText?: string
    id: string
    isExclusive?: boolean
    isSmall?: boolean
    label: string
    name?: string
    value?: string
};

const meta: Meta<CheckboxArgs> = {
    title: 'Components/Checkbox/Checkbox',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        id: 'benefits-and-grants',
        label: 'Benefits and grants'
    },
    argTypes: {
        checked: {
            control: 'boolean'
        },
        hintText: argTypes.hintText,
        isExclusive: {
            control: 'boolean',
            description: 'Whether the checkbox is exclusive (e.g. a \'none\' option)'
        },
        id: argTypes.id(),
        isSmall: argTypes.isSmall(),
        label: argTypes.label(),
        name: {
            type: 'string'
        }
    }
};

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const Default: Story = {};

export const CheckedByDefault: Story = {
    name: 'Checked by default',
    args: {
        checked: true,
        id: 'checked'
    }
};

export const SmallCheckbox: Story = {
    name: 'Small checkbox',
    args: {
        isSmall: true,
        id: 'small'
    }
};

export const HintText: Story = {
    name: 'With hint text',
    args: {
        hintText: 'Information on benefits, funds and grants, including Child Benefit and tax credits.',
        id: 'hinttext'
    }
};

export const CustomNameAttribute: Story = {
    name: 'Custom name atribute',
    args: {
        name: 'myName',
        id: 'nameattribute'
    }
};
