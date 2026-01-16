import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './back-to-top.njk';

export type BackToTopArgs = {
    hasFooter?: boolean
    label: string
};

const meta: Meta<BackToTopArgs> = {
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
type Story = StoryObj<BackToTopArgs>;

export const Default: Story = {};

export const WithFooter: Story = {
    name: 'With footer',
    args: {
        hasFooter: true
    }
};
