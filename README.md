# Meteor Emoji 

A [Meteor](http://www.meteor.com/) package to convert emoji symbols into images (Using Github/Campfire/etc. emoji convention).
See http://www.emoji-cheat-sheet.com/ for a list of available emoji.

## Installation

Using Meteor Package System, add the emoji package from [Atmosphere](https://atmosphere.meteor.com/):
```
meteor add seriousm:emoji-continued
```

## Usage

### Javascript
In your app, use `Emoji.convert(text)` to emojify strings. All substrings of the general form `:emoji_name:` will
be replaced with `<img>` tags that *should* 
[just work](http://codinghorror.typepad.com/.a/6a0120a85dcdae970b0128776ff992970c-pi). The converter isn't smart about
emoji that don't actually exist.

### Html
If you wish to insert an Emoji inside your Html you can use the helper: `emoji` followed by the name of the emoji you wish to display. E.g:
```
{{> emoji ":alien:"}}
```
Or you can emojify a whole block. E.g:
```
{{#emoji}}:smile:, not :cry:{{/emoji}}
```

If you like, you can use this in combination with the `showdown` package of meteor like this:
```
{{#markdown}}{{#emoji}}your_raw_markdown_text{{/emoji}}{{/markdown}}
```

## Styling

The `<img>` tags are conveniently adorned with the `emoji` class, so set emoji-specific styling through that.

## Credits

Thanks to [AlarmingCow](https://github.com/AlarmingCow/) for writing it but it seems you abandon your work, now I will continue.