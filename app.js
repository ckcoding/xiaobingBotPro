/**
 * @author : CkCode
 * @Date : 2021-06-24 10:26:04
 * @LastEditTime : 2021-06-24 14:26:01
 * @FilePath : /wxbot/Users/ck/VSCode/nodejs/微软小冰/微软小冰Pro/app.js
 */
const Botsay = require('./botsay')
const Mesay = require('./mesay')
var botsay = new Botsay()
var messay = new Mesay()
const Koa = require('koa')
const app = new Koa();
const source = require('./cookie').source
const uid = require('./cookie').uid

var data = `text="在吗"&uid=${uid}&extensions={"clientid":""}&is_encoded=0&decodetime=1&source=${source}`
setInterval(()=>{ messay.say(data)},7200000)

app.use(async ctx => {
    if(ctx.request.method == 'GET'){
        try{
            let postdata = ctx.query
            var text = postdata.text
            if(text == undefined || text == ''){
                var data = {
                    code:403,
                    msg:"拒绝",
                    data:{
                        "text":"大哥不是你这样用的，会把人家玩坏的,正确的使用方式是：http://xx.xx.xx.xx?text=你要说的话"
                    }
                }
            }else{
                var data = `text=${text}&uid=${uid}&extensions={"clientid":""}&is_encoded=0&decodetime=1&source=${source}`
                var data2 = `[{"id":"","channel":"/meta/connect","connectionType":"long-polling","clientId":""}]`
                await messay.say(data)
                var res =await botsay.say(data2)//开始接受请求  
                console.log(res);
                
               // if(res == '')[0].data.info
                
                if(res.fromuid != uid ||res.content == text){
                    var data = {
                        code:200,
                        msg:"成功",
                        data:{
                            "text":"啊啊啊，和我聊天的人实在是太多了，我都不知道谁是谁了，我先选择已读不回吧QAQ"
                        }
                    }
                }
              else{
                var data = {
                    code:200,
                    msg:"成功",
                    data:{
                        "text":res.content
                    }
                }
              }            
        }
        ctx.body = data
        }catch{
            var data = {
                code:200,
                msg:"成功",
                data:{
                    "text":"啊啊啊，我脑子又烧坏了，让我缓缓吧"
                }
            }
            ctx.body = data
        }
    }else{
        ctx.body = '请使用Get请求'
    }
})
app.listen(1234)