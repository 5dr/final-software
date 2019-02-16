"use strict";

try {
    angular.module("commonControlsTranslations");
} catch (e) {
    angular.module("commonControlsTranslations", [ "pascalprecht.translate" ]);
}

angular.module("commonControlsTranslations").config([ "$translateProvider", function($translateProvider) {
    var translations = {
        tooltips: {
            playground: {
                "tab-tooltip": "my cool tab tooltip",
                "tab-disabled-tooltip": "Baga, it`s disabled",
                complex: "Lorem ipsum dolor sit amet, elit sit sollicitudin enim, turpis pretium etiam immet, elit sit sollicitudin enim, turpis pretium etiam im met, elit sit sollicitudin enim, turpis pretium etiam im",
                compile: '---&gt; <span class="cc-tooltip-link"><a data-hook="inline-tooltip-link" ng-click="$ctrl.compiledTooltipClick()" href="">Click here</a></span> &lt;---',
                simple: "This is an Error tooltip",
                tooltip: "This is a tooltip",
                next: "Next",
                previous: "Previous"
            },
            C4_SHAPE: "Switch to shape",
            C4_IMAGE: "Switch to image",
            C4_GALLERY: "Switch to gallery",
            C4_VIDEO: "Switch to video",
            "richtext_clear-formatting": "Remove Formatting",
            "richtext_cannot-link": "Select text with no<br/>line breaks to link",
            "richtext_edit-link": "Edit Link",
            "richtext_add-link": "Link",
            richtext_numbers: "Numbering",
            richtext_bullets: "Bullets",
            richtext_underline: "Underline",
            richtext_italic: "Italic",
            richtext_bold: "Bold",
            hide_item: "Click to hide",
            disabled_item: "This item can't be hidden",
            show_item: "Click to show",
            hidden_item: "Item is hidden",
            back: "Back",
            crop: "Crop",
            edit: "Edit",
            settings: "Settings",
            help: "Help",
            shape: "Shape",
            pattern: "Pattern",
            gallery: "Gallery",
            video: "Video",
            image: "Image",
            color: "Color"
        },
        cc: {
            "media-preview": {
                gallery: {
                    change: "Change Gallery Type",
                    select: "Organize Media"
                },
                "tab-label": {
                    shape: "Shape",
                    gallery: "Gallery",
                    video: "Video",
                    image: "Image"
                },
                "button-text": {
                    "change-gallery": "Change Gallery",
                    customize: "Customize",
                    replace: "Replace"
                },
                label: {
                    media: "Media"
                }
            },
            "c6-list-item-menu": {
                "item-to-show": {
                    label: "Item to Page"
                },
                "delete": {
                    label: "Delete"
                },
                show: {
                    label: "Show"
                },
                hide: {
                    label: "Hide"
                },
                duplicate: {
                    label: "Duplicate"
                },
                edit: {
                    label: "Edit"
                }
            },
            "c6-list": {
                "add-new-item": {
                    title: "+ Add Item"
                }
            },
            "button-editor": {
                "button-link": {
                    label: "LINK"
                },
                "button-text": {
                    label: "BUTTON TEXT"
                }
            },
            "button-editor-link": {
                "button-text-link": {
                    label: "Add Link"
                }
            }
        },
        general: {
            "no-link-hover": "Connect",
            "no-link": "Not Connected",
            YO: "Hello"
        }
    };
    $translateProvider.translations("en", translations);
    $translateProvider.translations(translations);
    if ($translateProvider.preferredLanguage) {
        $translateProvider.preferredLanguage("en");
    }
} ]).value("preferredLanguage", "en");