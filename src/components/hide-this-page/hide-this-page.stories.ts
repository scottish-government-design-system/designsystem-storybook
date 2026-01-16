import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './hide-this-page.njk';

export type HideThisPageArgs = {
    escapeUrl?: string
};

const meta: Meta<HideThisPageArgs> = {
    title: 'Components/Hide this page',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        escapeUrl: 'https://www.bbc.co.uk/weather'
    },
    argTypes: {
        escapeUrl: {
            description: 'The URL to take the user to',
            type: 'string'
        }
    }
};

export default meta;
type Story = StoryObj<HideThisPageArgs>;

export const Default: Story = {};
