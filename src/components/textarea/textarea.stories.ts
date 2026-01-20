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
    play: () => {
        window.DS.initAll();
    }
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
        maxlength: 200,
        rows: 5
    },
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};

export const WithCharacterCount: Story = {
    name: 'With character count',
    args: {
        id: 'character-count',
        maxlength: 250,
        rows: 5
    },
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};

export const WithCharacterCountThreshold: Story = {
    name: 'With character count threshold',
    args: {
        countThreshold: 80,
        id: 'character-count-threshold',
        maxlength: 250,
        rows: 5,
        value: 'Mygov.scot gives people and businesses information about and access to public services in Scotland. We work closely with public sector organisations to make public services easy to find and understand.'
    },
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};
