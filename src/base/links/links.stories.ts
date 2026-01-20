import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './links.njk';

export type LinkArgs = {
    content: string
};

const meta: Meta<LinkArgs> = {
    title: 'Base/Links',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {}
};

export default meta;
type Story = StoryObj<LinkArgs>;

export const Default: Story = {
    args: {
        content: `This is some <a href="#">link text</a>`
    }
};

export const LinkClass: Story = {
    name: 'Link CSS class',
    args: {
        content: `This is a <button class="ds_link" type="button">button that is styled to look like a link</button>`
    }
};

export const HeadingLinks: Story = {
    name: 'Heading links',
    args: {
        content: `<h1><a href="#">Heading 1</a></h1>
<h2><a href="#">Heading 2</a></h2>
<h3><a href="#">Heading 3</a></h3>
<h4><a href="#">Heading 4</a></h4>`
    }
};

export const ImageLink: Story = {
    name: 'Image links',
    args: {
        content: `<a href="#"><img src="/images/placeholders/thistles.jpg"></a>`
    }
};
