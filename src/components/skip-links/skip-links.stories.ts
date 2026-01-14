import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './skip-links.njk';

type ComponentArgs = {
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Skip links',
    tags: ['autodocs'],
    decorators: [(Story) => `<div class="ds_inset-text"><div  class="ds_inset-text__text">Press the tab key to show the "skip links".</div></div>${Story()}`],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {};
