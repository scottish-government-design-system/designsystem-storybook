import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './error-summary-position.njk';

export type ErrorSummaryPositionArgs = {

};

const meta: Meta<ErrorSummaryPositionArgs> = {
    title: 'Patterns/Error summary position',
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
type Story = StoryObj<ErrorSummaryPositionArgs>;

export const Default: Story = {};
