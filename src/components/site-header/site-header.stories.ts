import type { Meta, StoryObj } from '@storybook/html';
import { MenuItemArgs } from '../site-navigation/site-navigation.stories';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './site-header.njk';

export type SiteHeaderArgs = {
    hasNavigation?: boolean
    hasPhaseBanner?: boolean
    hasSearch?: boolean
    navItems?: MenuItemArgs[]
    siteTitle?: string
};

const meta: Meta<SiteHeaderArgs> = {
    title: 'Components/Site header',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        navItems: [
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
        ]
    },
    argTypes: {
        hasNavigation: SGDSArgTypes.boolean(),
        hasPhaseBanner: SGDSArgTypes.boolean(),
        hasSearch: SGDSArgTypes.boolean(),
        navItems: SGDSArgTypes.hidden(),
        siteTitle: {type: 'string'}
    }
};

export default meta;
type Story = StoryObj<SiteHeaderArgs>;

export const Default: Story = {
    args: {
        hasNavigation: true,
        hasPhaseBanner: true,
        hasSearch: true,
        siteTitle: 'Design System'
    }
};

export const WithSiteTitle: Story = {
    name: 'With site title',
    args: {
        siteTitle: 'Design System'
    }
};

export const WithNav: Story = {
    name: 'With nav',
    args: {
        hasNavigation: true
    }
};

export const WithPhaseBanner: Story = {
    name: 'With phase banner',
    args: {
        hasPhaseBanner: true
    }
};

export const WithSearch: Story = {
    name: 'With search',
    args: {
        hasSearch: true
    }
};
