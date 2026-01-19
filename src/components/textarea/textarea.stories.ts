import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './textarea.njk';

export type TextareaArgs = {
    countThreshold?: number
    errorMessage?: string
    hasError?: boolean
    hintText?: string
    id: string
    label: string
    maxlength?: number
    name?: string
    placeholder?: string
    rows?: number
    value?: string
};

const meta: Meta<TextareaArgs> = {
    title: 'Components/Textarea',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        label: 'Description',
        id: 'description'
    },
    argTypes: {
        countThreshold: SGDSArgTypes.countThreshold(),
        errorMessage: SGDSArgTypes.errorMessage(),
        hasError: SGDSArgTypes.hasError(),
        hintText: SGDSArgTypes.hintText(),
        id: SGDSArgTypes.id(),
        label: SGDSArgTypes.label(),
        maxlength: SGDSArgTypes.maxlength(),
        name: { type: 'string' },
        placeholder: {type: 'string'},
        rows: {type: 'number'},
        value: {type: 'string'}
    },
};

export default meta;
type Story = StoryObj<TextareaArgs>;

export const Default: Story = {};

export const KitchenSink: Story = {
    name: 'Kitchen sink',
    args: {
        value: 'Nothing seems to do anything when I click on it. I am using Megabrowser 3.8 on an OmniComputer 5000 and I\'ve disabled all of my plugins.\n\nThis problem didn\'t start happening until two weeks ago but now I can\'t use this tool at all.',
        errorMessage: 'This field is required',
        hasError: true,
        hintText: 'Please describe the problem you are having',
        id: 'kitchensink',
        rows: 6
    }
};
