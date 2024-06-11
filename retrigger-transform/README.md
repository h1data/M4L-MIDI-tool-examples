# Retrigger Transformation

![the image of Retrigger Transformer for Ableton Live 12](retrigger-transform.png)

## What is this?

A simple example of a MIDI Transformer which is the new feature of Ableton Live 12 with Max for Live.

It divides notes by `Factor` note length.

## Attention!
**!!! This device is not for practical music workflow !!!**

Built-in `Arpeggiate` Transformer can perform as same as this device by setting `Distance` to 0sd.

## Dependency Environments
Ableton Live 12 Suite / Max 8.6 or later

## [Download](https://github.com/h1data/M4L-MIDI-tool-examples/raw/main/retrigger-transform/Retrigger.amxd).

## Parameters

* `Factor`<br>
Represents the interval of transformed notes. 4 is for a quarter note.

* `Grid`<br>
When enabled, target notes are divided with the grid of the current MIDI clip.<br>
The `Factor` setting would be ignored.

* `Gate`<br>
The duration of transformed notes in percent of `Factor` length.
