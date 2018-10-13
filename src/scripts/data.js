
var preProcessData = require('./preprocessData').preProcessData;
function getData() {
    var data = preProcessData(document.getElementById('log').value || '');
    return data
}

module.exports = {
    getData
}