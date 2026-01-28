import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './body.njk';

export type BodyArgs = {
    content: string
};

const meta: Meta<BodyArgs> = {
    title: 'Base/Core/Body',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: `<p>Different organisations can help your business to export. Who can help depends on what you’re trying to do.</p>`
    },
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<BodyArgs>;

export const Default: Story = {};
