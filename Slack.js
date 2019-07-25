// 指定したSlackチャネルに、指定したユーザ/ICONでメッセージをPOSTする

function postToSlack(postUrl, postChannel, username, icon, message){
    var jsonData =　{
        "channel" : postChannel,
        "username" : username,
        "icon_emoji": icon,
        "text" : message
    };
    var payload = JSON.stringify(jsonData);
    var options =　{
      "method" : "post",
      "contentType" : "application/json",
      "payload" : payload
    };
    
    UrlFetchApp.fetch(postUrl, options);     
}
