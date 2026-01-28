import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './page.njk';

type AreaArgs = {
    content?: string
    isStandardFooter?: boolean
}

export type PageArgs = {
    pageBottom?: AreaArgs
    pageMiddle?: AreaArgs
    pageTop?: AreaArgs
};

const meta: Meta<PageArgs> = {
    title: 'Base/Objects/Page',
    tags: ['autodocs'],
    decorators: [
        (Story) => `<style>
.ds_page__top,
.ds_page__middle,
.ds_page__bottom {
    border: 0.125rem dashed currentColor;
}

.ds_page__top {
    background-color: color-mix(in srgb, white, #002d54 20%);
    border-color: #002d54
}
.ds_page__middle {
    background-color: color-mix(in srgb, white, #2b9c93 20%);
    border-color: #2b9c93
}
.ds_page__bottom {
    background-color: color-mix(in srgb, white, #6a2063 20%);
    border-color: #6a2063
}
</style>${Story()}`
    ],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        pageBottom: {
            content: '<div class="ds_wrapper">Bottom: Footer anchored to bottom</div>'
        },
        pageMiddle: {
            content: '<div class="ds_wrapper">Middle: Main content</div>'
        },
        pageTop: {
            content: '<div class="ds_wrapper">Top: skip links, notifications, header and navigation</div>'
        }
    },
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<PageArgs>;

export const Default: Story = {};

export const CategoryLower: Story = {
    name: 'Category lower',
    args: {
        pageMiddle: {
            content: `<div class="ds_wrapper">
    Middle: Main content
</div>
<div class="ds_category-lower  ds_pre-footer-background">
    <div class="ds_wrapper">Full width content area with different background</div>
</div>`
        }
    }
};

export const StandardFooter: Story = {
    name: 'Standard footer',
    args: {
        pageBottom: {
            isStandardFooter: true
        }
    }
};
