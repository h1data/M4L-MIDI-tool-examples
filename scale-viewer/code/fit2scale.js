/**
 * @description js script to fitting 
 * @author h1data
 * @since 2024
 * @requires Max 8.6, Ableton Live 12
 */

autowatch = 1;
inlets = 1;
outlets = 1;

/**
 * output scale map for coll object
 * @param {string} dictName name of dictionary (scale)
 * @returns {Array<number, number, number>} pitch, scaled pitch, scale index (zero origin)
 */
function dictionary(dictName) {
  /** [{pitch, scaleIndex}] */
  var scaleMap = {};
  var inDict = JSON.parse(new Dict(dictName).stringify());
  var intervals = inDict.scale_intervals;

  // push root note + 1 octove
  intervals.push(intervals[0] + 12);

  var scaleIndex = 0;
  for (var i=0; i<12; i++) {
    var diff = Infinity;

    for (var j=0; j<2; j++) {
      var currentIndex = (scaleIndex + j) % intervals.length;
      var currentDiff = Math.abs(intervals[currentIndex] - i);
      if (currentDiff == 0) {
        scaleIndex = currentIndex;
        break;
      }
      if (currentDiff < diff) {
        scaleIndex = currentIndex;
        diff = currentDiff;
      }
    }
    scaleMap[i] = {
      pitch: intervals[scaleIndex],
      scaleIndex: scaleIndex % (intervals.length - 1)
    };
  }
  outlet(0, 'clear');
  for (var i=0; i<128; i++) {
    var pitch = (12 + i - inDict.root_note) % 12;
    outlet(0,
      i,
      scaleMap[pitch].pitch + inDict.root_note + 12 * Math.floor((i - inDict.root_note) / 12),
      scaleMap[pitch].scaleIndex);
  }
}
