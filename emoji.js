Emoji = {};

Emoji.convert = function (str) {
    if (typeof str !== "string") {
        return "";
    }

    return str.replace(/:[\+\-a-z0-9_]+:/gi, function(match) {
        var imgName = match.slice(1, -1),
            path = '/packages/seriousm:emoji-continued/img/' + imgName + '.png';
        return "<img class='emoji' title='" + match + "' src='" + path + "'/>";
    });
};

// borrowed code from https://github.com/meteor/meteor/blob/devel/packages/showdown/template-integration.js
if (Package.templating) {
  var Template = Package.templating.Template,
      UI = Package.ui.UI, // implied by `templating`
      HTML = Package.htmljs.HTML, // implied by `ui`
      Blaze = Package.blaze.Blaze; // implied by `ui`

  UI.registerHelper("emoji", Template.__create__('emoji', function () {
    var view = this,
        content = '';

    if (view.templateContentBlock) {
      // this is for the block usage eg: {{#emoji}}:smile:{{/emoji}}
      content = Blaze.toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
    }
    else {
      // this is for the direct usage eg: {{> emoji ":blush:"}}
      content = view.parentView.dataVar.get();
    }
    return HTML.Raw(Emoji.convert(content));
  }));
}