/* global showdown ko */
var ViewModel = function() {
    this.converter = new showdown.Converter();
    this.pad = ko.observable('Write something...');   
     this.md = ko.computed(function() {
        return this.converter.makeHtml(this.pad());
     }, this);
};

ko.applyBindings(new ViewModel());
