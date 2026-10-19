import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './text-input.njk';
// @ts-expect-error no type defs
import ComponentTemplateLegacy from './text-input-legacy.njk';
// @ts-expect-error no type defs
import FixedWidthsTemplate from './text-input-fixed.njk';
// @ts-expect-error no type defs
import FluidWidthsTemplate from './text-input-fluid.njk';

export type TextInputArgs = {
    afterContent?: string,
    buttonIcon?: string
    buttonText?: string
    countThreshold?: number
    currencySymbol?: string
    errorMessage?: string
    hasButton?: boolean
    hasError?: boolean
    hintText?: string
    id: string
    label: string
    maxlength?: number
    name?: string
    placeholder?: string
    step?: string
    type?: string
    value?: string
    width?: string
};

export type LegacyTextInputArgs = TextInputArgs & {
    isCurrency?: boolean
}

const meta: Meta<TextInputArgs> = {
    title: 'Components/Text input',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        id: 'first-name',
        label: 'First name'
    },
    argTypes: {
        afterContent: { type: 'string' },
        buttonIcon: SGDSArgTypes.select({
            description: 'Name of the icon to use',
            options: ['arrow_upward', 'calendar_today', 'cancel', 'check_circle', 'chevron_left', 'chevron_right', 'close', 'description', 'double_chevron_left', 'double_chevron_right' ,'error', 'expand_less', 'expand_more', 'list', 'priority_high', 'search']
        }),
        buttonText: {
            description: 'Text content for the button',
            type: 'string'
        },
        countThreshold: SGDSArgTypes.countThreshold(),
        currencySymbol: {
            description: 'Text to show before user data. Intended for currency symbols. Will not behave well with multiple characters.',
            control: { type: 'select' },
            options: ['£', '$', '€', '¥', '₹', 'C$', 'CHF'],
        },
        errorMessage: SGDSArgTypes.errorMessage(),
        hasButton: SGDSArgTypes.boolean({
            description: 'Whether the component has an associated button'
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
type LegacyStory = StoryObj<LegacyTextInputArgs>;

export const Default: Story = {

};

export const KitchenSink: Story = {
    name: 'Kitchen sink',
    args: {
        afterContent: 'per kg',
        buttonIcon: 'search',
        buttonText: 'Search',
        countThreshold: 50,
        currencySymbol: '$',
        errorMessage: 'This field is required',
        hasButton: true,
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
        label: 'Price per unit, in dollars',
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

export const WithAfterContent: Story = {
    name: 'With after content',
    args: {
        label: 'Units per kilogram',
        id: 'unit-detail',
        afterContent: 'per kg'
    },
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};


export const FixedWidths: Story = {
    render: (args) => {
        return(FixedWidthsTemplate(args))
    }
}

export const FluidWidths: Story = {
    render: (args) => {
        return(FluidWidthsTemplate(args))
    }
}

export const CurrencyLegacy: LegacyStory = {
    render: (args) => {
        return(ComponentTemplateLegacy(args))
    },
    name: 'Currency (legacy)',
    args: {
        currencySymbol: '$',
        id: 'price',
        isCurrency: true,
        label: 'Price, in dollars',
        placeholder: '0.00',
        step: '.01',
        type: 'number',
        width: 'fluid-one-quarter'
    },
    argTypes: {
        currencySymbol: {
            description: 'Currency symbol to use, default is \'£\' (deprecated - use beforeContent)',
            type: 'string'
        },
        isCurrency: SGDSArgTypes.boolean({
            description: 'Whether the component is a currency field (deprecated - use beforeContent)'
        })
    }
}

export const WithButtonLegacy: LegacyStory = {
    render: (args) => {
        return(ComponentTemplateLegacy(args))
    },
    name: 'With button (legacy)',
    args: {
        buttonIcon: 'search',
        buttonText: 'Search',
        hasButton: true,
        id: 'withbutton'
    }
}
