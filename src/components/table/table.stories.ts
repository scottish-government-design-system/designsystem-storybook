import type { Meta, StoryObj } from '@storybook/html';
import argTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './table.njk';

type CellArgs = {
    align?: 'left' | 'right'
    content: string,
    scope?: 'col' | 'row'
}

type RowArgs = {
    cells: CellArgs[]
}

type ComponentArgs = {
    caption: string
    smallScreen: 'none' | 'scrolling' | 'boxes'
    head: CellArgs[],
    rows: RowArgs[]
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Table',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        caption: "Highest peaks in Scotland",
        head: [
            {
                content: "Name",
                scope: "col"
            },
            {
                content: "Height (m)",
                scope: "col"
            },
            {
                content: "Height (ft)",
                scope: "col"
            },
            {
                content: "Region",
                scope: "col"
            },
            {
                content: "County",
                scope: "col"
            },
            {
                content: "Grid reference",
                scope: "col"
            }
        ],
        rows: [
            {
                cells: [
                    {
                        content: "Ben Nevis"
                    },
                    {
                        content: "1,345",
                        align: "right"
                    },
                    {
                        content: "4,411",
                        align: "right"
                    },
                    {
                        content: "Fort William to Loch Treig &amp; Loch Leven"
                    },
                    {
                        content: "Highland"
                    },
                    {
                        content: "NN166712"
                    }
                ]
            },
            {
                cells: [
                    {
                        content: "Ben Nevis"
                    },
                    {
                        content: "1,309",
                        align: "right"
                    },
                    {
                        content: "4,295",
                        align: "right"
                    },
                    {
                        content: "Cairngorms"
                    },
                    {
                        content: "Aberdeenshire/Moray"
                    },
                    {
                        content: "NN988989"
                    }
                ]
            },
            {
                cells: [
                    {
                        content: "Braeriach"
                    },
                    {
                        content: "1,296",
                        align: "right"
                    },
                    {
                        content: "4,252",
                        align: "right"
                    },
                    {
                        content: "Cairngorms"
                    },
                    {
                        content: "Aberdeenshire/Highland"
                    },
                    {
                        content: "NN953999"
                    }
                ]
            },
            {
                cells: [
                    {
                        content: "Cairn Toul"
                    },
                    {
                        content: "1,291",
                        align: "right"
                    },
                    {
                        content: "4,236",
                        align: "right"
                    },
                    {
                        content: "Cairngorms"
                    },
                    {
                        content: "Aberdeenshire"
                    },
                    {
                        content: "NN963972"
                    }
                ]
            }
        ],
        smallScreen: 'none'
    },
    argTypes: {
        head: {
            table: {
                disable: true,
            }
        },
        rows: {
            table: {
                disable: true,
            }
        },
        smallScreen: {
            // description: 'Name of the icon to use',
            options: ['none', 'boxes', 'scrolling'],
            control: { type: 'radio' },
            type: 'string'
        }
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};

export const Boxes: Story = {
    args: {
        smallScreen: 'boxes'
    }
};

export const Scrolling: Story = {
    args: {
        smallScreen: 'scrolling'
    }
};
