import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './link-list.njk';

export type LinkListBlockArgs = {
    background?: string
    title: string
    removeBottomPadding?: boolean
    isBorderless?: boolean
    isTwoColumns?: boolean
    items: any[]
    hasImage: boolean
    hasMetadata: boolean
};

const meta: Meta<LinkListBlockArgs> = {
    title: 'Page blocks/Link list',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        removeBottomPadding: false,
        title: 'publications',
        items: [
            {
                heading: 'Environment and countryside',
                content: 'Access to and protection of the countryside and managing wildlife on your land'
            },
            {
                heading: 'Environmental Impact Assessment (EIA)',
                content: 'Find out about Environmental Impact Assessments (EIAs) in your area'
            },
            {
                heading: 'Farming and rural issues',
                content: 'Guidance for farming, animal health, agriculture and food businesses in Scotland'
            }
        ],
        hasMetadata: true,
        hasImage: false,
        isBorderless: true
    },
    argTypes: {
        background: SGDSArgTypes.backgroundColour(),
        removeBottomPadding: SGDSArgTypes.boolean(),
        isBorderless: SGDSArgTypes.boolean(),
        isTwoColumns: SGDSArgTypes.boolean(),
        items: SGDSArgTypes.hidden()
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<LinkListBlockArgs>;

export const Default: Story = {};

export const LatestNews: Story = {
    args: {
        title: 'news',
        hasImage: true
    }
};