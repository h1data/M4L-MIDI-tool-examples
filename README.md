# Retrigger Transformer

## What is this?

A simple example of a MIDI Transformer which is the new feature of Ableton Live 12 with Max for Live.

It divides notes by `Factor` note length.

## Attention!
**!!! This device is not for practical music workflow !!!**

Built-in `Arpeggiate` Transformer can perform as same as this device by setting `Distance` to 0sd.

## Dependency Environments
Ableton Live 12 / Max 8.6 or later

## Download

from Retrigger Transformer.amxd link above or the link [here](https://github.com/h1data/M4L-retrigger-transformer/raw/main/Retrigger%20Transformer.amxd).

## Parameters

* `Factor`<br>
Represents the interval of transformed notes. 4 is for a quarter note.

* `Grid`<br>
When enabled, target notes are divided with the grid of the current MIDI clip.<br>
The `Factor` setting would be ignored.

* `Gate`<br>
The duration of transformed notes in percent of `Factor` length.

## Memorandum of M4L development for MIDI Transformer/Generator 

* `dictionary [dict name]` message from outlets of `live.miditool.in` is a single symbol (string), however, it becomes a list of symbols after throughout prepend objects or message objects like `set $1`.

* You can not open Max Window from MIDI Transformers or Generators, however, you can see the print outputs by a Max Window window which is opened from usual M4L Instrument, MIDI effect, or Audio effect devices.

* You can obtain the global scale settings by LOM API with `get root_note`, `get scale_name`, and `scale_intervals` from path `live_set`.

## (Japanese) MIDIトランスフォーマー/ジェネレーターM4L開発メモ 

* `live.miditool.in` から出力される `dictionary [dict name]` は1つのシンボル (string型) ですが、prependオブジェクトや `set $1` といった内容のmessageオブジェクトをとおすとシンボルのリストに変わります。

* MIDIトランスフォーマー/ジェネレーターからMaxウィンドウを開くことはできませんが、従来のM4Lデバイスから開いたMaxウィンドウから、MIDIトランスフォーマー/ジェネレーターのprintオブジェクトなどで出力される内容を確認できます。

* グローバルスケールの設定はLOM APIの `live_set` パスに追加された `get root_note`、`get scale_name`、および `get scale_intervals` で取得できます。
