// @ts-check

"use strict";

const { addError, ellipsify } = require("../helpers");
const { referenceLinkData } = require("./cache");

module.exports = {
  "names": [ "MD053", "link-references" ],
  "description": "Link reference definitions should be meaningful",
  "tags": [ "links" ],
  "function": function MD053(params, onError) {
    const { lines } = params;
    const { references, definitions, duplicateDefinitions } =
      referenceLinkData();
    // Look for unused
    for (const definition of definitions.entries()) {
      const [ label, lineIndex ] = definition;
      if (!references.has(label)) {
        addError(
          onError,
          lineIndex + 1,
          `Unused link reference definition "${label}"`,
          ellipsify(lines[lineIndex]),
          [ 1, lines[lineIndex].length ],
          {
            "deleteCount": -1
          }
        );
      }
    }
    // Look for duplicate
    for (const duplicateDefinition of duplicateDefinitions) {
      const [ label, lineIndex ] = duplicateDefinition;
      addError(
        onError,
        lineIndex + 1,
        `Duplicate link reference definition "${label}"`,
        ellipsify(lines[lineIndex]),
        [ 1, lines[lineIndex].length ],
        {
          "deleteCount": -1
        }
      );
    }
  }
};
