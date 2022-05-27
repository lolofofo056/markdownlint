# Reference Links and Images

## Valid Links

Full reference link: [text][label]

Collapsed reference link: [label][]

Shortcut reference link: [label]

Same line: [text][label] [label][] [label]

Mixed case: [TEXT][LABEL] [LABEL][] [LABEL]

With spaces: [text][label with spaces] [text][ label  with spaces ]

With nested brackets: [t[ex]t][label]

With inline content: [*text*][label]

With inline code span: [`code`][label]

Shortcut inline code span: [`code`]

Standard link: [text](https://example.com/standard)

## Invalid Links

Missing label: [text][missing] {MD052}

Mixed valid/invalid: [text][label] [text][missing] {MD052}

## Non-Links

Space: [text] [wrong]

Empty: [text][ ]

Code span: `[text][wrong]`

## Valid Images

Image only: ![text][image]

Image in link: [![text][image]][label]

## Invalid Images

Image only: ![text][missing] {MD052}

Image in link: [![text][missing]][label] {MD052}

## Valid Labels

[label]: https://example.com/label
[ label with  spaces ]: https://example.com/label-with-spaces
[image]: https://example.com/image
[`code`]: https://example.com/code

## Invalid Labels

Duplicate:
[label]: {MD053}

Unused:
[unused]: {MD053}

## Valid Links and Images after Labels

Link and image: [text][label] [![text][image]][label]

## More Invalid Links and Images after Labels

Bad link with image [![text][image]][missing] {MD052}

## Shortcut One-Way Handling

Validates the label: [shortcut]

[shortcut]: https://example.com/shortcut

Not flagged: [ignored]
