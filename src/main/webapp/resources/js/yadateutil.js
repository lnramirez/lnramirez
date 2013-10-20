function toUTCAndFormatted(t,locale,pattern) {
    var datePattern_ = arguments.length == 3 ? pattern : 'yyyy-MM-dd';
    var fDate = '';
    var d = new Date(t);
    var utcDate = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(),  d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds());
    fDate = locale.format(utcDate, {selector:'date', datePattern:datePattern_});
    return fDate;
}