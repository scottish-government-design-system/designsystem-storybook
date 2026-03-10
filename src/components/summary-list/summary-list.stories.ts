import type { Meta, StoryObj } from '@storybook/html';
import { SummaryItemArgs } from './summary-item.stories';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './summary-list.njk';

export type SummaryListArgs = {
    hasNoActions?: boolean
    hasShortKeys?: boolean
    isBorderless?: boolean
    items: SummaryItemArgs[],
    listType: 'ol' | 'ul'
};

const meta: Meta<SummaryListArgs> = {
    title: 'Components/Summary list',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        items: [
            {
                key: "Have you had the grant 3 times or more since 1 May 2022?",
                value: "No",
                actions: [
                    {
                        label: "Change"
                    }
                ]
            },
            {
                key: "Which council area do you live in?",
                value: "City of Edinburgh",
                actions: [
                    {
                        label: "Change"
                    },
                    {
                        label: "Remove"
                    }
                ]
            },
            {
                key: "Do you work?",
                value: "Yes",
                actions: [
                    {
                        label: "Change"
                    }
                ]
            },
            {
                key: "Will you lose earnings because you need to self-isolate?",
                value: "Yes",
                actions: [
                    {
                        label: "Change"
                    }
                ]
            },
            {
                key: "Have you tested positive for Covid?",
                value: "No - I need a PCR test or to rebook a PCR test",
                actions: [
                    {
                        label: "Change"
                    }
                ]
            }
        ],
        listType: 'ol'
    },
    argTypes: {
        hasNoActions: SGDSArgTypes.boolean(),
        hasShortKeys: SGDSArgTypes.boolean(),
        isBorderless: SGDSArgTypes.boolean(),
        listType: SGDSArgTypes.select({options: ['ol', 'ul']})
    }
};

export default meta;
type Story = StoryObj<SummaryListArgs>;

export const Default: Story = {};

export const NoActions: Story = {
    name: 'No actions',
    args: {
        hasNoActions: true
    }
};

export const NoBorder: Story = {
    name: 'No border',
    args: {
        isBorderless: true
    }
};

export const ShortKeys: Story = {
    name: 'Short keys',
    args: {
        hasShortKeys: true,
        items: [
            {
                key: "Name",
                value: "Joe Bloggs"
            },
            {
                key: "Date and time",
                value: "17 December 2022, 04:36"
            },
            {
                key: "Subject",
                value: "General question"
            },
            {
                key: "Message title",
                value: "This is the message title"
            },
            {
                key: "Message body",
                value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper nunc ut lectus facilisis, ac ullamcorper augue molestie. Nam hendrerit nulla ut nunc laoreet porta. Etiam dignissim magna gravida sem volutpat fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque nisi nisl, varius vel purus at, accumsan posuere purus. Aliquam facilisis lacus id lorem consectetur luctus. Donec mattis vehicula ante, ac consequat diam sollicitudin iaculis."
            }
        ]
    }
};
