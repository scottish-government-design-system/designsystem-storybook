import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './question-page.njk';

export type QuestionPageArgs = {
    hasAnswerSummary?: boolean
    hasBackButton?: boolean
    isErrorState?: boolean
    isFieldset?: boolean
};

const meta: Meta<QuestionPageArgs> = {
    title: 'Patterns/Question page',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasBackButton: true
    },
    argTypes: {
        hasAnswerSummary: SGDSArgTypes.boolean(),
        hasBackButton: SGDSArgTypes.boolean(),
        isErrorState: SGDSArgTypes.boolean(),
        isFieldset: SGDSArgTypes.boolean()
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<QuestionPageArgs>;

export const Default: Story = {
    args: {

    }
};

export const Error: Story = {
    args: {
        isErrorState: true
    }
};

export const Fieldset: Story = {
    args: {
        isFieldset: true
    }
};

export const AnswerSummary: Story = {
    args: {
        hasAnswerSummary: true
    }
};
