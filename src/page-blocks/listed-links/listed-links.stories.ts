import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './listed-links.njk';

export type ListedLinksArgs = {
    background?: string
    hasBottomPadding?: boolean
    headingLabel?: string
    headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    isBorderless?: boolean
    isTwoColumns?: boolean
    items: any[]
};

const meta: Meta<ListedLinksArgs> = {
    title: 'Page blocks/Listed links',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasBottomPadding: true,
        isBorderless: false,
        isTwoColumns: false,
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
            },
            {
                heading: 'Waste and energy',
                content: 'Find advice and support to help your business become more environmentally aware and efficient'
            },
            {
                heading: 'Marine and fisheries',
                content: 'Includes information on safety at sea and managing crew'
            }
        ]
    },
    argTypes: {
        background: {
            description: 'Background colour',
            options: ['none','ds_pb--background-secondary', 'ds_pb--background-tertiary', 'ds_pb__theme--background-secondary'],
            control: { type: 'select' },
            type: 'string'
        },
        headingLabel: SGDSArgTypes.hidden(),
        headingLevel: SGDSArgTypes.headingLevel()
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<ListedLinksArgs>;

export const Default: Story = {};

export const LatestNews: Story = {
    name: 'Latest news',
    args: {
        headingLabel: 'Latest news',
        isBorderless: true,
        isTwoColumns: false,
        items: [
            {
                content: 'More gigabit-capable connectivity for the region.',
                heading: 'Dumfries and Galloway receives broadband boost',
                hasImage: true,
                hasMetadata: true,
                headingLevel: 'h3'
            },
            {
                content: 'Broadband is not just about speed, it is about opportunity. Our interim evaluation of the R100 programme shows how improved connectivity is boosting productivity, reducing isolation, and helping Scotland move towards a fairer, greener future.',
                heading: 'The real impact of R100',
                hasImage: true,
                hasMetadata: true,
                headingLevel: 'h3'
            },
            {
                content: 'R100 Programme boosts productivity and wellbeing in Scotland.',
                heading: 'R100 benefiting businesses and communities',
                hasImage: true,
                hasMetadata: true,
                headingLevel: 'h3'
            }
        ]
    }
};

export const LatestPublications: Story = {
    name: 'Latest publications',
    args: {
        headingLabel: 'Latest publications',
        isBorderless: true,
        isTwoColumns: false,
        items: [
            {
                content: 'More gigabit-capable connectivity for the region.',
                heading: 'Dumfries and Galloway receives broadband boost',
                hasImage: false,
                hasMetadata: true,
                headingLevel: 'h3'
            },
            {
                content: 'Broadband is not just about speed, it is about opportunity. Our interim evaluation of the R100 programme shows how improved connectivity is boosting productivity, reducing isolation, and helping Scotland move towards a fairer, greener future.',
                heading: 'The real impact of R100',
                hasImage: false,
                hasMetadata: true,
                headingLevel: 'h3'
            },
            {
                content: 'R100 Programme boosts productivity and wellbeing in Scotland.',
                heading: 'R100 benefiting businesses and communities',
                hasImage: false,
                hasMetadata: true,
                headingLevel: 'h3'
            }
        ]
    }
};