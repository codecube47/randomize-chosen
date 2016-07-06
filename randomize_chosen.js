/**
 * Created by nilanga on 16/05/16.
 */

(function ( $ ) {

    $.fn.randomize = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            item_count: 5
        }, options );

        var selector = this

        // clear selected chosen items
        $('option',selector).prop("selected", false)
        selector.trigger('chosen:updated');

        // get list of select box items and fill into array
         var items = [];
         $('option',selector).each(function(){
             items.push($(this).val())
         });

        // shuffle array and add to chosen selector
         $.each(shuffle(items),function(index, value ){
           if(index < settings.item_count){
             $('option[value="'+value+'"]', selector).prop("selected", true);
           }
         })

        // update chosen data
        selector.trigger('chosen:updated');

       function shuffle(o) {
         for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
         return o;
        };

    };

}( jQuery ));
