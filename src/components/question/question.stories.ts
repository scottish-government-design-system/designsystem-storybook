import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './question.njk';

export type QuestionArgs = {
    errorMessage?: string
    hasError?: boolean
    hintText?: string
    legend?: string
    tagName?: 'div' | 'fieldset'
};

const meta: Meta<QuestionArgs> = {
    title: 'Components/Question',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {

    },
    argTypes: {
        errorMessage: {
            description: 'Error message to apply to a whole fieldset',
            type: 'string'
        },
        hasError: SGDSArgTypes.boolean(),
        hintText: SGDSArgTypes.hintText(),
        legend: { type: 'string' },
        tagName: SGDSArgTypes.select({
            options: ['div', 'fieldset']
        })
    }
};

export default meta;
type Story = StoryObj<QuestionArgs>;

export const Default: Story = {};

export const ErrorOnField: Story = {
    name: 'Error on field',
    args: {
        hasError: true
    }
};

export const FieldsetQuestion: Story = {
    name: 'Fieldset',
    args: {
        hintText: 'Select all that apply',
        legend: 'Do you receive any of these benefits',
        tagName: 'fieldset'
    }
};


export const ErrorOnFieldset: Story = {
    name: 'Error on fieldset',
    args: {
        errorMessage: 'You must select at least one option',
        hasError: true,
        hintText: 'Select all that apply',
        legend: 'Do you receive any of these benefits',
        tagName: 'fieldset'
    }
};
