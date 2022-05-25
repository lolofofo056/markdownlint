# Reference Links

## Links

Full reference link: [text][label]

Collapsed reference link: [label][]

Shortcut reference link: [label]

Same line: [text][label] [label][]

Mixed case: [TEXT][LABEL] [LABEL][] [LABEL]

With spaces: [text][label with spaces] [text][ label  with  spaces ]

With nested brackets: [t[ex]t][label]

With inline content: [*text*][label]

Not a reference link (space): [text] [wrong]

Not a reference link (empty): [text][ ]

Standard link: [text](https://example.com/standard)

Missing label: [text][missing] {MD052}

Mixed: [text][label] [text][missing] {MD052}

## Images

![text][image]

[![text][image]][label]

[![text][missing]][label] {MD052}

[![text][image]][missing] {MD052}

## Labels

[label]: https://example.com/label
[ label with spaces ]: https://example.com/label-with-spaces
[image]: https://example.com/image

Duplicate:
[label]: {MD053}

Unused:
[unused]: {MD053}

## More Links and Images

After link reference definition: [text][label] [![text][image]][label]
