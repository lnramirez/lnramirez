function toUTCAndFormatted(t,pattern) {
    var datePattern_ = arguments.length == 2 ? pattern : 'yyyy-MM-dd';
    var fDate = '';
    require(["dojo/date/locale"],function(locale) {
        var d = new Date(t);
        var utcDate = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(),  d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds());        
        fDate = dojo.date.locale.format(utcDate, {selector:'date', datePattern:datePattern_});
    });
    return fDate;
}