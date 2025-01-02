document.addEventListener("DOMContentLoaded", function () {
  var inputFields = document.querySelectorAll('input[type="text"], input[type="password"]');
  inputFields.forEach(function (input) {
    input.setAttribute("autocomplete", "off");
  });
});
//屏蔽输入框的自动填充功能

// 加载 updatelog.json 文件
fetch('https://raw.githubusercontent.com/Grain-Kitty/Web-For-building/refs/heads/main/updatelog.json')
  .then(response => response.json())
  .then(data => {
    // 在这里处理从 JSON 文件中获取的数据
    console.log(data);
    // 将数据渲染到页面上
    renderDataToPage(data);

    // 更新页面底部的链接信息
    let Link = `
更新日期: ${data.updatatime}
主页: ${data.home}
Github: ${data.github}
`;
    console.log(`%c${tu}  %c${Link}`, styletu, styleLink);
  })
  .catch(error => console.error('Error loading JSON:', error));

let styletu = `
font-size:20px;
color: #ffc3dc
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

console.log(`%c${tu} `, styletu);

const args = [
  `\n %c %c by %c %c 🌱Grain_Kitty🍊  %c  \n\n`,
  "background: #ff66a5; padding:5px 0;",
  "background: #ff66a5; padding:5px 0;",
  "background: #ff66a5; padding:5px 0;",
  "background: #ffc3dc; padding:5px 0;",
  "background: #ff66a5; padding:5px 0;",
];

console.log(...args);
