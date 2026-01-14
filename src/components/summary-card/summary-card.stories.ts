import type { Meta, StoryObj } from '@storybook/html';
import { ComponentArgs as SummaryListArgs } from '../summary-list/summary-list.stories';
import { ActionArgs } from '../summary-list/summary-item.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './summary-card.njk';

type ComponentArgs = {
    actions?: ActionArgs[],
    summaryList: SummaryListArgs,
    title: string
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Summary card',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        actions: [
            {
                label: "Change"
            },
            {
                label: "Add"
            }
        ],
        summaryList: {
            listType: 'ol',
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
            ]
        },
        title: 'Summary card title'
    },
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {};

export const NoActions: Story = {
    args: {
        actions: undefined
    }
};

export const ActionsAreLinks: Story = {
    args: {
        actions: [
            {
                href: '#foo',
                label: 'Change'
            },
            {
                href: '#bar',
                label: 'Add'
            }
        ]
    }
};

export const BorderlessList: Story = {
    args: {
        summaryList: (() => {
            const summaryList = JSON.parse(JSON.stringify(meta.args.summaryList));
            summaryList.isBorderless = true;
            return summaryList;
        })()
    }
}

export const ShortKeysList: Story = {
    args: {
        summaryList: {
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
            ],
            listType: 'ol'
        }
    }
}
