!function(n){function t(t){var e=t.host,r=t.port||80;return{refresh:function(t,o){setInterval(function(){n.ajax({url:"http://"+e+":"+r+"/stream_info.php",success:function(n){o(JSON.parse(n))}})},t)}}}window.Ices||(window.Ices=t)}(jQuery); setInterval(function () {
                    $.ajax({
                        url: 'http://' + host + ':' + port + '/stream_info.php',
                        success: function (data) {
                            callback(JSON.parse(data));
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