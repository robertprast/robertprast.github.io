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
var inspectClass = function(obj) {
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

    var apiHost = Java.use("jil");
    apiHost.approvedUriHost.implementation = function () {
        console.log("IN THE FUNC FOR APPROVAL")
        return this.approvedUriHost();
    };

    var dgw = Java.use("dgw");
    dgw.jR.implementation = function (x) {
        console.log("IN DGW with str value of " + x)
        console.log(x)
        console.log(this.jR(x))
        return this.jR(x)
        // x = "https://robertprast.github.io\\@wps.com"
        // console.log(x)
        // console.log(this.jR(x))
        // x = "https://robertprast.github.io%5C%5C@wps.com"
        // console.log(x)
        // console.log(this.jR(x))
        // x = "sdfsdfwps.com"
        // console.log(this.jR(x))
    };


    var gzg = Java.use("gzg");
    gzg.J.implementation = function (x, y) {
        //console.log("IN gzg with int value of " + x + " and str val of " + y)
        // console.log(JSON.stringify(this.J(x,y)))
    };

    console.log("HEY WHATS UP!")
    // var OnlineParamProtoBuf = Java.use("afbs$a");
    // console.log(OnlineParamProtoBuf);
    // OnlineParamProtoBuf.a.overload("T t, byte[] bArr").implementation = function (y,x) {
    //     console.log("IN OnlineParamtools with int value of "+x)
    // };


    var WebView = Java.use("android.webkit.WebView");
    WebView.loadUrl.overload("java.lang.String").implementation = function (s) {
        console.log("URL: " + s.toString())
        this.loadUrl.overload("java.lang.String").call(this, s);
    };

    // var js = Java.use("android.webkit.WebView");
    // js.evaluateJavascript.overload("java.lang.String").implementation = function (s,x) {
    //     console.log("evaluateJavascript: " + s.toString())
    //     return this.evaluateJavascript(s,x);
    // };

    var invokeMethodSyncF = Java.use("cn.wps.moffice.common.bridges.webview.JSBridgeImpl")
    invokeMethodSyncF.invokeMethodSync.implementation = function (x) {
        printBacktrace()
        console.log("IN METHODSYNC WITH X" + x);
        console.log("OUTPUT " + JSON.stringify(this.invokeMethodSync(x)))
        return this.invokeMethodSync(x)
    }


    Java.choose("cn.wps.moffice.common.bridges.webview.JSBridgeImpl", {
        onMatch: function (instance) { //This function will be called for every instance found by frida
            console.log("Found instance: " + instance);
            inspectClass(instance)
        },
        onComplete: function () { }
    });
    



    var initF = Java.use("cn.wps.moffice.common.bridges.webview.JSBridgeImpl")
    initF.initJsSDK.implementation = function () {
        console.log("HERE IN INIT!")
        return this.initJsSDK();
    }
    var hgj = Java.use("hgj")
    hgj.a.implementation = function (x, y, z) {
        console.log("hgj x: " + JSON.stringify(x))
        console.log("hgj y: " + JSON.stringify(y))
        console.log("hgj z: " + JSON.stringify(z))
    }
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



