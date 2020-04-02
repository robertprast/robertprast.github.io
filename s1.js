console.log("Script loaded successfully ");
Java.perform(function x() { //Silently fails without the sleep from the python code
    console.log("Inside java perform function");

    var apiHost = Java.use("jil");
    apiHost.approvedUriHost.implementation = function () {
        console.log("IN THE FUNC FOR APPROVAL")
        return this.approvedUriHost();
    };

    var dgw = Java.use("dgw");
    dgw.jR.implementation = function (x) {
        console.log("IN DGW with str value of "+x)
        x="https://robertprast.github.io\\@wps.com"
        console.log(this.jR(x))
        x="https://robertprast.github.io%5C%5C@wps.com"
        console.log(this.jR(x))
        console.log(this.jR(x))
        x="sdfsdfwps.com"
        console.log(this.jR(x))
    };


    var gzg = Java.use("gzg");
    gzg.J.implementation = function (x,y) {
        console.log("IN gzg with int value of "+x+" and str val of "+y)
        // console.log(JSON.stringify(this.J(x,y)))
    };

    console.log("HEY WHATS UP!")
    var OnlineParamProtoBuf = Java.use("afbs$a");
    console.log(OnlineParamProtoBuf);
    OnlineParamProtoBuf.a.overload("T t, byte[] bArr").implementation = function (y,x) {
        console.log("IN OnlineParamtools with int value of "+x)
    };
});

