"use strict";

try {
    angular.module("organizeMediaTranslations");
} catch (e) {
    angular.module("organizeMediaTranslations", [ "pascalprecht.translate" ]);
}

angular.module("organizeMediaTranslations").config([ "$translateProvider", function($translateProvider) {
    var translations = {
        "media-settings": {
            types: {
                images: "Images"
            },
            preview: "preview",
            "link-label": "Link",
            "title-placeholder": "Add your title here",
            "description-placeholder": "Describe your image",
            description: {
                title: "Description"
            },
            "media-title": {
                title: "Title (alt text)"
            },
            "image-settings": {
                title: "Image Settings"
            }
        },
        "search-bar": {
            placeholder: "Enter a word or a phrase to find a video to add to your site"
        },
        search: {
            from: "From:",
            title: "Search Video"
        },
        "change-shape": {
            button: "Change shape"
        },
        "change-clipart": {
            button: "Change clipart"
        },
        "Search-other-videos": {
            button: "Search other videos"
        },
        "video-box": {
            "play-settings": {
                controls: {
                    options: {
                        "on-hover": "On hover",
                        never: "Never",
                        always: "Always"
                    },
                    title: "When are controls shown?"
                },
                loop: "In a loop",
                autoplay: "Autoplays on loading",
                title: "How does your video play?"
            }
        },
        general: {
            "no-link-hover": "Connect",
            "no-link": "Not Connected",
            "search-button": "Search",
            "save-button": "Save",
            "add-button": "Add",
            "done-button": "Done",
            "cancel-button": "Cancel",
            "add-more-button": "Add More"
        },
        "search-video": {
            "no-results": "Your search has not returned any videos",
            text: "Search to find {{ source }} videos"
        }
    };
    $translateProvider.translations("en", translations);
    $translateProvider.translations(translations);
    if ($translateProvider.preferredLanguage) {
        $translateProvider.preferredLanguage("en");
    }
} ]).value("preferredLanguage", "en");