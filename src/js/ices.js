(function ($) {
    function Ices(options) {
        var self = this;

        var host = options.host;
        var port = options.port || 80;

        return {
            refresh: function (interval, mount, callback) {
                setInterval(function () {
                    $.ajax({
                        url: 'http://' + host + ':' + port + '/stream_info.php',
                        success: function (data) {
                            var stream = data[mount];
                            callback(stream);
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