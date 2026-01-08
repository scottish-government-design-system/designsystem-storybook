import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './back-to-top.njk';

type ComponentArgs = {
    hasFooter?: boolean
    label: string
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Back to top',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        label: 'Back to top'
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {};

export const WithFooter: Story = {
    args: {
        hasFooter: true
    }
};
