mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

autowatch = 1;
inlets = 1;
outlets = 0;

/** @constant width of a cell */
var WIDTH = 11;
/** @constant height of a cell */
var HEIGHT = 10;

var DX = WIDTH + 1;
var DY = HEIGHT + 1;

/** @constant black notes in key C */
var BLACK_NOTES = [1, 3, 6, 8, 10];

var rootNote = 0;
var blackNotes = [];
var scaleNotes = [];
var fgColor = [1.00, 0.68, 0.34, 1.00];
var bgColor = [0.24, 0.25, 0.29, 1.00];

/**
 * input scale dictionary
 * @param {string} dictName 
 */
function dictionary(dictName) {
  var dict = JSON.parse(new Dict(dictName).stringify());
  
  for (var i=0; i<BLACK_NOTES.length; i++) {
    blackNotes[i] = (12 + BLACK_NOTES[i] - dict.root_note) % 12;
  }
  rootNote = dict.root_note;

  mgraphics.redraw();
}

/**
 * @private
 * paint function for mgraphics
 */
paint.local = 1;
function paint() {
  for (var i=0; i<12; i++) {
    for (var j=0; j<13; j++) {
      if (scaleNotes[i] == j) {
        mgraphics.set_source_rgba(fgColor);
      } else if (blackNotes.indexOf(i%12) == -1 || blackNotes.indexOf(j) == -1) {
        mgraphics.set_source_rgba(bgColor);
      } else {
        continue;
      }
      mgraphics.rectangle(i * DX + 2, (12 - j) * DY + 2, WIDTH, HEIGHT);
      mgraphics.fill();
    }
  }
}

/**
 * set fg color from the output of live.colors
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @param {number} a
 */
function lcd_control_fg(r, g, b, a) {
  fgColor = [r, g, b, a];
  mgraphics.redraw();
}

/**
 * set bg color from the output of live.colors
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @param {number} a
 */
function lcd_frame(r, g, b, a) {
  bgColor = [r, g, b, a];
  mgraphics.redraw();
}

function setScale(note, scaledNote) {
  if (note >= rootNote && note < (12 + rootNote)) {
    scaleNotes[note - rootNote] = scaledNote - rootNote;
  }
}

function bang() {
  mgraphics.redraw();
}
