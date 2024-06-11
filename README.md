# Max for Live MIDI Tool Examples

![the image of MIDI Tool example devices](thumbnail.png)

## What is this?

Examples of Max for Live MIDI tools for Ableton Live 12.

## Examples

* [Retrigger Transform](retrigger-transform/README.md) : a simple transform tool with js.
* [Scale Viewer](scale-viewer/README.md) : just shows scale info like traditional Scale MIDI effect device.
* [Separate Transform](separate-transform/README.md) : a simple transform with only pure Max.

## Memorandum of M4L development for MIDI Tools

_WIP_

### Differences between MIDI Tools and Classic Max for Live Devices 
### Basics of MIDI Tool Development
### Execute Transformation/Generation on Parameter Changes
### Fitting the Scale
### Mind the Complexity!
### Using `js` Object
### Error Messages
### Miscellaneous

* `dictionary [dict name]` message from outlets of `live.miditool.in` is a single symbol (string), however, it becomes a list of symbols after throughout prepend objects or message objects like `set $1`.

* You can not open Max Window from MIDI Transformers or Generators, however, you can see the print outputs by a Max Window window which is opened from usual M4L Instrument, MIDI effect, or Audio effect devices.<br>
(update) While Live 12.0.5, you can open Max window with keyboard shortcut. ([Release Notes](https://www.ableton.com/release-notes/live-12/#Live12.0.5PublicReleaseNotes(WIP)-MaxforLive))

* You can obtain the global scale settings by LOM API with `get root_note`, `get scale_name`, and `scale_intervals` from path `live_set`.

* You can use `scale.svg` in Max for scale-switching button. Other than the scale pic, there are new 60 SVG files added in Max 8.6. <br>
See `pictures` page in the help patch of `live.tab` for built-in SVG files.

## (Japanese) MIDIツールM4L開発メモ 

* `live.miditool.in` から出力される `dictionary [dict name]` は1つのシンボル (string型) ですが、prependオブジェクトや `set $1` といった内容のmessageオブジェクトをとおすとシンボルのリストに変わります。

* MIDIトランスフォーマー/ジェネレーターからMaxウィンドウを開くことはできませんが、従来のM4Lデバイスから開いたMaxウィンドウから、MIDIトランスフォーマー/ジェネレーターのprintオブジェクトなどで出力される内容を確認できます。<br>
（更新）Live 12.0.5で、Maxウィンドウを開くキーボードショートカットが追加されました。（[リリースノート](https://www.ableton.com/release-notes/live-12/#Live12.0.5PublicReleaseNotes(WIP)-MaxforLive)）

* グローバルスケールの設定はLOM APIの `live_set` パスに追加された `get root_note`、`get scale_name`、および `get scale_intervals` で取得できます。

* スケール設定の切り替えスイッチ用に、画像ファイル `scale.svg` がMaxに内蔵されています。それ以外にもMax 8.6では60もの内蔵SVGファイルが追加されています。<br>
内蔵SVGファイルは`live.tab`オブジェクトの`pictures`ページから確認できます。<br>

## References
_WIP_

Ableton Live 12 Reference Manual
* [MIDI Tools](https://www.ableton.com/en/live-manual/12/midi-tools/) 

Max 8 Documentation
* [Max for Live MIDI Tools](https://docs.cycling74.com/max8/vignettes/live_miditools)
* [LOM - The Live Object Model](https://docs.cycling74.com/max8/vignettes/live_object_model)
