import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './cards.njk';

export type CardsArgs = {
    background?: string
    hasBottomPadding?: boolean
};

const meta: Meta<CardsArgs> = {
    title: 'Page blocks/Cards',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasBottomPadding: true
    },
    argTypes: {
        background: {
            description: 'Background colour',
            options: ['none','ds_pb--background-secondary', 'ds_pb--background-tertiary', 'ds_pb__theme--background-secondary'],
            control: { type: 'select' },
            type: 'string'
        }
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<CardsArgs>;

export const Default: Story = {};