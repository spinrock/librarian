// 指定したidのGoogle Calenderの指定した期間のイベント一覧を返す

function getCalender(id, startDate, endDate) {
  var myCal=CalendarApp.getCalendarById(id); //特定のIDのカレンダーを取得 
  var returnParam = "";
  
  var myEvents=myCal.getEvents(startDate,endDate); //カレンダーのイベントを取得

  /* イベントの数だけ繰り返してログ出力 */
  for each(var evt in myEvents){
    returnParam = returnParam + 
      "・" + 
      getMonthDate(evt.getStartTime()) + //イベント開始日
      " : " + 
      evt.getTitle() +  //イベントのタイトル
      "\n"; //イベントの終了日時
  }
 
  return returnParam;

}


function getMonthDate(date) {
  var returnParam;
  
  returnParam = date.getMonth() + 1 + "/" + date.getDate();
  
  return returnParam;
  
}
