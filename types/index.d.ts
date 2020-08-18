// TypeScript Version: 3.7

import { Node } from 'unist';
import { Heading } from 'mdast';
import { Test } from 'unist-util-is';

declare namespace rehypeSlug {
  type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  interface SlugOptions {
    /**
     * Maximum heading depth to include in the table of contents,
     * This is inclusive: when set to `3`,
     * level three headings are included (those with three hashes, `###`).
     *
     * @default 6
     */
    maxDepth?: Heading['depth'];

    callback?: (res: SlugResult) => void;

    /**
     * Headings to skip, wrapped in `new RegExp('^(' + value + ')$', 'i')`.
     * Any heading matching this expression will not be present in the table of contents.
     */
    skip?: string;

    /**
     * Allows headings to be children of certain node types
     * Internally, uses `unist-util-is` to check, so `parents` can be any `is`-compatible test.
     *
     * For example, this would allow headings under either `root` or `blockquote` to be used:
     *
     * ```ts
     * anchor(tree, {parents: ['root', 'blockquote']})
     * ```
     *
     * @default the to `anchor` given `tree`, to only allow top-level headings
     */
    parents?: Test<Node> | Array<Test<Node>>;
  }
  interface SlugResult {
    id: string;
    depth: Heading['depth'];
    tagName: HeadingTag;
    text: string;
  }
}

/**
 * Generate Slugs of Heading Element.
 *
 * @param settings configuration for generating slugs of heading element
 */
declare function rehypeSlug(
  settings?: rehypeSlug.SlugOptions,
): (node: Node) => void;

export = rehypeSlug;
