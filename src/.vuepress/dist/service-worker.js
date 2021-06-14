/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0568677d00963f876b075e40be83f4b9"
  },
  {
    "url": "assets/css/0.styles.789ab0c6.css",
    "revision": "876301de09b8f00b3d979b3e1ed3199f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9cdcf57e.js",
    "revision": "a128ae669dd7731e3a73b1e824badf53"
  },
  {
    "url": "assets/js/10.98546b39.js",
    "revision": "8d59505b26032f31723ac1c573d36845"
  },
  {
    "url": "assets/js/11.785e8190.js",
    "revision": "b6c2e31bba7ec022abf6680a3b70d2a5"
  },
  {
    "url": "assets/js/12.08020753.js",
    "revision": "f7f5b79cc96a9794f1abc9d3db81655e"
  },
  {
    "url": "assets/js/13.a0ecd746.js",
    "revision": "e0998d742671ae23870d1cf05a94f282"
  },
  {
    "url": "assets/js/14.c433a985.js",
    "revision": "f3273cd969aee2e81ad965a189e85fc2"
  },
  {
    "url": "assets/js/15.cea3d020.js",
    "revision": "f32113457ab2e51c30cd264df68477a2"
  },
  {
    "url": "assets/js/16.b1681d41.js",
    "revision": "d756ba1cbbc04cbd166e822cba93744e"
  },
  {
    "url": "assets/js/17.40f83fd7.js",
    "revision": "42717377bea0e7bd868a10c92bfd91d5"
  },
  {
    "url": "assets/js/18.86cef405.js",
    "revision": "5ab6f7068223c637a68ea067df8a6258"
  },
  {
    "url": "assets/js/19.e840a212.js",
    "revision": "8163c3298869cca1cc6a00ff7e64f4c6"
  },
  {
    "url": "assets/js/2.b4fee74d.js",
    "revision": "001e6e76a4b767be575e2a53231eabb1"
  },
  {
    "url": "assets/js/20.f8552c28.js",
    "revision": "5092643bfbe7810ea23f5b4666940c27"
  },
  {
    "url": "assets/js/21.a363c4d8.js",
    "revision": "7b5da18ed021bb68a78a196966744657"
  },
  {
    "url": "assets/js/22.19e874e2.js",
    "revision": "b82a799a0fbac1f67e9d4ff8567f499a"
  },
  {
    "url": "assets/js/23.bc4e34b6.js",
    "revision": "d496410cc89f75661aa441e018d19f20"
  },
  {
    "url": "assets/js/24.45950517.js",
    "revision": "aa0cd3530f1dd9292057001c34ff5759"
  },
  {
    "url": "assets/js/25.e25c1097.js",
    "revision": "99e9dc59f0eaa6a8c5af86417343fbf0"
  },
  {
    "url": "assets/js/26.283b834c.js",
    "revision": "447d1b069af0766eda3af13e19e3c764"
  },
  {
    "url": "assets/js/27.539d9601.js",
    "revision": "e014c9128b7afe600b5d241bcb7112bb"
  },
  {
    "url": "assets/js/28.5104cd34.js",
    "revision": "221d5a25f2c9ef8a1b2b6067da4e479a"
  },
  {
    "url": "assets/js/29.05a80a62.js",
    "revision": "a6a50626d01943e5df7f3486c4d9793c"
  },
  {
    "url": "assets/js/3.26b72c29.js",
    "revision": "f5229876c534e945c0bc1b0d9e1336a2"
  },
  {
    "url": "assets/js/30.1b03a37f.js",
    "revision": "3e38534c8fb929e5dfc89f6853f379b1"
  },
  {
    "url": "assets/js/31.4f6d5389.js",
    "revision": "1f2185c45c5c1f8f1db97a8861943b77"
  },
  {
    "url": "assets/js/32.7acec754.js",
    "revision": "2ef988e99d320a403d694ac5d48df4f8"
  },
  {
    "url": "assets/js/33.5980dec2.js",
    "revision": "c688649ef5a791d47a85f5fb6356af21"
  },
  {
    "url": "assets/js/34.98c4afe5.js",
    "revision": "4ba75827263788f5fc8dc8f76eb312be"
  },
  {
    "url": "assets/js/35.0e72034e.js",
    "revision": "d4e9e6d19033b7212d48dc41f2f29937"
  },
  {
    "url": "assets/js/36.eace2699.js",
    "revision": "cc11a5f0a4d9e3a1ee072c3381b34726"
  },
  {
    "url": "assets/js/37.76f6dd53.js",
    "revision": "6771c528ce7541589188d00efe4dfe9d"
  },
  {
    "url": "assets/js/38.4c278179.js",
    "revision": "fad0a7610dee1643fc75911a90329dcd"
  },
  {
    "url": "assets/js/39.32db52db.js",
    "revision": "5e144b9704a6949548197d2945325ad9"
  },
  {
    "url": "assets/js/4.36b5897c.js",
    "revision": "9613b87ede70786d75e3ae6ea41ea4a3"
  },
  {
    "url": "assets/js/40.6199c64c.js",
    "revision": "74ef9e1c0b50c6275814a9a75ce60fb7"
  },
  {
    "url": "assets/js/41.0bd058a7.js",
    "revision": "6fd31c1b0014f8dd8750ed04656ad697"
  },
  {
    "url": "assets/js/42.97c72f23.js",
    "revision": "6ef4a56049d61abcb1dfbf72bf71e28f"
  },
  {
    "url": "assets/js/43.4f99ed1b.js",
    "revision": "df2febdefb462fded286b6ff60a46664"
  },
  {
    "url": "assets/js/44.a564849a.js",
    "revision": "d293ee1484cfb3150bb76e19a5f06cbb"
  },
  {
    "url": "assets/js/45.895bd687.js",
    "revision": "6983139513fee9cd9ec3081ed3fd2c65"
  },
  {
    "url": "assets/js/46.a84521ab.js",
    "revision": "b15f989c85c3f9dc48a7a4b93bc10c5a"
  },
  {
    "url": "assets/js/47.0d2b1caa.js",
    "revision": "912cce88c1cef1ef7cd60f44dac9f9ab"
  },
  {
    "url": "assets/js/48.3175daf1.js",
    "revision": "dda91321599ae56fad434cb7ff7957d8"
  },
  {
    "url": "assets/js/49.3be52402.js",
    "revision": "fb359cc9592846f6f14b9a57f9623fe9"
  },
  {
    "url": "assets/js/5.7c610401.js",
    "revision": "0d0339a1d3ad90b9c16b4a325b4a30ca"
  },
  {
    "url": "assets/js/50.0ff8aeba.js",
    "revision": "98df92cf634c3dda17c3cb060ff8a59c"
  },
  {
    "url": "assets/js/51.3bd430c7.js",
    "revision": "8563dfada842a5e141ce9dc4cf2d7534"
  },
  {
    "url": "assets/js/52.c2224907.js",
    "revision": "1d4452d1ac9a7d7931c2143c3ed76af3"
  },
  {
    "url": "assets/js/53.5b7094cd.js",
    "revision": "f491e164e299493d88fe94728c33974a"
  },
  {
    "url": "assets/js/54.9470ea93.js",
    "revision": "ae877500f62425761ec796d64a666948"
  },
  {
    "url": "assets/js/55.7b734299.js",
    "revision": "1e5fed2bd993ed9b7cc5234c299e3197"
  },
  {
    "url": "assets/js/56.9d7a795f.js",
    "revision": "c84ed474b26dde78639b77cacf0f0af0"
  },
  {
    "url": "assets/js/57.b10d8e95.js",
    "revision": "043b9c3c5c7078492d5bdfca7d125877"
  },
  {
    "url": "assets/js/58.83f1034b.js",
    "revision": "865d458f1760b2cad9aa1d801fdcfe44"
  },
  {
    "url": "assets/js/59.6e4857a5.js",
    "revision": "abad49411bc081d21cfb4636de21a3f7"
  },
  {
    "url": "assets/js/6.6f0f8a1b.js",
    "revision": "305e03bf7fadae3c6f5c81d3207585d8"
  },
  {
    "url": "assets/js/60.f9d6ff70.js",
    "revision": "6169d162204727715ce83a8d857282de"
  },
  {
    "url": "assets/js/61.577aa156.js",
    "revision": "b75a35dfb673cbe3ce82d351677e4b2c"
  },
  {
    "url": "assets/js/62.c94bd8df.js",
    "revision": "6d980db6628be60d22b15b0f86f7c25a"
  },
  {
    "url": "assets/js/63.979607ad.js",
    "revision": "bac2d54e0a8bc6c91d1fcaa2c32c2080"
  },
  {
    "url": "assets/js/64.7967706d.js",
    "revision": "9fe900734b399a911793250c104fd361"
  },
  {
    "url": "assets/js/65.3eaa1640.js",
    "revision": "019f1984f21bd7fe6c7e87d32b491e17"
  },
  {
    "url": "assets/js/66.6e23009f.js",
    "revision": "6d6c9da11a752c42876f588612442991"
  },
  {
    "url": "assets/js/67.cf7e0a48.js",
    "revision": "f1b4e6b47ec7e05150de307a1e5e4b14"
  },
  {
    "url": "assets/js/68.f776c33c.js",
    "revision": "9ad952fb8840834fdbea808a46f81232"
  },
  {
    "url": "assets/js/69.00e2ed0a.js",
    "revision": "548b2797884073dcc7a6bdd87e0d3573"
  },
  {
    "url": "assets/js/70.fa00720c.js",
    "revision": "be45be36f994bdcbe22149e19a3a1326"
  },
  {
    "url": "assets/js/71.e012cd43.js",
    "revision": "30db751c01ba8dbb465b0a48f1f711fe"
  },
  {
    "url": "assets/js/72.8cb13a99.js",
    "revision": "e610542e0b4af10623b2af005e9c0325"
  },
  {
    "url": "assets/js/73.7f9b6816.js",
    "revision": "1f32a21c54d00e2f56d36492daf81b78"
  },
  {
    "url": "assets/js/74.b326cc8e.js",
    "revision": "e39cb9bd1217a4059245cb65a90298c8"
  },
  {
    "url": "assets/js/9.a55d62e8.js",
    "revision": "3b1d849265cc52b45dfb0c8f4da76a73"
  },
  {
    "url": "assets/js/app.2739b62d.js",
    "revision": "70854979c0a28ed3256bbf8f9f74a16c"
  },
  {
    "url": "assets/js/vendors~search-page.b8755453.js",
    "revision": "455436f11a28e6f7f453a9ac4675808d"
  },
  {
    "url": "guide/axios.html",
    "revision": "ab88ec53aad372f3c46b1b350e90c2d0"
  },
  {
    "url": "guide/book.html",
    "revision": "6888ee4c726f92d76dd3d98a32f6b332"
  },
  {
    "url": "guide/css.html",
    "revision": "8c1c0b22b1a0d38506e492549ff75e5e"
  },
  {
    "url": "guide/index.html",
    "revision": "10b6e67bffd451f8d36ece66fa2ec489"
  },
  {
    "url": "guide/install.html",
    "revision": "a6dd9e23fdf17600db8a890dcce9f269"
  },
  {
    "url": "guide/jiexi.html",
    "revision": "5a6ac541e2bd790b90adc1d54b9256d0"
  },
  {
    "url": "guide/kugou.html",
    "revision": "ed9ccd6f44433c1ec944e38f21f1edb6"
  },
  {
    "url": "guide/live.html",
    "revision": "90f5d681a0224fc03ad1644376413184"
  },
  {
    "url": "guide/movie.html",
    "revision": "09037ffe0626747135b309ee48c6186e"
  },
  {
    "url": "guide/music.html",
    "revision": "4cbb1a2cad7da94338858e11fdd401fd"
  },
  {
    "url": "guide/phpdl.html",
    "revision": "670138892b2e197aff38c38f5ce7242a"
  },
  {
    "url": "guide/plays.html",
    "revision": "6004f2b0a7ba193b5482c79a614e9d46"
  },
  {
    "url": "guide/read.html",
    "revision": "b13e66b446ea59c67a22f66b5c2f1e87"
  },
  {
    "url": "guide/tools.html",
    "revision": "6d4ee8f356405e71ff6ae1d3b11d43ef"
  },
  {
    "url": "guide/tv.html",
    "revision": "cecec761757276192e2277ba1e5b6012"
  },
  {
    "url": "guide/video.html",
    "revision": "7d6d8289a87b85bf5bac664e2b761a67"
  },
  {
    "url": "images/AccessibilityChromeDeveloperTools.png",
    "revision": "25c2a61b52ea8753aa4693a16abaa43f"
  },
  {
    "url": "images/AccessibleARIAdescribedby.png",
    "revision": "d2b26eb9ae0006509801691c289a86d3"
  },
  {
    "url": "images/AccessibleARIAlabelDevTools.png",
    "revision": "05cb34b380cef9627d5c9a3c0ba64dca"
  },
  {
    "url": "images/AccessibleARIAlabelledbyDevTools.png",
    "revision": "1554e00985256ca1042caffbf59709cc"
  },
  {
    "url": "images/AccessibleLabelChromeDevTools.png",
    "revision": "5b9d491c368093887624f4dfacdb6431"
  },
  {
    "url": "images/ads.png",
    "revision": "4c287da71f0d24c6cafd44de4b51fcd6"
  },
  {
    "url": "images/alipay.png",
    "revision": "4f26a1b666a9a5bf98466cb97623b720"
  },
  {
    "url": "images/background1.jpg",
    "revision": "fc242cdea0ebd7fd399e86b34d229a6e"
  },
  {
    "url": "images/bank.png",
    "revision": "335196f339a769d45405f25e68b8271e"
  },
  {
    "url": "images/breakpoint_hit.png",
    "revision": "114924925a4ec0f23236012bc3dc8422"
  },
  {
    "url": "images/breakpoint_set.png",
    "revision": "6439856732303cfeb3806d52dd681191"
  },
  {
    "url": "images/btn_1.png",
    "revision": "007eb76666d2bf16caea647ff6ec6d47"
  },
  {
    "url": "images/btn_2.png",
    "revision": "e357c8a3bc95e2b13e29cd53c191c41f"
  },
  {
    "url": "images/btn_3.png",
    "revision": "fdcd538fcc4f19d9f1a5701267c8defa"
  },
  {
    "url": "images/btn_4.png",
    "revision": "54058f69e737a4a28ff9b8c2a0fa3c45"
  },
  {
    "url": "images/btn_5.png",
    "revision": "ee37b151e82091273a0e881768a9a68a"
  },
  {
    "url": "images/btn_6.png",
    "revision": "89c3fae23df6d4691e5feed98cd24507"
  },
  {
    "url": "images/btn_7.png",
    "revision": "5b34d31b7f385ffbc0e23f560e220349"
  },
  {
    "url": "images/coin-bch.png",
    "revision": "ddfab54149483e02f3cd540a47e2782b"
  },
  {
    "url": "images/coin-btc.png",
    "revision": "d90559bb202766dd6ddabf71dd1680be"
  },
  {
    "url": "images/coin-eth.png",
    "revision": "70ae70292937880fe9e77c2c7dc38f86"
  },
  {
    "url": "images/coin-ltc.png",
    "revision": "9e756bd611ac7355515153cecbc20d36"
  },
  {
    "url": "images/components_provide.png",
    "revision": "f7110a1bae2d0744997012ca656d8fa1"
  },
  {
    "url": "images/components.png",
    "revision": "b5c08269dfc26ae6d7db3801e9efd296"
  },
  {
    "url": "images/config_add.png",
    "revision": "353cd8b2a1bdf9fc4c74a80c5f38090a"
  },
  {
    "url": "images/css-vs-js-ease.svg",
    "revision": "d326f3556b9001865ed2fd91faebf620"
  },
  {
    "url": "images/dash.png",
    "revision": "e7ff30a9b5456e4f1e881acea7186af8"
  },
  {
    "url": "images/devtools-timetravel.gif",
    "revision": "fca84f3fb8a8d10274eb2fc7ed9b65f9"
  },
  {
    "url": "images/dom-tree.png",
    "revision": "f70b86bfbbfe1962dc5d6125105f1122"
  },
  {
    "url": "images/editable-svg-icons-sizes.png",
    "revision": "43fe12e12ab70fbc0f4bc608fa68a4fd"
  },
  {
    "url": "images/editable-svg-icons.jpg",
    "revision": "0ffbaae28a3a71279e89c4e515f3519b"
  },
  {
    "url": "images/icons/android-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/android-icon-192x192.png",
    "revision": "5d10eaab941eb596ee59ffc53652d035"
  },
  {
    "url": "images/icons/android-icon-36x36.png",
    "revision": "bb757d234def1a6b53d793dbf4879578"
  },
  {
    "url": "images/icons/android-icon-48x48.png",
    "revision": "0d33c4fc51e2bb020bf8dd7cd05db875"
  },
  {
    "url": "images/icons/android-icon-72x72.png",
    "revision": "702c4fafca31d670f9bd8b2d185ced39"
  },
  {
    "url": "images/icons/android-icon-96x96.png",
    "revision": "0ebff702851985ea6ba891cf6e6e7ddd"
  },
  {
    "url": "images/icons/apple-icon-114x114.png",
    "revision": "f4fd30f3a26b932843b8c5cef9f2186e"
  },
  {
    "url": "images/icons/apple-icon-120x120.png",
    "revision": "b6a574d63d52ef9c89189b67bcac5cbd"
  },
  {
    "url": "images/icons/apple-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/apple-icon-152x152.png",
    "revision": "f53787bf41febf2b044931a305ccaf2a"
  },
  {
    "url": "images/icons/apple-icon-180x180.png",
    "revision": "9f6b1e3b92b2c5bd5b7d79501bb6e612"
  },
  {
    "url": "images/icons/apple-icon-57x57.png",
    "revision": "83f622ba0994866abc56ace068b6551c"
  },
  {
    "url": "images/icons/apple-icon-60x60.png",
    "revision": "643f761bc39f86c70f17cd1fed3b8e08"
  },
  {
    "url": "images/icons/apple-icon-72x72.png",
    "revision": "702c4fafca31d670f9bd8b2d185ced39"
  },
  {
    "url": "images/icons/apple-icon-76x76.png",
    "revision": "94d9af047b86d99657b5efb88a0d1c7b"
  },
  {
    "url": "images/icons/apple-icon-precomposed.png",
    "revision": "707758f591323153a4f1cb3a8d9641fa"
  },
  {
    "url": "images/icons/apple-icon.png",
    "revision": "707758f591323153a4f1cb3a8d9641fa"
  },
  {
    "url": "images/icons/bacancy_technology.png",
    "revision": "5810bb8253b1e35ba437373ff83f82d3"
  },
  {
    "url": "images/icons/bulb.svg",
    "revision": "e3fbc07fc8a4fd64bf3585de3c5868c4"
  },
  {
    "url": "images/icons/danger.svg",
    "revision": "7224901b2f84983efa258490e5a1c03a"
  },
  {
    "url": "images/icons/favicon-16x16.png",
    "revision": "a5a9da66870189b0539223c38c8a7749"
  },
  {
    "url": "images/icons/favicon-32x32.png",
    "revision": "3d60db0d77303b2414ddd50cf2472bf7"
  },
  {
    "url": "images/icons/favicon-96x96.png",
    "revision": "0ebff702851985ea6ba891cf6e6e7ddd"
  },
  {
    "url": "images/icons/info.svg",
    "revision": "39d1a12b97555d796d4dcda9bf403429"
  },
  {
    "url": "images/icons/ms-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/ms-icon-150x150.png",
    "revision": "e8cdf492981122a2548bc247c7b4067d"
  },
  {
    "url": "images/icons/ms-icon-310x310.png",
    "revision": "1721f8303ec2349002b5980a01f27cef"
  },
  {
    "url": "images/icons/ms-icon-70x70.png",
    "revision": "a110cf0132b00b23a8605ca72a8874ba"
  },
  {
    "url": "images/icons/stop.svg",
    "revision": "7d577a225ddf7f95f96032b3eefb48b6"
  },
  {
    "url": "images/imooc-ad3.png",
    "revision": "a8b8084e0bb616cef5637f589d0c3a49"
  },
  {
    "url": "images/lifecycle.svg",
    "revision": "647c49f5e77ed510ca62c6522248dd99"
  },
  {
    "url": "images/logo.jpg",
    "revision": "baaa798caa8f1352fcb098f643e1e538"
  },
  {
    "url": "images/logo.png",
    "revision": "d4d6f00ef56ad387bc412112565a6f52"
  },
  {
    "url": "images/nopic.png",
    "revision": "11b3d729f5775a8bfd46a0a926cfe64d"
  },
  {
    "url": "images/options-api.png",
    "revision": "f268f15922a54dc18716ea6df8274691"
  },
  {
    "url": "images/oxford-comma.jpg",
    "revision": "8a220093d78172e4eb9d98529f9fba05"
  },
  {
    "url": "images/partners/monterail.png",
    "revision": "db165491374f80cc4f3190a0ebd918ad"
  },
  {
    "url": "images/partners/vehikl.png",
    "revision": "65f4ae56972001f689053fba43129433"
  },
  {
    "url": "images/paypal.png",
    "revision": "067bd556ce9e4c76538a8057adb6d596"
  },
  {
    "url": "images/play.png",
    "revision": "962a469ab60335411bfa222cae2916e1"
  },
  {
    "url": "images/qqpay.png",
    "revision": "211c6f99629015a87e300f501e0c5ae8"
  },
  {
    "url": "images/qqqun.png",
    "revision": "40611fe246973180c361070b1a228a38"
  },
  {
    "url": "images/resizeApi.png",
    "revision": "3b10524eb11fd194f743cb4fd8377c51"
  },
  {
    "url": "images/scoped-slot.png",
    "revision": "c6ef14ba02eac288245c5c5009d966cc"
  },
  {
    "url": "images/sfc-with-preprocessors.png",
    "revision": "2e57ecfafeac2237d5a003ad9a0ef7bc"
  },
  {
    "url": "images/sfc.png",
    "revision": "e333ce3bf8119bef381ac7c7b2bbd4ba"
  },
  {
    "url": "images/shunfengads.png",
    "revision": "d03c0a3426991d1fe11d976a91fb8adf"
  },
  {
    "url": "images/skin-default-b.jpg",
    "revision": "79f06236445ac34f948d7429d8d7f22e"
  },
  {
    "url": "images/skin-default-m.jpg",
    "revision": "35905b0ba7e207e112c6ac04614138df"
  },
  {
    "url": "images/skin-default-t.jpg",
    "revision": "ece62008d6c620bedddfbbe4b94f5943"
  },
  {
    "url": "images/slot.png",
    "revision": "00cf6bd787014eb22b2821d72b80212a"
  },
  {
    "url": "images/sponsors/autocode.svg",
    "revision": "e1c1c17d96d289b20b2d91819a4c9e4d"
  },
  {
    "url": "images/sponsors/bacancy_technology.png",
    "revision": "9a0590eb4ce29289b454240415611162"
  },
  {
    "url": "images/sponsors/bestvpn_co.png",
    "revision": "afbe252b6b59bc3cdac2e7dec69eac39"
  },
  {
    "url": "images/sponsors/bit.png",
    "revision": "9638a3f44bf471876effb80ea0659f73"
  },
  {
    "url": "images/sponsors/chaitin.png",
    "revision": "549e43997790dc624c477424acbfe228"
  },
  {
    "url": "images/sponsors/cloudstudio.png",
    "revision": "fc480cf4c2b06591f58e7e91666226af"
  },
  {
    "url": "images/sponsors/dcloud.gif",
    "revision": "ade7c64e66506b6cff10292efea16ee8"
  },
  {
    "url": "images/sponsors/devexpress.png",
    "revision": "a6d9c786a373088c8d238ca643293c17"
  },
  {
    "url": "images/sponsors/devsquad.png",
    "revision": "e639ea4fd0d7053fc0928d4ff9fefb2a"
  },
  {
    "url": "images/sponsors/fastcoding_inc.png",
    "revision": "08a0a7652db79fa3395c0ef28d49f0cd"
  },
  {
    "url": "images/sponsors/fastcoding_inc.svg",
    "revision": "9d33d7905c4fb224aba61de096505794"
  },
  {
    "url": "images/sponsors/firestick_tricks.png",
    "revision": "1ee05223a5b12fe910cb8428d57223d8"
  },
  {
    "url": "images/sponsors/flatlogic_templates.svg",
    "revision": "4442dca91b270a32353ee5aca44ebc33"
  },
  {
    "url": "images/sponsors/foo.png",
    "revision": "1c9cde53bb9c98a316edc93d57684e4d"
  },
  {
    "url": "images/sponsors/frontend_love.png",
    "revision": "b514babc53a0f3ddc854b0b14a54a489"
  },
  {
    "url": "images/sponsors/frontendlove.png",
    "revision": "b514babc53a0f3ddc854b0b14a54a489"
  },
  {
    "url": "images/sponsors/gridsome.png",
    "revision": "e82a2f872ec319bbb5d0a804288cd9b7"
  },
  {
    "url": "images/sponsors/happy_programmer_llc.png",
    "revision": "3f3303d42a57ff9edf36373f59d376af"
  },
  {
    "url": "images/sponsors/html_burger.png",
    "revision": "c7ce1344d001e7a236a89694ed59d988"
  },
  {
    "url": "images/sponsors/icons_8.png",
    "revision": "ffcdd01817ecdb32b92bd2f1e4d75e84"
  },
  {
    "url": "images/sponsors/icons.png",
    "revision": "ad6ee8c400066e15712cdef4342023da"
  },
  {
    "url": "images/sponsors/imooc-sponsor.png",
    "revision": "7ddc7f938fbbc08f816a888225786a4c"
  },
  {
    "url": "images/sponsors/imooc-sponsor2.png",
    "revision": "ce9575f62520e0ac8b7d93ada2c6b274"
  },
  {
    "url": "images/sponsors/inkoop.png",
    "revision": "1cff77d2c927657d3aceeba2c12db892"
  },
  {
    "url": "images/sponsors/intygrate.png",
    "revision": "fdd390b44a4aeed763f53f4e8f6529e4"
  },
  {
    "url": "images/sponsors/isolutions_uk_limited.png",
    "revision": "0f76512940c38b72fcf48337b4d64692"
  },
  {
    "url": "images/sponsors/laravel.png",
    "revision": "26ece85fc10e3d137564a414a0168b7b"
  },
  {
    "url": "images/sponsors/modus.png",
    "revision": "6498c04fee5b8542449b350e77180379"
  },
  {
    "url": "images/sponsors/Monterail.png",
    "revision": "bf1ec94a0ca48f0e6be0c97fa60a42c0"
  },
  {
    "url": "images/sponsors/moovweb.png",
    "revision": "8183954731fdeb0f136fac1485198184"
  },
  {
    "url": "images/sponsors/neds.png",
    "revision": "1f1a2a46c2575019ae07a90205f60b65"
  },
  {
    "url": "images/sponsors/onsen_ui.png",
    "revision": "e41569bcb10fbca3f361d818b29ed7fd"
  },
  {
    "url": "images/sponsors/passionate_people.png",
    "revision": "03e59e28347e1dcd165e4e1525afb545"
  },
  {
    "url": "images/sponsors/primevue copy.png",
    "revision": "60f2e8fb0dce3e9045fc3a2a8039fa82"
  },
  {
    "url": "images/sponsors/primevue.png",
    "revision": "60f2e8fb0dce3e9045fc3a2a8039fa82"
  },
  {
    "url": "images/sponsors/programmers_io.png",
    "revision": "02cb415eb9a8e9ce6579c7aff03759dd"
  },
  {
    "url": "images/sponsors/pullrequest.svg",
    "revision": "50847513b306736d33234d50b11c5e1d"
  },
  {
    "url": "images/sponsors/retool.png",
    "revision": "aaad6a749deb625da5771750dcb51920"
  },
  {
    "url": "images/sponsors/roadster.png",
    "revision": "080fb711e736d686f182358a582d7c6b"
  },
  {
    "url": "images/sponsors/shopware_ag.png",
    "revision": "e2ded483c0660bd629938e37f388d9fb"
  },
  {
    "url": "images/sponsors/storekit.png",
    "revision": "cacf47116e5efe9fc2dcd60ebc197707"
  },
  {
    "url": "images/sponsors/storyblok.png",
    "revision": "64ec1772109b769e91138b58526484ad"
  },
  {
    "url": "images/sponsors/tidelift.png",
    "revision": "831935bd53d7d2d4eea9427c5f874816"
  },
  {
    "url": "images/sponsors/tighten_co.png",
    "revision": "003364e7044150e2979cbfe03d640cec"
  },
  {
    "url": "images/sponsors/tooltwist.png",
    "revision": "b81bfd5ae608e965d03aaa5a4164373e"
  },
  {
    "url": "images/sponsors/unicorn.png",
    "revision": "e0c072bd78f366471a393b9c366c9b74"
  },
  {
    "url": "images/sponsors/usave.png",
    "revision": "5cffd5053b1d75ae49c9b6eb176e0ccf"
  },
  {
    "url": "images/sponsors/valuecoders.png",
    "revision": "818ca42a745e018ace0c55c36a7ae3dd"
  },
  {
    "url": "images/sponsors/vehikl.png",
    "revision": "3bd1b88aa9d242d308e838f2342d7660"
  },
  {
    "url": "images/sponsors/vpnranks.png",
    "revision": "35d7392e773d487e13358d8b5f7fb646"
  },
  {
    "url": "images/sponsors/vuejobs.png",
    "revision": "77ed618e17571d1a2d77ad7bc53e8fc4"
  },
  {
    "url": "images/sponsors/vuemastery.png",
    "revision": "6f09ce143467fba22039bde3f2070c19"
  },
  {
    "url": "images/sponsors/vueschool.png",
    "revision": "3d92b4f1a8fcbe3be0d0e89950a1a705"
  },
  {
    "url": "images/sponsors/vuetify.png",
    "revision": "c7cfff77abb10162cb0b7c2ed3b6ac51"
  },
  {
    "url": "images/sponsors/watchcartoononline.png",
    "revision": "f7cf1082b14003908496f02f9eb2ae00"
  },
  {
    "url": "images/sponsors/webdock.png",
    "revision": "6b8d3d271ba4d05daf83ad75d21221d1"
  },
  {
    "url": "images/sponsors/webucator.png",
    "revision": "3c87885f4c36bc1b07f8c2b547e84b6f"
  },
  {
    "url": "images/sponsors/wilderminds.png",
    "revision": "cd98b69653b51369da2e765097f13d6f"
  },
  {
    "url": "images/sponsors/writers_per_hour.jpg",
    "revision": "2033e6d7e88969e97e78e38d8d030eb9"
  },
  {
    "url": "images/sponsors/x_team.png",
    "revision": "a6cfaebb0c0dc17d348bc9c6fd5758ef"
  },
  {
    "url": "images/sponsors/y8.png",
    "revision": "3cdd8826d3419751f40a8aa7f90cd539"
  },
  {
    "url": "images/sponsors/yakaz.png",
    "revision": "f1918919114e35d6091e67370450e8bd"
  },
  {
    "url": "images/sponsors/youku.png",
    "revision": "1cce2782971aed63d38b17e28614d512"
  },
  {
    "url": "images/state.png",
    "revision": "6a05b01942c7d2cff4ea0033ded59ebb"
  },
  {
    "url": "images/transition.png",
    "revision": "5990c1dff7dc7a8fb3b34b4462bd0105"
  },
  {
    "url": "images/transitions.svg",
    "revision": "f0002fdb27ed433579d15f67c3b06153"
  },
  {
    "url": "images/v-bind-instead-of-sync.png",
    "revision": "cb59705b61fd5a75b1903f6a0b497cb1"
  },
  {
    "url": "images/VIP-TV-LOGO-FINAL-360x360.png",
    "revision": "a0a0de49222399491fc223def100c6ab"
  },
  {
    "url": "images/VIP-TV-LOGO-FINAL-600x600.png",
    "revision": "e00049d4824b4080f73e7a3ffaa74a1d"
  },
  {
    "url": "images/vip.png",
    "revision": "521de00cbc283d906e105bea8769d276"
  },
  {
    "url": "images/VIPTV-12MONTHS-768x768.png",
    "revision": "cdccb24ecde3b1674f72913204b02139"
  },
  {
    "url": "images/VIPTV-6MONTHS-768x768.png",
    "revision": "6138637cedf4f081abe233c27c4a00b0"
  },
  {
    "url": "images/VIPTV-LOGO-LONG-FINAL@1x-360x105.png",
    "revision": "485839bf72410fe71001c8d5aa3a2442"
  },
  {
    "url": "images/VIPTV-LOGO-LONG-FINAL@1x-600x175.png",
    "revision": "40d793daa76c84a13fbe80b5724d1618"
  },
  {
    "url": "images/VIPTV-LOGO-LONG@1x.png",
    "revision": "99674e44f30a8ac6cc6a6619c63fbdb7"
  },
  {
    "url": "images/vod.jpg",
    "revision": "f91d765d2c37e1de7cbd261f072c0c5e"
  },
  {
    "url": "images/wxpay.png",
    "revision": "1d0c4600af777bf5ed21efd038c9ccf9"
  },
  {
    "url": "images/xiaogong.png",
    "revision": "c2a5cc43d620c00c5f060952cf6ee85a"
  },
  {
    "url": "index.html",
    "revision": "1d93e5a92cc7054523674e03f6151caa"
  },
  {
    "url": "logo.png",
    "revision": "a0a0de49222399491fc223def100c6ab"
  },
  {
    "url": "plugins/index.html",
    "revision": "5dacadd3e35ff23252e20e1fcbaab6d1"
  },
  {
    "url": "source/ads.html",
    "revision": "b7557ef9784245d241c7985d304ed51b"
  },
  {
    "url": "source/byou.html",
    "revision": "ac915bde049fb6951843ccc7d9a587f3"
  },
  {
    "url": "source/free.html",
    "revision": "1d15e781be3f2ac064734621d4c9ab6b"
  },
  {
    "url": "source/index.html",
    "revision": "d567309c516355000b7b89bf7ac035a2"
  },
  {
    "url": "source/migu.html",
    "revision": "60648c40d703ce479e6d5e506c526f8f"
  },
  {
    "url": "source/mlive.html",
    "revision": "ad3274f0c72447c133bac74cf142ff68"
  },
  {
    "url": "source/movie.html",
    "revision": "8248ee0b51810ed48d2200dc0cbe0bb0"
  },
  {
    "url": "source/org.html",
    "revision": "f959b10b23fb2062dbcfd3f33e366df5"
  },
  {
    "url": "source/qyun.html",
    "revision": "a2ad0899bb8f7519e9cb11941908ecda"
  },
  {
    "url": "source/ttou.html",
    "revision": "d55d32eafcf37128a4bf45ea712d6cae"
  },
  {
    "url": "source/tvhezi.html",
    "revision": "2339a3401d604b9f1fe4235d415ddd12"
  },
  {
    "url": "source/windows.html",
    "revision": "b68bf23e69f66c53aabfdf0d2c06c496"
  },
  {
    "url": "source/xxx.html",
    "revision": "8f68e2e7adadfe1a6face281a5499369"
  },
  {
    "url": "source/ygd.html",
    "revision": "710c46a46cdc1a83860207174893808f"
  },
  {
    "url": "template/800cms/Base.html",
    "revision": "12765571fb9d67c16a7e6ad1921ec730"
  },
  {
    "url": "template/index.html",
    "revision": "f254910b1c58d853880189fb099f90f1"
  },
  {
    "url": "template/maccms/Base.html",
    "revision": "8f418211f4fdc9539059299cc781fd77"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
