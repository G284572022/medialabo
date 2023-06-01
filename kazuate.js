// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('button#kotae');
b.addEventListener('click',hantei);
let s10 = document.querySelector('p#result'); 

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="kazuate"]');
  let yoso = Number(i.value);
  // 課題3-1: 正解判定する
    let s5 = document.querySelector('span#kaisu'); 
    s5.textContent = kaisu+1;
    let s6 = document.querySelector('span#answer');
    s6.textContent = yoso;
    if(kaisu>=3){
      s10.textContent = '答えは'+kotae+'でした.すでにゲームは終わっています'; 
    }else{
      if(kaisu==2){
        if(yoso==kotae){
          s10.textContent = ("正解ですおめでとう!");
        }else{
          s10.textContent=("まちがい．残念でした答えは "+kotae +" です．");
        }
      }else{
        if(kotae==yoso){
          s10.textContent = ("正解ですおめでとう!");
        }else if(yoso <kotae){
          s10.textContent=("まちがい．答えはもっと大きいですよ");
        }else{
          s10.textContent=("まちがい．答えはもっと小さいですよ");
        }
      }
      
    }
    kaisu =kaisu+1;
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}

// if(kotae == yoso){
//   s10.textContent = ("正解ですおめでとう!");
//   }else if(kaisu==2){
//     console.log(kaisu);
//     s10.textContet=("まちがい．残念でした答えは "+kotae +" です．");
//   }else if (kotae>yoso){
//   s10.textContent=("まちがい．答えはもっと大きいですよ");
// }else if(kotae<yoso){
//   s10.textContent=("まちがい．答えはもっと小さいですよ");
// }