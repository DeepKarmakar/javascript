(function($){
    $.fn.hello = function (options){
        
        // default options
        let settings = $.extend({
            name: 'john',
            color: 'red'
        }, options);

        // apply option
        return this.append('hello ' + settings.name + '!').css({color: settings.color});

    }
}(jQuery))