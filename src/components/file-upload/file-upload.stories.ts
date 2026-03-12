import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './file-upload.njk';

export type FileUploadArgs = {

};

const meta: Meta<FileUploadArgs> = {
    title: 'Components/File upload',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        errorMessage: 'Please select a file',
        label: 'Select a file'
    },
    argTypes: {
        accept: { type: 'string' },
        errorMessage: SGDSArgTypes.errorMessage(),
        hasError: SGDSArgTypes.hasError(),
        hintText: SGDSArgTypes.hintText(),
        id: SGDSArgTypes.id(),
        isMultiple: SGDSArgTypes.boolean(),
        label: SGDSArgTypes.label(),
        name: { type: 'string' }
    },
    play: () => {
        const items = Array.from(document.querySelectorAll('.ds_file-upload'));
        items.forEach((item: any) => {
            if (!item.classList.contains('js-initialised')) {
                const fileUpload = new window.DS.components.FileUpload(item);
                fileUpload.init();
            }
        });
    }
};

export default meta;
type Story = StoryObj<FileUploadArgs>;

export const Default: Story = {
    args: {
        id: 'file-upload-default',
    },
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};

export const Error: Story = {
    args: {
        id: 'file-upload-error',
        isError: true
    }
};

export const WithAcceptParam: Story = {
    args: {
        accept: 'image/*',
        id: 'file-upload-with-accept',
        label: 'Select your image'
    }
};

export const Multiple: Story = {
    args: {
        id: 'file-upload-multiple',
        isMultiple: true,
        label: 'Select files'
    }
};

export const KitchenSink: Story = {
    args: {
        errorMessage: 'Please select at least one file',
        hasError: true,
        hintText: 'The files must be no larger than 10MB each',
        id: 'file-upload-kitchen-sink',
        isMultiple: true,
        label: 'Select files'
    }
}
