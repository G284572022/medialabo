let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

/////////////////// 課題3-2 はここから書き始めよう

let jikan1 = data.list.g1[0];
console.log(jikan1.start_time);
console.log(jikan1.end_time);
console.log(data.list.g1[0].service.name);
console.log(jikan1.title);
console.log(jikan1.subtitle);
let jikan2 = data.list.g1[1];
console.log(jikan2.start_time);
console.log(jikan2.end_time);
console.log(data.list.g1[0].service.name);
console.log(jikan2.title);
console.log(jikan2.subtitle);

let p6=document.querySelector('h2#time1'); 
let j = document.createElement('p'); 
j.textContent=jikan1.start_time; 
p6.insertAdjacentElement('afterend',j); 

let p7=document.querySelector('h2#time1');
let a = document.createElement('p');
a.textContent=jikan1.end_time;
p7.insertAdjacentElement('afterend',a);

let p8=document.querySelector('h2#time1');
let b = document.createElement('p');
b.textContent=data.list.g1[0].service.name;
p8.insertAdjacentElement('afterend',b);

let p9=document.querySelector('h2#time1');
let c = document.createElement('p');
c.textContent=jikan1.title;
p9.insertAdjacentElement('afterend',c);

let p10=document.querySelector('h2#time1');
let d = document.createElement('p');
d.textContent=jikan1.subtitle;
p10.insertAdjacentElement('afterend',d);

let p11=document.querySelector('h2#time2');
let e = document.createElement('p');
e.textContent=jikan2.start_time;
p11.insertAdjacentElement('afterend',e);

let p12=document.querySelector('h2#time2');
let f = document.createElement('p');
f.textContent=jikan2.end_time;
p12.insertAdjacentElement('afterend',f);

let p13=document.querySelector('h2#time2');
let g = document.createElement('p');
g.textContent=data.list.g1[0].service.name;
p13.insertAdjacentElement('afterend',g);

let p14=document.querySelector('h2#time2');
let h = document.createElement('p');
h.textContent=jikan2.title;
p14.insertAdjacentElement('afterend',h);

let p15=document.querySelector('h2#time2');
let i = document.createElement('p');
i.textContent=jikan2.subtitle;
p15.insertAdjacentElement('afterend',i);

let z = document.querySelector('button#btn');
z.addEventListener('click', showSelectResult);

function showSelectResult() {
    let s = document.querySelector('select#santaro');
    let idx = s.selectedIndex;  // idx 番目の option が選択された

    let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
    let o = os.item(idx);       // os の idx 番目の要素

    console.log('選択された ' + idx + ' 番目の option の情報:');
    console.log('  value=' + o.getAttribute('value'));  // id 属性を表示
    console.log('  textContent='+o.textContent);
}