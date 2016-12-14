!function(t){var i,n={};jQuery.fn.rhEqualizer=function(){function e(t){return o.init(t),t}i=this;var a={style:{width:10,height:function(){return 250*Math.random()+70},marginRight:2},active:!1},o={init:function(){function e(i){var a=n.style.height(),o=7.5*a,r=(170-a)/2;n.active?i.animate({height:a,marginTop:r},o,function(){e(t(this))}):i.animate({height:2,marginTop:84},o,function(){e(t(this))})}console.log("rhEqualizer init method");var a=Math.ceil(t(window).width()/(n.style.width+n.style.marginRight));i.empty();for(var o=0;o<a;o++)i.append('<div style="width: '+n.style.width+"px; margin: 0 "+n.style.marginRight+'px 0 0;"></div>');i.find("> div").each(function(i){e(t(this))})},toggleActive:function(){0==arguments.length?n.active=!n.active:"start"==arguments[0]?n.active=!0:"stop"==arguments[0]&&(n.active=!1)},style:function(t,i){n.style[t]=i},setContainerPadding:function(t){i.css("padding",t)}};if("string"==typeof arguments[0]&&o[arguments[0]].apply(null,Array.prototype.slice.call(arguments,1)),"object"==typeof arguments[0]||void 0===arguments[0]&&0==arguments.length)return n="object"!=typeof arguments[0]?{}:arguments[0],n=t.extend(a,n),e(this)}}(jQuery);
                        if (options.active) {
                            bar.animate({
                                height: height,
                                marginTop: marg
                            }, timing, function () {
                                equalizer($(this));
                            });
                        } else {
                            bar.animate({
                                height: 2,
                                marginTop: 84
                            }, timing, function () {
                                equalizer($(this));
                            });
                        }
                    }

                    self.find('> div').each(function (i) {
                        equalizer($(this));
                    });
                },
                toggleActive: function () {
                    if (arguments.length == 0) {
                        options.active = !options.active;
                    } else if (arguments[0] == 'start') {
                        options.active = true;
                    } else if (arguments[0] == 'stop') {
                        options.active = false;
                    }
                },
                style: function (what, value) {
                    options.style[what] = value;
                },
                setContainerPadding: function (value) {
                    self.css('padding', value);
                }
            };

        if (typeof arguments[0] == 'string') {
            methods[arguments[0]].apply(null, Array.prototype.slice.call(arguments, 1));
        }

        if (typeof arguments[0] == 'object' || (arguments[0] === undefined && arguments.length == 0)) {
            if (typeof arguments[0] != 'object') {
                options = {};
            } else {
                options = arguments[0];
            }
            options = $.extend(defaults, options);

            function _(self) {
                methods['init'](self);
                return self;
            }

            return _(this);
        }
    };
})(jQuery);