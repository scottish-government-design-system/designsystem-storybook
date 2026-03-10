import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './contents-nav.item.njk';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

export type ContentsNavItemArgs = {
    content: string
    href?: string
    isCurrent?: boolean
}

const meta: Meta<ContentsNavItemArgs> = {
    title: 'Components/Contents nav/Item',
    decorators: [
        (Story) => `<ul class="ds_contents-nav__list">\n${Story()}\n</ul>`
    ],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
            content: 'Apply for Blue Badge',
            href: '#foo'
    },
    argTypes: {
        isCurrent: SGDSArgTypes.boolean()
    }
};

export default meta;
type Story = StoryObj<ContentsNavItemArgs>;

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

export const NoLinkCurrent: Story = {
    name: 'Current item no link',
    args: {
        href: undefined,
        isCurrent: true
    }
};
