import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './site-search.njk';

type ComponentArgs = {
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Site search',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {};
