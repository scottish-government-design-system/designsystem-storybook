import type { Meta, StoryObj } from '@storybook/html';
import argTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './text-input.njk';

type ComponentArgs = {
    buttonIcon?: string
    buttonText?: string
    countThreshold?: number
    currencySymbol?: string
    errorMessage?: string
    hasButton?: boolean
    hasError?: boolean
    hintText?: string
    id: string
    isCurrency?: boolean
    label: string
    maxlength?: number
    name?: string
    placeholder?: string
    step?: string
    type?: string
    value?: string
    width?: string
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Text input',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        id: 'first-name',
        isCurrency: false,
        label: 'First name'
    },
    argTypes: {
        buttonIcon: {
            control: { type: 'select' },
            description: 'Name of the icon to use',
            options: ['arrow_upward', 'calendar_today', 'cancel', 'check_circle', 'chevron_left', 'chevron_right', 'close', 'description', 'double_chevron_left', 'double_chevron_right' ,'error', 'expand_less', 'expand_more', 'list', 'priority_high', 'search'],
            type: 'string'
        },
        buttonText: {
            desctiption: 'Text content for the button',
            type: 'string'
        },
        countThreshold: argTypes.countThreshold(),
        currencySymbol: {
            description: 'Currency symbol to use (default is \'£\')',
            type: 'string'
        },
        errorMessage: argTypes.errorMessage(),
        hasButton: {
            control: 'boolean',
            description: 'Whether the component has an associated button',
            type: 'boolean'
        },
        isCurrency: {
            control: 'boolean',
            description: 'Whether the component is a currency field',
            type: 'boolean'
        },
        hasError: argTypes.hasError(),
        hintText: argTypes.hintText(),
        id: argTypes.id(),
        label: argTypes.label(),
        maxlength: argTypes.maxlength(),
        name: {type: 'string'},
        placeholder: {type: 'string'},
        type: {
            control: { type: 'select' },
            options: ['date', 'datetime-local', 'email', 'month', 'number', 'password', 'search', 'tel', 'text', 'time', 'url', 'week'],
            type: {
                required: true,
                name: 'string'
            }
        },
        value: {type: 'string'},
        width: argTypes.inputWidth()
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {

};

export const KitchenSink: Story = {
    args: {
        countThreshold: 50,
        errorMessage: 'This field is required',
        hasError: true,
        hintText: 'Please enter your first or given name',
        id: 'kitchensink',
        maxlength: 20,
        value: 'Cholmondley',
        width: 'fixed-20'
    }
};

export const Currency: Story = {
    args: {
        currencySymbol: '$',
        id: 'price',
        isCurrency: true,
        label: 'Price per unit',
        placeholder: '0.00',
        step: '.01',
        type: 'number',
        width: 'fluid-one-quarter'
    }
}

export const WithButton: Story = {
    args: {
        buttonIcon: 'search',
        buttonText: 'Search',
        hasButton: true,
        id: 'withbutton'
    }
}
