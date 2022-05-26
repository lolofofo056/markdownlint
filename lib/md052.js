// @ts-check

"use strict";

const { addError } = require("../helpers");
const { referenceLinkData } = require("./cache");

module.exports = {
  "names": [ "MD052", "reference-links" ],
  "description": "Reference links should be valid",
  "tags": [ "links" ],
  "function": function MD052(params, onError) {
    const { lines } = params;
    const { references, definitions } = referenceLinkData();
    for (const reference of references.entries()) {
      const [ label, datas ] = reference;
      if (!definitions.has(label)) {
        for (const data of datas) {
          const [ lineIndex, index, length ] = data;
          addError(
            onError,
            lineIndex + 1,
            `Missing link reference definition "${label}"`,
            lines[lineIndex].slice(index, index + length),
            [ index + 1, length ]
          );
        }
      }
    }
  }
};
