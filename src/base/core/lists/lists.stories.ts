import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './lists.njk';

export type ListsArgs = {
    intro?: string
    listContent: string
    hasBullets: boolean
    tagName: 'ol' | 'ul' | 'dl'
};

const meta: Meta<ListsArgs> = {
    title: 'Base/Core/Lists',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasBullets: true
    },
    argTypes: {
        intro: SGDSArgTypes.hidden(),
        listContent: SGDSArgTypes.hidden(),
        tagName: SGDSArgTypes.select({options: ['ul', 'ol', 'dl']})
    }
};

export default meta;
type Story = StoryObj<ListsArgs>;

export const Unordered: Story = {
    args: {
        intro: `<p>You can use your Blue Badge to park in certain restricted areas for free, including:</p>`,
        listContent: `<li>at on-street parking meters</li>
    <li>in pay and display bays</li>
    <li>in disabled parking spaces</li>
    <li>on single and double yellow lines if there are no loading restrictions</li>`,
        tagName: 'ul'
    }
};

export const UnorderedNested: Story = {
    name: 'Unordered nested',
    args: {
        intro: `<p>You can use your Blue Badge to park in certain restricted areas for free, including:</p>`,
        listContent: `<li>at on-street parking meters</li>
    <li>
        at on-street parking meters
        <ul>
            <li>on your street</li>
            <li>on somebody else's street</li>
            <li>on things that are not streets, even</li>
        </ul>
    </li>
    <li>in pay and display bays</li>
    <li>in disabled parking spaces</li>
    <li>on single and double yellow lines if there are no loading restrictions</li>`,
        tagName: 'ul'
    }
};

export const UnorderedNoBullets: Story = {
    name: 'Unordered, no bullets',
    args: {
        intro: `<p>You can use your Blue Badge to park in certain restricted areas for free, including:</p>`,
        listContent: `<li>at on-street parking meters</li>
    <li>in pay and display bays</li>
    <li>in disabled parking spaces</li>
    <li>on single and double yellow lines if there are no loading restrictions</li>`,
        hasBullets: false,
        tagName: 'ul'
    }
};

export const Ordered: Story = {
    args: {
        intro: `<p>Follow these 3 steps to apply:</p>`,
        listContent: `<li>Create an account.</li>
    <li>Create and complete your planning proposal.</li>
    <li>Pay the application fee.</li>`,
        tagName: 'ol'
    }
};

export const OrderedNested: Story = {
    name: 'Ordered nested',
    args: {
        intro: `<p>Follow these 3 steps to apply:</p>`,
        listContent: `<li>Create an account.</li>
    <li>
        Create and complete your planning proposal.
        <ol>
            <li>On mygov.scot</li>
            <li>With your details</li>
        </ol>
    </li>
    <li>Pay the application fee.</li>`,
        tagName: 'ol'
    }
};

export const OrderedNoNumbers: Story = {
    name: 'Ordered, no numbers',
    args: {
        intro: `<p>Follow these 3 steps to apply:</p>`,
        listContent: `<li>Create an account.</li>
    <li>Create and complete your planning proposal.</li>
    <li>Pay the application fee.</li>`,
        hasBullets: false,
        tagName: 'ol'
    }
};

export const DescriptionList: Story = {
    name: 'Description list',
    args: {
        intro: `<p>Cryptids of Cornwall:</p>`,
        listContent: `<dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>
    <dt>Morgawr</dt>
    <dd>A sea serpent.</dd>
    <dt>Owlman</dt>
    <dd>A giant owl-like creature.</dd>`,
        tagName: 'dl'
    }
};
