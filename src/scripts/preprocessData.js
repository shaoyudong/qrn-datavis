function preProcessData(data) {
    var newData = [];
    data = data.split('\n').filter(l => (
        l.match(/[\-]+$/)
    ));
    for (var i=0; i<data.length; i++) {
        var reg = data[i].match(/\s*(\d{4}-.*?)\+\d{4} ReactNative.*?[\-]+(.*?)[\-]+$/);
        newData.push({
            timestamp: +new Date(reg[1]),
            name: reg[2]
        });
    }
    var result = [];
    for (var i=1; i<newData.length; i++) {
        result.push({
            name: `${newData[i-1].name} --> ${newData[i].name}`,
            value: [
                i - 1,
                newData[i-1].timestamp,
                newData[i].timestamp,
                newData[i].timestamp - newData[i-1].timestamp
            ],
            itemStyle: {
                normal: {
                    color: getRandomColor()
                }
            }
        })
    }
    
    function getRandomColor() {
        var color = "#";
        for (var i=0; i<6; i++) {
            color += '456789AB'[Math.floor(Math.random()*8)];
        }
        return color;
    }
    return result;
}

module.exports = {
    preProcessData
};