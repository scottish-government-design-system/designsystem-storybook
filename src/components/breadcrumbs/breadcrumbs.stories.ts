import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './breadcrumbs.njk';

type BreadcrumbItem = {
    content: string
    href?: string
    isCurrent?: boolean
    isHidden?: boolean
}

export type BreadcrumbsArgs = {
    items: BreadcrumbItem[]
};

const meta: Meta<BreadcrumbsArgs> = {
    title: 'Components/Breadcrumbs',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        items: [
            {
                "content": "Home",
                "href": "#"
            },
            {
                "content": "Justice and the law",
                "href": "#"
            },
            {
                "content": "Your rights and the law",
                "href": "#"
            },
            {
                "content": "Data sharing of personal information",
                "isCurrent": true
            }
        ]
    }
};

export default meta;
type Story = StoryObj<BreadcrumbsArgs>;

export const Default: Story = {};

export const OmitCurrentPage: Story = {
    name: 'Omit current page',
    args: {
        items: (() => {
            const items = JSON.parse(JSON.stringify(meta.args.items));
            items[3].isHidden = true;
            return items
        })()
    }
}
