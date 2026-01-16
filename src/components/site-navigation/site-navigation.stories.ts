import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './site-navigation.njk';

export type MenuItemArgs = {
    content: string
    href?: string
    isCurrent?: boolean
}

export type SiteNavigationArgs = {
    isMobileNav?: boolean
    items: MenuItemArgs[]
    label?: string
};

const meta: Meta<SiteNavigationArgs> = {
    title: 'Components/Site navigation',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        items: [
            {
                content: "Apples",
                href: "#foo"
            },
            {
                content: "Bananas",
                href: "#bar",
                isCurrent: true
            },
            {
                content: "Cherries",
                href: "#baz"
            },
            {
                content: "Dates",
                href: "#qux"
            }
        ],
        label: 'Main navigation'
    }
};

export default meta;
type Story = StoryObj<SiteNavigationArgs>;

export const Default: Story = {};

export const MobileNav: Story = {
    name: 'Mobile navigation',
    args: {
        isMobileNav: true
    }
};
