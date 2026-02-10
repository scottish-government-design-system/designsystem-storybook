import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './site-navigation.njk';

export type MenuItemArgs = {
    content: string
    href?: string
    isCurrent?: boolean
}

export type SiteNavigationArgs = {
    isolateMenu?: 'both' | 'desktop' | 'mobile'
    items: MenuItemArgs[]
    label?: string
};

const meta: Meta<SiteNavigationArgs> = {
    title: 'Components/Site navigation',
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
    },
    argTypes: {
        isolateMenu: {
            description: 'Show specific menus',
            options: ['both', 'mobile', 'desktop'],
            control: { type: 'select' },
            type: 'string'
        },
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<SiteNavigationArgs>;

export const Default: Story = {};

export const DesktopOnly: Story = {
    args: {
        isolateMenu: 'desktop'
    }
};

export const MobileOnly: Story = {
    args: {
        isolateMenu: 'mobile'
    }
};