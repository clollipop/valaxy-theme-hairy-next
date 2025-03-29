import{_ as p}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-CwYPM-u8.js";import{b as h,e as m,w as t,f as u,a as _,p as d,g as f,r as o,h as e,k as l}from"./app-97J719w7.js";const g=e("p",null,"可以直接将表情踏板连接到 KPA，而 REMOTE 上有四个额外的表情踏板输入，出厂默认的踏板分配如下：",-1),P=e("ul",null,[e("li",null,"Pedal 1（Profiler） --------- Volume（音量）"),e("li",null,"Pedal 2（Profiler） --------- Morph（渐变）"),e("li",null,"Pedal 3（REMOTE） --------- Volume（渐变）"),e("li",null,"Pedal 4（REMOTE） --------- Morph（渐变）"),e("li",null,"Pedal 5（REMOTE） --------- Wah（哇音）"),e("li",null,"Pedal 5（REMOTE） --------- Pitch（音高）")],-1),b=e("p",null,"可以根据需求在系统菜单中更改和分配。",-1),v=e("h2",{id:"volume-pedal-音量踏板",tabindex:"-1"},[l("Volume Pedal（音量踏板） "),e("a",{class:"header-anchor",href:"#volume-pedal-音量踏板","aria-label":'Permalink to "Volume Pedal（音量踏板）"'},"​")],-1),z=e("p",null,"一些有用的音量踏板设置可以存储在各个音色中，按 RIG 按钮，然后翻到音量踏板设置页面。",-1),M=e("img",{src:"https://pic.imgdb.cn/item/63e612f94757feff33267a45.jpg"},null,-1),k=e("p",null,[e("code",null,"Location"),l(" 设置音量踏板在信号链中的实际位置。")],-1),E=e("p",null,"音量踏板在“Pre Stomp单块前”和“Post Stomp单块后”会影响失真度。",-1),S=e("p",null,"如果选择“Pre Effect效果前”或“Post Effect后效果” 踏板则不再影响音箱的增益，而是控制整体音量。",-1),T=e("p",null,"如果是“Pre Effect效果前”，踏板不会影响延迟和混响的信号。",-1),$=e("p",null,"如果是“Post Effect效果后”，音量踏板位于信号端末端，混响和延迟信号均受影响。",-1),j=e("img",{src:"https://pic.imgdb.cn/item/63e614064757feff3328bef6.jpg"},null,-1),y=e("p",null,"“range范围”参数设置音量踏板的控制范围。",-1),O=e("p",null,[l("如果将其设置为 "),e("code",null,"-5"),l(",踏板处于脚跟位置时屏幕上自动显示调音表。")],-1),V=e("p",null,[l("如果将range设置为 "),e("code",null,"-4.9"),l("，踏板处于脚跟位置时没有任何信号。")],-1),x=e("p",null,[l("可以通过在调音表页面禁用 "),e("code",null,"Tuner at volume 0"),l(" 来阻止此行为。")],-1),K=e("p",null,"进入调音模式，然后按软按钮取消选中即可。",-1),A=e("img",{src:"https://pic.imgdb.cn/item/63e614a64757feff332af448.jpg"},null,-1),B=e("p",null,[l("也可以使用音量踏板调整独奏的音量，如果将范围设为 "),e("code",null,"-2"),l("，则踏板处于跟位置时音量不会降为 0。")],-1),R=e("p",null,"此时，大约是总音量的 60%，在脚跟位置，则有 100% 的独奏音量。",-1),w=e("p",null,[l("如果将 "),e("code",null,"range"),l(" 设为正值时，踏板的左右就像推子。")],-1),L=e("p",null,[l("在脚跟位置，可以获得正常的音色音量，在脚尖位置，将获得电平增强，设置为 "),e("code",null,"+2"),l(" 时，可最大增加 "),e("code",null,"10dB"),l(" 电平，踏板最大增强电平为 "),e("code",null,"24dB"),l("。如果激活音量踏板锁定功能，则会对所有音色生效。")],-1),N=e("h2",{id:"wah-pedal-哇音踏板",tabindex:"-1"},[l("Wah Pedal（哇音踏板） "),e("a",{class:"header-anchor",href:"#wah-pedal-哇音踏板","aria-label":'Permalink to "Wah Pedal（哇音踏板）"'},"​")],-1),W=e("p",null,"哇音踏板的参数设置在哇音效果的编辑菜单中，除了标准的哇音效果，KPA 还有其他类型的哇音效果，例如元音滤波器或哇音环形调制器，都可以由一个踏板控制。",-1),G=e("p",null,"在这个例子里，哇音踏板位于 STOMP A，因此按住 A 按钮，直到屏幕上显示编辑菜单。",-1),X=e("img",{src:"https://pic.imgdb.cn/item/63e617514757feff33341b66.jpg"},null,-1),C=e("p",null,"在第二页，可以设置 “Pedal Mode 踏板模式”",-1),H=e("img",{src:"https://pic.imgdb.cn/item/63e6177c4757feff3334891b.jpg"},null,-1),Z=e("ul",null,[e("li",null,[l("设置为 "),e("code",null,"Touch"),l(" 时，踏板被禁用，哇音效果由演奏的动态进行控制。")]),e("li",null,[l("设置为 "),e("code",null,"On"),l(" 时，可以由踏板进行连续控制。")]),e("li",null,[l("设置为 "),e("code",null,"Bypass@Stop"),l(" 时，哇音会在踏板停止移动时自动关闭。")]),e("li",null,[l("设置为 "),e("code",null,"Bypass@Hell"),l(" 时，哇音会在踏板处于脚跟后处自动关闭。")]),e("li",null,[l("设置为 "),e("code",null,"Bypass@Toll"),l(" 时，跟 Hell 差不多也是处于脚跟后处自动关闭。")])],-1),D=e("h2",{id:"morph-pedal-渐变踏板",tabindex:"-1"},[l("Morph Pedal（渐变踏板） "),e("a",{class:"header-anchor",href:"#morph-pedal-渐变踏板","aria-label":'Permalink to "Morph Pedal（渐变踏板）"'},"​")],-1),F=e("p",null,"使用 Morphing 功能，可以在一个音色里面无缝融合两种声音。",-1),I=e("p",null,"例如使用踏板控制失真值，首先设置踏板脚跟位置的增益值，在设置脚跟位置的增益值。",-1),J=e("img",{src:"https://pic.imgdb.cn/item/63e618c04757feff333919fa.jpg"},null,-1),U=e("p",null,"然后就可以使用踏板在该范围内无缝切换了，不需要为渐变进行特殊的设置，KPA 会自动记住所有内容，记得不要忘记保存音色。",-1),Y=e("h2",{id:"size-xl-4-pedals-加大号-四个踏板",tabindex:"-1"},[l("Size XL：4 Pedals（加大号：四个踏板） "),e("a",{class:"header-anchor",href:"#size-xl-4-pedals-加大号-四个踏板","aria-label":'Permalink to "Size XL：4 Pedals（加大号：四个踏板）"'},"​")],-1),q=e("p",null,"控制全部功能，需要 4 个踏板，每个功能都由专用踏板控制，将踏板直接连接到 REMOTE，并使用默认出厂设置。",-1),Q=e("img",{src:"https://pic.imgdb.cn/item/63e619724757feff333c83ef.jpg"},null,-1),ee=e("p",null,"踏板3:音量、踏板4:渐变、踏板5:哇音、踏板6:音高",-1),le=e("p",null,[l("踏板的分配设置在系统菜单中，可以按 SYSTEM 系统按钮，翻到 "),e("code",null,"<Pedal 3>"),l(" 这个页面")],-1),te=e("img",{src:"https://pic.imgdb.cn/item/63e619cf4757feff333ddd83.jpg"},null,-1),se=e("p",null,"这就是 3 号踏板的设置页面。",-1),oe=e("img",{src:"https://pic.imgdb.cn/item/63e619ed4757feff333e4ab7.jpg"},null,-1),ae=e("ul",null,[e("li",null,"“Mode模式”设置为“Pedal Type 1踏板类型1”。"),e("li",null,"“Function功能”设置为“Volume Pedal音量踏板”")],-1),ne=e("p",null,"可以使用这两个旋钮更改参数，如果连接了新的踏板，必须要对其进行校准。",-1),ie=e("p",null,"点击软按钮 1，然后从后往前踩踏板，小的进度条会显示踏板的运动状态。",-1),de=e("img",{src:"https://pic.imgdb.cn/item/63e61ab44757feff3340aec7.jpg"},null,-1),ce=e("p",null,"在往下翻页、可以依次找到渐变、哇音、音高的踏板设置。",-1),re=e("h2",{id:"size-l-3-pedals-加大号-三个踏板",tabindex:"-1"},[l("Size L: 3 Pedals（加大号：三个踏板） "),e("a",{class:"header-anchor",href:"#size-l-3-pedals-加大号-三个踏板","aria-label":'Permalink to "Size L: 3 Pedals（加大号：三个踏板）"'},"​")],-1),pe=e("p",null,"可以降低配置，使用一个踏板来交替控制音高和渐变，但也可以让音色同时使用两者，则同时控制音高和渐变。",-1),he=e("img",{src:"https://pic.imgdb.cn/item/63e9978a4757feff3394ac26.jpg"},null,-1),me=e("h2",{id:"size-m-2-pedals-中号-两个踏板",tabindex:"-1"},[l("Size M：2 Pedals（中号：两个踏板） "),e("a",{class:"header-anchor",href:"#size-m-2-pedals-中号-两个踏板","aria-label":'Permalink to "Size M：2 Pedals（中号：两个踏板）"'},"​")],-1),ue=e("p",null,"2 个踏板是一个很好的折衷方案，在舞台上可以节省空间，但依旧可以使用 2 个踏板控制所有参数，在这种情况，哇音也被分配给了渐变踏板。现在3号踏板控制音量，4号踏板控制哇音、渐变和音高。",-1),_e=e("img",{src:"https://pic.imgdb.cn/item/63ea02f24757feff33615272.jpg"},null,-1),fe=e("p",null,"现在如果哇音在音色中被激活，即可由渐变踏板控制，也可以同时控制两个效果，只要在音色中设置。",-1),Me={__name:"peals-profiler",setup(ge,{expose:c}){const a=JSON.parse('{"title":"Kemper（KPA）表情踏板","description":"","frontmatter":{"title":"Kemper（KPA）表情踏板","date":"2023-02-10T18:00:00.000Z","categories":["Notes","Guitar"],"tags":["guitar"]},"headers":[{"level":2,"title":"Volume Pedal（音量踏板）","slug":"volume-pedal-音量踏板","link":"#volume-pedal-音量踏板","children":[]},{"level":2,"title":"Wah Pedal（哇音踏板）","slug":"wah-pedal-哇音踏板","link":"#wah-pedal-哇音踏板","children":[]},{"level":2,"title":"Morph Pedal（渐变踏板）","slug":"morph-pedal-渐变踏板","link":"#morph-pedal-渐变踏板","children":[]},{"level":2,"title":"Size XL：4 Pedals（加大号：四个踏板）","slug":"size-xl-4-pedals-加大号-四个踏板","link":"#size-xl-4-pedals-加大号-四个踏板","children":[]},{"level":2,"title":"Size L: 3 Pedals（加大号：三个踏板）","slug":"size-l-3-pedals-加大号-三个踏板","link":"#size-l-3-pedals-加大号-三个踏板","children":[]},{"level":2,"title":"Size M：2 Pedals（中号：两个踏板）","slug":"size-m-2-pedals-中号-两个踏板","link":"#size-m-2-pedals-中号-两个踏板","children":[]}],"relativePath":"pages/posts/guitar/kpa/peals-profiler.md","path":"/home/runner/work/valaxy-theme-hairy-next/valaxy-theme-hairy-next/demo/pages/posts/guitar/kpa/peals-profiler.md","lastUpdated":1743267510000}'),i=_(),n=a.frontmatter||{};return i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},a.frontmatter||{}),d("pageData",a),d("valaxy:frontmatter",n),globalThis.$frontmatter=n,c({frontmatter:{title:"Kemper（KPA）表情踏板",date:"2023-02-10T18:00:00.000Z",categories:["Notes","Guitar"],tags:["guitar"]}}),(s,be)=>{const r=p;return h(),m(r,{frontmatter:u(n)},{"main-content-md":t(()=>[g,P,f(" more "),b,v,z,M,k,E,S,T,$,j,y,O,V,x,K,A,B,R,w,L,N,W,G,X,C,H,Z,D,F,I,J,U,Y,q,Q,ee,le,te,se,oe,ae,ne,ie,de,ce,re,pe,he,me,ue,_e,fe]),"main-header":t(()=>[o(s.$slots,"main-header")]),"main-header-after":t(()=>[o(s.$slots,"main-header-after")]),"main-nav":t(()=>[o(s.$slots,"main-nav")]),"main-content":t(()=>[o(s.$slots,"main-content")]),"main-content-after":t(()=>[o(s.$slots,"main-content-after")]),"main-nav-before":t(()=>[o(s.$slots,"main-nav-before")]),"main-nav-after":t(()=>[o(s.$slots,"main-nav-after")]),comment:t(()=>[o(s.$slots,"comment")]),footer:t(()=>[o(s.$slots,"footer")]),aside:t(()=>[o(s.$slots,"aside")]),"aside-custom":t(()=>[o(s.$slots,"aside-custom")]),default:t(()=>[o(s.$slots,"default")]),_:3},8,["frontmatter"])}}};export{Me as default};
