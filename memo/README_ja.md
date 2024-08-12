※作成中です。しばしお待ちを。。

# (Japanese) MIDIツールM4L開発メモ 

* `live.miditool.in` から出力される `dictionary [dict name]` は1つのシンボル（string型）ですが、prependオブジェクトや `set $1` といった内容のmessageオブジェクトをとおすとシンボルのリストに変わります。

* MIDIトランスフォーマー/ジェネレーターからMaxウィンドウを開くことはできませんが、従来のM4Lデバイスから開いたMaxウィンドウから、MIDIトランスフォーマー/ジェネレーターのprintオブジェクトなどで出力される内容を確認できます。<br>
（更新）Live 12.0.5で、Maxウィンドウを開くキーボードショートカットが追加されました。（[リリースノート](https://www.ableton.com/release-notes/live-12/#Live12.0.5PublicReleaseNotes(WIP)-MaxforLive)）

* グローバルスケールの設定はLOM APIの `live_set` パスに追加された `get root_note`、`get scale_name`、および `get scale_intervals` で取得できます。

* スケール設定の切り替えスイッチ用に、画像ファイル `scale.svg` がMaxに内蔵されています。それ以外にもMax 8.6では60もの内蔵SVGファイルが追加されています。<br>
内蔵SVGファイルは`live.tab`オブジェクトの`pictures`ページから確認できます。
