import type { Meta, StoryObj } from '@storybook/html';
import { SideNavigationItemArgs } from './side-navigation.item.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './side-navigation.njk';

export type SideNavigationArgs = {
    ariaLabel: string
    items: SideNavigationItemArgs[]
};

const meta: Meta<SideNavigationArgs> = {
    title: 'Components/Side navigation',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        ariaLabel: 'Section',
        items: [
            {
                href: '#apples',
                title: 'Apples'
            },
            {
                href: '#bananas',
                isCurrent: true,
                title: 'Bananas'
            },
            {
                href: '#cherries',
                title: 'Cherries'
            },
            {
                href: '#dates',
                title: 'Dates'
            }
        ]
    },
    argTypes: {
        items: {
            table: {
                type: {
                    summary: 'SideNavigationItem[]'
                }
            }
        },
    }
};

export default meta;
type Story = StoryObj<SideNavigationArgs>;

export const Default: Story = {};

export const NestedNavigation: Story = {
    name: 'Nested navigation',
    args: {
        items: [
            {
                href: '#apples',
                title: 'Apples',
                items: [
                    {
                        href: '#green-apples',
                        title: 'Green apples',
                        items: [
                            {
                                href: '#bramley',
                                title: 'Bramley',
                                isCurrent: true,
                            },
                            {
                                href: '#granny-smith',
                                title: 'Granny Smith'
                            }
                        ]
                    },
                    {
                        href: '#red-apples',
                        title: 'Red apples'
                    }
                ]
            },
            {
                href: '#bananas',
                title: 'Bananas'
            },
            {
                href: '#cherries',
                title: 'Cherries'
            },
            {
                href: '#dates',
                title: 'Dates'
            }
        ]
    }
};
