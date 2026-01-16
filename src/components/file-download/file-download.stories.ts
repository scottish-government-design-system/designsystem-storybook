import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './file-download.njk';

export type FileDownloadArgs = {
    fileIcon?: 'Audio' | 'CSV' | 'Excel' | 'File' | 'Generic' | 'Geodata' | 'ICal' | 'Ico' | 'Image' | 'ODF' | 'ODG' | 'ODP' | 'ODS' | 'ODT' | 'PDF' | 'PPT' | 'RTF' | 'Text' | 'Video' | 'Word' | 'XML' | 'Zip'
    hasCoverImage?: boolean
    hasMetadata?: boolean
    isHighlighted?: boolean
};

const meta: Meta<FileDownloadArgs> = {
    title: 'Components/File download',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        fileIcon: 'PDF',
        hasMetadata: true
    },
    argTypes: {
        fileIcon: {
            options: ['Audio', 'Csv', 'Excel', 'File', 'Generic', 'Geodata', 'Ical', 'Ico', 'Image', 'Odf', 'Odg', 'Odp', 'Ods', 'Odt', 'Pdf', 'Ppt', 'Rtf', 'Text', 'Video', 'Word', 'Xml', 'Zip'],
            control: { type: 'select' },
            type: 'string'
        },
        hasCoverImage: {
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
        isHighlighted: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        }
    }
};

export default meta;
type Story = StoryObj<FileDownloadArgs>;

export const Default: Story = {};

export const Highlighted: Story = {
    args: {
        isHighlighted: true
    }
};
export const CoverImage: Story = {
    name: 'Has cover image',
    args: {
        hasCoverImage: true
    }
};

export const NoMetadata: Story = {
    name: 'No metadata',
    args: {
        hasMetadata: false
    }
};
