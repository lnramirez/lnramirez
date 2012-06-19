function (key, values) {
    var latest = values[0];
    for (var i=0;i<values.length;i++) {
        if (latest.publishDate < values[i].publishDate) {
            latest = values[i];
        }
    }
    return latest;
}
