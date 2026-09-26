/* Daylight, in the Labs material.
   Glass on the bar and the two cards, chips in flat glass, and headings that
   arrive a word at a time. Everything here is off under reduced motion, and the
   lens is Chromium only: elsewhere the same surfaces stay frosted. */
import { initLabsUI } from './labs-ui.js';

initLabsUI({
  glass: [
    { sel: '.nav', spec: 1, lens: [13, 52, 9, 1.95], vars: { '--gl-tint': '.5', '--gl-tint-dark': '.56', '--gl-drop': '0 1px 0 rgba(28,51,38,.09)' } },
    { sel: '.download-card', spec: 1, lens: [14, 39, 9, 1.7], vars: { '--gl-tint': '.68', '--gl-tint-dark': '.6' } },
    { sel: '.source-card', lens: [12, 34, 8, 1.7], vars: { '--gl-tint': '.6', '--gl-tint-dark': '.55' } },
    { sel: '.preset-chip', flat: 1, vars: { '--gl-tint': '.5', '--gl-tint-dark': '.5' } }
  ],
  headings: 'h1, h2'
});
