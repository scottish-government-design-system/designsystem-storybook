import type { Meta, StoryObj } from '@storybook/html';
import argTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './select.njk';

export type OptionArgs = {
    content: string
    isSelected?: boolean
    value?: string
}

export type SelectArgs = {
    errorMessage?: string
    hasError?: boolean
    hintText?: string
    id: string
    label: string
    name?: string
    options: OptionArgs[]
    value?: string
    width?: string
};

const meta: Meta<SelectArgs> = {
    title: 'Components/Select',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        id: 'component',
        label: 'Choose a component',
        options: [
            {
                content: '',
                value: ''
            },
            {
                content: 'Accordion',
                value: 'accordion'
            },
            {
                content: 'Breadcrumbs',
                value: 'breadcrumbs'
            },
            {
                content: 'Button',
                value: 'button'
            }
        ]
    },
    argTypes: {
        errorMessage: argTypes.errorMessage(),
        hasError: argTypes.hasError(),
        hintText: argTypes.hintText(),
        id: argTypes.id(),
        label: argTypes.label(),
        name: {type: 'string'},
        value: {type: 'string'},
        width: argTypes.inputWidth()
    }
};

export default meta;
type Story = StoryObj<SelectArgs>;

export const Default: Story = {};

export const KitchenSink: Story = {
    name: 'Kitchen sink',
    args: {
        value: 'button',
        errorMessage: 'This field is required',
        hasError: true,
        hintText: 'Choose a component to learn more about how it works',
        id: 'kitchensink',
        width: 'fluid-one-third'
    }
};

export const SelectedItem: Story = {
    name: 'Selected item',
    args: {
        id: 'selected-item',
        options: (() => {
            let options = JSON.parse(JSON.stringify(meta.args.options))
            options[2].isSelected = true;
            return options;
        })()
    }
};
