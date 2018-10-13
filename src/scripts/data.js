
var preProcessData = require('./preprocessData').preProcessData;
function getData() {
    var data = preProcessData(document.getElementById('log').value || `2018-10-13 22:55:37.478392+0800 ReactNativePlayground[37480:23313426] [] nw_connection_get_connected_socket 34 Connection has no connected handler
    2018-10-13 22:55:37.479408+0800 ReactNativePlayground[37480:23313426] TCP Conn 0x600000168280 Failed : error 0:61 [61]
    2018-10-13 22:55:37.985042+0800 ReactNativePlayground[37480:23312851] ------------------bridge开始初始化 [RCTBridge initWithDelegate]------------------------
    2018-10-13 22:55:37.985 [info][tid:main][RCTCxxBridge.mm:193] Initializing <RCTCxxBridge: 0x7f85b5d015c0> (parent: <RCTBridge: 0x600000168400>, executor: RCTWebSocketExecutor)
    2018-10-13 22:55:37.986208+0800 ReactNativePlayground[37480:23312851] Initializing <RCTCxxBridge: 0x7f85b5d015c0> (parent: <RCTBridge: 0x600000168400>, executor: RCTWebSocketExecutor)
    2018-10-13 22:55:37.986 [info][tid:main] Initializing <RCTCxxBridge: 0x7f85b5d015c0> (parent: <RCTBridge: 0x600000168400>, executor: RCTWebSocketExecutor)
    2018-10-13 22:55:37.987250+0800 ReactNativePlayground[37480:23312851] Initializing <RCTCxxBridge: 0x7f85b5d015c0> (parent: <RCTBridge: 0x600000168400>, executor: RCTWebSocketExecutor)
    2018-10-13 22:55:37.987991+0800 ReactNativePlayground[37480:23312851] ------------------bridge创建完成 [bridge setUp]------------------------
    2018-10-13 22:55:37.988759+0800 ReactNativePlayground[37480:23312851] ------------------batchedbridge开始运行 [batchedbridge start]------------------------
    2018-10-13 22:55:37.990610+0800 ReactNativePlayground[37480:23312851] ------------------开始创建js线程------------------------
    2018-10-13 22:55:37.991387+0800 ReactNativePlayground[37480:23312851] ------------------开始运行js线程------------------------
    2018-10-13 22:55:37.993811+0800 ReactNativePlayground[37480:23312851] ------------------开始载入js代码 [bridge loadSource]------------------------
    2018-10-13 22:55:37.995363+0800 ReactNativePlayground[37480:23312989] TIC Read Status [7:0x0]: 1:57
    2018-10-13 22:55:37.997157+0800 ReactNativePlayground[37480:23312851] ------------------开始同步加载jsbundle [RCTJavaScriptLoader attemptSynchronousLoadOfBundleAtURL]------------------------
    2018-10-13 22:55:37.997325+0800 ReactNativePlayground[37480:23312989] TIC Read Status [7:0x0]: 1:57
    2018-10-13 22:55:37.997554+0800 ReactNativePlayground[37480:23312851] ------------------开始异步加载jsbundle [RCTJavaScriptLoader attemptSynchronousLoadOfBundleAtURL]------------------------
    2018-10-13 22:55:38.379846+0800 ReactNativePlayground[37480:23312987] ------------------异步加载jsbundle成功 [RCTJavaScriptLoader attemptSynchronousLoadOfBundleAtURL]------------------------
    2018-10-13 22:55:38.380032+0800 ReactNativePlayground[37480:23313587] ------------------开始执行js [bridge executeSourceCode]------------------------
    2018-10-13 22:55:39.501336+0800 ReactNativePlayground[37480:23313584] ------------------执行js完毕 [bridge executeSourceCode]------------------------
    2018-10-13 22:55:39.501645+0800 ReactNativePlayground[37480:23312851] bundleURL### = file:///Users/shaoyudong/Library/Developer/CoreSimulator/Devices/B38BFF0A-7FB9-4D07-B598-7BF8544747A3/data/Containers/Bundle/Application/49479E8F-DEAE-49C8-A5B1-25F4E8FDC3B3/ReactNativePlayground.app/biz.qrn_demo.ios.bundle`);
    return data
}

module.exports = {
    getData
}