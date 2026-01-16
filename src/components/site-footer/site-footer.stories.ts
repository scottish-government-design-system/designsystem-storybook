import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './site-footer.njk';

export type FooterLinkArgs = {
    content: string
    href: string
}

export type SiteFooterArgs = {
    hasLicense?: boolean
    hasLinks?: boolean
    hasOrg?: boolean
    links?: FooterLinkArgs[]
};

const meta: Meta<SiteFooterArgs> = {
    title: 'Components/Site footer',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasLicense: true,
        hasLinks: true,
        hasOrg: true,
        links: [
            {
                content: "Privacy",
                href: "#"
            },
            {
                content: "Cookies",
                href: "#"
            },
            {
                content: "Accessibility",
                href: "#"
            }
        ],
    }
};

export default meta;
type Story = StoryObj<SiteFooterArgs>;

export const Default: Story = {};

export const NoLinks: Story = {
    name: 'No links',
    args: {
        hasLinks: false
    }
};

export const NoCopyright: Story = {
    name: 'No copyright/license',
    args: {
        hasLicense: false
    }
};

export const NoOrg: Story = {
    name: 'No organisation',
    args: {
        hasOrg: false
    }
};

export const LotsOfLinks: Story = {
    name: 'Lots of links',
    args: {
        links: [
            {
                content: "Privacy",
                href: "#"
            },
            {
                content: "Cookies",
                href: "#"
            },
            {
                content: "Accessibility",
                href: "#"
            },
            {
                content: "Privacy",
                href: "#"
            },
            {
                content: "Cookies",
                href: "#"
            },
            {
                content: "Accessibility Link",
                href: "#"
            },
            {
                content: "Privacy Link",
                href: "#"
            },
            {
                content: "Cookies Link",
                href: "#"
            },
            {
                content: "Accessibility link thats long",
                href: "#"
            },
            {
                content: "Privacy",
                href: "#"
            },
            {
                content: "Cookies",
                href: "#"
            },
            {
                content: "Accessibility",
                href: "#"
            },
            {
                content: "Privacy",
                href: "#"
            },
            {
                content: "Cookies",
                href: "#"
            },
            {
                content: "Accessibility Link",
                href: "#"
            },
            {
                content: "Privacy Link",
                href: "#"
            },
            {
                content: "Cookies Link",
                href: "#"
            },
            {
                content: "Accessibility link thats long",
                href: "#"
            }
        ]
    }
};
