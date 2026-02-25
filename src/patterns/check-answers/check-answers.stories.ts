import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './check-answers.njk';

export type CheckAnswersArgs = {

};

const meta: Meta<CheckAnswersArgs> = {
    title: 'Patterns/Check answers',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {

    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<CheckAnswersArgs>;

export const Default: Story = {};
