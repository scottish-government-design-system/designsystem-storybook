import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './back-link.njk';

export type BackLinkArgs = {
    content: string
};

const meta: Meta<BackLinkArgs> = {
    title: 'Components/Back link',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: 'Back'
    }
};

export default meta;
type Story = StoryObj<BackLinkArgs>;

export const Default: Story = {};
