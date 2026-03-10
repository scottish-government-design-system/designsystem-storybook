import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './breadcrumbs.njk';

type BreadcrumbItem = {
    content: string
    href?: string
    isCurrent?: boolean
}

export type BreadcrumbsArgs = {
    isOmitCurrentPage?: boolean
    items: BreadcrumbItem[]
};

const meta: Meta<BreadcrumbsArgs> = {
    title: 'Components/Breadcrumbs',
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
    },
    argTypes: {
        isOmitCurrentPage: SGDSArgTypes.boolean(),
        items: SGDSArgTypes.hidden()
    }
};

export default meta;
type Story = StoryObj<BreadcrumbsArgs>;

export const Default: Story = {};

export const OmitCurrentPage: Story = {
    name: 'Omit current page',
    args: {
        isOmitCurrentPage: true
    }
}
