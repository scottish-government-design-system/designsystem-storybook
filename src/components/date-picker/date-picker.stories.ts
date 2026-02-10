import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './date-picker.njk';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

export type DatePickerArgs = {
    dateFormat?: string
    id: string
    isMultipleFields?: boolean
    label: string
    minDate?: string
    maxDate?: string
    name?: string
    placeholder?: string
};

const meta: Meta<DatePickerArgs> = {
    title: 'Components/Date picker',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        id: 'start-date',
        isMultipleFields: false,
        label: 'Start date',
        placeholder: 'dd/mm/yyyy'
    },
    argTypes: {
        dateFormat: SGDSArgTypes.select({
            default: 'DMY',
            options: ['DMY', 'MDY', 'YMD']
        })
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<DatePickerArgs>;

export const Default: Story = {
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};

export const DateRange: Story = {
    name: 'Date range',
    args: {
        maxDate: "19/09/2020",
        minDate: "09/08/2020"
    }
};

export const MDY: Story = {
    name: 'MDY format',
    args: {
        dateFormat: "MDY",
        placeholder: "mm/dd/yyyy"
    }
};

export const YMD: Story = {
    name: 'YMD format',
    args: {
        dateFormat: "YMD",
        placeholder: "yyyy/mm/dd"
    }
};

export const SeparateFields: Story = {
    name: 'Separate fields',
    args: {
        isMultipleFields: true
    }
};
