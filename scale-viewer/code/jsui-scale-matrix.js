/**
 * @description jsui script for Scale Viewer Max for Live MIDI Transformation Tool
 * @version 1.0.2
 * @since 2024
 */
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
        mgraphics.set_source_rgba(max.getcolor('live_lcd_control_fg'));
      } else if (blackNotes.indexOf(i%12) == -1 || blackNotes.indexOf(j) == -1) {
        mgraphics.set_source_rgba(max.getcolor('live_lcd_frame'));
      } else {
        continue;
      }
      mgraphics.rectangle(i * DX + 2, (12 - j) * DY + 2, WIDTH, HEIGHT);
      mgraphics.fill();
    }
  }
}

/**
 * input note number and scaled note number to be transformed
 * @param {number} note 
 * @param {number} scaledNote 
 */
function setScale(note, scaledNote) {
  if (note >= rootNote && note < (12 + rootNote)) {
    scaleNotes[note - rootNote] = scaledNote - rootNote;
  }
}

/**
 * receive a bang to paint
 */
function bang() {
  mgraphics.redraw();
}
