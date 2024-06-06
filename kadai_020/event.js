// HTML要素を定数に代入
const button = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときにイベント処理を実行する
button.addEventListener('click', () => {
    // テキストを「ボタンをクリックしました」に変更する
    text.textContent = 'ボタンをクリックしました';
});
