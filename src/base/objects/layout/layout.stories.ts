import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './layout.njk';

type AreaArgs = {
    className: string
    content?: string
}

export type LayoutArgs = {
    areas: AreaArgs[]
    className?: string
};

const meta: Meta<LayoutArgs> = {
    title: 'Base/Objects/Layout',
    decorators: [
        (Story) => `<style>
.ds_layout__header,
.ds_layout__partner,
.ds_layout__navigation,
.ds_layout__content,
.ds_layout__footer,
.ds_layout__sidebar,
.ds_layout__feedback,
.ds_layout__grid,
.ds_layout__list {
    border: 0.125rem dashed currentColor;
    padding: 1em;
}

.ds_layout__header {
    background-color: color-mix(in srgb, white, #002d54 15%);
    border-color: #002d64;
}
.ds_layout__partner {
    background-color: color-mix(in srgb, white, #2b9c93 15%);
    border-color: #2b9c93;
}
.ds_layout__navigation {
    background-color: color-mix(in srgb, white, #6a2063 15%);
    border-color: #6a2063;
}
.ds_layout__content {
    background-color: color-mix(in srgb, white, #e5682a 15%);
    border-color: #e5682a;
}
.ds_layout__footer {
    background-color: color-mix(in srgb, white, #0b4c0b 15%);
    border-color: #0b4c0b;
}
.ds_layout__sidebar {
    background-color: color-mix(in srgb, white, #5d9f3c 15%);
    border-color: #5d9f3c;
}
.ds_layout__feedback {
    background-color: color-mix(in srgb, white, #592c20 15%);
    border-color: #592c20;
}
.ds_layout__grid {
    background-color: color-mix(in srgb, white, #ca72a2 15%);
    border-color: #ca72a2;
}
.ds_layout__list {
    background-color: color-mix(in srgb, white, #002d54 15%);
    border-color: #002d54;
}

</style>${Story()}`
    ],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {

    },
    argTypes: {

    },
    parameters: {
        layout: 'fullscreen'
    }
};

const areas = {
    content: {
        className: 'ds_layout__content',
        content: 'The article content'
    },
    feedback: {
        className: 'ds_layout__feedback',
        content: 'Feedback form'
    },
    footer: {
        className: 'ds_layout__footer',
        content: 'The form footer, such as answer summary'
    },
    grid: {
        className: 'ds_layout__grid',
        content: 'Grid content'
    },
    header: {
        className: 'ds_layout__header',
        content: 'A ds_article-header component or other header content'
    },
    list: {
        className: 'ds_layout__list',
        content: 'List content'
    },
    navigation: {
        className: 'ds_layout__navigation',
        content: 'Optional navigation'
    },
    partner: {
        className: 'ds_layout__partner',
        content: 'Optional partner branding'
    },
    sidebar: {
        className: 'ds_layout__sidebar',
        content: 'Sidebar content, such as related links'
    }
}

function areaWithContent(area: AreaArgs, content: string) {
    const newArea = JSON.parse(JSON.stringify(area));
    newArea.content = content;
    return newArea;
}

export default meta;
type Story = StoryObj<LayoutArgs>;

export const Default: Story = {
    args: {
        areas: [
            areas.header,
            areas.partner,
            areas.navigation,
            areas.content,
            areas.sidebar,
            areas.feedback
        ]
    }
};

export const Article: Story = {
    args: {
        className: 'ds_layout--article',
        areas: [
            areas.header,
            areas.partner,
            areas.content,
            areas.sidebar,
            areas.feedback
        ]
    }
};

export const Guide: Story = {
    args: {
        className: 'ds_layout--guide',
        areas: [
            areas.header,
            areas.partner,
            areas.navigation,
            areas.content,
            areas.sidebar,
            areas.feedback
        ]
    }
};

export const CategoryList: Story = {
    name: 'Category list',
    args: {
        className: 'ds_layout--category-list',
        areas: [
            areas.header,
            areas.content,
            areas.list,
            areas.grid,
            areas.feedback
        ]
    }
};

export const SearchResults: Story = {
    name: 'Search results',
    args: {
        className: 'ds_layout--search-results',
        areas: [
            areas.header,
            areaWithContent(areas.content, 'Content, including a search form'),
            areaWithContent(areas.list, 'Main content area for the results'),
            areas.feedback
        ]
    }
};

export const SearchResultsWithFilter: Story = {
    name: 'Search results with filter',
    args: {
        className: 'ds_layout--search-results--filters',
        areas: [
            areas.header,
            areaWithContent(areas.content, 'Content, including a search form'),
            areaWithContent(areas.sidebar, 'Search filters'),
            areaWithContent(areas.list, 'Main content area for the results'),
            areas.feedback
        ]
    }
};

export const QuestionPage: Story = {
    name: 'Question page',
    args: {
        className: 'ds_layout--question-page',
        areas: [
            areas.header,
            areas.partner,
            areas.navigation,
            areaWithContent(areas.content, 'The form content'),
            areas.footer,
            areas.sidebar,
            areas.feedback
        ]
    }
};
