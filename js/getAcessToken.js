const https = require('https');

https.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx68153614dd35793a&secret=92df28a28f2e5790cb0b597db6991cf7',(res)=>{
	console.log('状态码：', res.statusCode);
 	console.log('请求头：', res.headers);
 	 res.on('data',(d)=>{
 	 	process.stdout.write(d);
 	 });
}).on('error', (e) => {
  console.error(e);
});