import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './step.njk';

export type ComponentArgs = {
    content: string
    heading: string
    isCurrent?: boolean
    isOpen?: boolean
    type: 'number' | 'and' | 'or'
    value: string | number,
    parentIsSmall?: boolean,
    index?: number
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Step navigation/Step',
    tags: ['autodocs'],
    decorators: [(Story) => '<div class="ds_step-navigation">\n<div class="ds_accordion">\n<ol class="ds_step-navigation__list">' + Story() + '</ol>\n</div>\n</div>'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        isCurrent: false,
        isOpen: false,
        content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ol>
                <li>
                    <a id="target-link" href="/my/target/link">Link 1</a>
                </li>
                <li>
                    <a href="#">Link 2</a>
                </li>
            </ol>`,
        heading: 'Apples',
        type: 'number',
        value: '1',
        index: 0
    },
    argTypes: {
        index: {
            table: {
                disable: true,
            }
        },
        type: {
            // description: 'Name of the icon to use',
            options: ['number', 'and', 'or'],
            control: { type: 'radio' },
            type: 'string'
        }
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {};
