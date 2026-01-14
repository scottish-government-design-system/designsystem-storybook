import type { Meta, StoryObj } from '@storybook/html';
import { ComponentArgs as StepArgs } from './step.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './step-navigation.njk';

type ComponentArgs = {
    isSmall?: boolean
    steps: StepArgs[],
    title?: string
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Step navigation',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        isSmall: false,
        steps: [
            {
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
                value: '1'
            },
            {
                content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul>
                        <li>
                            <a href="#">Link 1</a>
                        </li>
                        <li>
                            <a href="#">Link 2</a>
                        </li>
                    </ul>`,
                heading: 'Bananas',
                type: 'and',
                value: '1'
            },
            {
                content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul>
                        <li>
                            <a href="#">Link 1</a>
                        </li>
                        <li>
                            <a href="#">Link 2</a>
                        </li>
                    </ul>`,
                isCurrent: true,
                isOpen: true,
                heading: 'Cherries',
                type: 'number',
                value: '2'
            },
            {
                content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul>
                        <li>
                            <a href="#">Link 1</a>
                        </li>
                        <li>
                            <a href="#">Link 2</a>
                        </li>
                    </ul>`,
                heading: 'Dates',
                type: 'or',
                value: '2'
            },
            {
                content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul>
                        <li>
                            <a href="#">Link 1</a>
                        </li>
                        <li>
                            <a href="#">Link 2</a>
                        </li>
                    </ul>`,
                heading: 'Elderberry',
                type: 'number',
                value: '3'
            }
        ],
        title: 'Fruit steps'
    },
    argTypes: {

    },

    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {};

export const Small: Story = {
    args: {
        isSmall: true
    }
}
