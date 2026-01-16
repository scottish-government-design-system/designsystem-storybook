import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './pagination.njk';

export type PaginationItemArgs = {
    content?: string
    isCurrent?: boolean
    isEllipsis?: boolean
    isLast?: boolean
    isNext?: boolean
    isPrevious?: boolean
    href?: string
}

export type PaginationArgs = {
    items: PaginationItemArgs[]
    label: string
};

const meta: Meta<PaginationArgs> = {
    title: 'Components/Pagination',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        label: "Search result pages",
        items: [
            {
                content: "1",
                isCurrent: true,
                href: "#"
            },
            {
                content: "2",
                href: "#"
            },
            {
                content: "3",
                href: "#"
            },
            {
                content: "4",
                href: "#"
            },
            {
                content: "5",
                href: "#"
            },
            {
                content: "5",
                isEllipsis: true
            },
            {
                content: "Next",
                href: "#",
                isNext: true
            }
        ]
    },
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<PaginationArgs>;

export const Default: Story = {};

export const MiddlePage: Story = {
    name: 'Middle page',
    args: {
        items: [
            {
                content: 'Previous',
                href: "#",
                isPrevious: true
            },
            {
                content: "1",
                href: "#",
            },
            {
                isEllipsis: true
            },
            {
                content: "9",
                href: "#"
            },
            {
                content: "10",
                href: "#",
                isCurrent: true
            },
            {
                content: "11",
                href: "#"
            },
            {
                isEllipsis: true
            },
            {
                content: "21",
                href: "#"
            },
            {
                content: "Next",
                href: "#",
                isNext: true
            }
        ]
    }
};
