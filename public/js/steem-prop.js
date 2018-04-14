/* global showdown ko */
var ViewModel = function() {
  this.converter = new showdown.Converter();
  this.pad = ko.observable('Write something...');

  this.md = ko.computed(function() {
    return this.converter.makeHtml(this.pad());
  }, this);

  this.syncScroll = function(d, e) {
    document.getElementById('preview').scrollTop = e.target.scrollTop;
  };
};

ko.applyBindings(new ViewModel());
