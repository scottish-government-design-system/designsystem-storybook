import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './browse.njk';

type BrowseFormats = 'Cards' | 'Image cards' | 'Grid' | 'List';

export type BrowseArgs = {
    background?: string
    hasBottomPadding?: boolean
    format: BrowseFormats
};

const meta: Meta<BrowseArgs> = {
    title: 'Page blocks/Browse',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasBottomPadding: true,
        format: 'Cards'
    },
    argTypes: {
        background: {
            description: 'Background colour',
            options: ['none','ds_pb--background-secondary'],
            control: { type: 'select' },
            type: 'string'
        },
        format: {
            options: ['Cards', 'Image cards', 'Grid', 'List'],
            control: { type: 'radio' },
            type: 'string'
        }
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<BrowseArgs>;

export const Default: Story = {};
