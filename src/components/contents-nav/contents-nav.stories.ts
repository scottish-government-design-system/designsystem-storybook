import type { Meta, StoryObj } from '@storybook/html';
import { ContentsNavItemArgs } from './contents-nav.item.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './contents-nav.njk';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

export type ContentsNavArgs = {
    items: ContentsNavItemArgs[]
    title: string
};

const meta: Meta<ContentsNavArgs> = {
    title: 'Components/Contents nav',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        items: [
            {
                content: 'Apply for Blue Badge',
                href: '#foo'
            },
            {
                content: 'Eligibility',
                href: '#bar'
            },
            {
                content: 'Using your Blue Badge',
                isCurrent: true
            },
            {
                content: 'Report a lost, stolen or misused Blue Badge',
                href: '#qux'
            },
            {
                content: 'Changing or handing back a Blue Badge',
                href: '#quux'
            }
        ],
        title: 'Contents'
    },
    argTypes: {
        items: SGDSArgTypes.hidden()
    }
};

export default meta;
type Story = StoryObj<ContentsNavArgs>;

export const Default: Story = {};
