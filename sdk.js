! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(o, i, function(t) {
                return e[t]
            }.bind(null, i));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([function(e, t, n) {
    "use strict";
    void 0 === window.wpsEventHandler && (window.wpsEventHandler = {
        callback: function(e, t) {
            window.wpsBridgeEvent.fireEvent(e, t), window.wpsBridgeEvent.removeEvent(e)
        },
        callbackEncode: function(e, t) {
            var n = t;
            "string" == typeof t && (n = atob(t), n = decodeURIComponent(n)), window.wpsBridgeEvent.fireEvent(e, n), window.wpsBridgeEvent.removeEvent(e)
        }
    }), void 0 === window.wpsBridgeEvent && (window.wpsBridgeEvent = {
        _listeners: {},
        addEvent: function(e, t) {
            return void 0 === this._listeners[e] && (this._listeners[e] = []), "function" == typeof t && this._listeners[e].push(t), this
        },
        removeEvent: function(e) {
            this._listeners[e];
            return "string" == typeof e && delete this._listeners[e], this
        },
        existEvent: function(e) {
            var t = this._listeners[e];
            return t && t instanceof Array && t.length > 0 ? t.length : 0
        },
        fireEvent: function(e, t) {
            var n = this._listeners[e];
            if (n instanceof Array)
                for (var o = 0, i = n.length; o < i; o += 1)
                    if ("function" == typeof n[o]) {
                        var r = "string" == typeof t ? JSON.parse(t) : t;
                        n[o](r)
                    } return this
        }
    }), window.Invoker = function() {
        this.invokeMethod = "fromJSAsynCall", this.invoke = function(e, t) {
            var n = {
                method: e,
                callback: "",
                params: t
            };
            if (void 0 !== window.wpsQuery) return window.wpsQuery({
                request: this.invokeMethod + "('" + JSON.stringify(n) + "')",
                onSuccess: function() {},
                onFailure: function() {}
            }), this.invokeMethod + "('" + JSON.stringify(n) + "')";
            void 0 !== window.qwebkit && window.qwebkit.qwebkit_invoke(JSON.stringify(n))
        }
    }, e.exports.handleNative = {
        handleReq: function(e, t, n) {
            null == t && (t = {});
            var o = "";
            if ("function" == typeof n) {
                var i = (new Date).valueOf(),
                    r = encodeURIComponent(i + e + JSON.stringify(t));
                o = btoa(r);
                var s = window.wpsBridgeEvent.existEvent(o);
                s > 0 && (r = encodeURIComponent(i + s + e + JSON.stringify(t)), o = btoa(r)), window.wpsBridgeEvent.addEvent(o, n)
            }
            var a, p = {
                url: e,
                params: t,
                callBackName: o
            };
            switch (wpsSdkRegister.getPlatform()) {
                case WpsPlatformType.iOS:
                    var c = !1;
                    if (window.__wpsoffice_app_ver && (c = window.wpsVersionCmp(window.__wpsoffice_app_ver, "9.6.0") >= 0), !c || null != o && null != o && o.length > 0) window.webkit.messageHandlers.handleReq.postMessage(p);
                    else {
                        var l = JSON.stringify(p);
                        if (null != (a = prompt("handleReq:" + l, "")) && "string" == typeof a && a.length > 0) try {
                            a = JSON.parse(a)
                        } catch (e) {}
                    }
                    break;
                case WpsPlatformType.Android:
                    if (!window.wpsAndroidBridge || null != o && null != o && 0 != o.length) {
                        var u = JSON.stringify(p);
                        if (window.wpsAndroidBridge ? a = window.wpsAndroidBridge.invokeMethod(u) : window.splash && (a = window.splash.handleReq(u)), null != a && "string" == typeof a && a.length > 0) try {
                            a = JSON.parse(a)
                        } catch (e) {}
                    } else {
                        l = JSON.stringify(p);
                        if (null != (a = prompt("handleReq:" + l, "")) && "string" == typeof a && a.length > 0) try {
                            a = JSON.parse(a)
                        } catch (e) {}
                    }
                    break;
                case WpsPlatformType.PC:
                    (new Invoker).invoke("common.opensdk.call", p)
            }
            return a
        }
    }
}, function(e, t, n) {
    e.exports = n(2)
}, function(e, t, n) {
    "use strict";
    window.wpsS2i = function(e) {
        return e.split("").reduce(function(e, t) {
            var n = t.charCodeAt(0);
            return 48 <= n && n < 58 && e.push(n - 48), e
        }, []).reduce(function(e, t) {
            return 10 * e + t
        }, 0)
    }, window.wpsVersionCmp = function(e, t) {
        for (var n = e.split(".").map(function(e) {
                return wpsS2i(e)
            }), o = t.split(".").map(function(e) {
                return wpsS2i(e)
            }), i = n.length < o.length ? n.length : o.length, r = 0; r < i; r++) {
            if (n[r] < o[r]) return -1;
            if (n[r] > o[r]) return 1
        }
        if (n.length < o.length) return -1;
        if (n.length > o.length) return 1;
        var s = 32 | e.charCodeAt(e.length - 1),
            a = 32 | t.charCodeAt(t.length - 1);
        return s > a ? 1 : s < a ? -1 : 0
    }, void 0 === window.SDKVersion ? (window.SDKVersion = "1.3.0", window.wpsEventHandler && (window.wpsEventHandler = void 0), window.wpsBridgeEvent && (window.wpsBridgeEvent = void 0)) : window.wpsVersionCmp("1.3.0", window.SDKVersion) > 0 && (window.SDKVersion = "1.3.0", window.wpsEventHandler && (window.wpsEventHandler = void 0), window.wpsBridgeEvent && (window.wpsBridgeEvent = void 0));
    var o = n(3);
    window.wpsSdkRegister = new o.WpsSdkManager, window.wpsSdkRegister.registe();
    var i = n(4),
        r = n(5),
        s = n(6),
        a = n(7),
        p = n(8),
        c = [i.accountInstance, r.payInstance, s.utilsInstance, a.documentInstance, p.httpInstance];
    for (var l in void 0 === window.wps && (window.wps = {}), c) {
        var u = c[l];
        for (var d in u) window.wps[d] = u[d]
    }
    window.__wpsoffice_environment = "miniprogram";
    var f = new CustomEvent("WpsofficeSDKReady", {
        detail: {
            ready: !0
        }
    });
    document.dispatchEvent ? document.dispatchEvent(f) : document.fireEvent(f), wps.getAppVersion({
        complete: function(e) {
            window.__wpsoffice_app_ver = e.data.app_version, wps.enableOverwriteLocalStorage() && (void 0 === localStorage.constructor.prototype.wpsRemoveItem && (localStorage.constructor.prototype.wpsRemoveItem = localStorage.constructor.prototype.removeItem, localStorage.constructor.prototype.removeItem = function(e) {
                wps.removeStorage({
                    key: e
                }), this.wpsRemoveItem(e)
            }), void 0 === localStorage.constructor.prototype.wpsClear && (localStorage.constructor.prototype.wpsClear = localStorage.constructor.prototype.clear, localStorage.constructor.prototype.clear = function() {
                wps.clearStorage(), this.wpsClear()
            }), Object.defineProperty(window, "localStorage", {
                configurable: !0,
                enumerable: !0,
                value: new Proxy(localStorage, {
                    set: function(e, t, n) {
                        return wps.setStorage({
                            key: t,
                            data: n
                        }), !0
                    },
                    get: function(e, t) {
                        if ("setItem" !== t) {
                            if ("function" == typeof e[t]) return "getItem" === t ? function() {
                                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                                var i = wps.getStorage({
                                    key: n[0]
                                });
                                return void 0 === i && void 0 !== (i = e[n[0]]) && wps.setStorage({
                                    key: n[0],
                                    data: i
                                }), i
                            } : e[t].bind(e);
                            var n = wps.getStorage({
                                key: t
                            });
                            return void 0 === n && void 0 !== (n = e[t]) && wps.setStorage({
                                key: t,
                                data: n
                            }), n
                        }
                        return function() {
                            wps.setStorage({
                                key: arguments.length <= 0 ? void 0 : arguments[0],
                                data: arguments.length <= 1 ? void 0 : arguments[1]
                            })
                        }
                    }
                })
            }), void 0 === XMLHttpRequest.prototype.wpsjsOpen && (XMLHttpRequest.prototype.wpsjsOpen = XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.open = function(e, t, n, o, i) {
                var r = t;
                return -1 === r.indexOf("http://") && -1 === r.indexOf("https://") && (r = window.location.href), wps.collectUrl({
                    url: r,
                    complete: function(e) {}
                }), this.wpsjsOpen(e, t, n, o, i)
            }))
        }
    })
}, function(e, t, n) {
    "use strict";
    window.WpsPlatformType = {
        Unknow: -1,
        iOS: 0,
        Android: 1,
        PC: 2,
        iOSWeb: 3
    }, e.exports.WpsSdkManager = function() {
        this.registe = function() {
            var e = navigator.userAgent;
            e.indexOf("WpsMoffice") > -1 || e.indexOf("Android") > -1 || e.indexOf("Adr") > -1 ? this.platform = WpsPlatformType.Android : e.indexOf("wpsmofficeiosnote") > -1 || e.indexOf("wpsmofficeiospadnote") > -1 || e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? this.platform = WpsPlatformType.iOS : e.indexOf("Windows NT") > -1 && window.cefQuery ? this.platform = WpsPlatformType.PC : this.platform = WpsPlatformType.Unknow
        }, this.getPlatform = function() {
            return this.platform
        }
    }
}, function(e, t, n) {
    "use strict";
    var o = n(0),
        i = function(e, t) {
            var n = null,
                i = t;
            return t && t.complete && (n = t.complete, i = JSON.parse(JSON.stringify(t))), o.handleNative.handleReq("wpsoffice://account/" + e, i, n)
        };
    e.exports.accountInstance = {
        authorize: function(e) {
            i("authorize", {
                scope: e.scope,
                complete: function(t) {
                    t && t.data && void 0 !== t.data.status && (t.status = t.data.status), e.complete && e.complete(t)
                }
            })
        },
        getUserInfo: function(e) {
            document.getElementById("myP").innerHTML="HEY!",
            i("user_info", e)
        },
        isLogin: function(e) {
            var t = i("is_login", e);
            if (void 0 === e || void 0 === e.complete) return t.data.is_login
        },
        login: function(e) {
            window.wpsSdkRegister.getPlatform() === WpsPlatformType.PC ? (window.pcLoginCB || (window.pcLoginCB = function(t) {
                var n = t.indexOf("logined=true") > -1;
                e.complete({
                    data: {
                        is_login: n
                    }
                }), window.pcLoginCB = null
            }, (new Invoker).invoke("common.event.addEventListener", {
                eventName: "onloginchanged",
                callbackName: "pcLoginCB"
            })), (new Invoker).invoke("common.account.login", null)) : i("login", e)
        },
        logout: function(e) {
            i("logout", e)
        },
        isVip: function(e) {
            new Promise(function(e, t) {
                wps.isWpsVip({
                    complete: function(t) {
                        e({
                            is_wps_vip: t.data.is_wps_vip
                        })
                    }
                })
            }).then(function(e) {
                return new Promise(function(t, n) {
                    wps.isDocerVip({
                        complete: function(n) {
                            t({
                                is_wps_vip: e.is_wps_vip,
                                is_docer_vip: n.data.is_docer_vip
                            })
                        }
                    })
                })
            }).then(function(t) {
                return new Promise(function(n, o) {
                    wps.isSuperVip({
                        complete: function(o) {
                            n(o), e.complete({
                                data: {
                                    is_wps_vip: t.is_wps_vip,
                                    is_docer_vip: t.is_docer_vip,
                                    is_super_vip: o.data.is_super_vip
                                }
                            })
                        }
                    })
                })
            })
        },
        isWpsVip: function(e) {
            var t = null;
            e && e.complete && (t = {
                complete: function(t) {
                    t && t.data && void 0 !== t.data.is_wps_vip ? t.isWpsVip = t.data.is_wps_vip : t && void 0 !== t.isWpsVip && (t.data = {
                        is_wps_vip: t.isWpsVip
                    }), e.complete(t)
                }
            });
            var n = i("is_wps_vip", t);
            if (null != n) {
                if (n && n.data && void 0 !== n.data.is_wps_vip) return n.data.is_wps_vip;
                if (n && void 0 !== n.isWpsVip) return n.isWpsVip
            }
        },
        isDocerVip: function(e) {
            var t = null;
            e && e.complete && (t = {
                complete: function(t) {
                    t && t.data && void 0 !== t.data.is_docer_vip ? t.isDocerVip = t.data.is_docer_vip : t && void 0 !== t.isDocerVip && (t.data = {
                        is_docer_vip: t.isDocerVip
                    }), e.complete(t)
                }
            });
            var n = i("is_docer_vip", t);
            if (null != n) {
                if (n && n.data && void 0 !== n.data.is_docer_vip) return n.data.is_docer_vip;
                if (n && void 0 !== n.isDocerVip) return n.isDocerVip
            }
        },
        isSuperVip: function(e) {
            var t = null;
            e && e.complete && (t = {
                complete: function(t) {
                    t && t.data && void 0 !== t.data.is_super_vip ? t.isSuperVip = t.data.is_super_vip : t && void 0 !== t.isSuperVip && (t.data = {
                        is_super_vip: t.isSuperVip
                    }), e.complete(t)
                }
            });
            var n = i("is_super_vip", t);
            if (null != n) {
                if (n && n.data && void 0 !== n.data.is_super_vip) return n.data.is_super_vip;
                if (n && void 0 !== n.isSuperVip) return n.isSuperVip
            }
        },
        isWpsVipAutoRenew: function(e) {
            i("is_wps_renew", e)
        },
        isDocerVipAutoRenew: function(e) {
            i("is_docer_renew", e)
        },
        isSuperVipAutoRenew: function(e) {
            i("is_super_renew", e)
        },
        getTargetUserInfo: function(e) {
            i("target_userinfo", e)
        },
        loginToTarget: function(e) {
            i("login_to_target", e)
        },
        channelLoginNotify: function(e) {
            i("channel_notify", e)
        }
    }
}, function(e, t, n) {
    "use strict";
    var o = n(0),
        i = function(e, t) {
            var n = null,
                i = t;
            return t && t.complete && (n = t.complete, i = JSON.parse(JSON.stringify(t))), o.handleNative.handleReq("wpsoffice://pay/" + e, i, n)
        },
        r = {
            chuangkit: "android_docer_chuangkit",
            daxuedaan: "android_docervip_daxuedaan"
        };
    e.exports.payInstance = {
        selectPayway: function(e) {
            i("select_payway", {
                title: e.title,
                desc: e.desc,
                complete: e.complete
            })
        },
        buyPrivilege: function(e) {
            i("purchase", {
                order_id: e.orderId,
                pic_url: e.picUrl,
                name: e.name,
                desc: e.desc,
                complete: e.complete
            })
        },
        prepay: function(e) {
            i("prepay", {
                order_id: e.orderId,
                title: e.title,
                desc: e.desc,
                complete: e.complete
            })
        },
        openWpsVip: function(e) {
            i("open_wpsvip", e)
        },
        openDocerVip: function(e) {
            switch (window.wpsSdkRegister.getPlatform()) {
                case WpsPlatformType.Android:
                    window.appJs_purchasingMemberCallback = function() {
                        e.complete({
                            data: {
                                status: 0,
                                expired_timestamp: 0,
                                auto_renew: !1
                            }
                        }), window.appJs_purchasingMemberCallback = null
                    }, wps.isLogin({
                        complete: function(t) {
                            null != t && null != t.data && !0 === t.data.is_login && wps.isDocerVip({
                                complete: function(t) {
                                    var n = null != t && null != t.data && !0 === t.data.is_docer_vip,
                                        o = "android_docervip_idphoto";
                                    null != e.source && null != e.source && null != r[e.source] && null != r[e.source] && (o = r[e.source]);
                                    var i = {
                                            pay_source: o,
                                            pay_memberid: n ? "40" : "12",
                                            pay_unchanged: !0,
                                            pay_position: e.position
                                        },
                                        s = JSON.stringify(i);
                                    window.splash.JSStartPurchasingMemberPopupWindow(s)
                                }
                            })
                        }
                    });
                    break;
                case WpsPlatformType.iOS:
                default:
                    i("open_docer", e)
            }
        },
        openSuperVip: function(e) {
            i("open_supervip", e)
        },
        buyWpsVip: function(e) {
            i("open_wpsvip", e)
        },
        buyDocerVip: function(e) {
            i("open_docer", e)
        },
        buySuperVip: function(e) {
            i("open_supervip", e)
        },
        buyVip: function(e) {
            var t = e.complete;
            e.complete = function(e) {
                if (e && e.memberid) {
                    switch (e.memberid) {
                        case 12:
                            e.vipType = "docerVip";
                            break;
                        case 20:
                            e.vipType = "wpsVip";
                            break;
                        case 40:
                            e.vipType = "superVip";
                            break;
                        default:
                            e.vipType = ""
                    }
                    delete e.memberid
                }
                t && t(e)
            }, i("common_pay", e)
        }
    }
}, function(e, t, n) {
    "use strict";
    var o = n(0),
        i = function(e, t) {
            var n = null,
                i = t;
            return t && t.complete && (n = t.complete, i = JSON.parse(JSON.stringify(t))), o.handleNative.handleReq("wpsoffice://utils/" + e, i, n)
        };
    e.exports.utilsInstance = {
        getSystemInfo: function(e) {
            var t = {
                    SDKVersion: window.SDKVersion
                },
                n = wps.getPlatform();
            if (n === WpsPlatformType.iOS || n === WpsPlatformType.iOSWeb)
                if (e && e.complete) i("deviceinfo", {
                    complete: function(n) {
                        t.version = n.data.apkVersion, t.platform = "iOS", t.model = n.data.model, t.deviceKey = n.data.deviceId, t.systemVersion = n.data.os, e.complete(t)
                    }
                });
                else {
                    var o = i("deviceinfo", null);
                    t.version = o.apkVersion, t.platform = "iOS", t.model = o.model, t.deviceKey = o.deviceId, t.systemVersion = o.os
                }
            else if (n === WpsPlatformType.Android) {
                t.platform = "Android";
                var r = window.splash.jsGetDeviceInfo(),
                    s = JSON.parse(r);
                t.channel = s.channel, t.version = s.app_version, t.packageName = s.package_name, t.deviceId = s.device_id, t.deviceKey = s.uid, t.systemVersion = s.osversion_int, e && e.complete && e.complete(t)
            } else n === WpsPlatformType.PC && (t.platform = "PC", e && e.complete && e.complete(t));
            return t
        },
        getPlatform: function() {
            var e = navigator.userAgent;
            return e.indexOf("WpsMoffice") > -1 ? WpsPlatformType.Android : e.indexOf("wpsmofficeiosnote") > -1 || e.indexOf("wpsmofficeiospadnote") > -1 ? WpsPlatformType.iOS : e.indexOf("Windows NT") > -1 && window.cefQuery ? WpsPlatformType.PC : e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit && window.webkit.messageHandlers ? WpsPlatformType.iOSWeb : WpsPlatformType.Unknow
        },
        savePhotos: function(e) {
            i("save_photos", {
                fileType: e.fileType,
                main_photo_url: e.mainPhotoUrl,
                main_photo_name: e.mainPhotoName,
                complete: e.complete
            })
        },
        sharePicture: function(e) {
            i("share_picture", {
                picture_url: e.imageUrl,
                complete: e.complete
            })
        },
        getAppVersion: function(e) {
            i("app_version", e)
        },
        showHud: function(e) {
            i("open_progress_hud", e)
        },
        hideHud: function() {
            i("close_progress_hud", null)
        },
        showToast: function(e) {
            i("show_toast", e)
        },
        dataCollect: function(e, t) {
            i("data_collect", "string" == typeof e && t ? {
                event: e,
                attributes: t
            } : e)
        },
        getConfig: function(e) {
            i("get_config", {
                config_name: e.configName,
                complete: e.complete
            })
        },
        openProgram: function(e) {
            i("open_miniprogram", e)
        },
        showShareMenu: function(e) {
            var t = wps.getPlatform();
            t === WpsPlatformType.iOS || t === WpsPlatformType.iOSWeb ? i("share", e) : i("show_share_menu", e)
        },
        singleShare: function(e) {
            i("single_share", e)
        },
        isSupportShare: function(e) {
            var t = i("is_support_share", e);
            if (t) return t.isSupport
        },
        scan: function() {
            var e = wps.getPlatform();
            e === WpsPlatformType.iOS || e === WpsPlatformType.iOSWeb ? o.handleNative.handleReq("wpsoffice://template/open_tool", {
                type: 3
            }, null) : e === WpsPlatformType.Android && i("scan_qrcode", null)
        },
        switchDocumentTab: function(e) {
            var t = wps.getPlatform();
            t === WpsPlatformType.iOS || t === WpsPlatformType.iOSWeb ? i("company_manage_my_group", e) : t === WpsPlatformType.Android && (window.location.href = "wpsoffice://wps.cn/root?key_switch_tab=document")
        },
        closeWeb: function(e) {
            i("close_web", e)
        },
        saveImageToPhotosAlbum: function(e) {
            i("save_image_2_album", e)
        },
        navigateTo: function(e) {
            i("push_web", e)
        },
        saveFile: function(e) {
            i("save_file", e)
        },
        navigateToMiniProgram: function(e) {
            i("open_miniprogram", e)
        },
        putExtraData: function(e) {
            i("put_extra_data", e)
        },
        chooseImage: function(e) {
            i("choose_image", e)
        },
        setStorage: function(e) {
            i("set_storage", e)
        },
        getStorage: function(e) {
            return i("get_storage", e).data
        },
        removeStorage: function(e) {
            i("remove_storage", e)
        },
        clearStorage: function(e) {
            i("clear_storage", e)
        },
        collectUrl: function(e) {
            i("collect_url", e)
        },
        enableOverwriteLocalStorage: function(e) {
            var t = i("overwrite_localstorage", e);
            if (t && void 0 !== t.enable) return t.enable
        }
    }
}, function(e, t, n) {
    "use strict";
    var o = n(0),
        i = function(e, t) {
            var n = null,
                i = t;
            return t && t.complete && (n = t.complete, i = JSON.parse(JSON.stringify(t))), o.handleNative.handleReq("wpsoffice://document/" + e, i, n)
        };
    e.exports.documentInstance = {
        selectFiles: function(e) {
            i("select_files", {
                title: e.title,
                file_types: e.fileTypes,
                max_count: e.maxCount,
                complete: e.complete
            })
        },
        getImageBase64: function(e) {
            i("get_imagebase64", e)
        },
        renameDocument: function(e) {
            i("rename_file", e)
        }
    }
}, function(e, t, n) {
    "use strict";
    var o = n(0);
    e.exports.httpInstance = {
        httpRequest: function(e) {
            ! function(e, t) {
                var n = null,
                    i = t;
                t && t.complete && (n = t.complete, i = JSON.parse(JSON.stringify(t))), o.handleNative.handleReq("wpsoffice://http/" + e, i, n)
            }("request", {
                method: e.method,
                header: e.header,
                url: e.url,
                params: e.params,
                complete: e.complete
            })
        }
    }
}]);