// リストの定義
let holidays = [
    "正月",
    "成人の日",
    "建国記念日",
    "天皇誕生日",
    "春分の日",
    "昭和の日",
    "憲法記念日",
    "みどりの日",
    "こどもの日",
    "海の日",
    "山の日",
    "敬老の日",
    "秋分の日",
    "スポーツの日",
    "文化の日",
    "勤労感謝の日"
];

// for文を使ってリストの要素を順に出力
for (let i = 0; i < holidays.length; i++) {
    console.log(holidays[i]);
}

// カウンタ変数の初期化
let i = 0;

// while文を使ってリストの要素を順に出力
while (i < holidays.length) {
    console.log(holidays[i]);
    i++;
}
