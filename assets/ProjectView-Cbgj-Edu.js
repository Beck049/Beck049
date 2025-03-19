import{d as p,u as m,b as r,c,e as o,t as a,F as l,j as g,k as u,h as y,_ as d,n as _,w as h,v,f as S}from"./index-CVEIXTRk.js";import{T as j}from"./Tag-0r4fFWYr.js";const C={class:"project-section"},f={class:"project-head"},P={class:"project-period"},b={class:"project-title"},N={class:"project-content"},G={class:"tag-group"},B={props:{title:{type:String,required:!0},period:{type:String,required:!0},content:{type:String,required:!0},image:{type:String,required:!0},tags:{type:Array}}},k=p({...B,__name:"ProjectSection",setup(n){return m(t=>({"5237218f":`url(${n.image})`})),(t,i)=>(r(),c("div",C,[o("div",f,[o("div",P,a(n.period),1),o("div",b,a(n.title),1),o("div",N,a(n.content),1),o("div",G,[(r(!0),c(l,null,g(n.tags,(e,s)=>(r(),u(j,{name:e,key:s},null,8,["name"]))),128))])]),o("div",{class:"project-frame",style:y({backgroundImage:`url(${n.image})`})},null,4)]))}}),D=d(k,[["__scopeId","data-v-3320d40f"]]),I={class:"project-list"},L={class:"category"},A=["onClick"],M={data(){return{current:0,categories:["All","Web","Games","Security","AI","Others"],projects:[{title:"NTNU_ADMS",period:"2022/09~2022/12",content:"在 國立臺灣師範大學資工系線上申請系統 專案中，我負責 前端與後端開發 並擔任 Project Manager。這個專案將系上研究所申請流程線上化，涵蓋 線上申請、線上評分、排名及資料分析。前端使用 TypeScript 搭配 Vue.js 框架，藉由 Component 概念有效減少重複性工作；後端則選擇 Go 與 MongoDB，這是我首次接觸這兩種技術，特別是 NoSQL 資料庫的學習，讓我對後端開發有了更深入的理解。在專案中，我負責排定開發流程、監督進度並協助組員進行開發，並在有餘裕的情況下幫忙支援前端與後端的開發與內部教學。這次經驗不僅讓我提升了 Web 開發技能，也增強了我的 專案管理能力，讓專案順利完成。",image:"../src/components/icons/projectCover/1.png",category:1,tags:["Vue.js","Go","MongoDB"]},{title:"Normal Game Jam",period:"2024/05",content:"在 Game Jam 中，我使用 Godot 開發了一款 2D 地城解謎遊戲，並獲得了 第二名 的佳績。這款遊戲讓玩家在視覺受限的情況下體驗解謎的樂趣。整個開發過程緊湊且充滿挑戰，從遊戲概念發想到美術、程式與關卡設計，我都投入了大量心力，並成功在短時間內完成作品。這次的比賽不僅提升了我的 Godot 開發經驗，也讓我更理解如何在有限時間內創造有趣且有深度的遊戲體驗。",image:"../src/components/icons/projectCover/3.png",category:2,tags:["Godot"]},{title:"xz-util",period:"2024/05~2024/06",content:"我對 CVE-2024-3096 (xz-utils 後門）進行了深入解析，並著重於 靜態分析動態庫 liblzma5.so。這個後門影響 xz-utils 5.6.0 和 5.6.1 版本，透過修改 liblzma，在特定條件下影響 OpenSSH 認證過程。我使用 Ghidra 針對 liblzma5.so 進行逆向分析，透過函式交叉引用與 CFG(控制流程圖)追蹤可疑邏輯，並對比不同版本的二進制代碼變化。分析過程中，我特別關注 惡意代碼的植入點、數據混淆技術，以及可能的後門觸發條件，試圖還原其行為模式。這次研究讓我更熟悉 靜態分析 ELF 動態庫 的技巧，也加深了對 惡意程式如何隱藏自身 的理解。",image:"../src/components/icons/projectCover/4.png",category:3,tags:["Cybersecurity","Ghidra"]},{title:"SEEDLab",period:"2022/02~2022/12",content:"我透過 SEEDLabs 實作並學習各種 資安相關議題，涵蓋 網路安全、系統安全、應用程式漏洞與攻防技術。透過實作 Buffer Overflow、SQL Injection、ARP Spoofing 等攻擊場景，我能夠深入理解漏洞的成因與攻擊者的思維。此外，我也利用 GDB、Wireshark、Burp Suite 等工具來分析與除錯，進一步強化對攻擊過程的掌握。這些實作不僅提升了我的 攻防意識與實務技能，也讓我更能從攻擊者角度思考如何加強防禦機制，對資安有了更全面的理解。",image:"../src/components/icons/projectCover/5.png",category:3,tags:["Cybersecurity"]},{title:"PokemonRL",period:"2023/09~2023/12",content:"我基於 Peter Whidden 的 PokemonRL，使用 PyBoy 模擬器建構程式與《Pokémon Red》遊戲間的 API 介面，並透過 Stable Baselines 3 進行強化學習訓練。訓練過程採用 Deep Q-Learning(DQN)，Agent透過遊玩過程學習最佳行動策略。為了提升學習效率，我優化了 狀態表示、行動空間裁剪與獎勵設計，並調整 DQN 參數來穩定訓練。在這個專案中，我結合了 強化學習、遊戲模擬與 AI 訓練，深入探索了如何讓 AI 透過試誤學習掌握複雜遊戲環境。",image:"../src/components/icons/projectCover/6.png",category:4,tags:["Pyboy","Stable Baselines 3","Reinforce Learning"]},{title:"Brain Tumor MRI",period:"2022/07~2023/06",content:"我使用 卷積神經網路（CNN） 與 instance segmentation 技術來分析 Brain Tumor MRI 影像，準確地辨識並標註腦瘤的位置。這個專案主要透過 Python 實作影像辨識與機器學習模型，以達成自動化腦瘤檢測。在過程中，我使用了 MONAI 框架 中的 UNETR（UNet Transformer） 技術進行影像標註，並在 PyTorch 中利用 CNN 模型進行訓練與學習。這樣的技術結合讓模型能夠有效提取 MRI 影像中的特徵，進行精確的腦瘤位置標註，提升了腦瘤檢測的準確性與效率。",image:"../src/components/icons/projectCover/7.png",category:4,tags:["Pytorch","CNN","Machine Learning"]},{title:"XV6",period:"2023/09~2023/12",content:"我透過 xv6（MIT 的教學用 UNIX 內核） 實作 作業系統（OS） 相關概念，深入理解 系統呼叫、行程管理、記憶體管理與檔案系統 等核心機制。在實作過程中，我修改並擴展 xv6 核心，包括新增 系統呼叫（syscall）、實作 簡單排程器（scheduler），以及分析 虛擬記憶體管理（paging） 的運作方式。此外，我使用 GDB 進行內核偵錯，以深入解析核心運作細節。這次經驗不僅讓我更熟悉 OS 設計原理，也提升了我對 低階系統程式開發 的掌握能力。",image:"../src/components/icons/projectCover/2.png",category:5,tags:["Operating System"]},{title:"Google Foobar",period:"2023/03~2023/04",content:"我參加了 Google Foobar 挑戰，這是一個由 Google 邀請的 程式設計解謎活動，專注於演算法與資料結構的應用。我使用 Python 解決了一系列高難度問題，包括 圖論、動態規劃、數論與最適化演算法，並透過 時間與空間複雜度分析 來提升解法效率。在這個過程中，我不僅強化了 Python 的應用技巧，也對 演算法設計與問題拆解 有了更深刻的理解。這次挑戰讓我體驗到如何在有限時間內 設計高效解法，並進一步提升了我的程式解題能力。",image:"../src/components/icons/projectCover/8.png",category:5,tags:["Python","Algorithm","Data Structure"]},{title:"師大暑期資工營",period:"2021/11~2022/07",content:"師大資工針對高中生而舉辦的營隊，旨在幫助高中生了解大學資工系的內容。營隊內容除了有講座、實作課程還有與資工相關的活動。我在其中擔任的角色為「總籌」，除了監督及訂定進度外，還要與各種廠商接洽，並適度的支援底下各組，以確保活動能完整進行。",image:"../src/components/icons/projectCover/9.png",category:5}]}}},T=p({...M,__name:"ProjectView",setup(n){return(t,i)=>(r(),c("div",I,[i[0]||(i[0]=o("h1",null,"Project List",-1)),o("div",L,[(r(!0),c(l,null,g(t.categories,(e,s)=>(r(),c("div",{class:_([{chosen:s===t.current}]),key:s,onClick:R=>t.current=s},a(e),11,A))),128))]),(r(!0),c(l,null,g(t.projects,(e,s)=>h((r(),c("div",{key:s,class:"project"},[S(D,{title:e.title,period:e.period,content:e.content,image:e.image,tags:e.tags},null,8,["title","period","content","image","tags"])])),[[v,t.current===0||e.category===t.current]])),128))]))}}),E=d(T,[["__scopeId","data-v-2a8e3fbb"]]);export{E as default};
