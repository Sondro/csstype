export interface IExtendedProperty extends Partial<MDN.Property> {
  shorthand: boolean;
}

export const properties: { [property: string]: IExtendedProperty } = {
  /**
   * https://drafts.csswg.org/css-overflow-3/#max-lines
   * Should be added to `mdn-browser-compat-data` when https://github.com/mdn/data/pull/207 is merged
   */
  '-webkit-line-clamp': {
    syntax: 'none | <integer>',
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-overflow-3/#block-ellipsis
   * https://github.com/mdn/data/pull/207
   */
  'block-overflow': {
    syntax: 'clip | ellipsis | <string>',
    shorthand: false,
  },
  /**
   * https://drafts.csswg.org/css-overflow-3/#line-clamp
   * https://github.com/mdn/data/pull/207
   */
  'line-clamp': {
    syntax: 'none | <integer>',
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-overflow-3/#max-lines
   * https://github.com/mdn/data/pull/207
   */
  'max-lines': {
    syntax: 'none | <integer>',
    shorthand: false,
  },
  /**
   * https://drafts.csswg.org/css-scroll-anchoring/#exclusion-api
   * https://github.com/mdn/data/pull/206
   */
  'overflow-anchor': {
    syntax: 'auto | none',
    shorthand: false,
  },
  /**
   * https://drafts.csswg.org/css-overflow-3/#logical
   * https://github.com/mdn/data/pull/207
   */
  'overflow-block': {
    syntax: "<'overflow'>",
    shorthand: false,
  },
  /**
   * https://drafts.csswg.org/css-overflow-3/#logical
   * https://github.com/mdn/data/pull/207
   */
  'overflow-inline': {
    syntax: "<'overflow'>",
    shorthand: false,
  },
};

export const syntaxes: { [property: string]: MDN.Syntax } = {
  /**
   * https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-outline-radius
   * https://github.com/mdn/data/pull/208
   */
  'outline-radius': {
    syntax: '<length> | <percentage>',
  },
};