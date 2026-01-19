import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './multiple-question-page.njk';

export type MultipleQuestionPageArgs = {
    isErrorState?: boolean
};

const meta: Meta<MultipleQuestionPageArgs> = {
    title: 'Patterns/Multiple question page',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {

    },
    parameters: {
        layout: 'fullscreen'
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<MultipleQuestionPageArgs>;

export const Default: Story = {
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};

export const Error: Story = {
    args: {
        isErrorState: true
    }
};
