import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './back-link.njk';

type ComponentArgs = {
    label: string
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Back link',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        label: 'Back'
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {};
