import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './side-navigation.item.njk';

export type ComponentArgs = {
    href?: string
    isCurrent?: boolean
    items?: ComponentArgs[]
    title: string
}

const meta: Meta<ComponentArgs> = {
    title: 'Components/Side navigation/Item',
    tags: ['autodocs'],
    decorators: [
        (Story) => `<div class="ds_side-navigation">\n<ul class="ds_side-navigation__list">${Story()}</ul>\n</div>`
    ],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        href: '#apples',
        title: 'Apples'
    },
    argTypes: {
        isCurrent: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {};

export const Current: Story = {
    args: {
        isCurrent: true
    }
};

export const NoLink: Story = {
    args: {
        href: undefined
    }
};

export const CurrentNoLink: Story = {
    args: {
        href: undefined,
        isCurrent: true
    }
};

export const SubList: Story = {
    args: {
        href: '#apples',
        title: 'Apples',
        items: [
            {
                href: '#green-apples',
                title: 'Green apples'
            },
            {
                href: '#red-apples',
                title: 'Red apples'
            }
        ]
    }
}
