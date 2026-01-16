import type { Meta, StoryObj } from '@storybook/html';
import argTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './link-list.njk';

export type LinkListArgs = {
    hasAllItemOptions?: boolean
    headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    isBorderless?: boolean
    isTwoColumns?: boolean
    items: any[]
};

const meta: Meta<LinkListArgs> = {
    title: 'Components/Link list',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
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
        hasAllItemOptions: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        headingLevel: argTypes.headingLevel(),
        isBorderless: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        isTwoColumns: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        items: {
            table: {
                disable: true,
            }
        },
    }
};

export default meta;
type Story = StoryObj<LinkListArgs>;

export const Default: Story = {};

export const DifferentHeadingLevel: Story = {
    name: 'Different heading level',
    args: {
        headingLevel: 'h4'
    }
};

export const NoBorder: Story = {
    name: 'No border',
    args: {
        isBorderless: true
    }
};

export const TwoPerRow: Story = {
    name: 'Two items per row',
    args: {
        isTwoColumns: true
    }
};

export const AllItemOptions: Story = {
    name: 'All item options shown',
    args: {
        hasAllItemOptions: true
    }
};
