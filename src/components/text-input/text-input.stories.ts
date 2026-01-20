import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './text-input.njk';

export type TextInputArgs = {
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

const meta: Meta<TextInputArgs> = {
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
        buttonIcon: SGDSArgTypes.select({
            description: 'Name of the icon to use',
            options: ['arrow_upward', 'calendar_today', 'cancel', 'check_circle', 'chevron_left', 'chevron_right', 'close', 'description', 'double_chevron_left', 'double_chevron_right' ,'error', 'expand_less', 'expand_more', 'list', 'priority_high', 'search']
        }),
        buttonText: {
            desctiption: 'Text content for the button',
            type: 'string'
        },
        countThreshold: SGDSArgTypes.countThreshold(),
        currencySymbol: {
            description: 'Currency symbol to use (default is \'£\')',
            type: 'string'
        },
        errorMessage: SGDSArgTypes.errorMessage(),
        hasButton: SGDSArgTypes.boolean({
            description: 'Whether the component has an associated button'
        }),
        isCurrency: SGDSArgTypes.boolean({
            description: 'Whether the component is a currency field'
        }),
        hasError: SGDSArgTypes.hasError(),
        hintText: SGDSArgTypes.hintText(),
        id: SGDSArgTypes.id(),
        label: SGDSArgTypes.label(),
        maxlength: SGDSArgTypes.maxlength(),
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
        width: SGDSArgTypes.inputWidth()
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<TextInputArgs>;

export const Default: Story = {

};

export const KitchenSink: Story = {
    name: 'Kitchen sink',
    args: {
        countThreshold: 50,
        errorMessage: 'This field is required',
        hasError: true,
        hintText: 'Please enter your first or given name',
        id: 'kitchensink',
        maxlength: 20,
        value: 'Cholmondley',
        width: 'fixed-20'
    },
    parameters: {
        docs: {
            story: { autoplay: true },
        }
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
    name: 'With button',
    args: {
        buttonIcon: 'search',
        buttonText: 'Search',
        hasButton: true,
        id: 'withbutton'
    }
}

export const WithCharacterCount: Story = {
    name: 'With character count',
    args: {
        id: 'character-count',
        maxlength: 20,
        width: 'fixed-20'
    },
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};
