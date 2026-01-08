import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './site-header.njk';

type ComponentArgs = {
    hasNavigation?: boolean
    hasPhaseBanner?: boolean
    hasSearch?: boolean
    siteTitle?: string
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Site header',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasNavigation: false,
        hasPhaseBanner: false,
        hasSearch: false,
        siteTitle: ''
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {
    args: {
        hasNavigation: true,
        hasPhaseBanner: true,
        hasSearch: true,
        siteTitle: 'Design System'
    }
};

export const WithSiteTitle: Story = {
    args: {
        siteTitle: 'Design System'
    }
};

export const WithNav: Story = {
    args: {
        hasNavigation: true
    }
};

export const WithPhaseBanner: Story = {
    args: {
        hasPhaseBanner: true
    }
};

export const WithSearch: Story = {
    args: {
        hasSearch: true
    }
};
