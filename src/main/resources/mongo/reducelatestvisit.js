function (key, values) {
    var latest = values[0];
    for (var i=0;i<values.length;i++) {
        if (latest.date < values[i].date) {
            latest = values[i];
        }
    }
    return latest;
}
