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
    "revision": "f29b28b1b0ee2633e596ed7f653c7ea3"
  },
  {
    "url": "assets/css/0.styles.a975159d.css",
    "revision": "70c5bd0581ae87ee171961af04678e30"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.845d8552.js",
    "revision": "cf1245401159130967207e748879ca97"
  },
  {
    "url": "assets/js/10.98546b39.js",
    "revision": "8d59505b26032f31723ac1c573d36845"
  },
  {
    "url": "assets/js/11.2c09c32f.js",
    "revision": "36a5a0badc0309aec0671916690c4f88"
  },
  {
    "url": "assets/js/12.08020753.js",
    "revision": "f7f5b79cc96a9794f1abc9d3db81655e"
  },
  {
    "url": "assets/js/13.f0f07587.js",
    "revision": "10219c8838e72ded20a2b248ca726582"
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
    "url": "assets/js/17.002de79b.js",
    "revision": "f124407c34bb58c441bd808aa7e2dda3"
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
    "url": "assets/js/2.0aae3303.js",
    "revision": "22d3bc98f29bc4b578496b32b3e0cb96"
  },
  {
    "url": "assets/js/20.294f0281.js",
    "revision": "ee424817cfeddd625e730fd973c89910"
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
    "url": "assets/js/24.fa833a3c.js",
    "revision": "cc52ec398644ece2538403d19025efbd"
  },
  {
    "url": "assets/js/25.e25c1097.js",
    "revision": "99e9dc59f0eaa6a8c5af86417343fbf0"
  },
  {
    "url": "assets/js/26.a5e24ff1.js",
    "revision": "3915bba86081dcfe209ecfc370f3ec3f"
  },
  {
    "url": "assets/js/27.c66ebcaa.js",
    "revision": "aec44326438acf24d5ff77e05e6c9a4f"
  },
  {
    "url": "assets/js/28.a333deef.js",
    "revision": "8b130c961bf50296762bae9147fa0f09"
  },
  {
    "url": "assets/js/29.05a80a62.js",
    "revision": "a6a50626d01943e5df7f3486c4d9793c"
  },
  {
    "url": "assets/js/3.0fda44e6.js",
    "revision": "ca96b6611f8b0766f0a45cd8cee2c62f"
  },
  {
    "url": "assets/js/30.1b03a37f.js",
    "revision": "3e38534c8fb929e5dfc89f6853f379b1"
  },
  {
    "url": "assets/js/31.8dea6201.js",
    "revision": "1aad5ff5ef73de01a882da289019dfd6"
  },
  {
    "url": "assets/js/32.1e0ed72b.js",
    "revision": "1d1f334306c4e6d322520a356e3b826d"
  },
  {
    "url": "assets/js/33.5980dec2.js",
    "revision": "c688649ef5a791d47a85f5fb6356af21"
  },
  {
    "url": "assets/js/34.955ae26d.js",
    "revision": "0ddb0be538ea996b4a06e138767700cc"
  },
  {
    "url": "assets/js/35.1a08e8a7.js",
    "revision": "c2acbb8288e519355d0cabdc88948e0c"
  },
  {
    "url": "assets/js/36.7c45d3c2.js",
    "revision": "d6dc4c7f1d36b02475c20fed48ab3bd3"
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
    "url": "assets/js/4.8eb1004c.js",
    "revision": "78e3f8e99b38dbfd44cdf530300df60c"
  },
  {
    "url": "assets/js/40.cd9f710c.js",
    "revision": "2483fda2478264e680fcc35f472b3d66"
  },
  {
    "url": "assets/js/41.fe1cf755.js",
    "revision": "ed66dcd8a00ac743dc703b04389298d2"
  },
  {
    "url": "assets/js/42.a34f4d44.js",
    "revision": "815e0b58bd734438db46423cbafa5dc6"
  },
  {
    "url": "assets/js/43.9398d87b.js",
    "revision": "70aeb4d4b54b8662ba8922fa99627835"
  },
  {
    "url": "assets/js/44.46a248d4.js",
    "revision": "0e6ee752540e5a9140717658d363fe45"
  },
  {
    "url": "assets/js/45.c2d8cf28.js",
    "revision": "63f65bb34e04e31016f0eea5e6021742"
  },
  {
    "url": "assets/js/46.02f5caaa.js",
    "revision": "d19a76c51529a48c81fe7611504c7412"
  },
  {
    "url": "assets/js/47.89aa8cce.js",
    "revision": "da62c25f7d7826cad7956f3752c86cc1"
  },
  {
    "url": "assets/js/48.e61bdca0.js",
    "revision": "87fd54204658e07bb8522bcaf04c6aad"
  },
  {
    "url": "assets/js/49.daf4efc3.js",
    "revision": "efaf75cb8e0725c4cb81945dfa7e3d61"
  },
  {
    "url": "assets/js/5.7c610401.js",
    "revision": "0d0339a1d3ad90b9c16b4a325b4a30ca"
  },
  {
    "url": "assets/js/50.c926667c.js",
    "revision": "a51d06fe746cd25e1986801b82751871"
  },
  {
    "url": "assets/js/51.0f9fd286.js",
    "revision": "cfb12d8e12eed73e70fae2559fc70c15"
  },
  {
    "url": "assets/js/52.34e92b87.js",
    "revision": "14c30c8f54ce0680b89b3889e848ab3b"
  },
  {
    "url": "assets/js/53.5b7094cd.js",
    "revision": "f491e164e299493d88fe94728c33974a"
  },
  {
    "url": "assets/js/54.afaa20ab.js",
    "revision": "46732257dcec9c738e29b26f580eb5ee"
  },
  {
    "url": "assets/js/55.daf469cb.js",
    "revision": "f91f14fc275bf41be2206d67a2cfa4c4"
  },
  {
    "url": "assets/js/56.fa7c1ad5.js",
    "revision": "f3872ad316a1b8ebe6b9fba8c152b6ce"
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
    "url": "assets/js/59.607ecc6a.js",
    "revision": "479a78cfff9d4850fc0a2ee7b46080fe"
  },
  {
    "url": "assets/js/6.ea1f5a92.js",
    "revision": "66ab28136179ab72ef5bee177d64aa15"
  },
  {
    "url": "assets/js/60.944e46d6.js",
    "revision": "d976ae11de00dec043f4c372abcfde16"
  },
  {
    "url": "assets/js/61.6a19e9ea.js",
    "revision": "37407cb68dd9bab1d06452cca7f409ac"
  },
  {
    "url": "assets/js/62.83e5a12c.js",
    "revision": "ea64518405f111ffacd71dc0956d7a15"
  },
  {
    "url": "assets/js/63.365bd0a6.js",
    "revision": "5f32345fb9211cd444f2f86751461541"
  },
  {
    "url": "assets/js/64.754ce40e.js",
    "revision": "916917527ba164fb8948cbf6053da01f"
  },
  {
    "url": "assets/js/65.8adc6b30.js",
    "revision": "c78c4d80234e7b138a11651eddba3674"
  },
  {
    "url": "assets/js/66.57eb57ce.js",
    "revision": "c3b55dbb96bf4753fdaf252ca51206b5"
  },
  {
    "url": "assets/js/67.cf7e0a48.js",
    "revision": "f1b4e6b47ec7e05150de307a1e5e4b14"
  },
  {
    "url": "assets/js/68.e9779401.js",
    "revision": "889e1c8403f5720857ff9eafcac083b7"
  },
  {
    "url": "assets/js/69.9246ad4e.js",
    "revision": "446a7805483fbb0a802bed11c639c71f"
  },
  {
    "url": "assets/js/70.82d20db8.js",
    "revision": "adcc6eff5300abc7fae62b24218ed327"
  },
  {
    "url": "assets/js/71.762606a7.js",
    "revision": "1aeca0827f44d94c24c1186bb9a38051"
  },
  {
    "url": "assets/js/72.bfe4fd88.js",
    "revision": "dd7448218c899bd4b4dcd592d01c8403"
  },
  {
    "url": "assets/js/73.6a58cdbc.js",
    "revision": "7795d6b131c8b6a147d6411007519b25"
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
    "url": "assets/js/app.cbbeaef4.js",
    "revision": "4c53aad86f3a1a5f23482124ff11250c"
  },
  {
    "url": "assets/js/vendors~search-page.b8755453.js",
    "revision": "455436f11a28e6f7f453a9ac4675808d"
  },
  {
    "url": "guide/axios.html",
    "revision": "2d32f5f5071fcfd861e807afed584844"
  },
  {
    "url": "guide/book.html",
    "revision": "e667ca73220d9f78172fb1dfcc9d3007"
  },
  {
    "url": "guide/css.html",
    "revision": "c4a8b5dd659f37ad34e447d3a96dd004"
  },
  {
    "url": "guide/index.html",
    "revision": "1b9c2cf7e978af6191e790720ec29c26"
  },
  {
    "url": "guide/install.html",
    "revision": "49c4a4d1036b67124857b775ab48aaa2"
  },
  {
    "url": "guide/jiexi.html",
    "revision": "c21e98bb03c0cfad0f15466dff17cc39"
  },
  {
    "url": "guide/kugou.html",
    "revision": "1b931947d5ae9bc5e384537e905f94ef"
  },
  {
    "url": "guide/live.html",
    "revision": "0e3f089f1102a5159e6f4027a1fb8a35"
  },
  {
    "url": "guide/movie.html",
    "revision": "8c7578965cf27f98e2b174a4ed9dd800"
  },
  {
    "url": "guide/music.html",
    "revision": "e2933380bef5600e466b285961891ef5"
  },
  {
    "url": "guide/phpdl.html",
    "revision": "904b727819f791e1650b57fb58f3cda9"
  },
  {
    "url": "guide/plays.html",
    "revision": "57f64f8320a0284ec13dcede85f3fc8b"
  },
  {
    "url": "guide/read.html",
    "revision": "e83f588e770b4d8ee22f1a17af2751db"
  },
  {
    "url": "guide/tools.html",
    "revision": "ca100f2e28c0702a2e01e116a9f96ad1"
  },
  {
    "url": "guide/tv.html",
    "revision": "471a8d10f0cadc359f2d1416aea5dcc3"
  },
  {
    "url": "guide/video.html",
    "revision": "8b3e9c4c914ab0ad447cd70a9b4d84b4"
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
    "revision": "b2fb03ec52f7089d53a40caaadf47330"
  },
  {
    "url": "logo.png",
    "revision": "a0a0de49222399491fc223def100c6ab"
  },
  {
    "url": "plugins/index.html",
    "revision": "bac5fe5c663bd78eef512241241e4fd0"
  },
  {
    "url": "source/ads.html",
    "revision": "4c65802c839ba435c8cb6530a801cbcb"
  },
  {
    "url": "source/byou.html",
    "revision": "aa3cd9fac9b415eb17f18df71fe6f85c"
  },
  {
    "url": "source/free.html",
    "revision": "727ea070afbd523da32a4b062b7115ea"
  },
  {
    "url": "source/index.html",
    "revision": "cf34d2b07c19f4ad6a968729b9ee0fe3"
  },
  {
    "url": "source/migu.html",
    "revision": "e5bbc3ab5c57e5ddfa6df49e427c54bf"
  },
  {
    "url": "source/mlive.html",
    "revision": "2bad69889e499c69c06c78ab41a87667"
  },
  {
    "url": "source/movie.html",
    "revision": "6270467ff696e016ff303a3cb7825ab5"
  },
  {
    "url": "source/org.html",
    "revision": "cb073afb242748d2d7738076b5165d89"
  },
  {
    "url": "source/qyun.html",
    "revision": "441920c9b5dd79fa71cd8985525519f5"
  },
  {
    "url": "source/ttou.html",
    "revision": "c5ecef3b1820bae0d2e87ff8ac8a3906"
  },
  {
    "url": "source/tvhezi.html",
    "revision": "0908154b7a9c9d3a11a618103ce397be"
  },
  {
    "url": "source/windows.html",
    "revision": "6e7d208f986c060500589729a39617d1"
  },
  {
    "url": "source/xxx.html",
    "revision": "f6bda8ed81f59483bb7aad8b5d0896cc"
  },
  {
    "url": "source/ygd.html",
    "revision": "1a362718a8231eed1f6da8124e95a696"
  },
  {
    "url": "template/800cms/Base.html",
    "revision": "b2c3dbcf96f01dddb3504bb27c728300"
  },
  {
    "url": "template/index.html",
    "revision": "f016e26f4d6876e87ad72a918628ae47"
  },
  {
    "url": "template/maccms/Base.html",
    "revision": "494ac617ebdbb15231e48519111a0559"
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
