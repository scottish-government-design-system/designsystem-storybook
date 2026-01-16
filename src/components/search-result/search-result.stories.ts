import type { Meta, StoryObj } from '@storybook/html';
import { MetadataItemArgs } from '../page-metadata/page-metadata.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './search-result.njk';

export type ContextItemArgs = {
    content: string
    href: string
}

export type SearchResultArgs = {
    content?: string
    contextItems: ContextItemArgs[]
    hasContext?: boolean
    hasMedia?: boolean
    hasMetadata?: boolean
    href: string
    isPromoted?: boolean
    metadataItems: MetadataItemArgs[]
    promotedTitle?: string
    title: string
};

const meta: Meta<SearchResultArgs> = {
    title: 'Components/Search results/Result',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: 'Official statistics showing emissions of greenhouse gases in Scotland over the period 1990 to 2022.',
        href: '#foo',
        title: 'Greenhouse gas statistics 1990-2022',

        contextItems: [
            {
                content: 'Environment statistics',
                href:  '#foo'
            },
            {
                content: 'Energy statistics',
                href:  '#bar'
            }
        ],
        metadataItems: [
            {
                key: 'Publication type',
                value: 'Statistics'
            },
            {
                key: 'Date',
                value: '18 June 2024'
            }
        ]
    },
    argTypes: {
        contextItems: {
            table: {
                disable: true,
            }
        },
        hasContext: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        hasMedia: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        hasMetadata: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        isPromoted: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        metadataItems: {
            table: {
                disable: true,
            }
        },
    }
};

export default meta;
type Story = StoryObj<SearchResultArgs>;

export const Default: Story = {

};

export const Metadata: Story = {
    args: {
        hasMetadata: true
    }
};

export const Context: Story = {
    args: {
        hasContext: true
    }
};

export const Media: Story = {
    args: {
        hasMedia: true
    }
};

export const Promoted: Story = {
    args: {
        isPromoted: true
    }
};

export const KitchenSink: Story = {
    name: 'Kitchen sink',
    args: {
        hasContext: true,
        hasMedia: true,
        hasMetadata: true,
        isPromoted: true,
    }
};
