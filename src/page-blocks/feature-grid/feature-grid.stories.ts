import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './feature-grid.njk';

export type FeatureGridArgs = {
    background?: string
    hasBottomPadding?: boolean
    numberItems?: string
};

const meta: Meta<FeatureGridArgs> = {
    title: 'Page blocks/Feature grid',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasBottomPadding: true,
        numberItems: 'Two'
    },
    argTypes: {
        background: {
            description: 'Background colour',
            options: ['none','ds_pb--background-secondary', 'ds_pb--background-tertiary', 'ds_pb__theme--background-secondary'],
            control: { type: 'select' },
            type: 'string'
        },
        numberItems: {
            description: 'Items in grid',
            options: ['Two','Three', 'Four'],
            control: { type: 'select' },
            type: 'string'
        }
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<FeatureGridArgs>;

export const Default: Story = {};