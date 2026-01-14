import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './date-picker.njk';

type ComponentArgs = {
    dateFormat?: string
    isMultipleFields?: boolean
    label: string
    minDate?: string
    maxDate?: string
    placeholder?: string
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Date picker',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        isMultipleFields: false,
        label: 'Start date',
        placeholder: 'dd/mm/yyyy'
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};

export const DateRange: Story = {
    args: {
        maxDate: "19/09/2020",
        minDate: "09/08/2020"
    }
};

export const MDY: Story = {
    args: {
        dateFormat: "MDY",
        placeholder: "mm/dd/yyyy"
    }
};

export const YMD: Story = {
    args: {
        dateFormat: "YMD",
        placeholder: "yyyy/mm/dd"
    }
};

export const SeparateFields: Story = {
    args: {
        isMultipleFields: true
    }
};
