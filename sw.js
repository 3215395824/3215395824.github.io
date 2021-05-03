const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "impdx"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ae99842f0afb1a14bf458f0527e2f534","url":"./about/index.html"},{"revision":"a24675efd4e1107a2217a0d97e979042","url":"./archives/2018/03/index.html"},{"revision":"fde91e85515a7722eb00655d86a9ccf9","url":"./archives/2018/index.html"},{"revision":"bf491edaba5a5212d494d10a1ac7e867","url":"./archives/2019/03/index.html"},{"revision":"b5e3d77ef3ca361dee6b5d9914721f02","url":"./archives/2019/04/index.html"},{"revision":"375a28f1f7227d5081705def4cfb1242","url":"./archives/2019/05/index.html"},{"revision":"e55e594cbe6450cd6527e6e047ccfbea","url":"./archives/2019/06/index.html"},{"revision":"1d9545f88a58492fd22b83bfd7d6a95b","url":"./archives/2019/07/index.html"},{"revision":"16ea1afb4521491a37999cb1b83c2577","url":"./archives/2019/09/index.html"},{"revision":"acdcb4f736f84ae885bcd7f3a711252d","url":"./archives/2019/12/index.html"},{"revision":"71470bbfafaa2eb3e9177f587a877feb","url":"./archives/2019/index.html"},{"revision":"08d34ca036bfd15f07f3b548ae843575","url":"./archives/2019/page/2/index.html"},{"revision":"cffc82651a89a403969294d3bf97a01f","url":"./archives/2020/02/index.html"},{"revision":"487a315a978138823b5f9036c982edef","url":"./archives/2020/03/index.html"},{"revision":"aa54350920504f1979e00248d2813be8","url":"./archives/2020/05/index.html"},{"revision":"104325023c0fb7997844981cfb3ac869","url":"./archives/2020/06/index.html"},{"revision":"de865ec39b265b03eb575c4e6289e482","url":"./archives/2020/10/index.html"},{"revision":"11504f7e5426aa21710bafbb3ee2fe9a","url":"./archives/2020/index.html"},{"revision":"6c3bff06ba9aeef3b2d34f479f4b765e","url":"./archives/2020/page/2/index.html"},{"revision":"03a45c5fcec1b6b17f052eade73e466c","url":"./archives/index.html"},{"revision":"b43c77293f11a6d5e4a808d6eba15a28","url":"./archives/page/2/index.html"},{"revision":"adc377dfc6d999ecf11bff585f71d277","url":"./archives/page/3/index.html"},{"revision":"1eeeba8a9f132ea1e4915bc920b1242e","url":"./archives/page/4/index.html"},{"revision":"c914004bbd79880c08460a3dd3fae6b0","url":"./categories/index.html"},{"revision":"aca646b97b2da4a181de4e4c2bbd52d1","url":"./categories/linux/index.html"},{"revision":"94d35a16684b94899b747bcea8696965","url":"./categories/学习/index.html"},{"revision":"c741e27f4577f98e11b321db6fa9a4aa","url":"./categories/学习/高考/index.html"},{"revision":"d939aea95c28d3a3b50d736eeddde71a","url":"./categories/学习/高职考/index.html"},{"revision":"70837dec47274a5f843d8830ac5a5d80","url":"./categories/工具/index.html"},{"revision":"84afbfab0e08bcb7560c3fd93de135de","url":"./categories/教程/index.html"},{"revision":"f48c36b0f384ce8b0425f7159ba1f077","url":"./categories/教程/page/2/index.html"},{"revision":"04ee38bdfdda901122d017d9c473037d","url":"./categories/笔记/android/index.html"},{"revision":"f48ab76c58a41ec1a1c0a1f3eae8ca05","url":"./categories/笔记/cdn/index.html"},{"revision":"ed98009237d0e5b0407d968ac5e65bc0","url":"./categories/笔记/hexo/index.html"},{"revision":"ee075e1e08ddf0f6fa8ca44661d1838e","url":"./categories/笔记/index.html"},{"revision":"4520dd2c63451d5fb1378da79f757145","url":"./categories/笔记/linux/index.html"},{"revision":"ee1b6daacb4cae86262738ddc4b6c1d0","url":"./categories/笔记/page/2/index.html"},{"revision":"8dfdcdd97d26b629c1c38e68aa54ec91","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9829cd2de3b290e0ca3a9b46ec426c9","url":"./index.html"},{"revision":"b6e408c9b509ce2b80cc5ce998b6502b","url":"./js/main.js"},{"revision":"c9af02da2fc1f7d634843f61536369d1","url":"./js/search/algolia.js"},{"revision":"c33665b06edc70004a016ba9db4205b4","url":"./js/search/local-search.js"},{"revision":"e8455f75769585811cd6b3220787d08e","url":"./js/third-party/activate-power-mode.js"},{"revision":"6bebed368a1bbcb630dd146cefb103b7","url":"./js/third-party/canvas-nest.js"},{"revision":"4ca518354a167db9fe0869c0982ff215","url":"./js/third-party/canvas-ribbon.js"},{"revision":"c2420dfec66aa5bad663e6c365a129c8","url":"./js/third-party/click_heart.js"},{"revision":"22f4c82da4faed04c79e61fcbbdf675c","url":"./js/third-party/ClickShowText.js"},{"revision":"64d1e1837ad1a585888f5d1e16c71f77","url":"./js/third-party/fireworks.js"},{"revision":"5c8c9ff4bb9bed49e333387a54eae9be","url":"./js/third-party/piao.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"cc3863decabd7d583be054e1017eec13","url":"./link/index.html"},{"revision":"c8d88841212061c03845db9ce02a44aa","url":"./love.html"},{"revision":"a3503bbc14af8e3c5e03ee3bf0bf5add","url":"./manifest.json"},{"revision":"9bd6939e82c1154afcfa307db4e851df","url":"./otherjs/music.js"},{"revision":"e80d59bf2c8aca375116d855ebb1ddf6","url":"./page/2/index.html"},{"revision":"b83bfb75a8833b3a803a6c855076fd8d","url":"./page/3/index.html"},{"revision":"301a3620986ccd26ca5b62e6ade90290","url":"./page/4/index.html"},{"revision":"d49190a467cfb4ae9a87046097dff5d9","url":"./posts/1017.html"},{"revision":"8aa1dd8f063ef8dd4d54a91bba4827d8","url":"./posts/11d0.html"},{"revision":"5fd1ead5506216f3a5f279dcaf300338","url":"./posts/177a.html"},{"revision":"0d9c28f8edd00dc42ac203426e2b9a42","url":"./posts/354b.html"},{"revision":"801be37dc57a0e6cb784f6d153e840e8","url":"./posts/366e.html"},{"revision":"d3d15be9d4b74d9cfcbf70bf55eb05e3","url":"./posts/4333.html"},{"revision":"2398fcb257107ab800eb109d141ffafb","url":"./posts/4cf3.html"},{"revision":"85016ed7723b9f0efa532470242d16ad","url":"./posts/5eaf.html"},{"revision":"399a62e0898e8aeb35f097a267e2b862","url":"./posts/6399.html"},{"revision":"18b8bfaa2caaa78665e28c73b0e625af","url":"./posts/6c0.html"},{"revision":"7032a32319912e8e02901ad22126cc56","url":"./posts/6c68.html"},{"revision":"280102045ebe8eb903800afb2a0f3627","url":"./posts/7d46.html"},{"revision":"99b34362699297b4d1a9c09b9af52d19","url":"./posts/7fe4.html"},{"revision":"f7c8cad4ae84e954dbb70f495db056ae","url":"./posts/80cb.html"},{"revision":"d2241b416ee8f470d13d128108fe4eb1","url":"./posts/8a03.html"},{"revision":"937c0b4e3e8288b5f2daf50b9c30a85b","url":"./posts/962e.html"},{"revision":"655d205ecef7b2a5b4a41e320d08661d","url":"./posts/9639.html"},{"revision":"6cfe68150560fd97b5c2b3dc0b20a9ce","url":"./posts/a6a6.html"},{"revision":"83ffe1c7682a75aca3dc00bf402f21c4","url":"./posts/b557.html"},{"revision":"c238ada7415002e7b13d33a3dbf08a99","url":"./posts/b5d.html"},{"revision":"4d134a52a1a9a19352fe8e2de10c4898","url":"./posts/bb7c.html"},{"revision":"24a396fa30e4b72140142076d892043f","url":"./posts/bd8a.html"},{"revision":"de1ea9b0e9d3e9559944cb04c8b17e2b","url":"./posts/bee3.html"},{"revision":"71093ca272571fae1bc31106eccf88a1","url":"./posts/c244.html"},{"revision":"81c4fe80f4f56e5ff54e575d809724fb","url":"./posts/c6ac.html"},{"revision":"5c7e9cbca3f561ab6f6675b19e9536d1","url":"./posts/d577.html"},{"revision":"76d8fb21416973eec966d696a1557e8e","url":"./posts/d951.html"},{"revision":"bad142622ed5d3141fca53288c841fbc","url":"./posts/e3c9.html"},{"revision":"80eec7c402535bca19095075f1e2f0bd","url":"./posts/e642.html"},{"revision":"96d5ab04490c89a26c4cce51d6195d39","url":"./posts/e707.html"},{"revision":"2485d49012549d7f49ac45c2844229c5","url":"./posts/edba.html"},{"revision":"5f9ec04c404b84ce13692cc9b8d5eb36","url":"./posts/edfd.html"},{"revision":"ccd98bf40f1d4965cfde0b7a64cf27fe","url":"./posts/fd31.html"},{"revision":"14695a9654374174059f3fc4d1ef560f","url":"./tags/Android/index.html"},{"revision":"c647df7b827f31c1b31adf18eed23d53","url":"./tags/ASRD/index.html"},{"revision":"7ab4da6877fad8de4d771f1cb7f38eca","url":"./tags/cdn/index.html"},{"revision":"9cb0dc7a8214466482f947f7cb001238","url":"./tags/hexo/index.html"},{"revision":"2f160f66af426104222c54996a08b960","url":"./tags/index.html"},{"revision":"098f25943ec0e19e50bcf1753541f8b7","url":"./tags/linux/index.html"},{"revision":"f02dedd35bbc8afcc0c1f6146ca2e45b","url":"./tags/Python/index.html"},{"revision":"9f863471d0f60b4b3bf7535b5eb82bc6","url":"./tags/VB/index.html"},{"revision":"a4e1433370eab01ca5f6dff0a9daf4ae","url":"./tags/winserver/index.html"},{"revision":"8eb25479f36a2eb75daaa1e1d01f3c84","url":"./tags/救砖/index.html"},{"revision":"2efcc4966715457d4c31d9f0f778b1bd","url":"./tags/教程/index.html"},{"revision":"52d8d55142412a0707c373d774ff4008","url":"./tags/游戏服务器/index.html"},{"revision":"258025731c8d72bfb53b042068d677d4","url":"./tags/电脑常识/index.html"},{"revision":"45ff13077db6f8ea95fc9479382dc77b","url":"./tags/维修手机/index.html"},{"revision":"303dfa11a40a3faaee8eccc43f65651a","url":"./tags/运维/index.html"},{"revision":"5860a5568f611a80114c1b2911bbc5b6","url":"./tags/高职考/index.html"},{"revision":"1d7d0f24c9aa9c6784784d6a019e9055","url":"./工具/index.html"}]);

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();
