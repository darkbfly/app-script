/*

安卓软件名称:悟空浏览器

项目注册地址:各大应用商城或者百度

邀请码:J6014279

声明：自行绑定支付宝,一个支付宝好像快意绑定多个账号,应该会有黑号情况,请温柔点定时
默认提现0.2,提现3快不知道数据
脚本默认跑作者邀请码,如果不想就自行去绑定邀请码后在跑脚本

==========================================
每账号数据由3部分组成,分别是

device_id 这个是设备id
x-tt-token 这个是用户token
sessionid 这个是用户一下对话id

寻找方法:手动抓包 过滤域名(服务器Host) api5-normal-hl.toutiaoapi.com 链接

==========================================
填写数据办法

模板如下:

module.exports = {"code":200,
"variable_data":{
"kyin":[
"这里是之前抖音的,自己修改这部分"
],
"wkllq":[{
    "device_id":"这个数据是在连接上找 device_id值",
    "x-tt-token":"这个数据是在请求头上找 x-tt-token 值",
    "sessionid":"这个数据是在请求头是 cookie 上找 sessionid值"},{
    "device_id":"这里是第二个账号,填法如上个账号",
    "x-tt-token":"这里是第二个账号,填法如上个账号",
    "sessionid":"这里是第二个账号,填法如上个账号"}
]
}}

///===========================================================
///更多号自己添加


推荐
cron 0-59/15 0-1,6-15,19-23 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_wkllq.js

*/


var _0xod9='jsjiami.com.v6',_0xod9_=['_0xod9'],_0x2cf9=[_0xod9,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x73\x6f\x79\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x77\x6b\x6c\x6c\x71','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u8bf7\u52ff\u4e71\u4fee\u6539\u53d8\u91cf\u6587\u4ef6\u91cc\u9762\u5185\u5bb9','\x70\x61\x72\x73\x65','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x64\x61\x74\x61','\x64\x65\x76\x69\x63\x65\x5f\x69\x64','\x73\x65\x73\x73\x69\x6f\x6e\x69\x64','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x74\x61\x73\x6b\x2f\x70\x61\x67\x65\x5f\x64\x61\x74\x61','\u4efb\u52a1\u72b6\u6001','\x64\x61\x69\x6c\x79\x2f\x73\x69\x67\x6e\x2f\x64\x6f\x6e\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u7b7e\u5230\u3011\x3a\x20\u83b7\u5f97\x20','\x72\x65\x77\x61\x72\x64\x5f\x61\x6d\x6f\x75\x6e\x74','\x20\u91d1\u5e01','\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72\x2f\x62\x61\x6c\x61\x6e\x63\x65\x5f\x74\x72\x61\x6e\x73\x66\x65\x72\x5f\x68\x61\x6e\x67\x75\x70','\x7b\x22\x63\x5f\x61\x6d\x6f\x75\x6e\x74\x22\x3a\x34\x35\x30\x2c\x22\x74\x73\x22\x3a\x22','\x22\x2c\x22\x73\x63\x65\x6e\x65\x5f\x6b\x65\x79\x22\x3a\x22\x69\x70\x5f\x74\x61\x73\x6b\x22\x7d','\u9886\u53d6\u91d1\u5e01','\x20\u9886\u53d6\u91d1\u5e01\u3011\x3a\x20\u83b7\u5f97\x20','\x63\x5f\x61\x6d\x6f\x75\x6e\x74','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x67\x65\x74\x48\x6f\x75\x72\x73','\x77\x69\x74\x68\x64\x72\x61\x77\x2f\x77\x69\x74\x68\x64\x72\x61\x77','\x7b\x22\x74\x61\x73\x6b\x5f\x69\x64\x22\x3a\x32\x30\x30\x31\x2c\x22\x63\x61\x73\x68\x5f\x61\x6d\x6f\x75\x6e\x74\x22\x3a\x32\x30\x2c\x22\x74\x79\x70\x65\x22\x3a\x33\x2c\x22\x61\x6c\x69\x5f\x61\x75\x74\x68\x5f\x69\x6e\x66\x6f\x22\x3a\x7b\x22\x74\x79\x70\x65\x22\x3a\x30\x7d\x7d','\x20\u63d0\u73b0\u3011\x3a\x20\u6210\u529f','\x64\x61\x69\x6c\x79\x2f\x65\x61\x74\x2f\x64\x6f\x6e\x65','\x7b\x22\x65\x6e\x61\x62\x6c\x65\x5f\x70\x72\x65\x6c\x6f\x61\x64\x5f\x65\x78\x63\x69\x74\x69\x6e\x67\x5f\x76\x69\x64\x65\x6f\x22\x3a\x30\x7d','\u996d\u70b9\u5956\u52b1','\x20\u996d\u70b9\u5956\u52b1\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x69\x6c\x79\x2f\x77\x61\x6c\x6b\x2f\x64\x6f\x6e\x65','\x7b\x22\x74\x61\x73\x6b\x5f\x69\x64\x22\x3a\x33\x30\x33\x32\x2c\x22\x63\x6c\x69\x65\x6e\x74\x5f\x74\x69\x6d\x65\x22\x3a\x31\x36\x34\x34\x38\x33\x32\x31\x34\x30\x2c\x22\x72\x69\x74\x22\x3a\x22\x22\x2c\x22\x75\x73\x65\x5f\x65\x63\x70\x6d\x22\x3a\x30\x2c\x22\x65\x6e\x61\x62\x6c\x65\x5f\x70\x72\x65\x6c\x6f\x61\x64\x5f\x65\x78\x63\x69\x74\x69\x6e\x67\x5f\x76\x69\x64\x65\x6f\x22\x3a\x30\x7d','\u8d70\u8def\u5956\u52b1','\x20\u8d70\u8def\u5956\u52b1\u3011\x3a\x20\u83b7\u5f97\x20','\x37\x30\x34\x39\x39\x33\x38\x36\x34\x38\x32\x35\x30\x31\x32\x32\x32\x35\x35','\x37\x30\x39\x34\x34\x35\x35\x35\x38\x30\x37\x31\x38\x35\x33\x33\x39\x32\x37','\x64\x61\x69\x6c\x79\x2f\x77\x68\x6f\x6c\x65\x5f\x73\x63\x65\x6e\x65\x2f\x64\x6f\x6e\x65','\x7b\x22\x67\x72\x6f\x75\x70\x5f\x69\x64\x22\x3a\x22','\x22\x2c\x22\x73\x63\x65\x6e\x65\x5f\x6b\x65\x79\x22\x3a\x22\x53\x6d\x61\x6c\x6c\x56\x69\x64\x65\x6f\x49\x6e\x6e\x65\x72\x46\x65\x65\x64\x22\x2c\x22\x69\x73\x5f\x67\x6f\x6c\x64\x65\x6e\x5f\x65\x67\x67\x22\x3a\x66\x61\x6c\x73\x65\x2c\x22\x64\x69\x73\x61\x62\x6c\x65\x5f\x61\x75\x74\x6f\x5f\x63\x6f\x6c\x6c\x65\x63\x74\x22\x3a\x66\x61\x6c\x73\x65\x7d','\u770b\u77ed\u89c6\u9891','\x20\u770b\u77ed\u89c6\u9891\u5956\u52b1\u3011\x3a\x20\u83b7\u5f97\x20','\x7b\x22\x74\x61\x73\x6b\x5f\x69\x64\x22\x3a\x33\x30\x31\x31\x2c\x22\x61\x64\x5f\x74\x79\x70\x65\x22\x3a\x30\x2c\x22\x61\x64\x5f\x69\x64\x22\x3a\x31\x31\x2c\x22\x65\x78\x63\x69\x5f\x65\x78\x74\x72\x61\x22\x3a\x7b\x22\x61\x6d\x6f\x75\x6e\x74\x22\x3a\x38\x35\x30\x2c\x22\x72\x65\x77\x61\x72\x64\x5f\x74\x69\x6d\x65\x73\x22\x3a\x30\x7d\x7d','\x7b\x22\x74\x61\x73\x6b\x5f\x69\x64\x22\x3a\x34\x31\x30\x38\x2c\x22\x61\x64\x5f\x74\x79\x70\x65\x22\x3a\x30\x2c\x22\x61\x64\x5f\x69\x64\x22\x3a\x32\x32\x2c\x22\x65\x78\x63\x69\x5f\x65\x78\x74\x72\x61\x22\x3a\x7b\x22\x61\x6d\x6f\x75\x6e\x74\x22\x3a\x33\x37\x33\x2c\x22\x72\x65\x77\x61\x72\x64\x5f\x74\x69\x6d\x65\x73\x22\x3a\x30\x7d\x7d','\x7b\x22\x74\x61\x73\x6b\x5f\x69\x64\x22\x3a\x34\x30\x31\x31\x2c\x22\x61\x64\x5f\x74\x79\x70\x65\x22\x3a\x31\x2c\x22\x61\x64\x5f\x69\x64\x22\x3a\x39\x34\x37\x30\x37\x36\x37\x35\x30\x2c\x22\x65\x78\x63\x69\x5f\x65\x78\x74\x72\x61\x22\x3a\x7b\x22\x61\x6d\x6f\x75\x6e\x74\x22\x3a\x33\x36\x33\x2c\x22\x72\x65\x77\x61\x72\x64\x5f\x74\x69\x6d\x65\x73\x22\x3a\x30\x7d\x7d','\x7b\x22\x74\x61\x73\x6b\x5f\x69\x64\x22\x3a\x34\x30\x31\x34\x2c\x22\x61\x64\x5f\x74\x79\x70\x65\x22\x3a\x31\x2c\x22\x61\x64\x5f\x69\x64\x22\x3a\x39\x34\x37\x30\x37\x36\x37\x34\x39\x2c\x22\x65\x78\x63\x69\x5f\x65\x78\x74\x72\x61\x22\x3a\x7b\x22\x61\x6d\x6f\x75\x6e\x74\x22\x3a\x32\x31\x39\x2c\x22\x72\x65\x77\x61\x72\x64\x5f\x74\x69\x6d\x65\x73\x22\x3a\x30\x7d\x7d','\x7b\x22\x74\x61\x73\x6b\x5f\x69\x64\x22\x3a\x33\x30\x31\x30\x2c\x22\x61\x64\x5f\x74\x79\x70\x65\x22\x3a\x30\x2c\x22\x61\x64\x5f\x69\x64\x22\x3a\x31\x31\x2c\x22\x65\x78\x63\x69\x5f\x65\x78\x74\x72\x61\x22\x3a\x7b\x22\x61\x6d\x6f\x75\x6e\x74\x22\x3a\x33\x34\x35\x2c\x22\x72\x65\x77\x61\x72\x64\x5f\x74\x69\x6d\x65\x73\x22\x3a\x30\x7d\x7d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x35\x2d\x6e\x6f\x72\x6d\x61\x6c\x2d\x68\x6c\x2e\x74\x6f\x75\x74\x69\x61\x6f\x61\x70\x69\x2e\x63\x6f\x6d\x2f\x6c\x75\x63\x6b\x79\x63\x61\x74\x2f\x67\x69\x70\x2f\x76\x31\x2f\x63\x6f\x6f\x70\x65\x72\x61\x74\x65\x2f\x65\x78\x63\x69\x61\x64\x2f\x64\x6f\x6e\x65\x3f\x64\x65\x76\x69\x63\x65\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x61\x6e\x64\x72\x6f\x69\x64\x26\x6f\x73\x3d\x61\x6e\x64\x72\x6f\x69\x64\x26\x73\x73\x6d\x69\x78\x3d\x61\x26\x5f\x72\x74\x69\x63\x6b\x65\x74\x3d\x31\x36\x34\x34\x38\x33\x30\x35\x33\x33\x39\x30\x34\x26\x5f\x72\x74\x69\x63\x6b\x65\x74\x3d\x31\x36\x34\x34\x38\x33\x30\x35\x33\x33\x39\x33\x35\x26\x63\x64\x69\x64\x3d\x39\x34\x31\x31\x32\x35\x34\x65\x2d\x66\x39\x33\x36\x2d\x34\x66\x37\x38\x2d\x39\x34\x32\x35\x2d\x64\x34\x65\x34\x64\x35\x32\x38\x66\x38\x66\x33\x26\x63\x68\x61\x6e\x6e\x65\x6c\x3d\x69\x6d\x5f\x77\x6b\x33\x5f\x7a\x64\x68\x5f\x7a\x6f\x6e\x67\x68\x65\x5f\x31\x34\x31\x33\x39\x26\x61\x69\x64\x3d\x36\x35\x38\x39\x26\x61\x70\x70\x5f\x6e\x61\x6d\x65\x3d\x67\x6f\x6c\x64\x5f\x62\x72\x6f\x77\x73\x65\x72\x26\x76\x65\x72\x73\x69\x6f\x6e\x5f\x63\x6f\x64\x65\x3d\x31\x31\x32\x38\x26\x76\x65\x72\x73\x69\x6f\x6e\x5f\x6e\x61\x6d\x65\x3d\x31\x2e\x32\x2e\x38\x26\x6d\x61\x6e\x69\x66\x65\x73\x74\x5f\x76\x65\x72\x73\x69\x6f\x6e\x5f\x63\x6f\x64\x65\x3d\x31\x31\x32\x38\x30\x26\x75\x70\x64\x61\x74\x65\x5f\x76\x65\x72\x73\x69\x6f\x6e\x5f\x63\x6f\x64\x65\x3d\x31\x31\x32\x38\x30\x34\x26\x61\x62\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x33\x31\x30\x39\x30\x39\x36\x25\x32\x43\x33\x33\x33\x30\x34\x33\x32\x25\x32\x43\x33\x33\x33\x30\x36\x31\x32\x25\x32\x43\x33\x36\x31\x31\x39\x39\x32\x25\x32\x43\x33\x36\x36\x39\x38\x36\x37\x25\x32\x43\x33\x36\x39\x33\x36\x38\x32\x25\x32\x43\x33\x36\x39\x38\x38\x30\x31\x25\x32\x43\x33\x37\x31\x39\x36\x33\x36\x25\x32\x43\x33\x32\x33\x34\x31\x31\x34\x25\x32\x43\x33\x34\x37\x35\x35\x36\x36\x25\x32\x43\x33\x35\x32\x35\x32\x37\x39\x25\x32\x43\x33\x35\x37\x37\x39\x34\x32\x25\x32\x43\x33\x36\x30\x34\x39\x33\x39\x25\x32\x43\x33\x36\x34\x38\x36\x30\x30\x25\x32\x43\x33\x36\x37\x32\x30\x33\x30\x25\x32\x43\x33\x36\x37\x37\x35\x37\x39\x25\x32\x43\x33\x37\x30\x30\x36\x38\x37\x25\x32\x43\x33\x37\x30\x37\x32\x38\x39\x25\x32\x43\x33\x37\x31\x35\x35\x34\x38\x25\x32\x43\x33\x37\x31\x36\x30\x34\x36\x25\x32\x43\x33\x37\x31\x38\x30\x31\x37\x25\x32\x43\x33\x37\x31\x38\x34\x31\x39\x25\x32\x43\x33\x37\x33\x37\x36\x39\x39\x25\x32\x43\x33\x37\x35\x37\x32\x31\x38\x26\x61\x62\x5f\x66\x65\x61\x74\x75\x72\x65\x3d\x39\x34\x35\x36\x33\x25\x32\x43\x31\x30\x32\x37\x34\x39\x26\x72\x65\x73\x6f\x6c\x75\x74\x69\x6f\x6e\x3d\x31\x30\x38\x30\x2a\x32\x32\x31\x30\x26\x64\x70\x69\x3d\x34\x34\x30\x26\x64\x65\x76\x69\x63\x65\x5f\x74\x79\x70\x65\x3d\x53\x4b\x57\x2d\x41\x30\x26\x64\x65\x76\x69\x63\x65\x5f\x62\x72\x61\x6e\x64\x3d\x62\x6c\x61\x63\x6b\x73\x68\x61\x72\x6b\x26\x6c\x61\x6e\x67\x75\x61\x67\x65\x3d\x7a\x68\x26\x6f\x73\x5f\x61\x70\x69\x3d\x33\x30\x26\x6f\x73\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x31\x31\x26\x61\x63\x3d\x77\x69\x66\x69\x26\x68\x6f\x6d\x65\x70\x61\x67\x65\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x31\x26\x64\x71\x5f\x70\x61\x72\x61\x6d\x3d\x30\x26\x70\x6c\x75\x67\x69\x6e\x3d\x30\x26\x70\x61\x73\x73\x5f\x74\x68\x72\x6f\x75\x67\x68\x3d\x69\x6d\x5f\x77\x6b\x33\x5f\x7a\x64\x68\x5f\x7a\x6f\x6e\x67\x68\x65\x5f\x31\x34\x31\x33\x39\x26\x72\x65\x63\x6f\x6d\x6d\x65\x6e\x64\x5f\x73\x77\x69\x74\x63\x68\x3d\x74\x72\x75\x65\x26\x69\x73\x54\x54\x57\x65\x62\x56\x69\x65\x77\x3d\x31\x26\x73\x65\x73\x73\x69\x6f\x6e\x5f\x69\x64\x3d\x63\x38\x32\x31\x66\x37\x33\x65\x2d\x37\x35\x62\x33\x2d\x34\x31\x61\x34\x2d\x61\x30\x30\x34\x2d\x62\x32\x61\x61\x32\x62\x34\x36\x34\x65\x38\x38\x26\x68\x6f\x73\x74\x5f\x61\x62\x69\x3d\x61\x72\x6d\x65\x61\x62\x69\x2d\x76\x37\x61\x26\x69\x73\x5f\x64\x62\x3d\x30\x26\x72\x6f\x6d\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x6d\x69\x75\x69\x5f\x76\x31\x32\x35\x5f\x76\x31\x32\x2e\x30\x2e\x33\x2e\x30\x2e\x6a\x6f\x79\x75\x69\x26\x69\x69\x64\x3d\x37\x35\x31\x38\x31\x32\x32\x30\x31\x37\x32\x32\x39\x36\x26\x64\x65\x76\x69\x63\x65\x5f\x69\x64\x3d\x34\x33\x30\x31\x37\x36\x36\x36\x31\x39\x30\x34\x34\x31\x37\x32\x26\x6c\x75\x63\x6b\x79\x64\x6f\x67\x5f\x62\x61\x73\x65\x3d\x72\x30\x70\x67\x46\x6b\x33\x71\x78\x70\x4a\x52\x63\x70\x32\x73\x36\x78\x63\x59\x41\x59\x62\x50\x30\x63\x67\x67\x76\x33\x37\x6b\x6a\x57\x31\x4e\x43\x47\x74\x56\x56\x78\x34\x6c\x6d\x53\x33\x45\x78\x4c\x70\x7a\x5f\x73\x53\x5f\x69\x33\x4b\x62\x46\x51\x75\x56\x7a\x56\x36\x52\x47\x6b\x57\x6d\x5f\x49\x4d\x70\x4f\x77\x38\x6c\x31\x32\x53\x66\x53\x78\x50\x51\x48\x2d\x37\x30\x53\x65\x47\x6d\x68\x33\x34\x65\x53\x69\x45\x2d\x47\x61\x42\x6d\x76\x71\x35\x78\x78\x66\x57\x75\x4c\x38\x76\x55\x7a\x7a\x30\x50\x30\x7a\x39\x49\x26\x6c\x75\x63\x6b\x79\x64\x6f\x67\x5f\x64\x61\x74\x61\x3d\x38\x71\x74\x65\x69\x52\x47\x72\x54\x35\x71\x46\x75\x38\x72\x4c\x5a\x72\x62\x35\x31\x61\x6a\x56\x7a\x30\x66\x44\x72\x71\x6f\x55\x73\x39\x5f\x7a\x6a\x47\x4b\x64\x4d\x37\x4d\x70\x2d\x33\x33\x66\x32\x38\x6f\x5a\x63\x44\x5f\x46\x68\x6f\x78\x59\x44\x32\x6e\x56\x4b\x6e\x6b\x2d\x6b\x50\x31\x55\x45\x4d\x62\x39\x52\x31\x30\x72\x43\x5a\x70\x51\x5f\x4a\x66\x48\x76\x43\x32\x58\x57\x67\x59\x61\x44\x4f\x57\x7a\x66\x61\x30\x6e\x4c\x4d\x34\x26\x6c\x75\x63\x6b\x79\x64\x6f\x67\x5f\x74\x6f\x6b\x65\x6e\x3d\x44\x63\x4a\x7a\x5f\x59\x76\x50\x67\x72\x6d\x39\x69\x32\x78\x74\x54\x45\x54\x70\x34\x6e\x6a\x36\x44\x5f\x45\x59\x4c\x78\x77\x6d\x6b\x51\x6b\x74\x77\x70\x61\x70\x32\x46\x47\x50\x49\x69\x75\x43\x58\x78\x2d\x51\x6b\x4c\x5f\x4d\x41\x4b\x46\x47\x6d\x49\x57\x71\x53\x34\x74\x57\x48\x5a\x73\x4d\x38\x68\x37\x76\x46\x32\x57\x57\x57\x45\x70\x48\x43\x41\x26\x6c\x75\x63\x6b\x79\x64\x6f\x67\x5f\x73\x64\x6b\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x35\x2e\x30\x2e\x31\x2d\x72\x63\x2e\x31\x31\x26\x6c\x75\x63\x6b\x79\x64\x6f\x67\x5f\x73\x65\x74\x74\x69\x6e\x67\x73\x5f\x76\x65\x72\x73\x69\x6f\x6e\x3d\x31\x35\x26\x6c\x75\x63\x6b\x79\x63\x61\x74\x5f\x76\x65\x72\x73\x69\x6f\x6e\x5f\x6e\x61\x6d\x65\x3d\x34\x2e\x33\x2e\x32\x2d\x72\x63\x2e\x31\x2e\x38\x2d\x62\x75\x67\x66\x69\x78\x26\x6c\x75\x63\x6b\x79\x63\x61\x74\x5f\x76\x65\x72\x73\x69\x6f\x6e\x5f\x63\x6f\x64\x65\x3d\x34\x33\x32\x30\x31\x38\x26\x73\x74\x61\x74\x75\x73\x5f\x62\x61\x72\x5f\x68\x65\x69\x67\x68\x74\x3d\x32\x39','\x61\x70\x69\x35\x2d\x6e\x6f\x72\x6d\x61\x6c\x2d\x68\x6c\x2e\x74\x6f\x75\x74\x69\x61\x6f\x61\x70\x69\x2e\x63\x6f\x6d','\x33\x30\x34\x34\x32','\x32\x2e\x32\x2e\x30\x2e\x63\x6e','\x36\x35\x38\x39','\x63\x6f\x6d\x2e\x63\x61\x74\x2e\x72\x65\x61\x64\x61\x6c\x6c\x2f\x31\x31\x32\x38\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x55\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x31\x31\x3b\x20\x7a\x68\x5f\x43\x4e\x3b\x20\x53\x4b\x57\x2d\x41\x30\x3b\x20\x42\x75\x69\x6c\x64\x2f\x53\x4b\x59\x57\x32\x31\x31\x30\x31\x35\x31\x43\x4e\x30\x30\x4d\x52\x30\x3b\x20\x43\x72\x6f\x6e\x65\x74\x2f\x54\x54\x4e\x65\x74\x56\x65\x72\x73\x69\x6f\x6e\x3a\x34\x62\x31\x31\x65\x66\x62\x34\x20\x32\x30\x32\x31\x2d\x31\x31\x2d\x32\x34\x20\x51\x75\x69\x63\x56\x65\x72\x73\x69\x6f\x6e\x3a\x37\x37\x63\x34\x37\x36\x35\x31\x20\x32\x30\x32\x31\x2d\x31\x31\x2d\x32\x34\x29','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x65\x6e\x63\x6f\x64\x69\x6e\x67\x3d\x75\x74\x66\x2d\x38','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','\x73\x65\x73\x73\x69\x6f\x6e\x69\x64\x3d','\x70\x6f\x73\x74','\x20\u770b\u5e7f\u544a\u89c6\u9891\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x65\x72\x72\x5f\x6e\x6f','\x20\u770b\u5e7f\u544a\u89c6\u9891\u3011\x3a\x20\u83b7\u5f97\x20','\x20\u770b\u5e7f\u544a\u89c6\u9891\u3011\x3a\x20\u53d8\u91cf\u5df2\u8fc7\u671f\x2c\u8bf7\u91cd\u65b0\u63d0\u4ea4','\x20\u770b\u5e7f\u544a\u89c6\u9891\u3011\x3a\x20','\x6d\x73\x67','\x63\x6f\x6f\x70\x65\x72\x61\x74\x65\x2f\x65\x78\x63\x69\x61\x64\x2f\x64\x6f\x6e\x65','\x7b\x22\x61\x64\x5f\x74\x79\x70\x65\x22\x3a\x32\x30\x2c\x22\x61\x64\x5f\x69\x64\x22\x3a','\x2c\x22\x74\x61\x73\x6b\x5f\x69\x64\x22\x3a\x34\x30\x31\x39\x2c\x22\x65\x78\x63\x69\x5f\x65\x78\x74\x72\x61\x22\x3a\x7b\x22\x73\x74\x61\x67\x65\x5f\x72\x65\x77\x61\x72\x64\x5f\x74\x69\x6d\x65\x73\x22\x3a\x30\x7d\x7d','\u5e7f\u544a\u5956\u52b1\x33\x30\x30','\x69\x6e\x76\x69\x74\x65\x2f\x64\x6f\x6e\x65\x2f\x70\x6f\x73\x74\x5f\x69\x6e\x76\x69\x74\x65\x5f\x63\x6f\x64\x65','\x7b\x22\x69\x6e\x76\x69\x74\x65\x5f\x63\x6f\x64\x65\x22\x3a\x22\x4a\x39\x30\x33\x32\x36\x38\x32\x22\x2c\x22\x69\x6e\x76\x69\x74\x65\x63\x6f\x64\x65\x22\x3a\x22\x4a\x39\x30\x33\x32\x36\x38\x32\x22\x7d\x22\x7d','\u7ed1\u5b9a\u4f5c\u8005\u9080\u8bf7\u7801','\u56fd\u9645\u65b0\u95fb','\u8d44\u8baf\u65b0\u95fb\x35\u5206\u949f','\x32\x30\x32\x32\u5e74\u5341\u5927\u70ed\u6897','\u5168\u7f51\u70ed\u641c\u7b2c\u4e00','\u6700\u706b\u5341\u9996\u6b4c\u66f2','\u6296\u97f3\u6700\u706b\u6b4c\u66f2','\u70ed\u95e8\u6da8\u7c89\u8bdd\u9898','\u6700\u8fd1\u6700\u706b\u7684\u7f51\u7ea2','\x64\x61\x69\x6c\x79\x2f\x73\x65\x61\x72\x63\x68\x2f\x64\x6f\x6e\x65','\x7b\x22\x71\x75\x65\x72\x79\x22\x3a\x22','\u641c\u7d22\u4efb\u52a1','\x20\u641c\u7d22\u4efb\u52a1\u3011\x3a\x20\u83b7\u5f97\x20','\x72\x65\x77\x61\x72\x64','\x66\x69\x6e\x69\x73\x68\x65\x64\x5f\x63\x6f\x75\x6e\x74','\x64\x61\x69\x6c\x79\x2f\x74\x72\x65\x61\x73\x75\x72\x65\x5f\x62\x6f\x78\x2f\x64\x6f\x6e\x65','\u6253\u5f00\u5b9d\u7bb1','\x20\u6253\u5f00\u5b9d\u7bb1\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x69\x6c\x79\x2f\x74\x72\x65\x61\x73\x75\x72\x65\x5f\x62\x6f\x78\x2f\x64\x65\x74\x61\x69\x6c','\u5b9d\u7bb1\u72b6\u6001','\x6c\x65\x66\x74\x5f\x73\x65\x63\x6f\x6e\x64\x73','\x67\x69\x70','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x35\x2d\x6e\x6f\x72\x6d\x61\x6c\x2d\x68\x6c\x2e\x74\x6f\x75\x74\x69\x61\x6f\x61\x70\x69\x2e\x63\x6f\x6d\x2f\x6c\x75\x63\x6b\x79\x63\x61\x74\x2f','\x2f\x76\x31\x2f','\x3f\x69\x69\x64\x3d\x37\x35\x31\x38\x31\x32\x32\x30\x31\x37\x32\x32\x39\x36\x26\x64\x65\x76\x69\x63\x65\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x61\x6e\x64\x72\x6f\x69\x64\x26\x61\x69\x64\x3d\x36\x35\x38\x39\x26\x61\x70\x70\x5f\x6e\x61\x6d\x65\x3d\x67\x6f\x6c\x64\x5f\x62\x72\x6f\x77\x73\x65\x72\x26\x75\x70\x64\x61\x74\x65\x5f\x76\x65\x72\x73\x69\x6f\x6e\x5f\x63\x6f\x64\x65\x3d\x31\x31\x32\x38\x30\x34\x26\x64\x65\x76\x69\x63\x65\x5f\x69\x64\x3d','\x67\x65\x74','\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u53d8\u91cf\u5df2\u8fc7\u671f\x2c\u8bf7\u91cd\u65b0\u63d0\u4ea4','\u3011\x3a\x20','\x65\x72\x72\x5f\x74\x69\x70\x73','\x41\x45\x53','\x65\x6e\x63\x72\x79\x70\x74','\x65\x6e\x63','\x55\x74\x66\x38','\x6d\x6f\x64\x65','\x45\x43\x42','\x70\x61\x64','\x50\x6b\x63\x73\x37','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x62\x6a\x73\x6a\x44\x69\x61\x6d\x62\x56\x79\x69\x2e\x63\x6f\x78\x47\x46\x6d\x50\x67\x2e\x68\x76\x6c\x4b\x36\x4c\x6c\x3d\x3d'];function _0x5108(_0x8528df,_0x3b6f7a){_0x8528df=~~'0x'['concat'](_0x8528df['slice'](0x0));var _0xb56190=_0x2cf9[_0x8528df];return _0xb56190;};(function(_0x7aa4b7,_0x377ebb){var _0x1497c9=0x0;for(_0x377ebb=_0x7aa4b7['shift'](_0x1497c9>>0x2);_0x377ebb&&_0x377ebb!==(_0x7aa4b7['pop'](_0x1497c9>>0x3)+'')['replace'](/[bDbVyxGFPghlKLl=]/g,'');_0x1497c9++){_0x1497c9=_0x1497c9^0xd0ca3;}}(_0x2cf9,_0x5108));const CryptoJS=require(_0x5108('0'));const fs=require('\x66\x73');const wkllq_variable=$[_0x5108('1')]()?require(_0x5108('2')):'';let app_soy_wkllq_data=[],soy_wkllq_UA='',preservation='';!(async()=>{console[_0x5108('3')](_0x5108('4')+new Date(new Date()[_0x5108('5')]()+new Date()[_0x5108('6')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x5108('7')]()+_0x5108('8'));console[_0x5108('3')](_0x5108('9')+wkllq_variable[_0x5108('a')][_0x5108('b')][_0x5108('c')]+_0x5108('d'));if(wkllq_variable[_0x5108('e')]!=0xc8){console[_0x5108('3')](_0x5108('f'));return;}subTitle='';for(i=0x0;i<wkllq_variable[_0x5108('a')][_0x5108('b')][_0x5108('c')];i++){soy_wkllq_data=JSON[_0x5108('10')](JSON[_0x5108('11')](wkllq_variable[_0x5108('a')][_0x5108('b')][i]));token=soy_wkllq_data[_0x5108('12')];device_id=soy_wkllq_data[_0x5108('13')];sessionid=soy_wkllq_data[_0x5108('14')];$[_0x5108('15')]=i+0x1;console[_0x5108('3')](_0x5108('16')+$[_0x5108('15')]+_0x5108('17'));await implement();};if(notify){if(subTitle){await notify[_0x5108('18')]($[_0x5108('19')],subTitle);}}})()[_0x5108('1a')](_0x2baee7=>$[_0x5108('1b')](_0x2baee7))[_0x5108('1c')](()=>$[_0x5108('1d')]());async function implement(){await sign();await box_state();await search();await balance();await eat();await walk();await whole_scene();}async function task_list(){await Overall_request(0x0,_0x5108('1e'),'',_0x5108('1f'),0x1,0x1);}async function sign(){let _0x69e4d4=new Date()[_0x5108('5')]();await Overall_request(0x1,_0x5108('20'),'\x7b\x7d','\u7b7e\u5230',0x0,0x0);if(request_data!==''){let _0xd612dd=JSON[_0x5108('10')](JSON[_0x5108('11')](request_data));console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+_0x5108('22')+_0xd612dd[_0x5108('23')]+_0x5108('24'));}}async function balance(){let _0x620ee9=new Date()[_0x5108('5')]();await Overall_request(0x1,_0x5108('25'),_0x5108('26')+_0x620ee9+_0x5108('27'),_0x5108('28'),0x1,0x0);if(request_data!==''){let _0x3b001e=JSON[_0x5108('10')](JSON[_0x5108('11')](request_data));console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+_0x5108('29')+_0x3b001e[_0x5108('2a')]+_0x5108('24'));for(let _0xaf70a6=0x0;_0xaf70a6<0x3;_0xaf70a6++){await exciad(0x0);await $[_0x5108('2b')](Math[_0x5108('2c')](Math[_0x5108('2d')]()*(0x7530-0x6d60+0x3e8)+0x6d60));}}}async function eat(){let _0x12b98e=new Date()[_0x5108('2e')]();if(_0x12b98e>=0x12){await Overall_request(0x1,_0x5108('2f'),_0x5108('30'),'\u63d0\u73b0',0x1,0x0);if(request_data!==''){let _0x4a9fcb=JSON[_0x5108('10')](JSON[_0x5108('11')](request_data));console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+_0x5108('31'));}}}async function eat(){await Overall_request(0x1,_0x5108('32'),_0x5108('33'),_0x5108('34'),0x0,0x0);if(request_data!==''){let _0x23db32=JSON[_0x5108('10')](JSON[_0x5108('11')](request_data));console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+_0x5108('35')+_0x23db32[_0x5108('2a')]+_0x5108('24'));for(let _0x129ce5=0x0;_0x129ce5<0x3;_0x129ce5++){await exciad(0x2);await $[_0x5108('2b')](Math[_0x5108('2c')](Math[_0x5108('2d')]()*(0x7530-0x6d60+0x3e8)+0x6d60));}}}async function walk(){await Overall_request(0x1,_0x5108('36'),_0x5108('37'),_0x5108('38'),0x0,0x0);if(request_data!==''){let _0x5b6c4e=JSON[_0x5108('10')](JSON[_0x5108('11')](request_data));console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+_0x5108('39')+_0x5b6c4e[_0x5108('2a')]+_0x5108('24'));for(let _0x16631f=0x0;_0x16631f<0x3;_0x16631f++){await exciad(0x3);await $[_0x5108('2b')](Math[_0x5108('2c')](Math[_0x5108('2d')]()*(0x7530-0x6d60+0x3e8)+0x6d60));}}}async function whole_scene(){let _0x3ad507=randomNum(_0x5108('3a'),_0x5108('3b'));await Overall_request(0x1,_0x5108('3c'),_0x5108('3d')+_0x3ad507+_0x5108('3e'),_0x5108('3f'),0x0,0x0);if(request_data!==''){let _0x4d6b57=JSON[_0x5108('10')](JSON[_0x5108('11')](request_data));console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+_0x5108('40')+_0x4d6b57[_0x5108('2a')]+_0x5108('24'));for(let _0x5bd7eb=0x0;_0x5bd7eb<0x3;_0x5bd7eb++){await exciad(0x4);await $[_0x5108('2b')](Math[_0x5108('2c')](Math[_0x5108('2d')]()*(0x7530-0x6d60+0x3e8)+0x6d60));}}}async function exciad(_0x57bff6){if(_0x57bff6==0x0){body=_0x5108('41');}else if(_0x57bff6==0x1){body=_0x5108('42');}else if(_0x57bff6==0x2){body=_0x5108('43');}else if(_0x57bff6==0x3){body=_0x5108('44');}else if(_0x57bff6==0x4){body=_0x5108('45');}let _0x4843c0={'\x75\x72\x6c':_0x5108('46'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5108('47'),'passport-sdk-version':_0x5108('48'),'x-vc-bdturing-sdk-version':_0x5108('49'),'x-ss-dp':_0x5108('4a'),'user-agent':_0x5108('4b'),'Content-Type':_0x5108('4c'),'Accept':_0x5108('4d'),'sdk-version':0x2,'x-tt-token':token,'Content-Length':body[_0x5108('c')],'Cookie':_0x5108('4e')+sessionid},'\x62\x6f\x64\x79':body};return new Promise((_0x5a8a7c,_0x25cce0)=>{$[_0x5108('4f')](_0x4843c0,async(_0x21ad34,_0x3534cb,_0x38c8d4)=>{try{if(_0x21ad34){console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+_0x5108('50'));subTitle+=_0x5108('21')+$[_0x5108('15')]+_0x5108('50');}else{let _0x396a9a=JSON[_0x5108('10')](_0x38c8d4);if(_0x396a9a[_0x5108('51')]==0x0){console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+_0x5108('52')+_0x396a9a[_0x5108('12')][_0x5108('23')]+_0x5108('24'));}else if(_0x396a9a[_0x5108('51')]==0x2711){console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+_0x5108('53'));}else{console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+_0x5108('54')+_0x396a9a[_0x5108('55')]);}}}catch(_0x111f0d){console[_0x5108('3')](_0x111f0d,_0x3534cb);}finally{_0x5a8a7c();}});});}async function exciad(){let _0xcb5243=Math[_0x5108('2c')](Math[_0x5108('2d')]()*(0x3c-0x28+0x1)+0x28);await Overall_request(0x1,_0x5108('56'),_0x5108('57')+_0xcb5243+_0x5108('58'),_0x5108('59'),0x0,0x1);}async function invite_code(){await Overall_request(0x1,_0x5108('5a'),_0x5108('5b'),_0x5108('5c'),0x0,0x0);let _0x1c36fa=JSON[_0x5108('10')](JSON[_0x5108('11')](request_data));}async function search(){let _0x586f4f=[_0x5108('5d'),'\u75ab\u60c5',_0x5108('5e'),_0x5108('5f'),_0x5108('60'),_0x5108('61'),_0x5108('62'),_0x5108('63'),_0x5108('64')];let _0x3a740b=_0x586f4f[Math[_0x5108('2c')](Math[_0x5108('2d')]()*_0x586f4f[_0x5108('c')])];await Overall_request(0x1,_0x5108('65'),_0x5108('66')+_0x3a740b+'\x22\x7d',_0x5108('67'),0x0,0x0);let _0xbe21d9=JSON[_0x5108('10')](JSON[_0x5108('11')](request_data));console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+_0x5108('68')+_0xbe21d9[_0x5108('69')]+_0x5108('24'));if(_0xbe21d9[_0x5108('6a')]<0x5){await search();}}async function box_open(){await Overall_request(0x1,_0x5108('6b'),'\x7b\x7d',_0x5108('6c'),0x0);let _0x24ecb1=JSON[_0x5108('10')](JSON[_0x5108('11')](request_data));console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+_0x5108('6d')+_0x24ecb1[_0x5108('23')]+_0x5108('24'));await exciad(0x1);}async function box_state(){await Overall_request(0x0,_0x5108('6e'),'',_0x5108('6f'),0x0);let _0x3d0a88=JSON[_0x5108('10')](JSON[_0x5108('11')](request_data));if(_0x3d0a88[_0x5108('70')]==0x0){await box_open();}}function Overall_request(_0x54c35f,_0x4f62d3,_0x3d85cc,_0x52d409,_0x2d147c,_0x1d1039){if(_0x2d147c==0x1){url_mode='\x73\x6a';}else{url_mode=_0x5108('71');}if(_0x54c35f==0x0){let _0x3e12a7={'\x75\x72\x6c':_0x5108('72')+url_mode+_0x5108('73')+_0x4f62d3+_0x5108('74')+device_id,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5108('47'),'passport-sdk-version':_0x5108('48'),'x-vc-bdturing-sdk-version':_0x5108('49'),'x-ss-dp':_0x5108('4a'),'user-agent':_0x5108('4b'),'Content-Type':_0x5108('4c'),'Accept':_0x5108('4d'),'sdk-version':0x2,'x-tt-token':token,'Cookie':_0x5108('4e')+sessionid}};return new Promise((_0x249de5,_0x492cf7)=>{$[_0x5108('75')](_0x3e12a7,async(_0x1c9a62,_0x5f6a,_0x5c3c75)=>{try{if(_0x1c9a62){console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+'\x20'+_0x52d409+_0x5108('76'));subTitle+=_0x5108('21')+$[_0x5108('15')]+'\x20'+_0x52d409+_0x5108('76');request_data='';}else{if(_0x1d1039==0x1){console[_0x5108('3')](_0x5c3c75);}let _0x1e6de3=JSON[_0x5108('10')](_0x5c3c75);if(_0x1e6de3[_0x5108('51')]==0x0){request_data=_0x1e6de3[_0x5108('12')];}else if(_0x1e6de3[_0x5108('51')]==0x2711){console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+'\x20'+_0x52d409+_0x5108('77'));request_data='';}else{console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+'\x20'+_0x52d409+_0x5108('78')+_0x1e6de3[_0x5108('79')]);request_data='';}}}catch(_0x1ad6a9){console[_0x5108('3')](_0x1ad6a9,_0x5f6a);}finally{_0x249de5();}});});}else if(_0x54c35f==0x1){let _0x1aa581={'\x75\x72\x6c':_0x5108('72')+url_mode+_0x5108('73')+_0x4f62d3+_0x5108('74')+device_id,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5108('47'),'passport-sdk-version':_0x5108('48'),'x-vc-bdturing-sdk-version':_0x5108('49'),'x-ss-dp':_0x5108('4a'),'user-agent':_0x5108('4b'),'Content-Type':_0x5108('4c'),'Accept':_0x5108('4d'),'sdk-version':0x2,'x-tt-token':token,'Content-Length':_0x3d85cc[_0x5108('c')],'Cookie':_0x5108('4e')+sessionid},'\x62\x6f\x64\x79':_0x3d85cc};return new Promise((_0x16bb8a,_0x5d383d)=>{$[_0x5108('4f')](_0x1aa581,async(_0x389ed9,_0x46d2d3,_0x53eedf)=>{try{if(_0x389ed9){console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+'\x20'+_0x52d409+_0x5108('76'));subTitle+=_0x5108('21')+$[_0x5108('15')]+'\x20'+_0x52d409+_0x5108('76');request_data='';}else{if(_0x1d1039==0x1){console[_0x5108('3')](_0x53eedf);}let _0x5996c4=JSON[_0x5108('10')](_0x53eedf);if(_0x5996c4[_0x5108('51')]==0x0){request_data=_0x5996c4[_0x5108('12')];}else if(_0x5996c4[_0x5108('51')]==0x2711){console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+'\x20'+_0x52d409+_0x5108('77'));request_data='';}else{console[_0x5108('3')](_0x5108('21')+$[_0x5108('15')]+'\x20'+_0x52d409+_0x5108('78')+_0x5996c4[_0x5108('79')]);request_data='';}}}catch(_0x5d1550){console[_0x5108('3')](_0x5d1550,_0x46d2d3);}finally{_0x16bb8a();}});});}}function randomNum(_0x5eb150,_0x4f8564){switch(arguments[_0x5108('c')]){case 0x1:return parseInt(Math[_0x5108('2d')]()*_0x5eb150+0x1);break;case 0x2:return parseInt(Math[_0x5108('2d')]()*(_0x4f8564-_0x5eb150+0x1)+_0x5eb150);break;default:return 0x0;break;}}function AES_Encrypt(_0x52e3ee,_0x4d3db1){let _0x139229=AES_DE[_0x5108('7a')][_0x5108('7b')](AES_DE[_0x5108('7c')][_0x5108('7d')][_0x5108('10')](_0x52e3ee),AES_DE[_0x5108('7c')][_0x5108('7d')][_0x5108('10')](_0x4d3db1),{'\x6d\x6f\x64\x65':AES_DE[_0x5108('7e')][_0x5108('7f')],'\x70\x61\x64\x64\x69\x6e\x67':AES_DE[_0x5108('80')][_0x5108('81')]});return _0x139229[_0x5108('82')]();};_0xod9='jsjiami.com.v6';


function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}