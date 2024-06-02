// 今日の日付を取得
var today = new Date();

// 年、月、日を取得
var year = today.getFullYear(); // 西暦
var month = today.getMonth() + 1; // 月（0から11の範囲なので1を足す）
var day = today.getDate(); // 日

// 月と日のフォーマットを整える（1桁の数字を2桁にする）
month = month < 10 ? '0' + month : month;
day = day < 10 ? '0' + day : day;

// 表示形式を作成
var formattedDate = year + '/' + month + '/' + day;

// 結果を表示
console.log(formattedDate);
