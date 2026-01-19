import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './guide-page.njk';

export type GuidePageArgs = {

};

const meta: Meta<GuidePageArgs> = {
    title: 'Patterns/Guide page',
    tags: ['autodocs'],
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
type Story = StoryObj<GuidePageArgs>;

export const Default: Story = {};
