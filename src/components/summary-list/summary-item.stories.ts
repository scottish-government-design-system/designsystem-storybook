import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './summary-item.njk';

export type ActionArgs = {
    href?: string
    label: string
}

export type SummaryItemArgs = {
    actions?: ActionArgs[]
    key: string
    value?: string | number
    values?: string[] | number[]
};

const meta: Meta<SummaryItemArgs> = {
    title: 'Components/Summary list/Item',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        key: "Have you had the grant 3 times or more since 1 May 2022?",
        value: "No",
        actions: [
            {
                label: "Change"
            }
        ]
    },
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<SummaryItemArgs>;

export const Default: Story = {};

export const CompoundAnswer: Story = {
    name: 'Compound answer',
    args: {
        key: 'Account holders',
        value: `<dl>
            <dt>Name</dt>
            <dd>Jane Smith</dd>
            <dt>Account number</dt>
            <dd>12328745337</dd>
        </dl>`
    }
};

export const MultipleAnswers: Story = {
    name: 'Multiple answers',
    args: {
        key: 'Foodie people',
        values: [
            'Annette Apple',
            'Brian Baguette',
            'Christine Camembert'
        ]
    }
};

export const MultipleActions: Story = {
    name: 'Multiple actions',
    args: {
        actions: [
            {
                label: 'Change'
            },
            {
                label: 'Delete'
            }
        ]
    }
}

export const LongAnswer: Story = {
    name: 'Long answer',
    args: {
        key: "Message body",
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper nunc ut lectus facilisis, ac ullamcorper augue molestie. Nam hendrerit nulla ut nunc laoreet porta. Etiam dignissim magna gravida sem volutpat fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque nisi nisl, varius vel purus at, accumsan posuere purus. Aliquam facilisis lacus id lorem consectetur luctus. Donec mattis vehicula ante, ac consequat diam sollicitudin iaculis."
    }
}

export const ActionsAreLinks: Story = {
    name: 'Actions are links',
    args: {
        actions: [
            {
                href: '#foo',
                label: 'Change'
            },
            {
                href: '#bar',
                label: 'Delete'
            }
        ]
    }
}
