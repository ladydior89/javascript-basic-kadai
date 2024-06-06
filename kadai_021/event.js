// 定数にHTML要素を代入する
const textElement = document.getElementById('text');
const button = document.getElementById('btn');

// ボタンがクリックされたときのイベントリスナーを追加する
button.addEventListener('click', () => {
    // setTimeout関数を使って2秒後にテキストを変更する
    setTimeout(() => {
        textElement.textContent = 'ボタンをクリックしました';
    }, 2000);
});
