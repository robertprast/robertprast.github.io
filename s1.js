console.log("Script loaded successfully ");
//HELPER FUNCTIONS
var printBacktrace = function () {
    Java.perform(function () {
        var JLog = Java.use('android.util.Log'), JException = Java.use('java.lang.Exception');
        // getting stacktrace by throwing an exception
        console.warn(JLog.getStackTraceString(JException.$new()));
    });
};
//Inspect Java class
var inspectClass = function (obj) {
    var Class = Java.use("java.lang.Class");
    var obj_class = Java.cast(obj.getClass(), Class);
    var fields = obj_class.getDeclaredFields();
    var methods = obj_class.getMethods();
    console.log("Inspecting " + obj.getClass().toString());
    console.log("\tFields:");
    for (var i in fields)
        console.log("\t\t" + fields[i].toString());
    console.log("\tMethods:");
    for (var i in methods)
        console.log("\t\t" + methods[i].toString());
}




Java.perform(function x() { //Silently fails without the sleep from the python code
    console.log("Inside java perform function");

    // var decodeClass = Java.use("aamy");
    // var decodeInstance = decodeClass.$new();
    // var decodeString = "eyJ3cHNfc2lkIjoiMDk3YjE3ZDAwNGU2M2Y4Yzg3ZmMzOTZhMDk5MmYzOTc3NWQxZjA4YjAwMDg2NmVjY2JAYXBzZTEiLCJ1c2VyaWQiOiIxNDA5NjMwMTkiLCJyZWdpb24iOiJhcHNlMSIsImF1dGhrZXlwYWlyIjp7ImFjY2Vzc19pZCI6IjM5MTY2OWQ3ZThiYzQxOTk4MDIwZjdhOTJhMGFkNzJiMDAwODY2ZWNjYiIsInNlY3JldF9rZXkiOiJhZGMzOTA5MzAxNzEwMzIyYjM0ZGMwOWUyMmJlOGVjMDIyMDk3NWZmIn19"
    // console.log(JSON.stringify(decodeInstance.decode(decodeString, 0)))

    // var apiHost = Java.use("jil");
    // apiHost.approvedUriHost.implementation = function () {
    //     console.log("IN THE FUNC FOR APPROVAL")
    //     return this.approvedUriHost();
    // };

    // var cls = Java.use("android.webkit.WebView");
    // console.log("class start:------------------");

    // cls.loadUrl.overload("java.lang.String").implementation = function (param) {
    //     console.log("loadUrl hooked " + param);
    // };

    // cls.loadUrl.overload("java.lang.String", "java.util.Map").implementation = function (p1, p2) {
    //     console.log("loadUrl2 hooked" + p1 + p2);
    // };

    var WebView = Java.use("android.webkit.WebView");
    WebView.loadUrl.overload("java.lang.String").implementation = function (s) {
        console.log("in load URL")
        console.log("URL: " + s.toString())
        // if(s=="javascript:window.wpsAndroidBridge.initJsSDK()"){
        //     return;
        // }
        this.loadUrl.overload("java.lang.String").call(this, s);

    };

    var hgt = Java.use("hgt");
    hgt.a.overload('android.content.Context', 'android.webkit.WebView', 'java.lang.String').implementation = function (a, b, s) {
        console.log("in HGT")
        console.log(JSON.stringify(a))
        console.log(JSON.stringify(b))
        console.log(JSON.stringify(s))
        console.log(this.a(a, b, s))
        return this.a(a, b, s)
    };

    var hgt = Java.use("hgt");
    hgt.a.overload('android.content.Context', 'android.webkit.WebView', 'hgu').implementation = function (a, b, s) {
        console.log("in HGT SECOND EDDITION")
        console.log(JSON.stringify(a))
        console.log(JSON.stringify(b))
        console.log(s.url)
        console.log(this.a(a, b, s))
        return this.a(a, b, s)
    };

    var URI = Java.use("android.net.Uri");
    // var b = URI.$new();
    // console.log("!!!!!!!!!!!!!!!!!")
    // console.log(b.parse("https://bing.com/eras"))
    URI.parse.implementation = function (s) {
        console.log("URI PARSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        console.log(s)
        return this.parse(s)
    }
    var hgt = Java.use("hgt");
    hgt.c.overload('android.webkit.WebView', 'java.lang.String').implementation = function (a, b) {
        console.log("in C")
        console.log(JSON.stringify(b))
        console.log("RETURN VAL OF THIS FUNC")
        console.log(this.c(a, b))

        return "a"
    };

    // var str = Java.use('java.lang.String'), objectClass = 'java.lang.Object';
    // str.equals.overload(objectClass).implementation = function(obj) {
    //     var response = str.equals.overload(objectClass).call(this, obj);
    //     if (obj) {

    //             console.log(str.toString.call(this) + ' == ' + obj.toString() + ' ? ' + response);
    //     }
    //     return response;
    // }

    var dgl = Java.use("dgl");
    dgl.jP.overload('java.lang.String').implementation = function (a) {
        console.log("in DGl")
        console.log(a)
        console.log(this.jP(a))
        return this.jP(a)
    };

    var hgs = Java.use("hgs");
    hgs.a.implementation = function (a, b, c, d) {
        console.log("in HGS")
        console.log(b)
        return this.a(a, b, c, d)
        // console.log(this.jP(a))
    };



    var jil = Java.use("jil")
    jil.openFile.implementation = function (a, b, c) {
        // printBacktrace()
        console.log("IN OPEN FILE!")
        console.log(a)
        console.log(JSON.stringify(b))
        console.log(c)
        // console.log(this.openFile(a,b,c))
        return this.openFile(a, b, c)
    }


    var err = Java.use("err")
    err.a.overload('android.content.Context', 'java.lang.String', 'boolean', 'eru', 'boolean', 'android.os.Bundle').implementation = function (a, b, c, d, e, f) {
        console.log("err")
        console.log(b)
        return (this.a(a, b, c, d, e, f))
    }
    var cor = Java.use("cor")
    cor.auf.overload().implementation = function () {
        console.log("cor return!!!!!!!!!!!!!!!!")
        console.log(this.auf())
    }

    var str = ""
    err.a.overload('android.content.Context', 'java.lang.String', 'boolean', 'boolean', 'eru', 'boolean', 'boolean', 'boolean', 'android.graphics.RectF', 'boolean', 'java.lang.String', 'android.os.Bundle', 'boolean', 'int', 'java.lang.String', 'gkm').implementation = function (a, b, c, d, e, f, g, h, j, k, l, m, n, o, p, q) {
        console.log("err333")
        console.log(b)
        // console.log(this.a(a,b,c,d,e,f,g,h,j,k,l,m,n,o,p,q))
        return this.a(a, b, c, d, e, f, g, h, j, k, l, m, n, o, p, q)
    }
    var cqw = Java.use("cqw")
    cqw.a.overload('android.content.Context', "java.io.File").implementation = function (a, b) {
        console.log("IN CQW: " + b)
        console.log("RETURN_>" + JSON.stringify(this.a(a, b)))
        return b
        return this.a(a, b)
    }

    var hbc = Java.use("hbc")
    var hbcI = hbc.$new()
    console.log("hbc return")
    console.log(hbc.AF("/storage/emulated/0/Android/data/cn.wps.moffice_eng/.cache/KingsoftOffice/.temp/5a105e8b9d40e1329780d62ea2265d8a.txt"))

    jil.downloadKCFile.implementation = function (a) {
        console.log("in downloadCKFile")
        return this.downloadKCFile(a)
    }




    Java.choose("cn.wps.moffice.main.push.common.JSCustomInvoke", {
        onMatch: function (instance) {
            console.log("HEY")
            // console.log(JSON.stringify(instance.jsOpenFile("test1","{}","/../../../../../../../../../../../../../../../../../data/data/cn.wps.moffice_eng/shared_prefs/test.txt")))

            console.log(JSON.stringify(instance.kitOutUserAndGoLogin()))
            // console.log(JSON.stringify(instance.httpGet("https","bing.com",0)));
            // console.log(JSON.stringify(instance.httpGet("https","bing.com",1)));
            // console.log(JSON.stringify(instance.httpGet("https://www.google.com","{}",0)));
            // console.log(JSON.stringify(instance.handleReq('{"url":"https://wps.com","callBackName":"a","params":"b"}')));

        },
        onComplete: function () { }
    });

    // var WebView2 = Java.use("pva");
    // WebView2.a.implementation = function (a,b,c) {
    //     console.log("in JIL")
    //     console.log("URL: " + a.toString())
    //     // if(s=="javascript:window.wpsAndroidBridge.initJsSDK()"){
    //     //     return;
    //     // }
    //     this.loadUrl.overload("java.lang.String").call(this, s);
    // };


    // var dgw = Java.use("dgw");
    // dgw.jR.implementation = function (x) {
    //     console.log("IN DGW with str value of " + x)
    //     console.log(x)
    //     console.log(this.jR(x))
    //     return this.jR(x)
    //     // x = "https://robertprast.github.io\\@wps.com"
    //     // console.log(x)
    //     // console.log(this.jR(x))
    //     // x = "https://robertprast.github.io%5C%5C@wps.com"
    //     // console.log(x)
    //     // console.log(this.jR(x))
    //     // x = "sdfsdfwps.com"
    //     // console.log(this.jR(x))
    // };


    // var gzg = Java.use("gzg");
    // gzg.J.implementation = function (x, y) {
    //     //console.log("IN gzg with int value of " + x + " and str val of " + y)
    //     // console.log(JSON.stringify(this.J(x,y)))
    // };

    // var OnlineParamProtoBuf = Java.use("afbs$a");
    // console.log(OnlineParamProtoBuf);
    // OnlineParamProtoBuf.a.overload("T t, byte[] bArr").implementation = function (y,x) {
    //     console.log("IN OnlineParamtools with int value of "+x)
    // };


    // var js = Java.use("android.webkit.WebView");
    // js.evaluateJavascript.overload("java.lang.String").implementation = function (s,x) {
    //     console.log("evaluateJavascript: " + s.toString())
    //     return this.evaluateJavascript(s,x);
    // };

    var invokeMethodSyncF = Java.use("cn.wps.moffice.common.bridges.webview.JSBridgeImpl")
    invokeMethodSyncF.invokeMethodSync.implementation = function (x) {
        // printBacktrace()
        // console.log("IN METHODSYNC WITH X" + x);
        // console.log("OUTPUT " + JSON.stringify(this.invokeMethodSync(x)))
        return this.invokeMethodSync(x)
    }


    // Java.choose("cn.wps.moffice.common.bridges.webview.JSBridgeImpl", {
    //     onMatch: function (instance) { //This function will be called for every instance found by frida
    //         console.log("Found instance: " + instance);
    //         inspectClass(instance)
    //     },
    //     onComplete: function () { }
    // });




    // var initF = Java.use("cn.wps.moffice.common.bridges.webview.JSBridgeImpl")
    // initF.initJsSDK.implementation = function () {
    //     console.log("HERE IN INIT!")
    //     return this.initJsSDK();
    // }
    // var hgj = Java.use("hgj")
    // hgj.a.implementation = function (x, y, z) {
    //     console.log("hgj x: " + JSON.stringify(x))
    //     console.log("hgj y: " + JSON.stringify(y))
    //     console.log("hgj z: " + JSON.stringify(z))
    // }
    // ['java.lang.StringBuilder', 'java.lang.StringBuffer'].forEach(function (clazz, i) {
    //     console.log('[?] ' + i + ' = ' + clazz);
    //     var func = 'toString';
    //     Java.use(clazz)[func].implementation = function () {
    //         var ret = this[func]();
    //         if (ret.indexOf('') != -1) {
    //             // print stacktrace if return value contains specific string
    //             Java.perform(function () {
    //                 var jAndroidLog = Java.use("android.util.Log"), jException = Java.use("java.lang.Exception");
    //                 console.log(jAndroidLog.getStackTraceString(jException.$new()));
    //             });
    //         }
    //         console.log('[' + i + '] ' + ret);
    //         return ret;
    //     }
    // });




});







