function main(){
  
  var calendar_id = PropertiesService.getScriptProperties().getProperty('calendar_id');
  var slack_url = PropertiesService.getScriptProperties().getProperty('slack_url');
  var slack_channel = PropertiesService.getScriptProperties().getProperty('slack_channel');
  var slack_username = 'Librarian';
  var slack_icon = ':book:';
  
  var startDate = new Date();
  startDate.setDate(1);
  var endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth()+1);
  var postMessage;

  postMessage = getCalender(calendar_id,startDate, endDate);
    
  if (postMessage == "") {
    postMessage = "今月の新刊情報はありません。"
  } else {
    postMessage = "今月の新刊一覧はこちら\n" + postMessage
  }
  
  postToSlack(slack_url, slack_channel, slack_username, slack_icon, postMessage );
}