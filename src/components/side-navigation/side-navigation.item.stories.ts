import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './side-navigation.item.njk';

export type SideNavigationItemArgs = {
    href?: string
    isCurrent?: boolean
    items?: SideNavigationItemArgs[]
    title: string
}

const meta: Meta<SideNavigationItemArgs> = {
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
        isCurrent: SGDSArgTypes.boolean(),
    }
};

export default meta;
type Story = StoryObj<SideNavigationItemArgs>;

export const Default: Story = {};

export const Current: Story = {
    args: {
        isCurrent: true
    }
};

export const NoLink: Story = {
    name: 'No link',
    args: {
        href: undefined
    }
};

export const CurrentNoLink: Story = {
    name: 'No link on current',
    args: {
        href: undefined,
        isCurrent: true
    }
};

export const SubList: Story = {
    name: 'With sub list',
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
