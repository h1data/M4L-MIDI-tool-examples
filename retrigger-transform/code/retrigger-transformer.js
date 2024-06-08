/**
 * @description js script for retrigger-transformer Max for Live device
 * @author h1data
 * @since 2024
 */
autowatch = 1;
inlets = 1;
outlets = 1;

var grid = 0;
var gate = 1.0;
var factor = 16;
var interval = 0.25;  // 4/16

/**
 * receives note context when transform before dictionary function runs
 * @param {string} attr 'dictionary name' of "dictionary 'dictionary name'" ($2)
 */
function setContext(attr) {
  var context = JSON.parse(new Dict(attr).stringify());
  // post('context', JSON.stringify(context), '\n');
  if (grid == 1) {
    interval = context.grid.interval;
  } else {
    interval = 4.0 / factor;
  }
}

/**
 * receives note lists when transform
 * @param {string} attr // "dictionary 'dictionary name'"
 */
function dictionary(attr) {
  var inNotes = JSON.parse(new Dict(attr).stringify()).notes;
  // post(JSON.stringify(inNotes), '\n');
  var outNotes = [];

  inNotes.forEach(  // see Array.forEach()
    function(inNote) {
      var remain = inNote.duration;
      var startTime = inNote.start_time;
      while (remain > 0) {
        outNotes.push(
          { // no need to set note_id
            pitch: inNote.pitch,
            start_time: startTime,
            duration: Math.min(interval * gate, remain),
            velocity: inNote.velocity,
            mute: inNote.mute,
            probability: inNote.probability,
            velocity_deviation: inNote.velocity_deviation,
            release_velocity: inNote.release_velocity
          }
        );
        startTime += interval;
        remain -= interval;
      }
    }
  );
  var outDict = new Dict();
  // post(JSON.stringify(outNotes), '\n');
  outDict.parse(JSON.stringify({'notes': outNotes}));
  outlet(0, 'dictionary', outDict.name);
}

/**
 * receives
 * @param {number} attr grid value (0 or 1)
 */
function setGrid(attr) {
  grid = attr;
}

/**
 * receives factor value
 * @param {number} attr factor value
 */
function setFactor(attr) {
  factor = attr;
}

/**
 * receives gate value
 * @param {number} attr gate value 
 */
function setGate(attr) {
  gate = attr;
}
