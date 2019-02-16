'use strict';

try {
  angular.module('siteGeneratorStaticsConsumerTranslations');
} catch (e) {
  angular.module('siteGeneratorStaticsConsumerTranslations', ['pascalprecht.translate']);
}

angular.module('siteGeneratorStaticsConsumerTranslations').config(['$translateProvider',
  function ($translateProvider) {
    var translations = {
      'Intro': {
        'import-youtube-URL': {
          'channel-does-not-exist': 'This channel isn’t showing up. Double check the URL and try again.'
        }
      },
      'Stats_Overview_Tips_AddLogo_Button_Label': '',
      'Stats_Overview_Tips_AddLogo_Header': '',
      'Stats_Overview_Tips_AddLogo_Text': '',
      'Tooltips': {
        'members-area': {
          'signup-settings-panel': {
            'codeofConduct': {
              'link': 'Created a Code of Conduct page? Link to it here so people can see it when they sign up to your site.'
            }
          }
        }
      },
      'animation-pattern': {
        'fade': 'Fade',
        'float': 'Float',
        'fly': 'Fly',
        'fold': 'Fold',
        'none': 'None',
        'slide': 'Slide',
        'turn': 'Turn'
      },
      'assistant-menu-bucket': {
        'change-content': {
          'description': 'Edit your section’s text, images, and links, or add new content to your site.',
          'name': 'Edit Your Content'
        },
        'change-section-design': {
          'description': 'Customize your section\'s colors, text, and animation, or try a new layout.',
          'name': 'Design Your Sections'
        },
        'change-site-design': {
          'description': 'Personalize your site design for a look you love. Change colors, fonts and more.',
          'name': 'Customize Your Site'
        },
        'connect-domain': {
          'description': 'Make it easy for people to find your website online with your own domain.',
          'name': 'Connect Domain'
        },
        'essentials': {
          'description-with-tpa': 'Preview how your site looks to visitors. Making changes? Publish so they go live.',
          'description-without-tpa': 'Preview how your site looks to visitors. When you’re ready, Publish to go live.',
          'name': 'Site Essentials'
        },
        'imported-content': {
          'description': 'Find text and images ADI imported for use on your site.',
          'name': 'Imported Content'
        },
        'publish': {
          'description': 'Go live so people can find your website online.',
          'name': 'Publish'
        },
        'seo': {
          'description': 'Tell us more about your site, so people can find it online when they search.',
          'name': 'Get Found on Google'
        }
      },
      'assistant-menu-header': {
        'description': 'Choose from the options below and I’ll<br>guide you to create your full website.'
      },
      'assistant-menu-task': {
        'add-page': {
          'deprecated-label': 'Add a New Page',
          'label': 'Add a new page'
        },
        'add-section': {
          'deprecated-label': 'Add a New Section',
          'label': 'Add a new section'
        },
        'animation': {
          'deprecated-label': 'Add Animation',
          'label': 'Change animations'
        },
        'change-business-details': {
          'label': 'Change Business Type'
        },
        'change-layout': {
          'deprecated-label': 'Change Section Layout',
          'label': 'Change Section Layout'
        },
        'color-design': {
          'deprecated-label': 'View Site Colors',
          'label': 'Change colors'
        },
        'connect-domain': {
          'deprecated-label': 'Connect Your Domain',
          'label': 'Connect your domain'
        },
        'customize-section-design': {
          'deprecated-label': 'Customize Section Design',
          'label': 'Customize design'
        },
        'edit-content': {
          'deprecated-label': 'Edit Section',
          'label': 'Edit section content'
        },
        'entire-website-design': {
          'deprecated-label': 'Change Theme',
          'label': 'Change theme'
        },
        'font-panel': {
          'deprecated-label': 'Switch Fonts',
          'label': 'Change fonts'
        },
        'page-seo': {
          'deprecated-label': 'Improve Page SEO',
          'label': 'Improve SEO For This Page'
        },
        'preview': {
          'deprecated-label': 'Preview',
          'label': 'Preview your site'
        },
        'publish': {
          'deprecated-label': 'Publish Your Site',
          'label': 'Publish your site'
        },
        'tpa': {
          'label': 'Manage {{tpa}}'
        },
        'wiz-seo': {
          'label': 'Get an SEO Plan For Your Site'
        }
      },
      'assistant-menu': {
        'assistant-video-description': 'Follow these steps to complete your site.<br/> Start by watching this short <span class=\'assistant-video-link\' ng-click=\'$ctrl.openAssistantVideo($event)\'>intro video</span>',
        'assistant-video-description-smartAssist': 'Follow these steps to complete your site.<br/> Start by watching this short <span class=\'assistant-video-link\' ng-click=\'$ctrl.openAssistantVideo($event)\'>intro video</span>',
        'assistant-video-link': 'https://www.youtube.com/embed/U1d4B94KMeM?rel=0&autoplay=1&showinfo=0'
      },
      'assistant-tab-list': {
        'smart-assist-tab-body-title': 'Keep your site up to date. Here are some places that need your attention.',
        'smart-assist-tab-header': 'Smart Tips'
      },
      'background-scroll': {
        'fade-in': 'Fade In',
        'none': 'None',
        'parallax': 'Parallax',
        'reveal': 'Reveal',
        'zoom-in': 'Zoom In'
      },
      'builder': {
        'account': {
          'billing': 'Billing & Payments',
          'my-sites': 'My Sites',
          'my-sites-link': 'https://www.wix.com/account/sites',
          'new-site-link': 'https://www.wix.com/new/vertical?ref=ADI',
          'settings': 'Account Settings',
          'settings-link': 'https://www.wix.com/account/settings'
        },
        'add-page': 'Add Page',
        'add-section': 'Add Section',
        'add-section-others': 'OPTIONAL',
        'add-section-recommended': 'RECOMMENDED',
        'add-section-see-all': 'See all',
        'add-section-see-less': 'See less',
        'add-slide': '+ Add Slide',
        'apps-panel': {
          'add-more': 'Add',
          'app': {
            'description': {
              'BandsInTown_Widget': 'Display upcoming tour dates on your site.',
              'Blog': 'Blog about all the things<br>you love.',
              'Blog2': 'Blog about <br>all the things you love.',
              'Bookings': 'Let visitors schedule services on your site.',
              'Chat_Widget': 'Chat with site visitors - anytime, anywhere.',
              'Events_Multiple': 'Create and display multiple events on your site.',
              'Events_Single': 'Have an event?<br>Create and manage it online.',
              'Forum': 'Build an online community on your site.',
              'Instagram_Widget': 'Show your Instagram pictures and videos.',
              'Members': 'Let visitors sign up to become your site members.',
              'Music_Widget': 'Stream and sell your music commission free.',
              'Stores': 'Start selling online directly from your website.',
              'Video_Widget': 'Everything you need to showcase your videos.'
            },
            'title': {
              'AllMembers': 'Members',
              'BandsInTown_Widget': 'Bandsintown',
              'Blog': 'Blog',
              'Blog2': 'Blog',
              'Bookings': 'Bookings',
              'Chat_Widget': 'Chat',
              'Events': 'Events',
              'Events_Multiple': 'Events List',
              'Events_Single': 'Event',
              'Forum': 'Forum',
              'Instagram_Widget': 'Instagram Feed',
              'Members': 'Member\'s Area',
              'Music_Widget': 'Music',
              'Stores': 'Online Store',
              'Video_Widget': 'Video'
            }
          },
          'footer': {
            'link': 'Go to Wix Editor',
            'text': 'Looking for more apps?'
          },
          'loader': 'Loading apps...',
          'manage-app': 'Manage',
          'open-app': 'Open',
          'remove': 'Delete',
          'subtitle': 'Boost your website with powerful apps.',
          'title': 'Apps'
        },
        'back-button': 'Back',
        'button-editor': {
          'add-button': 'Add Secondary Button',
          'button': 'Link'
        },
        'color-box': 'Box',
        'design': 'Site Design',
        'design-label': 'Design',
        'design-panel': {
          'title': 'Themes'
        },
        'design_description': 'Pick a theme for your site and customize it.',
        'drop-target-drag-over': 'Release to Drop Section Here',
        'drop-target-hint': 'Drag Section Here',
        'edit-section-button': 'Edit',
        'edit_mode': {
          'desktop': 'Desktop',
          'mobile': 'Mobile'
        },
        'empty-page-sub-title': 'Hit the + icon to easily add some to your stunning website-',
        'empty-page-sub-title-active': 'Just drag and drop any of the recommended sections.',
        'empty-page-title': 'Add Section',
        'empty-page-title-active': 'Great, you\'re on your way.',
        'fake-browser': {
          'choose-domain': 'Connect Your Domain',
          'optimize-design': 'Optimize Design',
          'manage-pages': 'Manage Pages',
          'suggest-domain-button': 'Connect Your Domain',
          'suggest-domain-label': '<span title="{{domainTitle}}" class="suggest-domain-address">{{domain}}</span> <span class="suggest-domain-message">is available.</span>',
          'use-advanced-editor': 'Use Advanced Editor'
        },
        'adi-assistant': {
          'title': 'ADI ASSISTANT'
        },
        'fake-browser2': {
          'choose-domain': 'Connect Domain'
        },
        'field-editor': {
          'list-footer': 'Footer {{text}}',
          'list-header': 'Header {{text}}',
          'list-item': 'Item {{text}}',
          'list': {
            'button': 'Buttons',
            'item': {
              'long': 'Description',
              'title': 'Name'
            }
          },
          'login-title': 'Member Login Bar',
          'single': {
            'address': 'Address',
            'business-name': 'Business Name',
            'button': 'Button',
            'copyright-message': 'Copyright Message',
            'description': 'Description',
            'email': 'Email',
            'fax': 'FAX',
            'form': 'Contact Form',
            'freeze-header': 'Freeze Header',
            'logo': 'Logo',
            'long': 'Paragraph',
            'map': 'Map',
            'media': 'Media',
            'menu': 'Menu',
            'name': 'Name',
            'phone-number': 'Phone Number',
            'site-email': 'Site Email',
            'subtitle': 'Subtitle',
            'tagline': 'Tagline',
            'title': 'Title'
          },
          'social-paragraph': 'Update your social links',
          'social-title': 'Social',
          'subscribe': 'Subscribe'
        },
        'layout-control': {
          'change-design': 'Edit Section Design',
          'customize': 'Customize'
        },
        'list-items-title': 'List Items',
        'list-items-title-slideshow': 'Slideshow Items',
        'loading': 'Loading',
        'logoExtraction': {
          'step3000': {
            'button': 'Create Palette',
            'content': 'Would you like to create<br/>a color palette from your logo?',
            'skip': 'No, Thanks',
            'title': ''
          },
          'step3100': {
            'content': 'Creating palette',
            'title': ''
          },
          'step3200': {
            'button': 'Use These Colors',
            'content': 'Here\'s the color palette ADI<br/>created for you',
            'newPaletteFromLogo': {
              'content': 'Here\'s the color palette ADI<br/>created for you',
              'title': ''
            },
            'skip': 'No, Thanks',
            'title': ''
          }
        },
        'manage': 'Manage',
        'manage-apps': 'Manage Apps',
        'manage-apps-small': 'Apps',
        'manage-tpa': 'Manage {{TPA}}',
        'manage-tpa-Blog': 'Manage Blog',
        'manage-tpa-Blog2': 'Manage Blog',
        'manage-tpa-Bookings': 'Manage Bookings',
        'manage-tpa-Chat_Widget': 'Wix Inbox',
        'manage-tpa-Events': 'Manage Events',
        'manage-tpa-Forum': 'Manage Forum',
        'manage-tpa-Members': 'Manage Member\'s Area',
        'manage-tpa-Stores': 'Manage Store',
        'manage-tpa-button': 'Manage',
        'manage-tpa-sub-menu': {
          'label': {
            'all-apps': 'All Apps',
            'blog': 'Blog',
            'bookings': 'Bookings',
            'events': 'Events',
            'music': 'Music',
            'store': 'Stores',
            'video': 'Video'
          }
        },
        'media-editor': {
          'edit-replace-button': 'Edit & Replace',
          'image-position': {
            'title': 'Image position'
          },
          'media-bg-warning': 'Want to show some color behind your image? Reduce the image opacity.',
          'opacity-warning': 'Don\'t see this image on your page? <a data-hook=\'opacity-warning-link\' ng-click=\'$ctrl.resetOpacity()\'>Reset</a>'
        },
        'merge': 'Merge Page',
        'mobile-panel-edit-notice': 'Changes you make on mobile won\'t affect how your site looks on desktop.',
        'open-site-loader': {
          'message1': '',
          'message10': '',
          'message11': '',
          'message12': '',
          'message13': '',
          'message14': '',
          'message15': '',
          'message16': '',
          'message17': '',
          'message18': '',
          'message19': '',
          'message2': '',
          'message20': '',
          'message3': '',
          'message4': '',
          'message5': '',
          'message6': '',
          'message7': '',
          'message8': '',
          'message9': '',
          'video-title': 'L O A D I N G . . .'
        },
        'page-from-item': 'Create a page from this item',
        'pages': 'Pages',
        'pages-panel': {
          'settings': {
            'delete': 'Delete',
            'duplicate': 'Duplicate',
            'hide': 'Hide',
            'main-page': 'Main Page',
            'page-seo': 'Page SEO',
            'rename': 'Rename',
            'set-as-homepage': 'Set as Homepage',
            'show': 'Show',
            'subpage': 'Subpage'
          }
        },
        'preview': 'Preview',
        'preview-flags': {
          'fix': 'Fixed Header',
          'slideshow': 'Slideshow'
        },
        'preview-linked-content': 'From',
        'preview-linked-page-content': 'Used in',
        'progress-bar': {
          'step-message': {
            'adding-application': 'Adding Your {{type}} App',
            'adding-page': 'Adding {{pageTitle}} Page',
            'adding-section': 'Adding a {{type}} Section',
            'finishing-touches': 'Adding the Finishing Touches',
            'header-and-footer': 'Arranging Your Header and Footer',
            'online-content': 'Importing Your Online Content',
            'render-mobile-pages': 'Optimizing Your Site on Mobile',
            'sc-adding-header-and-footer': 'Adding a Header and a Footer',
            'sc-adding-site-colors': 'Adding Your Site Colors',
            'sc-adding-site-fonts': 'Styling Your Site Fonts',
            'sc-arranging-text-images': 'Arranging Text and Images'
          }
        },
        'publish': 'Publish',
        'save': 'Save',
        'save-as-template': 'Save As Template',
        'saved': 'Saved',
        'saving': 'Saving',
        'section-background': {
          'background-settings': {
            'image': {
              'body': 'Choose which part of<br/>this image shows.',
              'lower-title': 'IMAGE POSITION',
              'parallax-paragraph': '<a ng-click="$ctrl.goToPreview()" data-hook="goto-preview">Preview your site</a> to view<br />this effect.',
              'position': {
                'bottom': 'Bottom',
                'bottom_left': 'Bottom Left',
                'bottom_right': 'Bottom Right',
                'center': 'Center',
                'left': 'Left',
                'right': 'Right',
                'top': 'Top',
                'top_left': 'Top Left',
                'top_right': 'Top Right'
              },
              'title': 'Image Position'
            }
          },
          'categories': {
            'color': 'Colors',
            'media': 'Media',
            'pattern': 'Patterns'
          },
          'gallery-settings': 'Organize Images',
          'image-settings': 'Image Settings',
          'panel-headline-text': 'Patterns',
          'panel-headline-text-header': 'Header Background',
          'panel-headline-text-list': 'List Background',
          'panel-paragraph-text': 'Click to select your favorite pattern.',
          'pattern-settings': 'Change Colors',
          'show-background': 'Show background',
          'upload-button': 'Upload Background',
          'upload': {
            'gallery': 'Gallery',
            'image': 'Image',
            'video': 'Video'
          }
        },
        'section-design': {
          'TPA_NAME': {
            'BandsInTown_Widget': 'Tour Dates',
            'Blog': 'Blog',
            'Blog2': 'Blog',
            'Blog2_Custom_Feed_Widget': 'Blog Feed',
            'Blog_Post_Gallery': 'Blog',
            'Bookings': 'Book Now',
            'Chat': 'Chat',
            'Events_Multiple': 'Events List',
            'Events_Single': 'Event',
            'Forum': 'Forum',
            'GetSubscribers_Widget': 'Get Subscribers',
            'Members': 'Member\'s Area',
            'Music_Widget': 'Music Player',
            'ProGallery_Widget': 'Pro Gallery',
            'Stores': 'Online Store',
            'Stores_Grid_Gallery_Widget': 'Product Gallery',
            'Stores_Grid_Gallery_Widget|abTranslate_1': 'New Collection',
            'Stores_Product_Widget': 'Product',
            'Stores_Product_specific_Widget': 'Featured Product',
            'Stores_Slider_Gallery_Widget': 'Product Slider',
            'Video_Widget': 'Video Player'
          },
          'change-colors': 'Change Colors',
          'customize-design': 'Customize Section Design',
          'menu': {
            'animations': 'Animation',
            'color': 'Color',
            'font': 'Font Size',
            'font-alignment': 'Text Settings',
            'headerbg': 'Header',
            'height': 'Height',
            'listbg': 'List',
            'media': 'Media'
          },
          'mobile-headline-text': 'Click to select your favorite mobile section layout.',
          'panel-header-text': 'Customize your section design or try a new layout.<br />Go to <a ng-click="$ctrl.goToDesignMode()" data-hook="goto-site-design">Themes</a> to change design across your site.',
          'panel-footer-text': 'Choose a new layout for your footer.<br />Go to <a ng-click="$ctrl.goToDesignMode()" data-hook="goto-site-design">Themes</a> to change design across your site.',
          'panel-header-text-header': 'Your header shows on all your pages.<br/>Pick your favorite and customize it.',
          'panel-header-text-tpa': 'Click to select your favorite {{TPA_NAME}} design.',
          'panel-headline-text': 'Section Design',
          'panel-headline-text-footer': 'Site Footer Design',
          'panel-headline-text-header': 'Site Header Design'
        },
        'section-name-in-menu': {
          'title': 'Display name in menu'
        },
        'section-override-warning': {
          'animations': 'Some of your other sections have different animations.',
          'font-size': 'Some of your other sections have different Font sizes.',
          'replace-sections': ' <a data-hook=\'section-override-link\' href="" ng-click="$ctrl.overrideSections()">Apply this style</a> to all sections.',
          'scroll-type': 'Some of your other sections have different Scroll effects.',
          'success': 'Style applied to all sections.'
        },
        'sections': {
          'About': 'About',
          'BandsInTown_Widget': 'Tour Dates',
          'Blog2_Custom_Feed_Widget': 'Blog Feed',
          'Blog_Post_Gallery': 'Blog Post Gallery',
          'Bookings_Widget': 'Bookings Widget',
          'CV': 'CV',
          'Chat_Widget': 'Chat',
          'Client': 'Clients',
          'Contact': 'Contact',
          'Event': 'Events',
          'Events_Multiple': 'Events List',
          'Events_Single': 'Event',
          'FAQ': 'FAQ',
          'Feature': 'Features',
          'Files': 'Files',
          'GetSubscribers_Widget': 'Subscribe',
          'Instagram_Widget': 'Instagram',
          'Music_Widget': 'Music Player',
          'News': 'News',
          'OpeningHours': 'Opening Hours',
          'Past_Events': 'Past Events',
          'Portfolio': 'Photo Gallery',
          'Price': 'Price List',
          'ProGallery_Widget': 'Gallery',
          'Product': 'Products',
          'Project': 'Projects',
          'Quote': 'Quote',
          'ScheduleItem': 'Schedule',
          'Service': 'Services',
          'Stores': 'Stores',
          'Stores_Grid_Gallery_Widget': 'Product Gallery',
          'Stores_Product_specific_Widget': 'Featured Product',
          'Stores_Slider_Gallery_Widget': 'Product Slider',
          'TeamMember': 'Team Members',
          'Testimonial': 'Testimonials',
          'Tpa_Header': 'Section Title',
          'Video_Widget': 'Video Player',
          'Welcome': 'Welcome',
          'Widget': 'Headliner',
          'blank': 'Blank',
          'footer': 'Footer',
          'from-the-blog': 'From The Blog',
          'header': 'Header'
        },
        'seo-panel': {
          'description': {
            'label': 'Page Description'
          },
          'keywords': {
            'label': 'keywords'
          },
          'page-title': {
            'label': 'title on search engine'
          },
          'page-url': {
            'label': 'Page URL'
          },
          'title': 'SEO'
        },
        'site': 'Site',
        'site-menu': {
          'change-business-details': 'Update Website Type',
          'connect-domain': 'Connect Domain',
          'feedback': 'Give Feedback',
          'history': 'Site History',
          'my-business-info': 'My Business Info',
          'my-dashboard': 'My Dashboard',
          'news': 'News & Updates',
          'seo-wiz': 'Get Found on Google',
          'settings': 'Site Settings',
          'site-dashboard': 'Site Dashboard',
          'start-new-site': 'Create New Site',
          'view-live': 'View Site',
          'view-published-site': 'View Published Site',
          'page-title': {
            'BandsInTown_Widget': 'Tour Dates',
            'Events': 'Events',
            'Events_Multiple': 'Events',
            'Events_Single': 'Event',
            'Forum': 'Forum',
            'Instagram_Widget': 'Instagram',
            'Music_Widget': 'Music',
            'Video_Widget': 'Videos'
          }
        },
        'social-panel': {
          'link-input': {
            'placeholder': 'Paste link here'
          },
          'title': 'SOCIAL'
        },
        'switch-color': {
          'panel-headline-text': 'Section Colors',
          'panel-paragraph': 'Choose a color combination you like for this section.<br />Go to <a ng-click="$ctrl.goToColorationPanel()" data-hook="goto-site-colors">Colors</a> to change your site\'s color palette.',
          'panel-paragraph-only-one-option': 'There are no color options for this design.<br /><a ng-click="$ctrl.goToDesignPanel()" adi-automation="no-color-switch-preset" data-hook="goto-switch-preset">Choose a different design</a> to view more color options.'
        },
        'template-translation-drop-down': {
          'preview-translation': 'Preview',
          'send-translation': 'Send to Translation'
        },
        'top-bar': {
          'add-app': 'Apps',
          'add-section': 'Section to Page',
          'preview': {
            'desktop': 'Desktop Preview Mode',
            'from-intro-msg': 'To start customizing, click Edit Site',
            'mobile': 'Mobile Preview Mode',
            'preview-msg': 'You are currently in preview mode',
            'back-to-edit': 'Back to ADI Editor'
          }
        },
        'unmerge': 'Unmerge Page',
        'upgrade': 'Upgrade',
        'upgrade-banner': {
          'label': 'Upgrade your website to remove Wix ads',
          'button': 'Upgrade Now'
        },
        'upgrade-dropdown': {
          'bullet-1': 'Get a FREE domain to connect to your site',
          'bullet-2': 'Enjoy unlimited bandwidth & extra storage',
          'bullet-3': 'Add Google Analytics to your site',
          'compare-plans': 'Compare Plans',
          'get-yearly-unlimited': 'Get Yearly Unlimited',
          'sale-title': 'Limited Time Offer: Upgrade Now to Save {{text}}% <br> on Our Popular Premium Plans',
          'title': 'Upgrade to Yearly Unlimited and Save!',
          'upgrade-save': 'Upgrade & Save {{text}}%'
        }
      },
      'business-details-changer': {
        'main-title': 'Tell Us More About You',
        'secondary-title': {
          'step-0': {
            'title': 'What kind of website do you want to create?'
          },
          'step-1': {
            'title': 'What is the name of your business or website?'
          }
        }
      },
      'business_card': {
        'add-social-network': {
          'label': 'ADD A SOCIAL NETWORK'
        },
        'address': {
          'label': 'ADDRESS',
          'placeholder': 'Enter your address'
        },
        'contact-email': {
          'label': 'CONTACT EMAIL'
        },
        'email': {
          'placeholder': 'Enter your email'
        },
        'fax': {
          'label': 'FAX',
          'placeholder': 'Enter your fax number'
        },
        'name': {
          'label': 'NAME',
          'placeholder': 'Enter your name'
        },
        'phone': {
          'label': 'PHONE',
          'placeholder': 'Enter your phone number'
        },
        'social-media': {
          'label': 'SOCIAL MEDIA'
        },
        'social': {
          'placeholder': 'Paste social link'
        },
        'title': 'Review and edit your info',
        'title|abTranslate_1': 'Review and edit your info',
        'website': {
          'label': 'EXISTING WEBSITE'
        },
        'website_address': {
          'placeholder': 'e.g., www.yoursite.com'
        }
      },
      'chen': {
        'test': 'beep',
        'test|abTranslate_1|custom': 'boop'
      },
      'defaults': {
        'contact': {
          'address': '500 Terry Francois Street San Francisco, CA 94158',
          'fax': '456-789-1234',
          'map-address': '500 Terry Francois Street San Francisco, CA 94158',
          'phone': '123-456-7890'
        },
        'footer': {
          'address': 'Address',
          'contact': 'Contact',
          'follow': 'Follow'
        },
        'general': {
          'button': 'Get In Touch',
          'copyright-message': '©2023 by [Business Name]. Proudly created with Wix.com',
          'tagline': 'Business tagline'
        }
      },
      'design': {
        'animations': {
          'component-animation': {
            'title': 'Animation type'
          },
          'page-transition': {
            'title': 'Page transition'
          },
          'panel-title': 'Site Animation',
          'preview': 'Animate your slideshow with transition effects.<br />Choose one, then <a ng-click="$ctrl.goToPreview()" data-hook="goto-preview">Preview</a> your site to see it.',
          'scroll-type': {
            'title': 'Scroll effect'
          },
          'section-panel-title': 'Section Animation',
          'section-tip': 'Animate elements in this section.<br />Go to <a ng-click=\'$ctrl.goToAnimationPanel()\' data-hook="goto-animation-panel">Animation</a> to animate elements across your site.',
          'slideshow-animation': {
            'title': 'TRANSITION EFFECTS'
          },
          'slideshow-transition-time': {
            'label': 'SLIDE DURATION: {{ transitionTime }} SEC'
          },
          'title': 'Animation'
        },
        'coloration': {
          'advanced': {
            'dark': {
              'color': 'DARK COLOR'
            },
            'description': 'Choose colors to use across your site. Then make sure text is easy to read.',
            'fourth': {
              'color': 'FOURTH COLOR'
            },
            'light': {
              'color': 'LIGHT COLOR'
            },
            'main': {
              'color': 'MAIN COLOR'
            },
            'panelheader': 'PALETTE COLORS',
            'readability': {
              'fix': 'Adjust Colors',
              'learn': {
                'more': 'Learn more'
              },
              'loader': 'Fixing Palette Colors',
              'negative': 'Text is hard to read',
              'positive': 'Your text is easy to read'
            },
            'reset': 'Reset',
            'secondary': {
              'color': 'SECONDARY COLOR'
            },
            'third': {
              'color': 'THIRD COLOR'
            },
            'title': 'Edit Your Palette'
          },
          'basic': {
            'advanced': 'Advanced Editing',
            'change-palette-colors': 'Edit Palette Colors',
            'hex-value': 'HEX VALUE',
            'loader': {
              'text': 'Creating your palettes...'
            },
            'logoPalette': {
              'title': 'Logo Palette'
            },
            'palettes': {
              'title': 'Recommended Palettes'
            },
            'palettetitle': 'Main Color',
            'panelheader': 'Site Colors',
            'panelheadernew': 'Site Colors'
          },
          'color-mode-selector-new': {
            'button-edit': 'Edit',
            'dialog': {
              'coloration-level-title': 'Coloration Level',
              'coloration-level': {
                'drop-down': {
                  'colorful': 'Colorful',
                  'plain': 'Plain',
                  'tinted': 'Tinted',
                  'vibrant': 'Vibrant'
                }
              },
              'coloration-mode': {
                'radio-buttons': {
                  'dark': 'Dark',
                  'light': 'Light',
                  'mix': 'Mix'
                }
              },
              'mode-title': 'Mode',
              'title': 'Color Settings'
            },
            'mode-title': 'Color Mode'
          },
          'coloration-mode-selector': {
            'dropdown': {
              'dark-mode': 'Dark Mode',
              'light-mode': 'Light Mode'
            },
            'title': 'Color Palette Mode'
          },
          'customize-palette': {
            'title': '{{ colorTypeName }} color'
          },
          'generic': {
            'dark': 'dark',
            'fourth': 'fourth',
            'light': 'light',
            'main': 'main',
            'secondary': 'secondary',
            'third': 'third'
          },
          'palette': {
            'edit': 'Edit',
            'title': 'Color Palette'
          },
          'palettecolordialog': {
            'paragrpah': 'To ensure your site’s readability, choose a {{colorType}} color.'
          }
        },
        'colors': {
          'title': 'Colors'
        },
        'font-data': {
          'agency': {
            'description': 'Smart and professional with a distinct sense of confidence',
            'name': 'Agency'
          },
          'agile': {
            'description': 'Vivacious and swift with a dash of spontaneity',
            'name': 'Agile'
          },
          'army': {
            'description': 'A commanding presence, both strong and tenacious',
            'name': 'Army'
          },
          'black-ice-2': {
            'description': 'Compelling and intense with a magnetic nature',
            'name': 'Black Ice 2'
          },
          'black-ice': {
            'description': 'Compelling and intense with a magnetic nature',
            'name': 'Black Ice'
          },
          'bold-2': {
            'description': 'An adventurous spirit that\'s loud and proud',
            'name': 'Bold 2'
          },
          'bold': {
            'description': 'An adventurous spirit that\'s loud and proud',
            'name': 'Bold'
          },
          'bounce': {
            'description': 'A burst of kinetic energy, bright and animated',
            'name': 'Bounce'
          },
          'bouquet': {
            'description': 'Lovely and inviting with a celebratory feel',
            'name': 'Bouquet'
          },
          'breeze-2': {
            'description': 'A gust of cool mountain air, brisk and refreshing',
            'name': 'Breeze 2'
          },
          'breeze': {
            'description': 'A gust of cool air along the beach, brisk and refreshing',
            'name': 'Breeze'
          },
          'cadenza-2': {
            'description': 'Intense yet harmonious, like the sound of a powerful symphony',
            'name': 'Cadenza 2'
          },
          'cadenza': {
            'description': 'Intense yet harmonious, like the sound of a powerful symphony',
            'name': 'Cadenza'
          },
          'charming': {
            'description': 'A charismatic character, both dashing and suave',
            'name': 'Charming'
          },
          'chic-2': {
            'description': 'Effortless style and poise with a hint of glamour',
            'name': 'Chic 2'
          },
          'chic': {
            'description': 'Effortless style and poise with a hint of glamour',
            'name': 'Chic'
          },
          'classic': {
            'description': 'A graceful nature, truly tasteful and polished',
            'name': 'Classic'
          },
          'clean-2': {
            'description': 'Neat and balanced, like a perfectly blank slate',
            'name': 'Clean 2'
          },
          'clean': {
            'description': 'Neat and balanced, like a perfectly blank slate',
            'name': 'Clean'
          },
          'deep-forest': {
            'description': 'A woodsy, free spirited vibe that\'s intriguing and pleasant',
            'name': 'Deep Forest'
          },
          'delight-2': {
            'description': 'Engaging and joyful with a spark of jubilation',
            'name': 'Delight 2'
          },
          'delight': {
            'description': 'Engaging and joyful with a spark of jubilation',
            'name': 'Delight'
          },
          'dynamic': {
            'description': 'A thrill-seeking quality, energetic and audacious',
            'name': 'Dynamic'
          },
          'elegant': {
            'description': 'A beauty that never fades, both upscale and exquisite',
            'name': 'Elegant'
          },
          'evolution': {
            'description': 'Visionary and progressive with a contemporary touch',
            'name': 'Evolution'
          },
          'fresh-2': {
            'description': 'Like freshly cut grass on a summer day, crisp and invigorating',
            'name': 'Fresh 2'
          },
          'fresh': {
            'description': 'Like freshly cut grass on a summer day, crisp and invigorating',
            'name': 'Fresh'
          },
          'fun': {
            'description': 'Bold, bright and buzzing with an upbeat tone',
            'name': 'Fun'
          },
          'funky': {
            'description': 'An out-of-the-box vibe, uniquely hip and colorful',
            'name': 'Funky'
          },
          'fuse': {
            'description': 'Deliberate and strong with unwavering focus',
            'name': 'Fuse'
          },
          'grand': {
            'description': 'Like an opulent estate in the French countryside, elegant and fine',
            'name': 'Grand'
          },
          'hi-rise': {
            'description': 'Established and professional, a highly approachable feel',
            'name': 'Hi Rise'
          },
          'horizon-2': {
            'description': 'Simple yet stunning, like a sunset over the ocean',
            'name': 'Horizon 2'
          },
          'horizon': {
            'description': 'Simple yet stunning, like a sunset over the ocean',
            'name': 'Horizon'
          },
          'hype': {
            'description': 'Compelling and intense with a magnetic nature',
            'name': 'Hype'
          },
          'indie': {
            'description': 'Freely wild and unplugged with an understated quality',
            'name': 'Indie'
          },
          'indulge': {
            'description': 'Luxuriously classy while exuding an air of gentle refinement',
            'name': 'Indulge'
          },
          'innovative': {
            'description': 'Creative and modern with a spark of cutting-edge discovery',
            'name': 'Innovative'
          },
          'inspire': {
            'description': 'Influential and empowering with a welcoming charisma',
            'name': 'Inspire'
          },
          'intensity': {
            'description': 'A fierce vibe with electric energy and determination',
            'name': 'Intensity'
          },
          'jet-black': {
            'description': 'A serious tone, sleek and striking with a dash of resilience',
            'name': 'Jet black'
          },
          'lovely': {
            'description': 'Charming and soft with a welcoming character',
            'name': 'Lovely'
          },
          'lush': {
            'description': 'Rich, tasteful and full-bodied, like a fine red wine',
            'name': 'Lush'
          },
          'luxury': {
            'description': 'Dignified class with an air of grace and grandeur',
            'name': 'Luxury'
          },
          'maison': {
            'description': 'Like a grand estate in the French countryside, elegant and fine',
            'name': 'Maison'
          },
          'merlot': {
            'description': 'Rich, tasteful and full-bodied, like a fine red wine',
            'name': 'Merlot'
          },
          'midnight': {
            'description': 'An unsolved mystery, both vivid and captivating',
            'name': 'Midnight'
          },
          'minimal': {
            'description': 'Balance and simplicity with a touch of refinement',
            'name': 'Minimal'
          },
          'organic': {
            'description': 'A cheerful nature, authentic and friendly',
            'name': 'Organic'
          },
          'play': {
            'description': 'Bold, bright and buzzing with an upbeat tone',
            'name': 'Play'
          },
          'playground-2': {
            'description': 'Youthful and lighthearted with a sense of pure joy',
            'name': 'Playground 2'
          },
          'playground': {
            'description': 'Youthful and lighthearted with a sense of pure joy',
            'name': 'Playground'
          },
          'pure': {
            'description': 'Wholesome, natural and kind with a genuine quality',
            'name': 'Pure'
          },
          'retro': {
            'description': 'A vintage feel, like a valuable antique that\'s been renewed',
            'name': 'Retro'
          },
          'rosewater': {
            'description': 'Enchanting, delicate and just the right touch of romance',
            'name': 'Rosewater'
          },
          'royal': {
            'description': 'An air of aristocratic dignity and a modern, confident feel',
            'name': 'Royal'
          },
          'rustic': {
            'description': 'Simple country charm garnished with an urban twist',
            'name': 'Rustic'
          },
          'serene': {
            'description': 'A light, tranquil tone that\'s pleasant and relaxed',
            'name': 'Serene'
          },
          'sincere': {
            'description': 'Cool and candid with an earnest approach',
            'name': 'Sincere'
          },
          'sky-high': {
            'description': 'Cosmopolitan style with an influential, modern feel',
            'name': 'Sky High'
          },
          'skyscraper': {
            'description': 'Cosmopolitan style with an influential, modern feel',
            'name': 'Skyscraper'
          },
          'smart': {
            'description': 'Professional and intelligent, with a look that\'s easy on the eyes',
            'name': 'Smart'
          },
          'soho': {
            'description': 'Contemporary taste with a touch of downtown class',
            'name': 'Soho'
          },
          'sophisticated': {
            'description': 'A seasoned world traveler, refined and cultured',
            'name': 'Sophisticated'
          },
          'spark': {
            'description': 'Sharp and inspired with a flicker of excitement',
            'name': 'Spark'
          },
          'sugar-2': {
            'description': 'Sweet and lively with a hint of spice and everything nice',
            'name': 'Sugar 2'
          },
          'sugar': {
            'description': 'Sweet and lively with a hint of spice and everything nice',
            'name': 'Sugar'
          },
          'tender': {
            'description': 'Soft and gentle with a warm, welcoming character',
            'name': 'Tender'
          },
          'timeless': {
            'description': 'An enduring, ageless look that never goes out of style',
            'name': 'Timeless'
          },
          'unplugged': {
            'description': 'An edgy vibe, raw and exposed',
            'name': 'Unplugged'
          },
          'upbeat': {
            'description': 'Bright and optimistic with a captivating energy',
            'name': 'Upbeat'
          },
          'vintage': {
            'description': 'A retro tone, like a valuable antique that\'s been renewed',
            'name': 'Vintage'
          },
          'vivid': {
            'description': 'Intense yet harmonious, like the sound of a powerful symphony',
            'name': 'Vivid'
          },
          'vogue': {
            'description': 'Striking glamour with a touch of je ne sais quoi',
            'name': 'Vogue'
          },
          'wild-rose': {
            'description': 'Enchanting, delicate and just the right touch of intrigue',
            'name': 'Wild Rose'
          }
        },
        'fonts': {
          'font-size-': {
            '0': 'Medium',
            '1': 'Large',
            '2': 'Extra Large',
            '3': 'Huge',
            '-1': 'Small',
            '-2': 'Extra Small',
            '-3': 'Tiny'
          },
          'font-size': {
            'label': 'Size: {{ sizeLabel }}'
          },
          'panel-title': 'Site Fonts',
          'paragraph-columns': {
            'merge': 'Merge',
            'split': 'Split'
          },
          'position-on-media': 'Position',
          'section-panel-title': 'Font Size',
          'section-panel-title-alignment': 'Text Settings',
          'section-tip': 'Choose a font size to apply to the selected section.<br />Go to <a ng-click=\'$ctrl.goToFontsPanel()\' data-hook="goto-fonts-panel">Site Fonts</a> to change your site\'s font set.',
          'section-tip-alignment': 'Adjust your font size and align text in this section.<br />Go to <a ng-click=\'$ctrl.goToFontsPanel()\' data-hook="goto-fonts-panel">Fonts</a> to change the font style across your site.',
          'site-tip': 'Choose a font set for your titles and text. Use the slider to adjust the size.',
          'size-notice': 'Font Set Size',
          'split-parapraph': {
            'merge': 'Merged Text',
            'split': 'Columns ',
            'title': 'Paragraph Columns'
          },
          'text-alignment': {
            'center': 'Center',
            'label': 'Align Text',
            'left': 'Left',
            'right': 'Right'
          },
          'title': 'Fonts',
          'spacing': {
            'title': 'Spacing between elements',
            'small': 'Small',
            'medium': 'Medium',
            'large': 'Large'
          }
        },
        'header': {
          'bgcolor': {
            'description': 'Pick a color for your {{ sitePart }}.<br/>To change colors across your site go to <a ng-click="$ctrl.goToColorationPanel()" class="go-to-site-color" data-hook="goto-site-colors">Colors</a>.',
            'title': 'Header Background Color',
            'transparent': 'The header is transparent in the homepage.<br/>Choose a color for the inner pages.'
          },
          'logo-size-': {
            '0': 'Medium',
            '1': 'Large',
            '2': 'Extra Large',
            '-1': 'Small',
            '-2': 'Extra Small'
          },
          'logo-size': {
            'label': 'Size: {{ sizeLabel }}'
          },
          'type': {
            'easter-egg-url': 'https://www.youtube.com/embed/Qkuu0Lwb5EM?rel=0&autoplay=1&showinfo=0',
            'fixed': 'Fixed',
            'solid': 'Regular',
            'title': 'Header Type',
            'transparent': 'Transparent'
          }
        },
        'kit': {
          'customize': 'Customize',
          'customize-design': 'Customize Site Design',
          'font': {
            'edit': 'Edit',
            'title': 'Font Set'
          },
          'reset': {
            'button': 'Reset'
          },
          'title': {
            'suffix': 'Kit'
          },
          'type': {
            'agency': 'Agency',
            'agile': 'Agile',
            'army': 'Army',
            'black-ice 2': 'Black Ice 2',
            'black-ice': 'Black Ice',
            'bold': 'Bold',
            'bold-2': 'Bold 2',
            'bounce': 'Bounce',
            'bouquet': 'Bouquet',
            'breeze': 'Breeze',
            'breeze-2': 'Breeze 2',
            'cadenza': 'Cadenza',
            'cadenza-2': 'Cadenza 2',
            'charming': 'Charming',
            'chic': 'Chic',
            'chic-2': 'Chic 2',
            'classic': 'Classic',
            'clean': 'Clean',
            'clean-2': 'Clean 2',
            'deep-forest': 'Deep Forest',
            'delight': 'Delight',
            'delight-2': 'Delight 2',
            'dynamic': 'Dynamic',
            'elegant': 'Elegant',
            'evolution': 'Evolution',
            'fresh': 'Fresh',
            'fresh-2': 'Fresh 2',
            'fun': 'Fun',
            'funky': 'Funky',
            'fuse': 'Fuse',
            'fuse-new': 'Fuse New',
            'grand': 'Grand',
            'hi-rise': 'Hi Rise',
            'horizon': 'Horizon',
            'horizon-2': 'Horizon 2',
            'hype': 'Hype',
            'indie': 'Indie',
            'indulge': 'Indulge',
            'innovative': 'Innovative',
            'inspire': 'Inspire',
            'intensity': 'Intensity',
            'intensity-new': 'Intensity New',
            'jet-black': 'Jet Black',
            'lovely': 'Lovely',
            'lush': 'Lush',
            'luxury': 'Luxury',
            'maison': 'Maison',
            'merlot': 'Merlot',
            'midnight': 'Midnight',
            'minimal': 'Minimal',
            'organic': 'Organic',
            'play': 'Play',
            'playground': 'Playground',
            'playground-2': 'Playground 2',
            'pure': 'Pure',
            'retro': 'Retro',
            'rosewater': 'Rosewater',
            'rosewater-new': 'Rosewater New',
            'royal': 'Royal',
            'rustic': 'Rustic',
            'serene': 'Serene',
            'sincere': 'Sincere',
            'sky-high': 'Sky High',
            'skyscraper': 'Skyscraper',
            'smart': 'Smart',
            'soho': 'Soho',
            'sophisticated': 'Sophisticated',
            'sophisticated-new': 'Sophisticated New',
            'spark': 'Spark',
            'sugar': 'Sugar',
            'sugar-2': 'Sugar 2',
            'tender': 'Tender',
            'timeless': 'Timeless',
            'unplugged': 'Unplugged',
            'upbeat': 'Upbeat',
            'vintage': 'Vintage',
            'vivid': 'Vivid',
            'vogue': 'Vogue',
            'wild-rose': 'Wild Rose'
          }
        },
        'themes': {
          'title': 'Themes'
        },
        'page-design': {
          'title': 'Page Designs'
        }
      },
      'dropdown': {
        'manage-pages': 'Manage Pages',
        'site-pages': 'SITE PAGES'
      },
      'dummy-key': 'DUMMY',
      'editor': {
        'catalog-styles': {
          'buttons': {
            'description': 'Pick a style you like',
            'title': 'Button Style'
          }
        },
        'media-settings': {
          'autoplay': {
            'title': 'Autoplays on loading'
          },
          'button-replace': 'Replace',
          'button-search': 'Search',
          'clipart-settings': {
            'title': 'Clipart Settings'
          },
          'description-label': 'description',
          'description-placeholder': 'Describe your image',
          'description': {
            'title': 'description'
          },
          'ext-video-settings': {
            'title': 'Video Settings'
          },
          'ext-video': {
            'autoplay': {
              'label': 'Autoplay video'
            },
            'controls': {
              'label': 'Show video controls',
              'option': {
                'always': 'Always',
                'never': 'Never',
                'on-hover': 'On Hover'
              }
            },
            'loop': {
              'label': 'Loop video'
            },
            'video-url': {
              'label': 'video url',
              'placeholder': 'Paste a YouTube or Vimeo URL'
            }
          },
          'video-menu': {
            'youtube-vimeo': 'YouTube / Vimeo',
            'free-wix-library': 'Free from Wix',
            'upload': 'Upload Video'
          },
          'for-more-layouts': 'For more layout options, go to <a ng-click="$ctrl.goToSwitchPreset()" adi-automation="more-layouts-switch-preset" data-hook="goto-switch-preset">Designs</a>',
          'gallery-name': {
            'accordion': 'Accordion Slider',
            'animatedgrid3': 'Animated Grid',
            'collage': 'Collage',
            'fullwidthcollage': 'Full Width Collage',
            'fullwidthcollage_b': '4 Column Full Width Collage',
            'fullwidthcollage_c': '3 Column Full Width Collage',
            'grid2': '2 Column Grid',
            'grid3': '3 Column Grid',
            'grid4': '4 Column Grid',
            'grid6': '6 Column Grid',
            'masonry': 'Masonry',
            'slider': 'Slider',
            'slideshow': 'Slideshow',
            'stripaccordion': 'Full Width Accordion Slider',
            'stripmasonry': 'Full Width Masonry',
            'stripshowcase': 'Full Width Showcase',
            'stripslideshow': 'Full Width Slideshow',
            'thumbnails': 'Thumbnail Slideshow'
          },
          'gallery': {
            'change-color': 'Color',
            'organize-media': 'Organize Media'
          },
          'image-position': {
            'title': 'image position'
          },
          'image-settings': {
            'title': 'Image Settings'
          },
          'image-upscale-message': {
            'fix-btn': 'Improve',
            'fix-title': 'Heads up! The resolution of this image is low.',
            'revert-btn': 'Change',
            'revert-title': 'Image quality was improved'
          },
          'link-label': 'link',
          'logo': {
            'image': 'Logo Image',
            'shape': 'Logo Shape'
          },
          'loop': {
            'title': 'Plays in a loop'
          },
          'media-background': {
            'label': 'Color Behind Image'
          },
          'media-opacity': {
            'label': 'Image Opacity'
          },
          'media-size': {
            'label': 'Media Layout'
          },
          'media-title': {
            'title': 'title (alt text)'
          },
          'media-type': 'Media Type',
          'ms-options': {
            'background': 'Background',
            'backgroundfull': 'Full Background',
            'backgroundheader': 'Header Background',
            'backgroundlist': 'List Background',
            'box': 'Box',
            'column': 'Column',
            'cropped': 'Crop',
            'croppedheader': 'Boxed Header',
            'gallery': {
              'all': {
                'button': 'Change Gallery'
              }
            },
            'image': {
              'background': {
                'button': 'Position'
              },
              'backgroundfull': {
                'button': 'Position'
              },
              'backgroundheader': {
                'button': 'Position'
              },
              'backgroundlist': {
                'button': 'Position'
              },
              'column': {
                'button': 'Position'
              },
              'cropped': {
                'button': 'Crop'
              },
              'croppedheader': {
                'button': 'Crop'
              },
              'strip': {
                'button': 'Position'
              },
              'stripheader': {
                'button': 'Position'
              },
              'uncropped': {
                'button': 'Designs'
              }
            },
            'strip': 'Strip',
            'stripheader': 'Header Strip',
            'uncropped': 'Full Image'
          },
          'shape-settings': {
            'title': 'Shape Settings'
          },
          'show-video-controls': {
            'title': 'Show video controls'
          },
          'tabs': {
            'gallery': 'Gallery',
            'image': 'Image',
            'pattern': 'Pattern',
            'shape': 'Shape',
            'video': 'Video'
          },
          'title': 'Media Settings',
          'title-label': 'title (alt text)',
          'title-placeholder': 'Add your title here',
          'types': {
            'gallery': 'Gallery',
            'image': 'Image',
            'pattern': 'Pattern',
            'shape': 'Shape',
            'video': 'Video'
          },
          'video-settings': {
            'title': 'Video Settings'
          },
          'video-url': {
            'title': 'video url'
          }
        }
      },
      'error': {
        'conflicting-changes': {
          'ok-button': 'Reload',
          'text': 'You’re working in more than one window or tab.<br/>Reload to view your site with the most recent changes.'
        },
        'publish-disabled-on-server': {
          'ok-button': 'OK',
          'text': 'Due to server maintenance, publish is temporarily disabled. Please leave your editor open and try again in 15 minutes.'
        },
        'save-as-template': {
          'ok-button': 'OK',
          'text': 'There was an error saving your site as template.<br/>Click Reload to continue working.'
        },
        'save-failure': {
          'ok-button': 'Reload',
          'text': 'There was an error saving your site.<br/>Click Reload to continue working.'
        },
        'session-expired': {
          'ok-button': 'Sign In',
          'text': 'Heads up! You\'re signed out of your account. To access it now, sign in.'
        },
        'site-not-managed-by-ob': {
          'heading': 'What Are You Doing Here? :)',
          'ok-button': 'Go to Wix Editor',
          'text': 'To keep editing your stunning website, go to the Wix Editor.'
        },
        'story-archived': {
          'text': 'The site you’re looking for has been deleted or no longer exists.<br/><br/>But maybe we can still help you find<br/>what you\'re looking for:<br/><br/><a href="http://wix.com">Go to Wix.com</a><br/><a href="https://www.wix.com/new/vertical?ref=adi">Create a new site</a><br/><a href="https://www.wix.com/support/html5/">Get in touch with our Support Team</a>'
        }
      },
      'floating-go-to-editor-link': {
        'advanced-editor': 'Advanced Editor',
        'use-advanced-editor': 'Use Advanced Editor'
      },
      'general': {
        'Blog': 'Blog',
        'Section': 'Section',
        'Bookings': 'Bookings',
        'Music': 'Music',
        'ProGallery': 'Media',
        'Stores': 'Store',
        'YO': 'Hello',
        'add': 'Add',
        'apply': 'Apply',
        'blank': 'Blank Page',
        'cancel': 'Cancel',
        'continue': 'Continue',
        'customize': 'Customize',
        'delete': 'Delete',
        'designs': 'Design',
        'done': 'Done',
        'dont-show-again': 'Don\'t show again',
        'edit': 'Edit',
        'email': {
          'invalid': 'This is not a valid email address'
        },
        'galleries': 'Galleries',
        'got-it': 'Got It',
        'help': 'Help',
        'imported-page': 'Imported Page',
        'layout': 'Layouts',
        'leave-note': 'Any unsaved changes will be lost.',
        'logo': 'Logo',
        'map': 'Map',
        'move': 'Move',
        'new-page': 'New Page',
        'next': 'Next',
        'no-link': 'Not Connected',
        'no-thanks': 'No, Thanks',
        'page': 'Page',
        'redo': 'Redo',
        'replace': 'Replace',
        'sign-up': 'Sign Up',
        'size': 'Size',
        'social': 'Social',
        'still-loading': 'We\'ll be ready soon.',
        'top': 'Top',
        'undo': 'Undo'
      },
      'go-to-editor-link': {
        'button': 'Go to Wix Editor',
        'button-new': 'Go to Editor',
        'sub-title': 'Fully customize your site <br> in the Wix Editor. Add apps, <br> use advanced design <br> features and more.',
        'sub-title-new': 'Go to the Wix Editor to use advanced design features and fully customize your site.',
        'title': 'Want More <br> Design Options?'
      },
      'go-to-editor-popup': {
        'cancel': 'Stay in Wix ADI',
        'editor-feature1': 'Drag and drop any element to make your site look the way you want.',
        'editor-feature2': 'Change any font or color, and customize your site\'s design.',
        'editor-feature3': 'Optimize your site to look amazing on every device.',
        'editor-feature4': 'Add advanced apps, stunning design features and so much more.',
        'go-to-editor': 'Go to Wix Editor',
        'spinner-message': 'Loading your site in the Wix Editor...',
        'title': 'Fully Customize Your Website in the Wix Editor',
        'warning': 'If you want to come back to Wix ADI, any changes you saved in the Wix Editor won\'t be transferred.'
      },
      'help': {
        'app': {
          'panel': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/5c451cc1-1e0e-4149-9f8d-480001902f47',
          'forum': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/432cee57-1584-4f91-9fd6-866c2630eb10'
        },
        'businessinfo': {
          'edit': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/ee0dcdfa-f2f1-4448-9c3b-ace3317b65d2'
        },
        'connectDomain': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/49a67686-f8ca-4198-ae14-8ad7875a4632',
        'design': {
          'animations': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/d487d93e-5093-4f83-88cf-3731bd55bf0b',
          'coloration': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/fe18acc2-2087-483e-bf0f-1c16cf67f360',
          'font': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/43b0e22f-7916-4f82-9905-17876c5b2a31',
          'fonts': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/fc38db82-b927-4dc1-9729-d96958756ef7',
          'menu': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/d09a17cb-18a1-40aa-b49e-9e37b08403ba',
          'panel-kit': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/1db49cd1-700d-4f72-a400-e61ff7a93236'
        },
        'home': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/e8a37e8c-3172-4636-b914-11724362ce21',
        'link': {
          'menu': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/bf86bff2-440c-43b4-8a9b-878a889562b7',
          'phone': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/269ee4ca-ac26-40a4-b982-b120e84c75d4'
        },
        'mediagallery': {
          'imagegallery': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/b29e3020-a671-49c9-b8af-43767fae53ad',
          'singleclipart': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/073a29ed-ad50-40db-aa10-72e0187ae0f9',
          'singleimage': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/ed7428da-e7b2-4399-90df-76fc906c79ef',
          'singleshape': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/0a1088b1-9488-4af5-8221-ae73f8802bbb',
          'singlevideo': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/3ec1b885-999d-4ec0-9269-8c0961800f45'
        },
        'mediasettings': {
          'bgVideo': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/a7147aff-a2da-4f12-87aa-b18b140a9614',
          'clipart': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/e2536465-be1b-4df5-8f13-9fadea234eee',
          'extVideo': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/a7147aff-a2da-4f12-87aa-b18b140a9614',
          'image': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/f6e993e6-b64b-43fa-b103-fd39db251114',
          'shape': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/7776a3db-c4eb-49c7-9b28-bb452d487f24'
        },
        'members': {
          'login-panel': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/943ee4f8-278d-4af5-9b86-a241acabde14',
          'pages-panel': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/a0ed50d7-31a4-49e2-a982-6689babaa25b',
          'privacy-policy': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/af283585-d102-4a93-8e4c-ccbf72aed087',
          'signup-settings-panel': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/631ca7d1-5162-4bf6-90c5-2142133b005a',
          'terms-of-use': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/6e26476e-30a3-4340-9803-4078fcb2cd7c'
        },
        'organizemedia': {
          'imagegallery': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/5a7fb24b-d999-4017-b337-7efbf5d63c5c',
          'singleextvideo': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/9063d60d-f6ed-4c0f-99d1-b9985aeaa4bb'
        },
        'pages': {
          'add': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/287e1255-34c8-418a-9a0b-f17b11d28199',
          'menu': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/8764da11-da73-4b57-adb9-cee9be8d1c4e',
          'mobile': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/90610bac-40c1-4dc2-b8bd-abb94cf71b9a',
          'page-settings': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/a9e484ea-4e67-4d05-8b37-8040087d7d4c',
          'seo': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/a9e484ea-4e67-4d05-8b37-8040087d7d4c'
        },
        'popup': {
          'deleteSection': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/5a8e9bc0-0864-47f1-abc6-85a6185197db',
          'moveSection': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/06f9d900-c568-4b26-a220-2771802cd86f',
          'newPageAdded': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/fdc89dea-dc99-4a68-85f5-aed0367bffc5'
        },
        'publish': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/2abcf51e-0485-40df-8fce-ea6b306b25a0',
        'section': {
          'add': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/12ac8476-5313-4e7d-a482-74f3a5a100e7',
          'animations': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/1c7b6cc2-300c-4b5d-8d27-7eb8e8c3d6df',
          'colors': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/e5132ef4-36d7-48d4-ac0a-fe5a142e3fc1',
          'edit(Contact)': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/9efe4a0c-478f-46b7-a395-e73a9f39aa26',
          'edit(Footer)': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/43b8f6ca-bab0-4757-b695-fcbe815d5dc8',
          'edit(GeneralDescription)': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/a355cea5-c7d8-4cc2-94db-5a01a9036b40',
          'edit(TeamMember)': '',
          'edit(Testimonial)': '',
          'editListItem': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/b07cea50-6826-4b12-9d6b-e23cf109e4f3',
          'editListPageSection': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/307fbba8-2bb4-4c2c-af8e-36ca448f783b',
          'editMobileSection': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/0e672c8a-d881-4d70-b56f-cd109b06a9f4',
          'editSection': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/5c2f21df-f168-429a-9854-775a45e1f249',
          'editSlideShow': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/4c375801-504b-49e4-b7fb-9641c58a34fb',
          'font': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/7ea7311e-55dc-4a70-9605-44752d3311b5',
          'replace': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/2597032c-8945-4d17-877f-088f205def92',
          'sectionMedia': {
            'editListPageSection': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/4c5f6517-fd48-4a3d-be10-e532b2b18b44',
            'editSection': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/d4d6f53a-f587-4bbd-962e-10e239bafba3',
            'mediaSettingsPanel': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/1df3e92f-b84f-4a29-80b9-d62c57509459',
            'patternsPanel': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/9e4ab889-b475-4ea2-906b-1004fce4a14f'
          }
        },
        'social': {
          'menu': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/9d302210-3a58-4696-b0b4-888d5f79e4dc'
        },
        'switch-design': {
          'header': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/a6a19742-24a9-40fc-bfee-d335827bb18f',
          'mobile': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/b31c262d-dd90-493a-aad9-60faad07c192'
        },
        'text-manager': {
          'dialog': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/8343d861-8535-4c56-a7c4-521b7900eb0b'
        },
        'tooltip': {
          'sectionTooltip': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/f79fe6a0-49a2-477b-80af-6d849ef1c954'
        },
        'tpa': {
          'Blog': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/b5128f77-cf34-47b3-bc05-874aaa1f8243',
          'Bookings': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/d4804362-9575-4bff-bd61-0f0576e30327',
          'Music': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/0d640609-38ce-495d-8ddb-c633836aa973',
          'ProGallery': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/68ae0727-b1a6-4279-86c9-af92eb2dd70e',
          'Stores': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/26d203b2-c6e2-4719-8f0d-39e409a1db9a',
          'getsubscribers-learn-more': 'https://support.wix.com/en/widget/63ff21be-9556-4f52-9ac9-4d441bd3dae4/article/13c63e13-c6ff-466c-9afa-553cdb111252'
        }
      },
      'image-upscale-modal': {
        'enhance-description': 'Improve Image'
      },
      'import-site': {
        'import-page': {
          'description': 'ADI imported these pages from {{site}}. Select any page to add it to your new site.',
          'loader': 'Analyzing Available Pages',
          'panel-header': 'Import Your Pages'
        }
      },
      'init': {
        'error': {
          'access': 'You do not have access to this site',
          'load': 'Cannot load this site',
          'redirecting': '{{error}}, redirecting...'
        }
      },
      'intro': {
        'import-site-legal': {
          'review-images': 'Review Images',
          'review-images2': 'Review Images',
          'content-imported-from': 'Wix ADI will import your content from:',
          'confirm-message': 'By clicking "Next" you confirm you own all the rights or are licensed to use the content selected and assume liability for any use.',
          'title': 'Import your text and images for use on your new site',
          'title2': 'Import your images for use on your new site',
          'sub-title2': 'ADI found content online from your {{sources}}.',
          'and': 'and',
          'website': 'current website',
          'facebook': 'Facebook Page',
          'google': 'Business Profile on Google',
          'confirm-message2': 'By clicking "Import" you confirm you own all the rights or are licensed to use the content selected and assume liability for any use.',
          'skip-button': 'No, Thanks',
          'next-button': 'Import'
        },
        'images-selection': {
          'title': 'Import your images for use on your new site',
          'select-all': 'Select All',
          'deselect-all': 'Unselect All'
        },
        'back-button': 'Back',
        'blocked-category': {
          'back-button': 'Go to Wix Editor',
          'description': 'With more than 500 stunning templates to choose from and thousands of advanced design features to easily drag & drop, the Wix Editor is the best website builder in the galaxy.',
          'description-new': 'With more than 500 stunning templates to choose from<br> and thousands of advanced design features to easily drag & drop,<br> the Wix Editor is the best builder in the galaxy.',
          'title': 'Looks like Wix Editor is the best option for you!',
          'title-new': 'The Wix Editor<br> Is the Best<br> Option for You!'
        },
        'business-dates': {
          'add-date': 'End Date & Time',
          'change-timezone': 'Change',
          'date-label-from': 'Start',
          'date-label-to': 'End',
          'date-placeholder': 'Choose a Date',
          'input-label': 'When is your event?',
          'time-item': '{{hours}}:{{minutes}}',
          'time-placeholder': 'Choose Time',
          'wrong-end-date': 'Choose an end date that comes after the start date.',
          'wrong-start-date': 'Choose a future date for this event.'
        },
        'business-location': {
          'input-label': 'Where is your business located?',
          'input-placeholder': 'Enter your address',
          'input-placeholder-singleEvent': 'Enter the address',
          'label-singleEvent': 'Where is your event located?',
          'optional-label': 'OPTIONAL',
          'search-tip': 'You can always change the location later.',
          'subline': 'Address is not relevant for you? You can <span class=\'link-button\' data-hook=\'no-address-skip\' ng-click=\'$ctrl.skip()\'>skip</span> to the next page.'
        },
        'business-name': {
          'input-placeholder': '  Add your business or website name',
          'empty': 'BUSINESS NAME',
          'default': 'My Site',
          'input-label': 'What is the name of your website or business?',
          'label': 'What is the name of your website or business?',
          'label-app': 'What is the name of your app?',
          'label-artist': 'What is your artist name?',
          'label-artist-or-band': 'What is your artist name or band\'s name?',
          'label-artistOrBand': 'What is your artist name or band\'s name?',
          'label-band': 'What is the name of your band?',
          'label-band2': 'What is your Band\'s Name?',
          'label-blog': 'What is the name of your blog?',
          'label-blog-website': 'What is the name of your blog or website?',
          'label-blogWebsite': 'What is the name of your Blog or Website?',
          'label-business': 'What is your name or your business name?',
          'label-businessName': 'What is the name of your business?',
          'label-camp': 'What is the name of your camp?',
          'label-campaign': 'What is the name of your campaign?',
          'label-choir': 'What is the name of your choir?',
          'label-church': 'What is the name of your church?',
          'label-courseOrProgram': 'What is the name of your course or program?',
          'label-ebookOrGuide': 'What is the name of your eBook or guide?',
          'label-filmOrVideo': 'What is the title of your film or video?',
          'label-forum': 'What is the name of your online forum?',
          'label-fullOrStagename': 'What is your full name or stage name?',
          'label-fullname': 'What is your full name?',
          'label-hotelOrResort': 'What is the name of your hotel or resort?',
          'label-nameOrBand': 'What is your name or your band\'s name?',
          'label-nameOrPractice': 'What is your name or the name of your practice?',
          'label-onlineStore': 'What is the name of your online store?',
          'label-org': 'What is the name of your organization?',
          'label-pageLanding': 'What is the name of your landing page?',
          'label-project': 'What is the title of your project?',
          'label-publication': 'What is the name of your publication?',
          'label-radioShowStation': 'What is the name of your radio show or station?',
          'label-school': 'What is the name of your school?',
          'label-show': 'What is the title of your film or show?',
          'label-singleEvent': 'What is the name of your event?',
          'label-site': 'What is the name of your site?',
          'label-stagename': 'What is your stage name?',
          'label-store': 'What is the name of your store?',
          'label-studio': 'What is the name of your studio?',
          'label-synagogue': 'What is the name of your synagogue?',
          'label-team': 'What is the name of your team?',
          'label-venue': 'What is the name of your venue?',
          'label-website': 'What is your name or your website\'s name?',
          'label-zooOrPark': 'What is the name of your zoo or park?'
        },
        'category-search': {
          'example-category': {
            'actor': 'Actor',
            'architecture-firm': 'Architecture Firm',
            'artist': 'Artist',
            'author': 'Author',
            'birthday-party': 'Birthday Party',
            'blog-example-1': 'Fashion Blog',
            'blog-example-2': 'News Blog',
            'blog-example-3': 'Blogger',
            'blog-example-4': 'Health Blog',
            'blog-example-5': 'Business Blog',
            'blog2-example-1': 'Fashion Blog',
            'blog2-example-2': 'News Blog',
            'blog2-example-3': 'Blogger',
            'blog2-example-4': 'Health Blog',
            'blog2-example-5': 'Business Blog',
            'blogger': 'Blogger',
            'business-blog': 'Business Blog',
            'business-example-1': 'Consulting Firm',
            'business-example-2': 'Non-Profit Organization',
            'business-example-3': 'Coaching Professional',
            'business-example-4': 'Cleaning Service',
            'business-example-5': 'Marketing Agency',
            'charity': 'Charity',
            'cleaning-service': 'Cleaning Service',
            'coaching-professional': 'Coaching Professional',
            'conference': 'Conference',
            'consulting-firm': 'Consulting Firm',
            'cv': 'CV',
            'design-example-1': 'Graphic Designer',
            'design-example-2': 'Artist',
            'design-example-3': 'Portfolio',
            'design-example-4': 'Architecture Firm',
            'design-example-5': 'Design Studio',
            'design-studio': 'Design Studio',
            'dj': 'DJ',
            'elementary-school': 'Elementary School',
            'event-photographer': 'Event Photographer',
            'events-example-1': 'Wedding',
            'events-example-2': 'Non-Profit Event',
            'events-example-3': 'Conference',
            'events-example-4': 'Family Reunion',
            'events-example-5': 'Sports Tournament',
            'fashion-blog': 'Fashion Blog',
            'fashion-photography-studio': 'Fashion Photography Studio',
            'graphic-designer': 'Graphic Designer',
            'health-blog': 'Health Blog',
            'health-wellness-example-1': 'Make Up Artist',
            'health-wellness-example-2': 'Massage Therapist',
            'health-wellness-example-3': 'Salon',
            'health-wellness-example-4': 'Skin Care Clinic',
            'health-wellness-example-5': 'Nutritionist',
            'hip-hop-artist': 'Hip Hop Artist',
            'make-up-artist': 'Make Up Artist',
            'marathon': 'Marathon',
            'marketing-agency': 'Marketing Agency',
            'massage-therapist': 'Massage Therapist',
            'meetup': 'Meetup',
            'music-example-1': 'DJ',
            'music-example-2': 'Recording Studio',
            'music-example-3': 'Musician',
            'music-example-4': 'Rock Band',
            'music-example-5': 'Hip Hop Artist',
            'musician': 'Musician',
            'news-blog': 'News Blog',
            'non-profit-organization': 'Non-Profit Organization',
            'nutritionist': 'Nutritionist',
            'online-clothing-store': 'Online Clothing Store',
            'online-hair-extensions-store': 'Online Hair Extensions Store',
            'online-health-food-store': 'Online Health Food Store',
            'online-home-goods-store': 'Online Home Goods Store',
            'online-jewelry-store': 'Online Jewelry Store',
            'online-sporting-goods-store': 'Online Sporting Goods Store',
            'other-example-1': 'Non-Profit Organization',
            'other-example-2': 'School',
            'other-example-3': 'Charity',
            'other-example-4': 'Author',
            'other-example-5': 'Blogger',
            'photographer': 'Photographer',
            'photography-example-1': 'Event Photographer',
            'photography-example-2': 'Photography Portfolio',
            'photography-example-3': 'Fashion Photography Studio',
            'photography-example-4': 'Photographer',
            'photography-example-5': 'Photography Studio',
            'photography-portfolio': 'Photography Portfolio',
            'photography-studio': 'Photography Studio',
            'portfolio': 'Portfolio',
            'portfolio-cv-example-1': 'Portfolio',
            'portfolio-cv-example-2': 'Artist',
            'portfolio-cv-example-3': 'Actor',
            'portfolio-cv-example-4': 'Resume',
            'portfolio-cv-example-5': 'CV',
            'real-estate-agency': 'Real Estate Agency',
            'recording-studio': 'Recording Studio',
            'resume': 'Resume',
            'rock-band': 'Rock Band',
            'salon': 'Salon',
            'school': 'School',
            'skin-care-clinic': 'Skin Care Clinic',
            'stores-example-1': 'Online Clothing Store',
            'stores-example-2': 'Online Jewelry Store',
            'stores-example-3': 'Online Home Goods Store',
            'stores-example-4': 'Online Health Food Store',
            'stores-example-5': 'Online Hair Extensions Store',
            'travel-agency': 'Travel Agency',
            'unknown-example-1': 'Travel Agency',
            'unknown-example-2': 'Elementary School',
            'unknown-example-3': 'Real Estate Agency',
            'unknown-example-4': 'Online Sporting Goods Store',
            'unknown-example-5': 'Make Up Artist',
            'wedding': 'Wedding'
          },
          'example-label': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Law Firm</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Travel Agency</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Make Up Artist</a>',
          'example-label-Blog': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Personal Blog</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Travel Blog</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>News Blog</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Fashion Blog</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Food Blog</a>',
          'example-label-Stores': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Online Clothing Store</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Online Accessories Shop</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Online Skin Care Store</a>',
          'example-label-business': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Law Firm</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Real Estate Agency</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Personal Trainer</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Construction Company</a>',
          'example-label-design': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Web Design Portfolio</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Creative Agency</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Illustrator Portfolio</a>',
          'example-label-health-wellness': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Personal Trainer</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Make Up Artist</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Yoga Studio</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Dental Clinic</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Hair Salon</a>',
          'example-label-music': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Classical Musician</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Rock Band</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>DJ</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Recording Studio</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Wedding Singer</a>',
          'example-label-other': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Elementary School</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Sports Club</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Church</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Army & Navy Store</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Art Center</a>',
          'example-label-photography': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Wedding Photographer</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Travel Photographer</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Baby Photography Studio</a>',
          'example-label-portfolio-cv': 'e.g. <a ng-click=\'$ctrl.onExampleClick($event)\'>Graphic Design Portfolio</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Resume</a>, <a ng-click=\'$ctrl.onExampleClick($event)\'>Writing Portfolio</a>',
          'examples-label': 'EXAMPLES',
          'import-site-confirm': {
            'body': 'To get a website that’s uniquely yours, Wix ADI needs to confirm that you own the content of the site you provided.',
            'title': 'Wix ADI wants to create your unique website',
            'validate-content': 'By clicking "Next", you confirm that you own this site\'s content.'
          },
          'import-site-content-tip': '<span class=\'label\'>Tip:</span> This step is especially recommended if you’d like to redesign a website<br>you own. ADI will magically recreate a shiny new version of your website<br>in Wix using your images and texts.',
          'input-placeholder': 'Enter your business or website type',
          'invalid-characters-label': 'Please enter text in English',
          'label': 'What is your website for?',
          'label-Blog': 'What kind of blog do you want to create?',
          'label-Stores': 'What kind of online store do you want to create?',
          'label-business': 'What kind of business do you want to create a website for?',
          'label-design': 'What do you want to create a website for?',
          'label-health-wellness': 'What do you want to create a website for?',
          'label-music': 'What kind of music website do you want to create?',
          'label-other': 'What do you want to create a website for?',
          'label-photography': 'What kind of photography website do you want to create?',
          'label-portfolio-cv': 'What kind of resume or portfolio do you want to create?',
          'label-singleEvent': 'What type of event are you planning?',
          'no-result-label': 'We couldn’t find anything that matched your search.',
          'no-result-label-new': 'We couldn’t find anything that matched your search.<br> You can start with one of the following:',
          'no-result-popover-label': 'Can’t find what you’re looking for? Start with one of the following:',
          'related-results-label': 'Related Results',
          'search-label': 'Search for Your Website Type or Business Type',
          'search-label-Blog': 'What Kind of Blog Do You Want to Create?',
          'search-label-Stores': 'What Kind of Online Store Do You Want to Create?',
          'search-label-music': 'What Kind of Music Website Do You Want to Create?',
          'search-label-photography': 'What Kind of Photography Website Do You Want to Create?',
          'search-label-portfolio-cv': 'What Kind of Portfolio or CV Do You Want to Create?',
          'search-tip': '<span class=\'label\'>Tip:</span> Select your business or website type so ADI can start custom building a website for your needs',
          'sublabel': 'Choose the business or website type to get started.',
          'suggestions-label': 'SUGGESTIONS'
        },
        'change-link': 'Change',
        'contentExperiment': {
          'service': {
            'Blog': 'Create a blog',
            'Blog2': 'Create a blog',
            'Bookings': 'Take bookings & appointments',
            'GetSubscribers': 'Get subscribers',
            'Stores': 'Sell online'
          }
        },
        'event-details': {
          'address-label': 'LOCATION',
          'date': '{{date}} at {{time}}',
          'date-tbd': 'DATE TBD',
          'dates-label': 'DATE & TIME',
          'description-label': 'DESCRIPTION (OPTIONAL)',
          'description-placeholder': 'Tell people more about this event in 300 characters or less.',
          'from-date': 'FROM {{date}} at {{time}}',
          'location-tbd': 'LOCATION TBD',
          'name-label': 'EVENT NAME',
          'name-placeholder': 'Enter Event Name',
          'to-date': 'TO {{date}} at {{time}}'
        },
        'first-time': {
          'title1': 'Enter the world of ADI.',
          'title2': 'Let\'s design a website that\'s uniquely yours.'
        },
        'general-categories': {
          'general': {
            'beauty-business': 'Beauty Business',
            'design-business': 'Design Business',
            'general-blog': 'General Blog',
            'local-business': 'Local Business',
            'music-business': 'Music Business',
            'online-store': 'Online Store',
            'other': 'Other',
            'photographer': 'Photographer',
            'portfolio-and-cv': 'Portfolio & CV'
          }
        },
        'import-site-content': {
          'address-could-not-found': 'ADI can’t import content from this site. Skip this section to keep going.',
          'address-does-not-exist': 'Enter your website address like this: www.sitename.com and try again.',
          'address-message': 'Enter your existing website address',
          'title': 'Want to import content from an existing site? Enter the website address below.'
        },
        'import-youtube-url': {
          'channel-does-not-exist': 'This channel isn’t showing up. Double check the URL and try again. '
        },
        'loading-message': 'Conducting interstellar search...',
        'logo': {
          'add': 'ADD LOGO',
          'edit': 'EDIT LOGO',
          'error': 'Uh oh. It didn\'t load. Please try again',
          'remove': 'REMOVE',
          'replace': 'REPLACE',
          'replaceLogo': 'REPLACE LOGO',
          'upload': 'Upload<br>logo',
          'uploading': 'UPLOADING...'
        },
        'next-button': 'Next',
        'cancel-button': 'Cancel',
        'done-button': 'Done',
        'optional-label': 'OPTIONAL',
        'recaptcha': {
          'terms': 'By checking this box, you agree to our <a href=\'https://www.wix.com/about/terms-of-use\' target=\'_blank\'>Terms of Use</a><br>and acknowledge that you read our <a href=\'https://www.wix.com/about/privacy\' target=\'_blank\'>Privacy Policy</a>',
          'terms-new': 'By clicking next, you agree to our <a href=\'https://www.wix.com/about/terms-of-use\' target=\'_blank\'>Terms of Use</a><br>and acknowledge that you read our <a href=\'https://www.wix.com/about/privacy\' target=\'_blank\'>Privacy Policy</a>',
          'title': 'Let\'s confirm you are not a robot',
          'title-new': 'Let\'s confirm<br> you are not a<br> robot'
        },
        'search-confirm': {
          'details1': 'Wix ADI will start by gathering info from\npublic internet sources.',
          'details2': 'You’ll be able to review and edit everything before you go live.',
          'subline': 'Nothing will be published online without your review & approval.',
          'title': 'Help Wix ADI get to know you:',
          'title|abTranslate_1': 'Help Wix ADI get to know you:',
          'title-old': 'Wix ADI wants to learn about you:\n{{ businessName }}'
        },
        'select-user': {
          'results-error': 'Feel free to <button ng-click=\'$ctrl.skip()\'>skip</button> to add details yourself',
          'results-multiple': 'results found',
          'results-none': 'Search again or <button ng-click=\'$ctrl.skip()\'>skip</button> to add details yourself',
          'results-single': 'result found',
          'select-button': 'That\'s Me',
          'title': 'Is one of these your business?',
          'title-error': 'Try searching again.',
          'title-no-results': 'We didn’t find your business.',
          'title-no-results|abTranslate_1': 'We didn’t find your business.'
        },
        'service': {
          'Blog': 'Blog',
          'Bookings': 'Appointment booking online',
          'GetSubscribers': 'User subscription',
          'Stores': 'Online store',
          'title': 'Does your website need any of the following features?',
          'title-new': 'Do you need<br> any of these<br> features?'
        },
        'skip-button': 'Skip',
        'start': {
          'button': 'Start'
        },
        'youtube-channel': {
          'label': 'Want to sync your YouTube channel to your website?',
          'placeholder': 'Paste your YouTube channel URL'
        }
      },
      'new-intro': {
        'business-name': {
          'input-placeholder': '  Add your business or website name',
          'input-placeholder-app': '  Add the name of your app',
          'input-placeholder-band': '  Add the name of your band',
          'input-placeholder-blog': '  Add the name of your blog',
          'input-placeholder-business': '  Add your name or your business name',
          'input-placeholder-businessName': '  Add the name of your business',
          'input-placeholder-camp': '  Add the name of your camp',
          'input-placeholder-campaign': '  Add the name of your campaign',
          'input-placeholder-choir': '  Add the name of your choir',
          'input-placeholder-church': '  Add the name of your church',
          'input-placeholder-courseOrProgram': '  Add the name of your course or program',
          'input-placeholder-ebookOrGuide': '  Add the name of your eBook or guide',
          'input-placeholder-filmOrVideo': '  Add the title of your film or video',
          'input-placeholder-forum': '  Add the name of your online forum',
          'input-placeholder-fullOrStagename': '  Add your full name or stage name',
          'input-placeholder-fullname': '  Add your full name',
          'input-placeholder-hotelOrResort': '  Add the name of your hotel or resort',
          'input-placeholder-nameOrBand': '  Add your stage name or band name',
          'input-placeholder-nameOrPractice': '  Add your name or the name of your practice',
          'input-placeholder-onlineStore': '  Add the name of your online store',
          'input-placeholder-org': '  Add the name of your organization',
          'input-placeholder-pageLanding': '  Add the name of your landing page',
          'input-placeholder-project': '  Add the title of your project',
          'input-placeholder-publication': '  Add the name of your publication',
          'input-placeholder-radioShowStation': '  Add the name of your radio show or station',
          'input-placeholder-school': '  Add the name of your school',
          'input-placeholder-show': '  Add the title of your film or show',
          'input-placeholder-singleEvent': '  Add the name of your event',
          'input-placeholder-site': '  Add the name of your site',
          'input-placeholder-store': '  Add the name of your store',
          'input-placeholder-studio': '  Add the name of your studio',
          'input-placeholder-synagogue': '  Add the name of your synagogue',
          'input-placeholder-team': '  Add the name of your team',
          'input-placeholder-venue': '  Add the name of your venue',
          'input-placeholder-website': '  Add your name or your website\'s name',
          'input-placeholder-zooOrPark': '  Add the name of your zoo or park',
          'input-label': 'What is the<br> name of your<br> business or<br> website?',
          'label': 'What is the<br> name of your<br> business or<br> website?',
          'label-app': 'What is the<br> name of your<br> app?',
          'label-artist': 'What is your<br> artist name?',
          'label-artist-or-band': 'What is your<br> artist or<br> band\'s name?',
          'label-artistOrBand': 'What is your<br> artist or<br> band\'s name?',
          'label-band': 'What is the<br> name of your<br> Band?',
          'label-band2': 'What is your<br> band\'s name?',
          'label-blog': 'What is the<br> name of your<br> blog?',
          'label-blogWebsite': 'What is the<br> name of your<br> Blog or<br> Website?',
          'label-business': 'What is your<br> name or your<br> Business name?',
          'label-businessName': 'What is the<br> name of your<br> business?',
          'label-camp': 'What is the<br> name of your<br> camp?',
          'label-campaign': 'What is the<br> name of your<br> campaign?',
          'label-choir': 'What is the<br> name of your<br> choir?',
          'label-church': 'What is the<br> name of your<br> church?',
          'label-courseOrProgram': 'What is the<br> name of your<br> course or program?',
          'label-ebookOrGuide': 'What is the<br> name of your<br> eBook or guide?',
          'label-filmOrVideo': 'What is the<br> title of your<br> film or video?',
          'label-forum': 'What is the<br> name of your<br> online forum?',
          'label-fullOrStagename': 'What is your<br> full name or<br> stage name?',
          'label-fullname': 'What is your<br> full name?',
          'label-hotelOrResort': 'What is the<br> name of your<br> hotel or resort?',
          'label-nameOrBand': 'What is your<br> name or your<br> band\'s name?',
          'label-nameOrPractice': 'What is your<br> name or the name<br> of your practice?',
          'label-onlineStore': 'What is the<br> name of your<br> online store?',
          'label-org': 'What is the<br> name of your<br> organization?',
          'label-pageLanding': 'What is the<br> name of your<br> landing page?',
          'label-project': 'What is the<br> title of your<br> project?',
          'label-publication': 'What is the<br> name of your<br> publication?',
          'label-radioShowStation': 'What is the<br> name of your<br> radio show or station?',
          'label-school': 'What is the<br> name of your<br> school?',
          'label-show': 'What is the<br> title of your<br> film or show?',
          'label-singleEvent': 'What is the<br> name of your<br> event?',
          'label-site': 'What is the<br> name of your<br> site?',
          'label-stagename': 'What is your<br> stage name?',
          'label-store': 'What is the<br> name of your<br> store?',
          'label-studio': 'What is the<br> name of your<br> studio?',
          'label-synagogue': 'What is the<br> name of your<br> synagogue?',
          'label-team': 'What is the<br> name of your<br> team?',
          'label-venue': 'What is the<br> name of your<br> venue?',
          'label-website': 'What is your<br> name or your<br> website\'s name?',
          'label-zooOrPark': 'What is the<br> name of your<br> zoo or park?'
        },
        'blocked-category': {
          'title-new': 'The Wix Editor<br />is the best option<br />for you'
        },
        'business-card-editable': {
          'email': {
            'label': 'Email'
          }
        },
        'business-location': {
          'input-label': 'Where is<br> your business<br> located?',
          'subline': '<span class=\'link-button\' data-hook=\'no-address-skip\' ng-click=\'$ctrl.skip()\'>Skip</span> this section if your business has no physical location.'
        },
        'business_card': {
          'logo': {
            'delete': 'Delete',
            'replace': 'Replace'
          }
        },
        'category-search': {
          'label': 'What type of site do you want to create?',
          'sublabel': 'Choose your business or website type to get started.'
        },
        'import-content': {
          'skip-button-name': 'Skip',
          'skip-content': 'this section if you don’t have a website yet.'
        },
        'import-site-content': {
          'sublabel': 'If you already have a website, enter the address so ADI can import your text and images.',
          'title': 'Want to import<br> content from your<br> existing site?'
        },
        'search-confirm': {
          'details': 'Wix ADI will search online to gather info for your website. You’ll be able to review and edit everything before you go live.',
          'title': 'Help Wix ADI<br />get to know:<br />{{ businessName }}'
        },
        'select-user': {
          'address': 'Address',
          'in': 'in',
          'name': 'Name',
          'no-results': 'We didn’t find your business online'
        },
        'service': {
          'title-new': 'Does your website<br />need any of<br />these features?'
        },
        'tour': {
          'logoExtraction': {
            'step3000': {
              'title': 'Want to create a color palette from your logo?'
            }
          }
        }
      },
      'link-details': {
        'dialog': {
          'cancel': 'Cancel',
          'header': 'Link To',
          'ok': 'Done'
        },
        'document': {
          'label': 'Document',
          'replace-file': {
            'button': 'Replace File'
          },
          'select-file': {
            'button': 'Select File'
          },
          'text': 'LINK TO'
        },
        'email': {
          'error': 'This is not a valid email address',
          'label': 'Email',
          'placeholder': 'e.g., Info@mysite.com',
          'text': 'EMAIL ADDRESS'
        },
        'none': {
          'label': 'None',
          'text': 'This element is not linked'
        },
        'page': {
          'label': 'Page',
          'select-anchor': {
            'text': 'WHERE ON PAGE',
            'top-of-page': 'Top of Page'
          },
          'select-page': {
            'text': 'SELECT PAGE'
          }
        },
        'paypal': {
          'amount': {
            'label': 'amount',
            'validation': 'Please set a valid amount'
          },
          'currency': {
            'label': 'currency'
          },
          'email': {
            'label': 'paypal email address',
            'placeholder': 'e.g., info@mysite.com'
          },
          'label': 'PayPal Donations',
          'toggle': {
            'label': 'Fixed Amount'
          }
        },
        'phone': {
          'error': 'This is not a valid phone number',
          'help': {
            'cta': 'Learn more.',
            'text': 'People who reach your site on mobile or tablet can click this link to call you.'
          },
          'label': 'Phone',
          'placeholder': 'e.g., +1-234-5678910',
          'text': 'PHONE NUMBER'
        },
        'web': {
          'error': 'This is not a valid web address',
          'label': 'Web Address',
          'placeholder': 'e.g., www.yourlink.com',
          'text': 'WEB ADDRESS'
        }
      },
      'popover': {
        'fpd-popup': {
          'title': 'Try an Optimized Design',
          'subtitle': 'We’ve optimized your page design\nfor a look you’re gonna love.'
        }
      },
      'media-organize': {
        'clipart': {
          'subtitle': 'Select Clipart',
          'suggestions-title': 'Other suggested cliparts, select a clipart to replace the one on top'
        },
        'custom-tab': {
          'free': 'Free from Wix',
          'from-business': 'Images from your business',
          'recommended-section': 'Recommended especially for your section',
          'show-all': 'Show All',
          'title': 'Recommended'
        },
        'gallery': {
          'subtitle': 'Drag and drop your media into position to get your gallery nicely organized.',
          'title': 'Organize Your Gallery Images'
        },
        'shape': {
          'subtitle': 'Select Shape',
          'suggestions-title': 'Other suggested shapes, select a shape to replace the one on top'
        },
        'type': {
          'title': 'Media Manager'
        },
        'video': {
          'subtitle': 'Select Video',
          'suggestions-title': 'Other suggested videos, select a video to replace the one on top'
        }
      },
      'media': {
        'image-alignment-options': {
          'bottom': 'Bottom',
          'center': 'Center',
          'top': 'Top'
        }
      },
      'members-area': {
        'edit-field': {
          'button-label': 'Edit'
        },
        'login-bar-panel': {
          'additional-text': {
            'label': 'Text',
            'option': {
              'hello-member': 'Hello Member',
              'member-name': 'Member Name',
              'welcome': 'Welcome'
            }
          },
          'description': 'This is where people sign up and members log in to your website.',
          'login-bar-show': {
            'label': 'What does the login bar show?',
            'option': {
              'pic': 'Profile Picture',
              'pic-and-text': 'Profile Picture & Text',
              'text': 'Text'
            }
          },
          'signup-settings-button': {
            'label': 'Member Signup Setttings'
          },
          'title': 'Member Login Bar'
        },
        'open-signup-settings-panel': {
          'label': 'Member Signup Settings'
        },
        'signup-settings-panel': {
          'allow-social-login': {
            'label': 'Allow social login',
            'option': {
              'facebook': 'Facebook',
              'google': 'Google'
            }
          },
          'codeOfConduct': {
            'label': 'Code of conduct page',
            'page-name': 'Code of Conduct'
          },
          'description': 'Choose who can become a member of your site.<br>Note: these options apply to your Member\'s Area only.',
          'privacyPolicy': {
            'label': 'Privacy policy',
            'page-name': 'Privacy Policy'
          },
          'termsOfUse': {
            'label': 'Terms of use',
            'page-name': 'Terms of Use'
          },
          'title': 'Member Signup Settings',
          'which-option-show-first': {
            'label': 'Which option shows first?',
            'option': {
              'login': 'Existing Member Login',
              'signup': 'New Member Signup'
            }
          },
          'who-can-be-member': {
            'label': 'Who can be a member?',
            'option': {
              'approved': 'People I Approve',
              'everyone': 'Everyone'
            }
          }
        }
      },
      'modelTree': {
        'homepage': 'Home'
      },
      'new-tour': {
        'welcome2': {
          'step2000': {
            'content': 'The colors and font will be used on your site.<br>You can easily change it later.',
            'title': 'Pick a style<br> you like'
          }
        }
      },
      'notifications': {
        'version-info': 'Application version: {{staticsVersion}}<br/>Saved by version: {{savedByVersion}}<br/>Content Version: {{contentVersion}}<br/>Santa Version: {{santaVersion}}'
      },
      'overlay': {
        'main-button-edit': 'Edit Section',
        'main-button-edit-header': 'Edit Header',
        'main-button-edit-footer': 'Edit Footer',
        'main-button-manage-tpa': 'Manage {{tpa}}',
        'main-button-tpa-settings': 'Settings',
        'main-button-designs': 'Change Design',
        'actions': {
          'copy': 'Copy',
          'crop': 'Crop',
          'delete': 'Delete',
          'delete-chat': 'Delete',
          'design': 'Design',
          'designs': 'Design',
          'duplicate': 'Duplicate',
          'edit': 'Edit',
          'edit-address': 'Address',
          'edit-pages': 'Edit Pages',
          'edit-seo': 'SEO',
          'edit-tooltip': 'Start customizing your site',
          'focus': 'Focus',
          'gallery-type': 'Change Style',
          'hide': 'Hide',
          'inbox': 'Open Inbox',
          'link-to': 'Link to',
          'list-item-to-page': 'Item to Page',
          'move': 'Move to',
          'open-media': 'Replace',
          'organize-gallery': 'Organize',
          'override-color': 'Override Color',
          'override-font-size': 'Resize Text',
          'rename': 'Rename',
          'set-map-style': 'Set map style',
          'settings': 'Settings',
          'settings2': 'Settings',
          'styles': 'Styles',
          'toggle-paragraphs': 'Split',
          'toggle-paragraphs-off': 'Merge',
          'upgrade-chat': 'Upgrade Chat'
        },
        'messages': {
          'apply-to-all': 'Apply to all list items',
          'color-not-readable': '<p>This section is not readable.<br/><a ng-click=\'$ctrl.setColor(action, -1)\' href="">Undo</a></p>',
          'reset-item': {
            'click': 'Reset Colors',
            'message': 'Text in this item is not readable.'
          },
          'reset-section': {
            'message': 'Text in this section is\'t readable.'
          }
        }
      },
      'page-preset-previews': {
        'edit-site': 'Edit Site',
        'select-layout': 'Use This Layout',
        'preview': 'Preview',
        'preview-mode': {
          'edit-site': 'Edit Site'
        },
        'pick-homepage-mode': {
          'edit-site': 'Edit New Site',
          'keep-mine': 'Edit Original Site'
        },
        'back': 'Back',
        'skip': 'Skip',
        'title': 'Pick your favorite homepage design',
        'description': 'You can easily customize font, colors, images and more.',
        'pagination-has-more': 'View More Designs',
        'choose-layout-title': 'Pick your favorite homepage layout',
        'choose-layout-description': 'These layouts are recommended for your site.',
        'choose-layout': {
          'pagination-has-more': 'View More Layouts'
        },
        'choose-colors-title': 'Choose your site colors',
        'choose-colors-description': 'These colors will be used across your site.',
        'choose-colors': {
          'pagination-has-more': 'View More Colors'
        },
        'pick-homepage-mode-title': 'Here\'s Your New Website',
        'pick-homepage-mode-description': 'Edit to customize colors, images, and more.'
      },
      'full-page-design': {
        'choose-page-design-title': 'Choose an optimized page design',
        'edit': 'Use This Design',
        'choose-page-design-description': 'These layouts are tailored for the content on this page.'
      },
      'page-transition': {
        'cross-fade': 'Cross Fade',
        'horizontal': 'Horizontal',
        'none': 'None',
        'out-in': 'Out In',
        'vertical': 'Vertical'
      },
      'pages_panel': {
        'add-page': {
          'desktop': '+ Add Page',
          'mobile': {
            'target': 'Desktop',
            'text': 'Want to add more pages to your site? Go to'
          }
        },
        'import-page': 'Import',
        'page-name': {
          'error': 'Your page name must have<br />between 1-100 characters'
        },
        'rename-page': {
          'input': {
            'placeholder': 'Enter name'
          }
        },
        'title': 'Pages'
      },
      'popups': {
        'add-app': {
          'accept-button': 'Add to Page',
          'description': 'It will show above the footer on your page.',
          'heading': 'Add {{TPA}}'
        },
        'after-page-add': {
          'accept': 'Keep Going',
          'heading': 'Congrats!',
          'text': 'You\'ve added a new page to your website.'
        },
        'after-tpa-add': {
          'text': 'You\'ve added {{TPA}} to your website!'
        },
        'after-tpa-bandsintown-add-section': {
          'text': 'Connect your account to display tour dates, sell tickets and more.'
        },
        'after-tpa-bandsintown-add': {
          'heading': 'Nice! You\'ve Added Bandsintown',
          'text': 'Connect your account to display tour dates, sell tickets and more.'
        },
        'after-tpa-blog-add-section': {
          'text': 'We’ve added a new website page dedicated to your blog. Easily write, edit and schedule posts, showcase photos & videos,<br/> add a comments section & more.'
        },
        'after-tpa-blog-add': {
          'heading': 'You Have a Blog',
          'text': 'Now you can create and schedule posts, add comments, get followers and more.'
        },
        'after-tpa-blog2-add-section': {
          'text': 'Now you can create and schedule posts, add comments, get followers and more.'
        },
        'after-tpa-blog2-add': {
          'heading': 'You Have a Blog',
          'text': 'Now you can create and schedule posts, add comments, get followers and more.'
        },
        'after-tpa-bookings-add-section': {
          'text': 'Take bookings 24/7, get paid online and manage your schedule on the go.<br/>It’s all 100% commission free!'
        },
        'after-tpa-bookings-add': {
          'heading': 'Take Bookings Online',
          'text': 'Add services, connect payments & get paid online - it’s 100% commision free.'
        },
        'after-tpa-chat_widget-add': {
          'button': 'Got It',
          'heading': 'Great! Chat Was Added',
          'text': 'Publish your site so you can chat with site visitors from desktop and mobile.'
        },
        'after-tpa-events-add-section': {
          'text': 'Set up and manage your event. Add all the details, collect RSVPs, sell tickets & more.'
        },
        'after-tpa-events-add': {
          'heading': 'Nice! Events Added'
        },
        'after-tpa-forum-add': {
          'heading': 'You\'ve Got a Forum',
          'text': 'Click Preview to add your categories and write posts.'
        },
        'after-tpa-getsubscribers-add-section': {
          'text': 'Now visitors can sign up to your site. We\'ll email you every time someone subscribes. <br/> <br/>'
        },
        'after-tpa-getsubscribers-add': {
          'heading': 'Nice! You Have a Subscribe Form',
          'text': 'Now visitors can sign up to your site. You’ll get an email every time someone new subscribes. <br/> <br/>'
        },
        'after-tpa-getsubscribers-learn-more': 'Learn More',
        'after-tpa-instagram-add-section': {
          'text': 'Connect an Instagram account to display photos and videos in a feed on your site.'
        },
        'after-tpa-instagram-add': {
          'heading': 'Nice! You Have an<br/>Instagram Feed'
        },
        'after-tpa-music-add-section': {
          'text': 'Easily add, stream & sell your music —<br/>directly from your site!'
        },
        'after-tpa-music-add': {
          'heading': 'Everything You Need<br/>For Your Music',
          'text': 'Easily add, stream & sell your music —<br/>directly from your site!'
        },
        'after-tpa-progallery-add-section': {
          'text': 'Upload your photos and videos and display them in a stunning gallery on your site.'
        },
        'after-tpa-progallery-add': {
          'button': 'Get Started',
          'heading': 'The Wix Pro Gallery<br/>is Now on Your Site',
          'text': 'Upload your photos and videos and display them in a stunning gallery on your site.'
        },
        'after-tpa-stores-add-section': {
          'text': 'Choose a stunning gallery, add your products, connect payments and more.'
        },
        'after-tpa-stores-add': {
          'heading': 'You Have an Online Store',
          'text': 'Choose a stunning gallery, add your products, connect payments and more.'
        },
        'after-tpa-video-add-section': {
          'text': 'Easily upload, stream & sell your videos - directly from your site.'
        },
        'after-tpa-video-add': {
          'heading': 'Welcome to Wix Video Player'
        },
        'autosave': {
          'heading': 'Your Site is Automatically Saved!',
          'text': 'Wix ADI automatically saves your website design, so you don\'t have to.'
        },
        'cant-delete-footer': {
          'heading': 'This Is Your Footer<br/>It Can\'t Be Hidden',
          'text': 'Your footer appears on all your pages,<br/>so choose at least one thing to show.'
        },
        'cant-delete-header': {
          'heading': 'This is Your Header<br/>It Can\'t Be HIdden',
          'text': 'Your header appears on all your pages,<br/>so choose at least one thing to show.'
        },
        'change-to-editor': {
          'bullets': {
            '1': 'Easy drag and drop',
            '2': '1000s of advanced design features',
            '3': 'Specialized Apps for Restaurants, Hotels, Events and more',
            '2-new': '1000s of advanced design features',
            '3-new': 'Specialized Apps for Restaurants, Hotels, Events and more'
          },
          'cancel': 'Keep Editing Here',
          'go-to-editor': 'Go to the Editor',
          'subtitle': '',
          'title': 'Edit Your Site in the Wix Editor',
          'warning': 'If you save your site in the Wix Editor, you won’t be able to continue editing this website in Wix ADI.',
          'warning-new': 'If you want to come back to Wix ADI, any changes you saved in the Wix Editor won’t come with you'
        },
        'delete-chat': {
          'heading': 'Deleting Chat?',
          'text': 'You won’t be able to chat with<br/>your site visitors online.'
        },
        'delete-list-item': {
          'heading': 'Delete Item',
          'text': 'Are you sure you want to delete this item?'
        },
        'deleteitem': {
          'heading': 'Delete Item',
          'text': 'Are you sure you want to delete this item?'
        },
        'deletesection': {
          'heading': 'Deleting Your Section?',
          'text': 'This section will be removed from your site.'
        },
        'edit-now': 'Edit Now',
        'fitmode': {
          'heading': 'Section Designs',
          'text': 'Use one of these layouts to show a full image.'
        },
        'import-page-failed': {
          'heading': 'We’re Unable to Add This Page',
          'text': 'ADI can’t add this page to your site.<br/>Try again later or choose another page.'
        },
        'import-page-success': {
          'heading': 'Nice! This Page Was Added',
          'text': 'ADI added this page to your new site.<br/>Go ahead and customize it.'
        },
        'mobile-editor': {
          'Chat_Widget': 'To customize Chat,<br>switch to desktop mode.'
        },
        'movesection': {
          'heading': 'Move This Section',
          'text': 'Select Page'
        },
        'new-publish-connect-domain': {
          'option1': {
            'text': 'Get a new domain name like <strong>{{domain}}</strong>'
          }
        },
        'page-add-initiation': {
          'accept': 'Got It',
          'heading': 'Here\'s your website menu',
          'text': 'See how your menu works by clicking Preview in the top right corner.'
        },
        'page-delete-confirmation': {
          'heading': 'Deleting Your Page?',
          'text': 'All the sections and features on this page will be removed from your site.'
        },
        'publish-choose-domain': {
          'button': 'Publish & Continue',
          'heading': 'Choose a domain to publish your site on',
          'option1': {
            'text': 'Use a Free Wix.com domain'
          },
          'option2': {
            'text': 'Connect your own customized domain'
          },
          'subtitle': 'The domain you select will be your site\'s address'
        },
        'publish-congrats': {
          'action': {
            'dashboard': {
              'description': 'Grow your business & get people to your site',
              'linkText': 'Go to Your Wix Home'
            },
            'email': {
              'description': 'Get an email address at your domain',
              'linkText': 'Get Your Own Mailbox'
            },
            'facebook': {
              'description': 'Get more visitors by sharing your site',
              'linkText': 'Share on Facebook',
              'socialText': 'My very own website! Created by me'
            },
            'seowiz': {
              'description': 'Get your website found on Google',
              'linkText': 'Follow Your SEO Plan'
            },
            'shoutout': {
              'description': 'Promote your site with beautiful email campaigns',
              'linkText': 'Send an Email'
            },
            'twitter': {
              'description': 'Tweet your site and build a loyal following',
              'linkText': 'Tweet on Twitter',
              'socialHashTags': 'MyProWebsite, StartStunning',
              'socialText': 'My very own website! Created by me - made with @Wix'
            }
          },
          'button': 'Done',
          'connect-your-own-domain': {
            'button': 'Connect your own domain'
          },
          'heading': 'Congratulations!',
          'heading-first-publish': 'Congrats! Your site has been published',
          'left': {
            'button': 'View Site',
            'heading': 'Your site is published & live online:',
            'heading-first-publish': 'We\'ve published your site at this address:'
          },
          'right': {
            'button': 'Connect Domain',
            'heading': 'What\'s Next',
            'sale-text': 'Upgrade now and get a free domain <span class=\'-sale-accent\'>+{{text}}% off</span> our most popular premium plans',
            'subtitle': 'Connect Your Own Branded Domain',
            'text': 'Give your site a more professional look with a domain like: www.mystunningwebsite.com'
          },
          'three-actions-promote': {
            'subtitle': 'Promote your website and business'
          },
          'three-actions-social': {
            'subtitle': 'Drive traffic to your website'
          }
        },
        'publish-connect-domain': {
          'button': 'Maybe Later',
          'heading': 'Connect Your Domain',
          'option1': {
            'text': 'Get a new domain name'
          },
          'option2': {
            'text': 'Connect a domain you already own'
          },
          'subtitle': 'Upgrade your site to connect your own customized domain'
        },
        'publish-failed': {
          'accept': 'Publish',
          'heading': 'That Didn’t Quite Work as Planned',
          'text': 'Try publishing again to get your stunning website live.'
        },
        'save-your-site': {
          'heading': 'Save Your Website',
          'text': 'Sign up to Wix.com to save your changes,<br/>and keep going.'
        },
        'time-to-publish': {
          'heading': 'It’s a Great Time to Publish',
          'text': 'Now that you’ve added what you <br/> need to get online, simply click <br/>Publish in the top right corner'
        },
        'tpa-delete-all-widgets-confirmation': {
          'text': 'All the features of this app<br/>will be removed from your website.'
        },
        'tpa-delete-confirmation': {
          'heading': 'Deleting {{TPA}}?',
          'text': 'All the features of this app<br/> will be removed from your site.'
        },
        'unfitmode': {
          'heading': 'Choose A New Design',
          'text': 'Select a design that shows a cropped image.'
        },
        'welcome-to-mobile-editor-existing': {
          'heading': 'New! Edit Your Site on Mobile',
          'heading-next': 'Your Changes Will Stay Here',
          'text': 'Try new designs, hide elements and more.',
          'text-next': 'Changes you make won\'t affect how your site looks on desktop.'
        },
        'welcome-to-mobile-editor-new': {
          'heading': 'Check Out Your Site on Mobile',
          'text': 'You can make changes to layouts, hide elements and more. Changes you make won\'t affect how your site looks on desktop.'
        }
      },
      'preset-title': {
        'add': 'Add this Page',
        'change-color': 'Use these colors',
        'click': 'Click or drag section',
        'click-or-drag': 'Add this section',
        'switch-preset': 'Use this layout'
      },
      'regex': {
        'email_format': '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
      },
      'seo_panel': {
        'description': {
          'placeholder': 'What makes this page unique? Describe your business and the content on your site...',
          'validation': 'Description length must be 320 characters at most (including white spaces)'
        },
        'keywords': {
          'launch': {
            'button': 'Let\'s Go',
            'description': 'Boost your site’s SEO with Wix SEO Wiz. Head to your step-by-step plan now.',
            'note': 'Google doesn’t use these keywords, but other search engines may.',
            'title': 'Get Found on Google'
          },
          'placeholder': 'Add keywords separated by commas',
          'validation': 'Can only accept up to 10 keywords and 250 characters at most (including white spaces)'
        },
        'search_results': {
          'placeholder': 'Hide this page from search results'
        },
        'title': {
          'validation': 'Title length must be 70 characters at most (including white spaces)'
        },
        'url': {
          'validation': 'Page URL should be 1 character or more with no special characters (%,&,# etc.)'
        }
      },
      'site-converter': {
        'default': {
          'item-title': 'Item {{index}}'
        }
      },
      'smart-assist': {
        'better-layout-issue': {
          'fix': 'Change Design',
          'text': 'Switch up the design on your {{sectionType}} section'
        },
        'divider': {
          'content': 'Site Content',
          'general': 'Site Essentials',
          'imported-content': 'Your Imported Content',
          'upgrade': 'Upgrade'
        },
        'dividers': {
          'general': 'General',
          'page': '{{pageName}} Page',
          'section': '{{sectionName}} Section'
        },
        'empty-state': {
          'after-suggestions': {
            'description': 'Find out when something on your site needs an update.',
            'title': 'Good Job! You\'re Up To Date'
          },
          'before-suggestions': {
            'description': 'Find out when something on your site needs to be updated, like contact info social links and more.',
            'title': 'Smart Tips Will Appear Here'
          },
          'go-to-assistant-bucket': 'See What\'s Next'
        },
        'image-upscale-issue': {
          'fix': 'Improve Image',
          'text': 'Automatically improve the resolution of your image.'
        },
        'import-content-issue': {
          'fix': 'Use Your Text',
          'text': 'Find text ADI imported and use it on your site.'
        },
        'import-images-issue': {
          'fix': 'Use Your Images',
          'text': 'Find images ADI imported and use them on your site.'
        },
        'publish-issue': {
          'fix': 'Publish Site',
          'text': 'Publish your site so people can see it online.'
        },
        'issue': {
          'fix': 'Let\'s Go'
        },
        'publish_site_interval-issue': {
          'text': 'It’s a great time to publish!',
          'fix': 'Publish Site'
        },
        'socials-default-links-issue': {
          'text': 'Connect your social accounts'
        },
        'tour': {
          'import-content': {
            'done-use-text': 'Got It',
            'text-manager-panel': {
              'select': 'See text you like? Use it on your site. Replace your text with something new or Add on.'
            }
          },
          'socials-default-link': {
            'hide-or-update-step': {
              'content': 'Connect your social accounts so<br>people can follow you.',
              'hide-icons-button': 'Hide from Site',
              'update-links-button': 'Update Links'
            },
            'hide-socials-globally': {
              'content': 'Social icons are hidden from this section. You can hide all the social icons from your website in a click.',
              'hide-all-button-text': 'Hide All Icons'
            },
            'link-socials-step': {
              'content': 'Make it easy for people to find and follow you. Add and update your social links here.'
            },
            'socials-cant-be-hidden-step': {
              'content': 'Some social panels can\'t be hidden',
              'done-button-text': 'Got It'
            },
            'socials-globally-hidden': {
              'content': 'Social icons are hidden.',
              'done-button-text': 'Done'
            },
            'socials-linked-step': {
              'content': 'Nice! All your accounts<br/>are connected.',
              'done-button-text': 'Done'
            }
          },
          'unlinked-button': {
            'button-hidden-step': {
              'content': 'This button is hidden.',
              'content-for-list-items': 'All the buttons on this list are hidden.',
              'done-button-text': 'Done'
            },
            'button-linked-step': {
              'content': 'Nice! This button is linked.',
              'done-button-text': 'Done'
            },
            'link-or-hide-step': {
              'content': 'Add a link to the button or hide it from this section.',
              'content-for-list-items': 'Add a link to the button or hide all the buttons on this list.',
              'hide-button-text': 'Hide it',
              'hide-button-text-for-list-items': 'Hide all',
              'link-button-text': 'Link it'
            }
          }
        },
        'unlinked-button-issue': {
          'text': 'Your {{buttonName}} button needs a link',
          'text-for-list-items': 'Link the button on your list item {{listItemName}}'
        }
      },
      'spinner': {
        'message': {
          '0': 'Loading everything you need',
          '1': 'It all starts with your stunning website',
          '2': 'Loading everything you need to be stunning',
          '3': 'Just a sec...',
          '4': 'On it…',
          '5': 'Coming soon...',
          '6': 'Adding features...',
          '7': 'Loading...'
        },
        'step': {
          'out-of': 'OUT OF',
          'step': 'STEP'
        }
      },
      'text-manager-dialog': {
        'actions': {
          'append': 'Add',
          'replace': 'Replace Text'
        },
        'adi': {
          'description': 'ADI selected this text for use on your site.'
        },
        'best-match-description': 'ADI scanned your imported text to find the best fit for this paragraph.',
        'best-match-label': 'RECOMMENDED',
        'best-match-text': 'Recommended Text',
        'description': 'Use text you’ve imported or custom text from ADI.',
        'imported-text': {
          'description': 'Use text you\'ve imported, or find custom\r\n text from ADI.'
        },
        'no-text-found': 'No Texts Found',
        'search-placeholder': 'Search'
      },
      'text-manager': {
        'default-source': 'ADI',
        'dialog': {
          'title': 'TEXT OPTIONS'
        },
        'field-editor': {
          'imported-text': 'Use Your Text',
          'link': 'TEXT OPTIONS',
          'use-imported-images': 'Use Images',
          'use-imported-text': 'Use Text',
          'your-text': 'View More Text'
        }
      },
      'tip_content': {
        'about-tip': {
          'add-mode': {
            'content_template': 'This is where you tell people a little about your business. Give them a behind-the-scenes peek into who you are and how you got started. Feel free to keep it short or go into more detail about your mission, values and philosophy.\r\n',
            'footer_button': 'Got It',
            'title': 'You’re about to add your About section.\n'
          },
          'edit-mode': {
            'content_template': '✓ Your story\r\n✓ Photos of the workplace or team\r\n✓ A button to contact you',
            'footer_button': 'Got It',
            'title': 'What should you include?\r\n'
          }
        },
        'articles-tip': {
          'add-mode': {
            'content_template': 'This is where you add all your Articles. Show visitors that you’re a knowledgeable professional - and keep them coming back with interesting & helpful content.',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Articles section.'
          },
          'edit-mode': {
            'content_template': '✓ Attention-grabbing title\n✓ Short, catchy description\n✓ A link to read more',
            'footer_button': 'Got It',
            'title': 'What does a great Articles section include?'
          }
        },
        'careers-tip': {
          'add-mode': {
            'content_template': 'This is where you show all your open positions. Potential candidates want to know what job opportunities you have and why it’s such a great place to work.',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Careers section.'
          },
          'edit-mode': {
            'content_template': '✓ Job position\n✓ Responsibilities & requirements\n✓ A button for candidates to apply',
            'footer_button': 'Got It',
            'title': 'What does a great Careers section include?'
          }
        },
        'classes-tip': {
          'add-mode': {
            'content_template': 'This is where you list your Classes. \nPeople want to know you have what they’re looking for. ',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Classes section.\n'
          },
          'edit-mode': {
            'content_template': '✓ Name of each Class\n✓ Benefits for your customer\n✓ Your best features\n✓ Information about pricing\n✓ A button so customers can sign up, learn more or get in touch',
            'footer_button': 'Got It',
            'title': 'What does a great Classes section include?\n'
          }
        },
        'contact-tip': {
          'add-mode': {
            'content_template': 'This is where people go to get your contact information. We recommend giving customers a few different ways to reach you. \r',
            'footer_button': 'Got It',
            'title': 'You’re about to add a Contact section.\n'
          },
          'edit-mode': {
            'content_template': '✓ Contact details - including email address, phone number & physical address\r\n✓ Contact form \r\n✓ Map',
            'footer_button': 'Got It',
            'title': 'What does a great Contact section include?'
          }
        },
        'contact': {
          'name': 'Rachel',
          'profession': 'Wix Specialist'
        },
        'events-tip': {
          'add-mode': {
            'content_template': 'This is where you promote your upcoming events. Give people a sense of what the event’s about and make them feel like they can’t miss out. \r\n',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Events section.\r\n'
          },
          'edit-mode': {
            'content_template': '✓ Event details - including name, date, time & location\r\n✓ Short, engaging description\r\n✓ Beautiful calendar\r\n✓ A button so people can RSVP',
            'footer_button': 'Got It',
            'title': 'What does a great Events section include?\r'
          }
        },
        'facilities-tip': {
          'add-mode': {
            'content_template': 'This is where you tell people about your facilities. People want to know if you have everything they need, so be sure to describe the features and benefits.',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Facilities section.'
          },
          'edit-mode': {
            'content_template': '✓ Facility name\n✓ Short description + opening hours (if relevant)\n✓ Beautiful photos\n✓ Features & benefits\n✓ A button to learn more',
            'footer_button': 'Got It',
            'title': 'What does a great Facility section include?'
          }
        },
        'faq-tip': {
          'add-mode': {
            'content_template': 'This is where you answer your audience’s most frequently asked questions. People want to find answers to their questions as quickly as possible. ',
            'footer_button': 'Got It',
            'title': 'You’re about to add your FAQ section.'
          },
          'edit-mode': {
            'content_template': '✓ A list of 6-10 questions and answers\n✓ Simple layout with easy-to read font, color & size\n✓ A button so people can easily get in touch',
            'footer_button': 'Got It',
            'title': 'What does a great FAQ section include?'
          }
        },
        'features-tip': {
          'add-mode': {
            'content_template': 'This is where you describe the distinguishing characteristics of your business. Feel free to list as many features as you want - include both the basics and ones that set you apart from the competition.\r\n',
            'footer_button': 'Got It',
            'title': 'You’re about to add a Features section.\r\n'
          },
          'edit-mode': {
            'content_template': '✓ Name of feature\r\n✓ Benefits for your customer\r\n✓ A button so customers can sign up, learn more or get in touch',
            'footer_button': 'Got It',
            'title': 'What does a great Features section include?\r\n'
          }
        },
        'first-time-desktop-content-panel': 'Show or hide elements by checking or unchecking the circle.',
        'first-time-mobile-content-panel': 'Show or hide elements by checking or unchecking the circle. Changes you make won\'t affect your site on desktop.',
        'first-time-preview-go-to-edit': 'To keep working on your site, click Back to ADI Editor.',
        'first_time_hide_field': 'This doesn\'t show on your mobile site right now.<br/>Want it to show? Click it.',
        'news-tip': {
          'add-mode': {
            'content_template': 'This is where you add all your News. Show visitors that you’re a knowledgeable professional - and keep them coming back with interesting & helpful content.',
            'footer_button': 'Got It',
            'title': 'You’re about to add your News section.'
          },
          'edit-mode': {
            'content_template': '✓ Attention-grabbing title\n✓ Short, catchy description\n✓ A link to read more',
            'footer_button': 'Got It',
            'title': 'What does a great News section include?'
          }
        },
        'opening hours-tip': {
          'add-mode': {
            'content_template': 'Make sure you tell your visitors when you’re open for business. This makes it easier for them to plan their visit and know when to call. \r\n',
            'footer_button': 'Got It',
            'title': 'You’re about to add an Opening Hours section.\r\n'
          }
        },
        'practices-tip': {
          'add-mode': {
            'content_template': 'This is where you list your Practices. \nPeople want to know you have what they’re looking for. ',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Practices section.\n'
          },
          'edit-mode': {
            'content_template': '✓ Name of each Practice\n✓ Benefits for your customer\n✓ Your best features\n✓ Information about pricing\n✓ A button so customers can sign up, learn more or get in touch',
            'footer_button': 'Got It',
            'title': 'What does a great Practices section include?\n'
          }
        },
        'products-tip': {
          'add-mode': {
            'content_template': 'This is where you list the products you offer. People want to know you have what they’re looking for.',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Products section.\r'
          },
          'edit-mode': {
            'content_template': '✓ Name of each product\r\n✓ Beautiful product shots\r\n✓ Benefits for your customer\r\n✓ Your best features\r\n✓ Pricing information\r\n✓ A button so customers can sign up, learn more or get in touch',
            'footer_button': 'Got It',
            'title': 'What does a great Products section include?\r\n'
          }
        },
        'projects-tip': {
          'add-mode': {
            'content_template': 'This is where you display the projects you’re proudest of. Show potential clients what you\'re capable of.',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Projects section.'
          },
          'edit-mode': {
            'content_template': '✓ Name of your project\n✓ Beautiful images\n✓ Short description \n✓ A button to learn more',
            'footer_button': 'Got It',
            'title': 'What does a great Projects section include?\n'
          }
        },
        'resources-tip': {
          'add-mode': {
            'content_template': 'This is where you add all your Resources. Show visitors that you’re a knowledgeable professional - and keep them coming back with interesting & helpful content.',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Resources section.'
          },
          'edit-mode': {
            'content_template': '✓ Attention-grabbing title\n✓ Short, catchy description\n✓ A link to read more',
            'footer_button': 'Got It',
            'title': 'What does a great Resources section include?'
          }
        },
        'resume-tip': {
          'add-mode': {
            'content_template': 'This is where you show your relevant experience. Keep it concise and double-check for spelling errors.',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Resume section.'
          },
          'edit-mode': {
            'content_template': '✓ Work experience - include your job title, employers’ names & start-end dates\n✓ Educational background\n✓ Special accomplishments & achievements\n✓ A button so people can easily get in touch',
            'footer_button': 'Got It',
            'title': 'What does a great Resume section include?'
          }
        },
        'section_height': 'Here you can change your section height',
        'services-tip': {
          'add-mode': {
            'content_template': 'This is where you list your Services.\nPeople want to know you have what they’re looking for. ',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Services section.\n'
          },
          'edit-mode': {
            'content_template': '✓ Name of each Service\n✓ Benefits for your customer\n✓ Your best features\n✓ Information about pricing\n✓ A button so customers can sign up, learn more or get in touch',
            'footer_button': 'Got It',
            'title': 'What does a great Services section include?\n'
          }
        },
        'special offers-tip': {
          'add-mode': {
            'content_template': 'This is where you tell people about your latest deals. Everyone loves a good sale!',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Special Offers section.'
          },
          'edit-mode': {
            'content_template': '✓ Special offer name\n✓ Beautiful photos\n✓ Features & Benefits\n✓ A button to learn more',
            'footer_button': 'Got It',
            'title': 'What does a great Special Offers section include?'
          }
        },
        'subscribe-tip': {
          'add-mode': {
            'content_template': 'Let visitors sign up to get your email updates. This is an important step in growing your contact list and building strong relationships with your customers.\r\n',
            'footer_button': 'Got It',
            'title': 'You’re about to add a Subscribe section.\r\n'
          }
        },
        'team-tip': {
          'add-mode': {
            'content_template': 'This is where you introduce your team. Helping people get to know you and your team is a great way to build trust.',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Team section.\r\n'
          },
          'edit-mode': {
            'content_template': '✓ Name of each employee and their title\r\n✓ Employee photos\r\n✓ Short descriptions including special honors, awards, degrees or what makes them excellent',
            'footer_button': 'Got It',
            'title': 'What does a great Team section include?\r\n'
          }
        },
        'testimonial-tip': {
          'add-mode': {
            'content_template': 'This is where you show people what others are saying about your business. Build credibility with short, honest quotes.',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Testimonial section.\r\n'
          },
          'edit-mode': {
            'content_template': '✓ Name of each client or customer\r\n✓ Beautiful photo\r\n✓ Short, honest quote',
            'footer_button': 'Got It',
            'title': 'What does a great Testimonial section include?\r\n'
          }
        },
        'tips-tip': {
          'add-mode': {
            'content_template': 'This is where you add all your Tips. Show visitors that you’re a knowledgeable professional - and keep them coming back with interesting & helpful content.',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Tips section.'
          },
          'edit-mode': {
            'content_template': '✓ Attention-grabbing title\n✓ Short, catchy description\n✓ A link to read more',
            'footer_button': 'Got It',
            'title': 'What does a great Tips section include?'
          }
        },
        'volunteer-tip': {
          'add-mode': {
            'content_template': 'This is where you add your volunteer opportunities. People want to know how they can get involved.',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Volunteer section.'
          },
          'edit-mode': {
            'content_template': '✓ Position\n✓ Short description with relevant information\n✓ A button to get in touch',
            'footer_button': 'Got It',
            'title': 'What does a great Volunteer section include?'
          }
        },
        'welcome-tip': {
          'add-mode': {
            'content_template': 'This is where you tell people what you or your business does. Be yourself, keep it simple, and show how you’re unique from everyone else. \r\n',
            'footer_button': 'Got It',
            'title': 'You’re about to add your Welcome section.'
          },
          'edit-mode': {
            'content_template': '✓ Your business name\n✓ Your logo \n✓ Beautiful image\n✓ Impact statement- Let everyone know in a breath what is great about your business. \ne.g., The Most Delicious & Healthy Cupcakes Ever!\n✓ A button so customers can learn more',
            'footer_button': 'Got It',
            'title': 'What does a great Welcome section include?'
          }
        }
      },
      'toasters': {
        'could-not-fit-text': 'Design has been updated to fit your text.',
        'list-item-added': 'List item added.',
        'list-item-deleted': 'List item deleted.',
        'list-item-design-changed': 'Updating all items in this list with your new design.',
        'list-item-duplicated': 'List item duplicated.',
        'list-item-media-type-changed': 'Switching media type for all items.',
        'list-item': {
          'apply-to-all': 'Your color was applied to all items.',
          'reset': 'Your item colors were reset.'
        },
        'page-deleted': 'This page has been deleted.',
        'page-hidden': 'You\'ve hidden this page from your menu.',
        'preview-in-manual-save': 'When you click Save, your most recent site changes may not show in Preview mode.',
        'section-deleted': 'This section has been deleted.',
        'new-design-applied': 'You\'ve got a new page design.',
        'section-moved': 'This section has been moved.'
      },
      'tooltips': {
        'animation_animation_type_help': 'Add a lively animation to elements across your site. Preview your site and scroll to see how it looks.',
        'animation_page_transition_help': 'Add fun page transitions to bring your site to life! Click Preview to check them out',
        'animation_scroll_effects_help': 'Add impressive scroll effects to your site background images. To see them in action, click Preview and scroll.',
        'best_match': 'ADI scanned your imported text<br/> to find the best fit for this paragraph.',
        'brightness': 'Choose how dark<br/>or light your site<br/>background looks',
        'close_preview': 'Back to Edit Mode',
        'crop_apply': 'Apply',
        'crop_cancel': 'Cancel',
        'design_advanced_colors_reset': 'Reset Colors',
        'design_change_animation': 'Edit animation settings',
        'design_change_font': 'Change Fonts',
        'design_coloration_add_color': 'Add your own custom color',
        'design_coloration_help': 'Help',
        'design_coloration_logo_palette': 'ADI automatically created this palette from the colors in your logo.',
        'design_coloration_main_color': 'Choose the main color for your site. ADI will create recommended palettes to match.',
        'design_coloration_mode_toggle': 'Set light or dark<br/>background from<br/>your color palette',
        'design_coloration_palette_edit': 'Edit Color Settings',
        'design_coloration_palette_list': 'These color palettes are based on your main color and recommended for use across your site.',
        'design_coloration_readability_negative': 'These colors make text hard to read on your site.',
        'design_coloration_readability_positive': 'Colors on your palette make the text easy to read on your site.',
        'design_header_type_fixed': 'Fixed headers are always<br/>visible, even when your<br/>visitors scroll.',
        'design_header_type_transparent_disabled': 'For a transparent header,<br/>select a media background<br/>for your first section below<br/>the header and try again.',
        'design_header_type_transparent_home': 'For a seamless modern<br/>look, make the background<br/>of your homepage transparent.',
        'design_header_type_transparent_non_home': 'The header background<br/>is only transparent on<br/>your homepage.',
        'design_kit_reset': 'Reset to default settings',
        'drag_section': 'Drag section',
        'edit_mode_toggle_desktop': 'Edit for Desktop',
        'edit_mode_toggle_mobile': 'Edit for Mobile',
        'fake-browser-bar-url': 'Your web address is <br><a class="fake_browser_bar_tooltip_url" href="{{URL}}" target="_blank">{{shortUrl}}</a>',
        'floating-go-to-editor-link': 'Go to the Wix Editor for more site customization options',
        'focal-point': {
          'hint': 'Drag to select<br/>the image center'
        },
        'gallery': 'Gallery',
        'header_fixed_header': 'Keep your header visible, <br/>even when your visitors scroll down the page. <br/>Preview your site to see <br/>it in action',
        'image': 'Image',
        'import-site': {
          'import-page': {
            'already-imported': 'This page was<br/>successfully imported.<br/><span class=\'link-button\' ng-click=\'$ctrl.handleImport(item)\'>Import this page again</span>'
          }
        },
        'intro_card_email_invalid': 'Email is invalid',
        'intro_card_url_default': 'Change the links so they go to your social pages (and not Wix’s)',
        'intro_card_url_invalid': 'URL is invalid',
        'intro_card_website_address_invalid': 'Web address is invalid',
        'intro_delete': 'Delete',
        'intro_website_help': 'Info from your existing site will be automatically imported to your new Wix ADI site.',
        'link-details-paypal': {
          'fixed': 'Tooltip',
          'toggle': {
            'off': 'Set the amount you\'d like site visitors to donate.',
            'on': 'Toggle off so site visitors can donate any amount.'
          }
        },
        'media-settings': {
          'disabled-tab-gallery': 'For gallery options<br />options, go to <span class="cc-tooltip-link"><a href="" ng-click="$ctrl.onTooltipClick()">Designs</a></span>',
          'disabled-tab-video': 'For video options<br />options, go to <span class="cc-tooltip-link"><a href="" ng-click="$ctrl.onTooltipClick()">Designs</a></span>',
          'size-button': {
            'background': 'Position your image<br>so it fits the frame<br/>exactly how you want.',
            'backgroundfull': 'Position your image<br>so it fits the frame<br/>exactly how you want.',
            'backgroundheader': 'Position your image<br>so it fits the frame<br/>exactly how you want.',
            'backgroundlist': 'Position your image<br>so it fits the frame<br/>exactly how you want.',
            'column': 'Position your image<br>so it fits the frame<br/>exactly how you want.',
            'cropped': 'Manually crop this image<br/>for the exact look you want.',
            'croppedheader': 'Manually crop this image<br/>for the exact look you want.',
            'gallery': 'Choose a gallery to display your images.',
            'strip': 'Position your image<br>so it fits the frame<br/>exactly how you want.',
            'stripheader': 'Position your image<br>so it fits the frame<br/>exactly how you want.',
            'uncropped': 'To show a full image,<br/>pick a new layout.'
          }
        },
        'members-area': {
          'field-editor': {
            'button': 'Members can sign up<br>and log in to their accounts<br> from here. <span class="cc-tooltip-link"><a href="" ng-click="$parent.$parent.$ctrl.onTooltipClick()">Learn more</a></span>'
          },
          'info-popup': 'These pages are for your site members only.<br/>They see them when they log into their accounts.<br/><span class="cc-tooltip-link"><a href="" ng-click="$ctrl.onTooltipClick(item)"> Learn More</a></span>',
          'signup-settings-panel': {
            'codeOfConduct': {
              'link': 'Created a Code of Conduct page? Link to it here so people can see it when they sign up to your site.'
            },
            'privacyPolicy': {
              'link': 'Create a Privacy Policy page and link to it when people sign up. For guidelines on creating a privacy policy, <span class="cc-tooltip-link"><a href="" ng-click="$parent.$parent.$parent.$ctrl.onTooltipClick($parent.$parent.$parent.policy)">read more</a></span>'
            },
            'termsOfUse': {
              'link': 'Create a Terms of Use page and link to it when people sign up. For guidelines on creating Terms of Use, <span class="cc-tooltip-link"><a href="" ng-click="$parent.$parent.$parent.$ctrl.onTooltipClick($parent.$parent.$parent.policy)">read more</a></span>'
            }
          }
        },
        'menu_add_dropdown': 'Add a page or a section',
        'menu_add_page': 'Add a new page',
        'menu_add_section': 'Add a new section',
        'menu_home': 'Add & manage pages',
        'menu_preview': 'See what your site looks like on desktop & mobile',
        'menu_publish': 'Publish your site so it\'s online <br />and people can see it.',
        'menu_redo': 'Redo',
        'menu_saved_text': 'Your changes are<br/> automatically saved',
        'menu_undo': 'Undo',
        'mobile_media_edit_disabled': 'Want to replace your media? Go to <span class="cc-tooltip-link"><a ng-click="$ctrl.onTooltipLinkClick()" href="">Desktop</a></span>.',
        'mobile_text_field_disabled': 'Want to edit your text?<br/>Go to <span class="cc-tooltip-link"><a ng-click="$ctrl.onTooltipLinkClick()" href="">Desktop</a></span>.',
        'next_item': 'Next',
        'overlay_change_column_position': 'Change column position',
        'overlay_change_preset': 'Change Design',
        'overlay_connect_domain': 'Connect Your Domain:<br/> Give your site a more professional look with your own branded domain name',
        'overlay_delete': 'Delete',
        'overlay_duplicate_section': 'Duplicate',
        'overlay_edit': 'Edit Content',
        'overlay_enlarge_font_section': 'Enlarge fonts',
        'overlay_enlarge_section_height': 'Enlarge section',
        'overlay_gear': 'Section Actions',
        'overlay_image_fit_section': 'Toggle image fit',
        'overlay_move_down': 'Move Down',
        'overlay_move_page': 'Move',
        'overlay_move_up': 'Move Up',
        'overlay_plus': 'Add new section here',
        'overlay_print_additional_height': 'Print additional height',
        'overlay_reset_font_section': 'Reset fonts',
        'overlay_rotate_color_section': 'Rotate colors',
        'overlay_settings': 'Change Settings',
        'overlay_shrink_font_section': 'Shrink fonts',
        'overlay_shrink_section_height': 'Shrink section',
        'page_menu_clicked': 'Manage your menu and navigate between pages in the <span class="cc-tooltip-link"><a ng-click="$ctrl.onPageTooltipLinkClick()" href="">Page Manager</a></span>.',
        'pattern': 'Pattern',
        'preview_toggle_desktop': 'Preview on Desktop',
        'preview_toggle_mobile': 'Preview on Mobile',
        'previous_item': 'Previous',
        'publish_error_site_name_already_exists': 'Name already exists',
        'publish_error_site_name_ends_with_hyphen': 'Name cannot end with hyphen',
        'publish_error_site_name_invalid': 'Invalid site name',
        'publish_error_site_name_invalid_chars': 'Invalid character',
        'publish_error_site_name_is_not_string': 'Cannot be empty',
        'publish_error_site_name_too_long': 'Your site name must be<br/>between 4-20 characters',
        'publish_error_site_name_too_short': 'Your site name must be<br/>between 4-20 characters',
        'saturation': 'Define how colorful<br/>you\'d like your site<br/>to appear',
        'section_background_categories_color': 'Background colors from your palette.',
        'section_background_categories_media': 'Images, videos and galleries that best complement your website.',
        'section_background_categories_pattern': 'Pattern colors are taken<br/> from your site\'s palette. Change your site colors to see other options.',
        'section_menu_clicked': 'To rename or hide a section in your menu, edit that section. <span class="cc-tooltip-link"><a ng-click="$ctrl.onSectionTooltipLinkClick()" href="">Learn More</a></span>',
        'section_name_in_menu': 'This name will also show as a tab on your site menu.',
        'seo_description_tooltip': 'Your site\'s description should be between 50-160 characters (including spaces)',
        'seo_description_validation': 'Description length must be 160 characters at most (including white spaces)',
        'seo_keywords_tooltip': 'Use up to 10 keywords or phrases, separated by commas',
        'seo_keywords_validation': 'Can only accept up to 10 keywords and 250 characters at most (including white spaces)',
        'seo_title_tooltip': 'This is your page title on Google. Add your page name, site name & what you do in 55-70 chars.',
        'seo_title_validation': 'Title length must be 70 characters at most (including white spaces)',
        'seo_url_tooltip': 'This is your page address on the web. It helps people find and remember the page, so make it catchy and relevant',
        'seo_url_validation': 'Page URL should be 1 character or more with no special characters (%,&,# etc.)',
        'shape': 'Shape',
        'slideshow-transition-help': 'Click on each slide to add your own content.<br/> To change the order they appear, move them up<br/>or down.',
        'social_validation': 'Update social links to your own profiles!',
        'suggest_layout_change': 'Your photos will look better in a different layout, choose one now',
        'text-manager-link-adi': 'Use custom text from ADI.',
        'text-manager-link-imported': 'Use text imported from your website.',
        'tpa_blog_settings': 'Manage Blog',
        'tpa_bookings_settings': 'Manage Services',
        'tpa_stores_settings': 'Manage Store',
        'user_web_address': '',
        'video': 'Video',
        'web-address-is-not-valid': 'Please type a vaild web address',
        'zoom_in': 'Zoom in',
        'zoom_out': 'Zoom out'
      },
      'tour': {
        'add-new-page': {
          'step0': 'Click the Page Manager here. Use it to navigate between pages at any time.',
          'step1': 'Click Add Page',
          'step2': 'Add a new page to your website. Use one ADI recommends for your business, or choose from the list.'
        },
        'add-new-page2': {
          'step1': 'Click Page'
        },
        'add-section': {
          'step0': 'Now I\'ll show you how to add a section.',
          'step1': 'Choose a page',
          'step2': 'Click Add Section',
          'step3': 'Here\'s a list of sections for your business. Click on the section you need and choose a layout.',
          'step4': 'When you\'re done, click below.',
          'start-from-scratch': 'Here\'s a list of sections for your site. Click on the section you need and then choose a layout you like.'
        },
        'add-section2': {
          'step2': 'Click Section to Page'
        },
        'animation': {
          'step0': 'Click Site Design',
          'step0b': 'Opening Design Menu',
          'step1': 'Click Customize Design',
          'step1b': 'Click Animation',
          'step2': 'ADI can automatically animate your website. Choose an animation style from the dropdown.',
          'step2-1': 'Click Edit',
          'step2-2': 'ADI can automatically animate your website. Choose an animation style.',
          'step3': 'Preview your animation to see if you like it.',
          'step4': 'Scroll down to see how your site looks. Like this animation?',
          'step5': 'Here is your site without animation. Do you want to try another or keep it?'
        },
        'business-details-changed-task': {
          'btn': 'Customize Site',
          'manual': '<b>Welcome to your website!</b><br/><br/>Start customizing it with text selected just for you.'
        },
        'button': {
          'auto': 'Do It For Me',
          'automatic': 'Do It For Me',
          'autoormanual': {
            'title': 'How do you want to do it?'
          },
          'back': 'Back',
          'continue': 'Continue',
          'done': 'Done',
          'dontlike': 'Try Again',
          'gotit': 'Got It',
          'keep-it': 'Keep It',
          'keep-them': 'Keep Them',
          'like': 'Keep It',
          'manual': 'Show Me How',
          'next': 'Next',
          'ok': 'OK',
          'try-another': 'Try Another'
        },
        'change-layout': {
          'auto': {
            'step0': 'Click the section you want to change and ADI will choose a new layout for you.',
            'step1': 'Opening Section Design',
            'step2': 'Choosing a new section layout',
            'step3': 'Do you like your new section layout?'
          },
          'manual-or-auto': 'ADI can choose a new layout for this section, or show you how to do it.',
          'manual': {
            'step1': 'Choose a page',
            'step2': 'Click the section you want to change and ADI will show you new layout options.',
            'step3': 'Click Edit Section Design',
            'step4': 'Select a new layout for your section',
            'step5': 'What do you think of this section\'s new design?'
          },
          'step0': 'Now I\'ll show you how to change a section\'s design.',
          'step2': 'Choose a page'
        },
        'coloration': {
          'keep-it': 'Yes, Use Them',
          'step0': 'Click Site Design',
          'step0b': 'Opening Design Menu',
          'step0c': 'Click Colors',
          'step1': 'Click Customize Design',
          'step2': 'Click to Edit',
          'step3': 'ADI chose these colors for you. They’re in use across your site.',
          'step4': 'To change your site colors, choose a palette ADI recommends for you or pick a new main color.',
          'step5': 'Do you like your website\'s colors?',
          'try-another': 'No, Change Them'
        },
        'colors': {
          'auto': {
            'step0': 'Opening Design Menu',
            'step1': 'Customizing the colors of your design theme.',
            'step2': 'Opening Palette',
            'step3': 'Choosing Palette',
            'step4': 'What do you think of the new set of colors?'
          },
          'manual-or-auto': 'Let\'s switch up your website\'s colors.',
          'manual': {
            'step0': 'Click Site Design',
            'step1': 'Click here to customize the colors of your design.',
            'step2': 'Click to open Palettes',
            'step3': 'Choose a Palette',
            'step4': 'What do you think of the new set of colors?'
          }
        },
        'connect-domain': {
          'step0': 'Choose a memorable online address for your website.'
        },
        'customize-section-design': {
          'step0': 'Click the section you want to customize<br/>and ADI will show you how.',
          'step1': 'Click Edit Section Design',
          'step2': 'Click Customize Section Design',
          'step3': 'Choose what you want to customize',
          'step4': 'When you’re done customizing, click below'
        },
        'edit-content': {
          'step0': 'Now I\'ll show you how to edit your content.',
          'step1': 'Choose a page',
          'step2': 'Select a section to edit its content',
          'step3': 'Click Edit',
          'step4': 'Edit text, images, and links in this section. You can show or hide any element by clicking the circle next to it.'
        },
        'entire-website-design': {
          'auto': {
            'step0': 'Opening Design Menu',
            'step0b': 'Opening Design Menu',
            'step0c': 'Opening Themes',
            'step1': 'Choosing a Theme'
          },
          'manual-or-auto': 'You’ve chosen to change the design of your website. ADI can choose a new theme for you, or show you how to do it.',
          'manual': {
            'step0': 'Click Site Design',
            'step0c': 'Click Themes',
            'step1': 'Choose a Theme'
          },
          'step2': 'What do you think of this theme?'
        },
        'fonts': {
          'auto': {
            'step0': 'Opening Design Menu',
            'step1': 'Customizing the fonts of your design theme.',
            'step1b': 'Opening Fonts Panel',
            'step3': 'Choosing Font Set'
          },
          'manual': {
            'font-set': {
              'step4': 'What do you think of this font set?'
            },
            'font-size': {
              'step4': 'What do you think of this font size?'
            },
            'step0': 'Click Site Design',
            'step1': 'Click here to customize the fonts of your design.',
            'step1b': 'Click Fonts',
            'step2': 'Click to open Font Sets',
            'step3': 'Choose a Font Set'
          },
          'new-font': {
            'manual-or-auto': 'Let’s switch up your website’s fonts. ADI can choose a new font set for you, or show you how to do it.'
          }
        },
        'import-content-forbusiness-details-changed': {
          'label': 'Click View More Text to see all the options ADI has selected for your site.'
        },
        'import-content': {
          'label': 'All the text ADI imported is here. Click "{{textManagerLabel}}" to see your options.'
        },
        'import-images': {
          'step0': 'Click Edit & Replace',
          'step1': 'Click Replace'
        },
        'logoExtraction': {
          'step3000': {
            'button': 'Create Palette',
            'content': 'Wix ADI can use colors from your logo<br>to create a palette just for you.',
            'skip': 'Skip',
            'title': 'Want to create a color palette<br/>from your logo?'
          },
          'step3100': {
            'content': 'Creating palette',
            'title': 'Creating your color palette…'
          },
          'step3200': {
            'button': 'Use These Colors',
            'content': 'You can easily change it later.',
            'newPaletteFromLogo': {
              'content': 'You can easily change it later.',
              'title': 'Here’s a unique color palette for your website'
            },
            'skip': 'Skip',
            'title': 'Here’s a unique color palette for your website',
            'title|abTranslate_1': 'Here’s a unique color palette for your website'
          }
        },
        'newFonts': {
          'manual': {
            'step3': 'Choose a new font set, or customize the size of your selected font set by dragging the slider.'
          }
        },
        'page-seo': {
          'step0': 'Open the Page Manager',
          'step1': 'Choose the page you want to work on.',
          'step2': 'Click Page Settings',
          'step3': 'Select Page SEO',
          'step4': 'Good SEO helps people find you on search engines like Google. Choose relevant keywords including your business name, location and services.',
          'step5': 'When you\'re done, click below.'
        },
        'preview': {
          'step0': 'Click Preview to see how your site looks to visitors on desktop and mobile.'
        },
        'publish': {
          'step0': 'Click Publish so visitors can see your website online.',
          'step1': 'Choose a free Wix domain or connect your own. But don\'t stop now — keep creating your stunning website.'
        },
        'stepmanager': {
          'title': 'What\'s Next'
        },
        'welcome': {
          'step0': {
            'content': 'I was developed to guide you in creating a stunning website just for you. I can create billions of combinations of text, designs, images and more. <br/><br/>Now that I’ve learned who you are, I will use that information to design a website that’s uniquely yours.',
            'title': 'Hello. I am ADI, Wix\'s Artificial Design Intelligence.'
          },
          'step1': {
            'content': 'Choose the look and feel you like best for your website. It can be changed at any time.',
            'title': 'Help me understand your style.'
          },
          'step2': 'Your homepage is the first thing your users will see. Now, I’ll create its initial design section by section. <br/><br/>This may take a few minutes. Follow along to learn how to do it on your own.',
          'step3': 'Opening Add Section panel',
          'step4': 'Choosing section design',
          'step5': {
            'content': 'Now, let me show you some basics to creating your website. You can exit or rejoin my tour at any time — just click the circle below.',
            'title': 'I’ve completed the first version of your homepage.',
            'welcomeonly': {
              'content': 'Now it’s your time to shine. Add a new section, create more pages or upload your own photos - you can do anything you want.',
              'title': 'I’ve completed your homepage'
            }
          }
        },
        'welcome2': {
          'complete': {
            'content': 'Keep going - ADI will show you how to create the rest of your website. Click the circle below to exit or rejoin the tour at any time.',
            'full-site-title': 'Here it is, the first version of your website!',
            'title': 'Here it is, the first version of your website!',
            'title|abTranslate_1': 'Here it is, the first version of your website!'
          },
          'uAssistantGreeting': {
            'greeting': 'Hi There 👋 <br> Welcome to your ADI website.',
            'tourSuggestContent': 'Let\'s start by <strong>Previewing<br> your website.</strong>',
            'ctaButton': 'Let\'s Go'
          },
          'complete3': {
            'content': 'Start customizing it. Click the circle below to see what\'s next and get tips for your site.',
            'full-site-title': 'Let’s customize your website',
            'title': 'Welcome to your website!'
          },
          'edit-site': {
            'title': 'You’re in Preview Mode<br/><br/> To customize font, colors, <br/>images and more, click Edit Site.'
          },
          'preparing': {
            'button': 'Preparing...'
          },
          'preview-site': {
            'title': 'You’re in Preview Mode<br/>To customize your colors, images</br> and more, click Edit Site.'
          },
          'step1000': {
            'content': 'I was developed to guide you in creating a stunning website. I can create billions of combinations of text, images and more. Now that I\'ve learned who you are, I\'ll use that information to design a website that\'s uniquely yours.',
            'title': 'Hello. I am ADI, Wix\'s Artificial Design Intelligence.'
          },
          'step2000': {
            'content': 'Here are a few designs you might like.\nYou can easily change it later.',
            'content|abTranslate_1': 'Here are a few designs you might like.\nYou can easily change it later.',
            'title': 'Pick a style you love',
            'title|abTranslate_1': 'Pick a style you love'
          },
          'step3000': {
            'content': '',
            'title': ''
          },
          'step4000': {
            'button': 'Create My Website',
            'button|abTranslate_1': 'Create My Website',
            'content': 'Wix ADI has gathered your info and prepared your design.<br/>Now, from billions of combinations including text, images and more,<br/>you’re about to get a website that’s uniquely yours.',
            'content|abTranslate_1': 'Wix ADI has gathered your info and prepared your design.<br/>Now, from billions of combinations including text, images and more,<br/>you’re about to get a website that’s uniquely yours.',
            'title': 'Now I\'m Going to Create Your Homepage'
          }
        },
        'when-done': 'When you\'re done, click below.',
        'when-done2': 'When you\'re done, go back to edit your site.',
        'wiz-seo': {
          'change-business-details': 'Click To Change Your Site Business type',
          'click-get-found': 'Click Get Found on Google'
        }
      },
      'tpa': {
        'blog': {
          'blog': 'Blog',
          'blog_single_post_widget': 'Single Post'
        },
        'blog2': {
          'blog': 'Blog',
          'post': 'Single Post'
        },
        'bookings': {
          'scheduler': 'Book Online'
        },
        'events': {
          'callToAction': 'RSVP',
          'events': 'Event Info'
        },
        'forum': {
          'forum': 'Forum'
        },
        'members': {
          'hello_member': 'Hello',
          'welcome': 'Welcome'
        },
        'settings': 'Settings',
        'stores': {
          'checkout': 'Checkout',
          'product_gallery': 'Shop',
          'product_page': 'Product Page',
          'shopping_cart': 'Cart',
          'thank_you_page': 'Thank You Page'
        },
        'subscribe': {
          'lets-email-you': 'Let\'s email you',
          'so-youll-never-miss-an-update': 'So you\'ll never miss an update',
          'stay-up-to-date': 'Stay up to date',
          'submit': 'Submit',
          'subscribe': 'Subscribe'
        }
      },
      'tpa_add_payment_button': 'Connect',
      'tpa_add_payment_title': 'Take online payments with PayPal, Stripe, & credit cards',
      'tpa_add_product_button': 'Add a Product',
      'tpa_add_product_title': 'Start creating your store',
      'tpa_add_service_button': 'Create a Service',
      'tpa_add_service_title': 'Create your first service so you can take bookings',
      'tpa_set_appointment_hours_button': 'Set Work Hours',
      'tpa_set_appointment_hours_title': 'Add the hours you’re available for booking',
      'tpa_setup_shipping_button': 'Set Shipping & Taxes',
      'tpa_setup_shipping_title': 'Set up shipping & taxes for your store',
      'tpa_upgrade_button': 'Upgrade now',
      'tpa_upgrade_text': 'Connect your domain, remove Wix ads, get paid and more',
      'url': {
        'dashboard': 'https://www.wix.com/my-account'
      },
      'viewer': {
        'contact-form': {
          'attributes': {
            'addressFieldLabel': 'Address',
            'emailFieldLabel': 'Email',
            'errorMessage': 'Please provide a valid email',
            'messageFieldLabel': 'Message',
            'nameFieldLabel': 'Name',
            'phoneFieldLabel': 'Phone',
            'subjectFieldLabel': 'Subject',
            'submitButtonLabel': 'Send',
            'successMessage': 'Your details were sent successfully!',
            'validationErrorMessage': 'Please fill in all required fields.'
          }
        },
        'drop-down-menu': {
          'moreButtonLabel': 'More'
        }
      },
      'yair': {
        'test': 'hello',
        'test|abTranslate_1|custom': 'hi'
      },
      'logo-picker': {
        'title': 'Custom Logos',
        'description': 'Pick a logo you like',
        'button': {
          'custom': {
            'label': 'Customize Design'
          },
          'get': {
            'label': 'Get Logo'
          },
          'description': 'Get a stunning custom logo</br>for use on your website.'
        },
        'button-after-install': {
          'get': {
            'label': 'Open logos'
          },
          'description': 'See your custom logos'
        }
      },
      'logo-builder': {
        'upgrade': {
          'description': 'Want to use your custom logo</br>on social, print, merch and more?',
          'button-label': 'Upgrade Now'
        }
      },
      'forum-panel': {
        'title': 'Forum',
        'manage': {
          'title': 'Manage Forum',
          'description': 'Go to Preview or your live site to set up your Forum. Choose categories, add posts and more.',
          'button': 'Preview & Manage'
        },
        'member-signup-settings': {
          'title': 'Member signup settings',
          'description': 'Choose how people can sign up as members of\nyour forum.',
          'button': 'Member Signup'
        }
      }
    };
    $translateProvider.translations('en', translations);
    $translateProvider.translations(translations);
    $translateProvider.preferredLanguage('en');
  }
]);