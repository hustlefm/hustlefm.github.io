$(function () {
    function iOS() {
        var iDevices = [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ];
        if (!!navigator.platform) {
            while (iDevices.length) {
                if (navigator.platform === iDevices.pop()){ return true; }
            }
        }
        return false;
    }

    $('.equalizer').rhEqualizer();
    $('.equalizer').rhEqualizer('setContainerPadding', ($(window).height() / 2 - 70) + 'px 0 0 0');

    $('.btn-change-language').on('click', function () {
        //Lang.changeLanguage();
        $('.change-language-popup').css('display', '');
    });

    $('.change-language-popup').find('li').on('click', function () {
        Lang.changeLanguage($(this).attr('data-lang'));
        $('.change-language-popup').css('display', 'none');
    });

    $('.change-language-popup .popup-close-btn').on('click', function () {
        $('.change-language-popup').addClass('animated');
        setTimeout(function () {
            $('.change-language-popup').css('display', 'none');
            $('.change-language-popup').removeClass('animated');
        }, 1000);
    });

    $('.btn-show-just-missed').on('click', function () {
        $('.shoutcast-just-missed').css('display', '');
    });

    $('.btn-show-just-missed-close').on('click', function () {
        $('.btn-show-just-missed').css('display', 'none');
    });

    var ices = new Ices({
        host: '93.188.164.219'
    });
    ices.refresh(2000, function (stream) {
        var songTitle = stream.title,
            artist = songTitle.split(' - ')[0].trim().replace(/^.+bmp/i, ''),
            title = songTitle.split(' - ')[1].trim().replace(/^.+bpm/i, '');
        $('.shoutcast-now-playing.current-artist').text(artist);
        $('.shoutcast-now-playing.current-track').text(title);
    });

    $(window).resize(function () {
        $('.equalizer').rhEqualizer('setContainerPadding', ($(window).height() / 2 - 70) + 'px 0 0 0');
        $('.equalizer').rhEqualizer('init');
    });

    var audio = document.getElementById('player'),
        volume = 1;

    audio.addEventListener('play', function () {
        console.log('play');
        $('.equalizer').rhEqualizer('toggleActive', 'start');
    });

    audio.addEventListener('volumechange', function () {
        console.log('volume == ' + audio.volume);
        if (audio.volume == 0) {
            $('.equalizer').rhEqualizer('toggleActive', 'stop');
        } else {
            $('.equalizer').rhEqualizer('toggleActive', 'start');
        }
    });

    audio.addEventListener('pause', function () {
        console.log('stop');
        $('.equalizer').rhEqualizer('toggleActive', 'stop');
    });

    audio.addEventListener('stalled', function () {
        // console.log('stalled');
        // $('.equalizer').rhEqualizer('toggleActive', 'stop');
    });

    audio.addEventListener('ended', function () {
        console.log('ended');
        $('.equalizer').rhEqualizer('toggleActive', 'stop');
    });

    $('.btn-play').on('click', function () {
        var icon = $(this).find('i.fa'),
            status = $(this).attr('data-status');
        if (status == 'pause') {
            audio.play();
            audio.volume = volume;
            if (iOS()) {
                $(this).remove();
            }
            $(this).attr('data-status', 'play');
        } else {
            audio.volume = 0;
            $(this).attr('data-status', 'pause');
        }
        icon.toggleClass('fa-play')
            .toggleClass('fa-pause');
    })
});