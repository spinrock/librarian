function main(){
  
  var calendar_id = PropertiesService.getScriptProperties().getProperty('calendar_id');
  var slack_url = PropertiesService.getScriptProperties().getProperty('slack_url');
  var slack_channel = PropertiesService.getScriptProperties().getProperty('slack_channel');
  var slack_username = 'Librarian';
  var slack_icon = ':book:';
  
  const GETDURATIONDAYS = 14;

  var startDate = new Date();
  var endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + GETDURATIONDAYS);
  var postMessage;

  postMessage = getCalender(calendar_id,startDate, endDate);
    
  if (postMessage == "") {
    postMessage = "新刊情報はありません。"
  } else {
    postMessage = "新刊一覧はこちら\n" + postMessage
  }
  
  postToSlack(slack_url, slack_channel, slack_username, slack_icon, postMessage );
}