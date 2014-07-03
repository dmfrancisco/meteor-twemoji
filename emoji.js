Emoji = {};

Emoji.convert = function (str) {
    if (typeof str !== "string") {
        return "";
    }

    return str.replace(/:[\+\-a-z0-9_]+:/gi, function(match) {
        var imgName = match.slice(1, -1);
        var path = '/packages/emoji-continued/img/' + imgName + '.png';
        return "<img class='emoji' title='" + match + "' src='" + path + "'/>";
    });
};

// borrowed code from https://github.com/meteor/meteor/blob/devel/packages/showdown/template-integration.js
if (Package.ui) {
  var UI = Package.ui.UI;
  var HTML = Package.htmljs.HTML; // implied by `ui`
  Package.ui.UI.registerHelper('emoji', UI.block(function () {
    var self = this;
    
    if (self.__content){
      // this is for the block usage eg: {{#emoji}}:smile:{{/emoji}}
      return function () {
        var text = UI.toRawText(self.__content, self /*parentComponent*/);
        return HTML.Raw(Emoji.convert(text));
      };
    }
    else
    {
      // this is for the direct usage eg: {{> emoji ":smile:"}}
      return function(){
        return HTML.Raw(Emoji.convert(self.parent.data()));
      };
    }
  }));
}