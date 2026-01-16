import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './inset-text.njk';

export type InsetTextArgs = {
    content: string
    tag?: string
};

const meta: Meta<InsetTextArgs> = {
    title: 'Components/Inset text',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: '<p>You may be able to <a href="#inset">apply for free school meals</a> at the same time as you apply for the clothing grant.</p>'
    },
    argTypes: {
        tag: {
            type: 'string'
        }
    }
};

export default meta;
type Story = StoryObj<InsetTextArgs>;

export const Default: Story = {};

export const WithTag: Story = {
    name: 'With tag',
    args: {
        tag: 'note'
    }
};
