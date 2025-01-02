document.addEventListener("DOMContentLoaded", function () {
  var inputFields = document.querySelectorAll('input[type="text"], input[type="password"]');
  inputFields.forEach(function (input) {
    input.setAttribute("autocomplete", "off");
  });
});
//屏蔽输入框的自动填充功能

let styletu = `
font-size:20px;
color: #ffc3dc
`;
let styleLink = `
margin-left: 35px;
color: rgb(30,152,255);
`;

let tu = `
    く__,.ヘヽ.        /  ,ー､ 〉
             ＼ ', !-─‐-i  /  /´
             ／｀ｰ'       L/／｀ヽ､
           /   ／,   /|   ,   ,       ',
         ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
          ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
            !,/7 '0'     ´0iソ|    |
            |.从"    _     ,,,, / |./    |
            ﾚ'| i＞.､,,__  _,.イ /   .i   |
              ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
                | |/i 〈|/   i  ,.ﾍ |  i  |
               .|/ /  ｉ：    ﾍ!    ＼  |
                kヽ>､ﾊ    _,.ﾍ､    /､!
                !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
                ﾚ'ヽL__|___i,___,ンﾚ|ノ
                    ﾄ-,/  |___./
                    'ｰ'    !_,.:
  `;
let Link = `
更新日期：2024-12-29
主页:  https://www.GrainKitty.top
Github:  https://github.com/Grain-Kitty
`;
console.log(`%c${tu}  %c${Link}`, styletu, styleLink);

const args = [
  `\n %c %c by %c %c 🌱Grain_Kitty🍊  %c  \n\n`,
  "background: #ff66a5; padding:5px 0;",
  "background: #ff66a5; padding:5px 0;",
  "background: #ff66a5; padding:5px 0;",
  "background: #ffc3dc; padding:5px 0;",
  "background: #ff66a5; padding:5px 0;",
];

console.log(...args);
