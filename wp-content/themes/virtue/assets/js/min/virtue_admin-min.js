!function($){"use strict";$.imgupload=$.imgupload||{},$(document).ready(function(){$.imgupload()}),$.imgupload=function(){$("body").on({click:function(e){var a=$(this).closest(".kad_img_upload_widget");if("undefined"!=typeof wp&&wp.media){e.preventDefault();var i,t=$(this);if(i)return void i.open();i=wp.media({multiple:!1,library:{type:"image"}}),i.on("select",function(){var e=i.state().get("selection").first();i.close(),a.find(".kad_custom_media_url").val(e.attributes.url),a.find(".kad_custom_media_id").val(e.attributes.id);var t=e.attributes.url;t=void 0!==e.attributes.sizes&&void 0!==e.attributes.sizes.thumbnail?e.attributes.sizes.thumbnail.url:e.attributes.icon,a.find(".kad_custom_media_image").attr("src",t),a.find(".kad_custom_media_url").trigger("change")}),i.open()}}},".kad_custom_media_upload")}}(jQuery),function($){"use strict";$.gallery=$.gallery||{},$(document).ready(function(){$.gallery()}),$.gallery=function(){$("body").on({click:function(e){var a=$(this).closest(".kad_widget_image_gallery");if("clear-gallery"===e.currentTarget.id){var i=a.find(".gallery_values").val("");return a.find(".gallery_images").html(""),void a.find(".gallery_values").trigger("change")}if("undefined"!=typeof wp&&wp.media&&wp.media.gallery){e.preventDefault();var t=$(this),l=a.find(".gallery_values").val(),r;r=l?'[gallery ids="'+l+'"]':'[gallery ids="0"]';return wp.media.gallery.edit(r).state("gallery-edit").on("update",function(e){a.find(".gallery_images").html("");var i,t="",l,r=e.models.map(function(e){return i=e.toJSON(),l=void 0!==i.sizes.thumbnail?i.sizes.thumbnail.url:i.url,t="<a class='of-uploaded-image' target='_blank' rel='external' href='"+l+"'><img class='gallery-widget-image' src='"+l+"' /></a>",a.find(".gallery_images").append(t),e.id});a.find(".gallery_values").val(r.join(",")),a.find(".gallery_values").trigger("change")}),!1}}},".gallery-attachments")}}(jQuery);