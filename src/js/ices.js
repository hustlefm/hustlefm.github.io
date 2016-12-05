(function ($) {
    function Ices(options) {
        var self = this;

        var host = options.host;
        var port = options.port || 80;

        return {
            refresh: function (interval, callback) {
                setInterval(function () {
                    $.ajax({
                        url: 'http://' + host + ':' + port + '/stream_info.php',
                        success: function (data) {
                            callback(data);
                        }
                    })
                }, interval);
            }
        }
    }

    if (!window.Ices) {
        window.Ices = Ices;
    }
})(jQuery);