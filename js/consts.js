const timeout = 3000;

String.prototype.format = function () {
    let args = arguments;
    return this.replace(/{(\d+)}/g, function(m,n){
        return args[n] ? args[n] : m;
    });
};