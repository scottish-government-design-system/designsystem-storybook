import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './phase-banner.njk';

type ComponentArgs = {
    tagText: string
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Phase banner',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        tagText: 'Beta'
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {};
