(function($) {
    tinymce.create('tinymce.plugins.InstructionalTextsample', {
        init : function(ed) {
            // This adds support for this type of instructional text into the template editor
            if(AJS.Rte.Placeholder && AJS.Rte.Placeholder.addPlaceholderType) {
                AJS.Rte.Placeholder.addPlaceholderType({
                    type: 'Sample',
                    label: AJS.I18n.getText("property.panel.textplaceholder.display.sample"),
                    tooltip: AJS.I18n.getText("property.panel.textplaceholder.display.sample.tooltip"),
                    // The following defines how the placeholder can be activated. It is optional, and if omitted will have the following default values
                    activation: {
                        click: false,
                        keypress: true
                    }
                });
            }
            // This adds support to responding to this instruction text being replaced in the editor
            AJS.bind('editor.text-placeholder.activated', function(e, data) {
                if(data && data.placeholderType === "sample") {
                    // do something special here for this type of instruction text
                }
            });
        },
        getInfo : function() {
            return {
                longname : 'Instructional Text Type Sample',
                author : 'ProgressSoft',
                authorurl : 'https://www.progressoft.com',
                version : tinymce.majorVersion + "." + tinymce.minorVersion
            };
        }
    });
    tinymce.PluginManager.add('instructionaltextsample', tinymce.plugins.InstructionalTextsample);
})(AJS.$);


AJS.Rte.BootstrapManager.addTinyMcePluginInit(function(settings) {
    settings.plugins += ",instructionaltextsample";
});

Copy
