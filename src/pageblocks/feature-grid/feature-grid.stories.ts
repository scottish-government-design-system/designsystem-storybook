import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './feature-grid.njk';

export type FeatureGridItemArgs = {
    heading: string
    headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	href?: string
	content?: string
    image?: string
    imageAlt?: string
    imageSmall?: boolean
};

export type FeatureGridBlockArgs = {
    background?: string
    removeBottomPadding?: boolean
    contentLayout: 2 | 3 | 4
    items: FeatureGridItemArgs[]
};

const meta: Meta<FeatureGridBlockArgs> = {
    title: 'Page blocks/Feature grid',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        removeBottomPadding: false,
        contentLayout: 2,
        items: [
            {
                content: 'Access to and protection of the countryside and managing wildlife on your land',
                heading: 'Environment and countryside',
                href: '#foo'
            },
            {
                content: 'Find out about Environmental Impact Assessments (EIAs) in your area',
                heading: 'Environmental Impact Assessment (EIA)',
                href: '#bar'
            },
            {
                content: 'Guidance for farming, animal health, agriculture and food businesses in Scotland',
                heading: 'Farming and rural issues',
                href: '#baz'
            },
            {
                content: 'Find advice and support to help your business become more environmentally aware and efficient',
                heading: 'Waste and energy',
                href: '#qux'
            }
        ]
    },
    argTypes: {
        background: SGDSArgTypes.backgroundColour(),
        removeBottomPadding: SGDSArgTypes.boolean(),
        contentLayout: {
            description: 'Show sample content items',
            options: [2, 3, 4],
            control: { type: 'select' },
            type: 'number'
        }
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<FeatureGridBlockArgs>;

export const Default: Story = {};

export const WithImage: Story = {
    args: {
        contentLayout: 2,
        items: [
            {
                content: 'Access to and protection of the countryside and managing wildlife on your land',
                heading: 'Environment and countryside',
                href: '#foo',
                image: 'thistles',
                imageAlt: 'Thistles'
            },
            {
                content: 'Find out about Environmental Impact Assessments (EIAs) in your area',
                heading: 'Environmental Impact Assessment (EIA)',
                href: '#bar'
            }
        ]
    }
};

export const WithSmallerMobileImage: Story = {
    args: {
        contentLayout: 3,
        items: [
            {
                content: 'Access to and protection of the countryside and managing wildlife on your land',
                heading: 'Environment and countryside',
                href: '#foo',
                image: 'thistles',
                imageAlt: 'Thistles',
                imageSmall: true
            },
            {
                content: 'Find out about Environmental Impact Assessments (EIAs) in your area',
                heading: 'Environmental Impact Assessment (EIA)',
                href: '#bar'
            },
            {
                content: 'Guidance for farming, animal health, agriculture and food businesses in Scotland',
                heading: 'Farming and rural issues',
                href: '#baz'
            }
        ]
    }
};

export const WithAlternateHeadingAndNoLinks: Story = {
    args: {
        contentLayout: 3,
        items: [
            {
                content: 'Access to and protection of the countryside and managing wildlife on your land',
                heading: 'Environment and countryside',
                headingLevel: 'h3'
            },
            {
                content: 'Find out about Environmental Impact Assessments (EIAs) in your area',
                heading: 'Environmental Impact Assessment (EIA)',
                headingLevel: 'h3'
            },
            {
                content: 'Guidance for farming, animal health, agriculture and food businesses in Scotland',
                heading: 'Farming and rural issues',
                headingLevel: 'h3'
            }
        ]
    }
};