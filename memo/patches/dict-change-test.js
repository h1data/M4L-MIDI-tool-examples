autowatch = 1;
inlets = 1;
outlets = 2;

dictionary.stringified = '';

/**
 * check if the content of dictionary changed like change object
 * output
 * - out left outlet: bang if not changed
 * - out right outlet: bang if changed
 * @param {string} dictName the name of dictionary to be checked
 */
function dictionary(dictName) {
  var strDict = new Dict(dictName).stringify();
  if (strDict != this.stringified) {
    this.stringified = strDict;
    outlet(1, 'bang');
  } else {
    outlet(0, 'bang');
  }
}
