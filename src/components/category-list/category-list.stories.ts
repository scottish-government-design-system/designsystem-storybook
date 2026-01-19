import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';
import { CategoryItemArgs } from '../category-item/category-item.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './category-list.njk';

export type CategoryListArgs = {
    headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    isCards?: boolean
    isGrid?: boolean
    isOrdered?: boolean
    items: CategoryItemArgs[]
};

const meta: Meta<CategoryListArgs> = {
    title: 'Components/Category list',
    tags: ['autodocs'],
    render: (args) => {
        return (ComponentTemplate(args))
    },
    decorators: [
        (Story) => `<style>.docs-story:has(.ds_card) {background-color: #f8f8f8}</style>${Story()}`
    ],
    args: {
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
            },
            {
                content: 'Includes information on safety at sea and managing crew',
                heading: 'Marine and fisheries',
                href: '#quux'
            }
        ]
    },
    argTypes: {
        headingLevel: SGDSArgTypes.headingLevel({ description: 'Heading level for the category item titles' }),
        isGrid: SGDSArgTypes.boolean({
            description: 'Display the list in a grid layout'
        }),
        isOrdered: SGDSArgTypes.boolean({
            description: 'Use an ordered list `<ol>` instead of an unordered list `<ul>`',
        }),
        isCards: SGDSArgTypes.boolean(),
        items: SGDSArgTypes.hidden()
    }
};

export default meta;
type Story = StoryObj<CategoryListArgs>;

export const Default: Story = {};

export const Grid: Story = {
    args: {
        isGrid: true
    }
};

export const Cards: Story = {
    args: {
        isCards: true,
        isGrid: true
    }
};
