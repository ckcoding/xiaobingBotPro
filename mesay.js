/**
 * @author : CkCode
 * @Date : 2021-06-24 10:53:44
 * @LastEditTime : 2021-06-24 13:14:31
 * @FilePath : /wxbot/Users/ck/VSCode/nodejs/微软小冰/微软小冰Pro/mesay.js
 */
 var axios = require('axios');
 const cookie = require('./cookie')
 class Mesay{
    async say(data){
        var config = {
            method: 'post',
            url: 'https://api.weibo.com/webim/2/direct_messages/new.json',
            headers: { 
              'Accept': ' application/json, text/plain, */*', 
              'Accept-Encoding': ' gzip, deflate, br', 
              'Accept-Language': ' zh,zh-CN;q=0.9,en;q=0.8', 
              'Connection': ' keep-alive', 
              'Content-Length': ' 161', 
              'Content-Type': ' application/x-www-form-urlencoded', 
              'Cookie': cookie.cookie, 
              'Host': ' api.weibo.com', 
              'Origin': ' https://api.weibo.com', 
              'Referer': ' https://api.weibo.com/chat/', 
              'Sec-Fetch-Dest': ' empty', 
              'Sec-Fetch-Mode': ' cors', 
              'Sec-Fetch-Site': ' same-origin', 
              'User-Agent': ' Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
            },
            data : data
          };
        return await axios(config)
          .then(function (res) {
            return res.data
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}
module.exports = Mesay