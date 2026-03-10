import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './hide-this-page.njk';

export type HidePageArgs = {

};

const meta: Meta<HidePageArgs> = {
    title: 'Patterns/Hide this page',
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
type Story = StoryObj<HidePageArgs>;

export const Default: Story = {};
