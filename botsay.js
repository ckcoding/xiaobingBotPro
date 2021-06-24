/**
 * @author : CkCode
 * @Date : 2021-06-24 10:53:54
 * @LastEditTime : 2021-06-24 14:08:50
 * @FilePath : /wxbot/Users/ck/VSCode/nodejs/微软小冰/微软小冰Pro/botsay.js
 */
 var axios = require('axios');
 var https = require('https');
 const cookie = require('./cookie')
 class Botsay{
    async say(data){
        var config = {
            method: 'post',
            url: 'https://web.im.weibo.com/im/connect',
            headers: { 
              'Accept': ' */*', 
              'Accept-Encoding': ' gzip, deflate, br', 
              'Accept-Language': ' zh,zh-CN;q=0.9,en;q=0.8', 
              'Connection': ' keep-alive', 
              'Content-Length': ' 115', 
              'Content-Type': ' application/json;charset=UTF-8', 
              'Cookie': cookie.cookie, 
              'Host': ' web.im.weibo.com', 
              'Origin': ' https://api.weibo.com', 
              'Referer': ' https://api.weibo.com/', 
              'Sec-Fetch-Dest': ' empty', 
              'Sec-Fetch-Mode': ' cors', 
              'Sec-Fetch-Site': ' same-site', 
              'User-Agent': ' Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
            },
            data : data,
            httpsAgent: new https.Agent({
              rejectUnauthorized: false
            })
          };
         return await axios(config)
          .then(function (res) {
            return res.data[0].data.info 
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}
module.exports = Botsay