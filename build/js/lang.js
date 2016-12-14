var Lang={defaultLang:"en",langs:["en","ru"],tokens:{1:{en:"Just missed",ru:"Ранее"},2:{en:'<span class="flag-icon flag-icon-gb flag-icon-squared"></span>',ru:'<span class="flag-icon flag-icon-ru flag-icon-squared"></span>'}},init:function(a){if("localStorage"in window&&null!==window.localStorage){localStorage.setItem("lang-default",Lang.defaultLang);var n=localStorage.getItem("lang");void 0!==n&&null!==n||(n=Lang.defaultLang,localStorage.setItem("lang",n));for(var e in Lang.tokens){var l=document.querySelector('[data-lang-id="'+e+'"]');l.innerHTML=Lang.tokens[e][n]}a=a||function(){},a()}},changeLanguage:function(a){if(void 0===a||null===a){var n,e,l,g=Lang.langs,o=localStorage.getItem("lang");void 0==o&&(o=Lang.defaultLang),n=g.indexOf(o),l=n>g.length-2?0:n+1,e=g[l],console.log(e),a=e}for(var t in Lang.tokens){var i=document.querySelector('[data-lang-id="'+t+'"]');i.innerHTML=Lang.tokens[t][a]}localStorage.setItem("lang",a)}};Lang.init();t', lang);
                element.innerHTML = Lang.tokens[i][lang];
            }
            callBack = callBack || function () {};
            callBack();
        }
    },
    changeLanguage: function (lang) {
        if (lang === undefined || lang === null) {
            var langs = Lang.langs,
                currentLang = localStorage.getItem('lang'),
                currentLangIndex,
                nextLang,
                nextLangIndex;
            if (currentLang == undefined) {
                currentLang = Lang.defaultLang;
            }
            currentLangIndex = langs.indexOf(currentLang);
            if (currentLangIndex > langs.length - 2) {
                nextLangIndex = 0;
            } else {
                nextLangIndex = currentLangIndex + 1;
            }
            nextLang = langs[nextLangIndex];
            console.log(nextLang);
            lang = nextLang;
        }
        for (var i in Lang.tokens) {
            var element = document.querySelector('[data-lang-id="' + i + '"]');
            element.innerHTML = Lang.tokens[i][lang];
        }
        localStorage.setItem('lang', lang);
    }
};

Lang.init();