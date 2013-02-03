function toUTCAndFormatted(t,pattern) {
    var datePattern_ = arguments.length == 2 ? pattern : 'yyyy-MM-dd';
    var fDate = '';
    require(["dojo/ready","dojo/date/locale"],function(ready,locale) {
        var d = new Date(t);
        var utcDate = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(),  d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds());        
        fDate = locale.format(utcDate, {selector:'date', datePattern:datePattern_});
    });
    return fDate;
}