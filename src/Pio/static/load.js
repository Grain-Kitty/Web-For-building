/* ----

# Pio Plugin load
# By: Dreamer-Paul
# Modify: journey-ad
# Modify: Grain_Kitty
# Last Update: 2024.12.29

一个支持更换 Live2D 模型的 JS 插件

本代码为奇趣保罗原创，并遵守 GPL 2.0 开源协议。欢迎访问我的博客：https://paugram.com

---- */
function load() {
  // Setup for pio and various styles.

  pio_reference = new Paul_Pio({
    mode: "fixed",
    hidden: true,
    content: {
      welcome: ["Hi!"],
      link: link[Math.floor(Math.random() * link.length)],
      touch: "",
      custom: [
        { selector: ".comment-form", text: "Content Tooltip" },
        { selector: ".home-social a:last-child", text: "Blog Tooltip" },
        { selector: ".post-item a", type: "read" },
        { selector: ".post-content a, .page-content a", type: "link" },
      ],
    },
    model: [
      "https://cdn.jsdelivr.net/gh/Grain-Kitty/Grain_Kitty.github.io@refs/heads/main/Pio/models/jaran/model.json",
    ],
    tips: true,
    onModelLoad: onModelLoad,
  });

  let pio_container = document.getElementsByClassName("pio-container").item(0);
  let pio_canvas = document.getElementById("pio");

  // Edit styles here
  pio_container.style.bottom = "-2rem";
  pio_container.style.zIndex = "1";
  pio_canvas.style.height = "20rem";
  pio_alignment = "right"; //初始位置

  // Then apply style
  pio_refresh_style();
}
function onModelLoad(model) {
  const canvas = document.getElementById("pio");
  const coreModel = model.internalModel.coreModel;
  const motionManager = model.internalModel.motionManager;

  playAction({
    text: "欢迎来到🌱Grain_Kitty🍊燈`cheney的个人博客~",
    motion: "Idle",
  });
  let touchList = [
    {
      text: "嘉心糖屁用没有",
      motion: "Tap生气 -领结",
    },
    {
      text: "有人急了，但我不说是谁~",
      motion: "Tap= =  左蝴蝶结",
    },
    {
      text: "呜呜...呜呜呜....",
      motion: "Tap哭 -眼角",
    },
    {
      text: "想然然了没有呀~",
      motion: "Tap害羞-中间刘海",
    },
    {
      text: "阿草好软呀~",
      motion: "Tap抱阿草-左手",
    },
    {
      text: "不要再戳啦！好痒！",
      motion: "Tap摇头- 身体",
    },
    {
      text: "嗷呜~~~",
      motion: "Tap耳朵-发卡",
    },
    {
      text: "zzZ。。。",
      motion: "Leave",
    },
    {
      text: "哇！好吃的！",
      motion: "Tap右头发",
    },
    {
      text: "哇！好吃的！",
      motion: "Tap左头发",
    },
    {
      text: "hi！嘉心糖",
      motion: "Tap笑- 脸",
    },
    {
      text: "别摇啦！",
      motion: "Shake",
    },
    {
      text: "啊",
      motion: "Tap打瞌睡- 呆毛",
    },
  ];

  function playAction(action) {
    action.text && pio_reference.message(action.text);
    action.motion && pio_reference.model.motion(action.motion);

    if (action.from && action.to) {
      Object.keys(action.from).forEach((id) => {
        const hidePartIndex = coreModel._partIds.indexOf(id);
        TweenLite.to(coreModel._partOpacities, 0.6, { [hidePartIndex]: action.from[id] });
        // coreModel._partOpacities[hidePartIndex] = action.from[id]
      });

      motionManager.once("motionFinish", (data) => {
        Object.keys(action.to).forEach((id) => {
          const hidePartIndex = coreModel._partIds.indexOf(id);
          TweenLite.to(coreModel._partOpacities, 0.6, { [hidePartIndex]: action.to[id] });
          // coreModel._partOpacities[hidePartIndex] = action.to[id]
        });
      });
    }
  }

  canvas.onclick = function () {
    if (motionManager.state.currentGroup !== "Idle") return;

    const action = pio_reference.tools.rand(touchList);
    playAction(action);
  };
}
var link = ["https://space.bilibili.com/386623880", "https://github.com/Grain-Kitty"];

var pio_reference;
window.onload = load;
