function (key, values) {
    var latest = values[0];
    values.forEach(function (value) {if (latest.publishDate > value.publishDate) {latest = value;}});
    return latest;
}
