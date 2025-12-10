// quizData.js - 依照 114 國二寒訓模擬考「知識點對照表」建置，並加入「年級」層級。
// 目前只有「國二」這一份考卷，但架構已預留未來新增其他年級。

const allGradeData = {
    "國二": {
        // =====================================================================
        // 國文（C）
        // =====================================================================
        "國文": {
            maxScore: 210, // 42 題，每題 5 分
            skills: [
                "基本詞義",        // C-1
                "語句的種類",      // C-2
                "語法的類型",      // C-3
                "節氣氣候",        // C-4
                "字音字形",        // C-5
                "修辭手法",        // C-6
                "成語應用",        // C-7
                "書信格式",        // C-8
                "標點符號",        // C-9
                "古典詩詞賞析",    // C-10
                "文意文閱讀測驗",  // C-11
                "分析圖表文章",    // C-12
                "散文閱讀理解",    // C-13
                "古典詩詞格式",    // C-14
                "現代詩詞解讀"     // C-15
            ],
            questions: [
                { id: 1, correct: 'D', skill: ["現代詩詞解讀"], weight: 5 },
                { id: 2, correct: 'C', skill: ["字音字形"], weight: 5 },
                { id: 3, correct: 'B', skill: ["語法的類型"], weight: 5 },
                { id: 4, correct: 'B', skill: ["語句的種類"], weight: 5 },
                { id: 5, correct: 'D', skill: ["語句的種類"], weight: 5 },
                { id: 6, correct: 'D', skill: ["字音字形"], weight: 5 },
                { id: 7, correct: 'B', skill: ["標點符號"], weight: 5 },
                { id: 8, correct: 'A', skill: ["古典詩詞格式"], weight: 5 },
                { id: 9, correct: 'C', skill: ["基本詞義"], weight: 5 },
                { id: 10, correct: 'B', skill: ["節氣氣候"], weight: 5 },
                { id: 11, correct: 'A', skill: ["修辭手法"], weight: 5 },
                { id: 12, correct: 'D', skill: ["語句的種類"], weight: 5 },
                { id: 13, correct: 'B', skill: ["語法的類型"], weight: 5 },
                { id: 14, correct: 'B', skill: ["字音字形"], weight: 5 },
                { id: 15, correct: 'D', skill: ["散文閱讀理解"], weight: 5 },
                { id: 16, correct: 'D', skill: ["散文閱讀理解"], weight: 5 },
                { id: 17, correct: 'C', skill: ["古典詩詞格式"], weight: 5 },
                { id: 18, correct: 'B', skill: ["語句的種類"], weight: 5 },
                { id: 19, correct: 'D', skill: ["文意文閱讀測驗"], weight: 5 },
                { id: 20, correct: 'C', skill: ["語句的種類"], weight: 5 },
                { id: 21, correct: 'C', skill: ["語句的種類"], weight: 5 },
                { id: 22, correct: 'C', skill: ["修辭手法"], weight: 5 },
                { id: 23, correct: 'B', skill: ["古典詩詞賞析"], weight: 5 },
                { id: 24, correct: 'C', skill: ["古典詩詞賞析"], weight: 5 },
                { id: 25, correct: 'B', skill: ["文意文閱讀測驗"], weight: 5 },
                { id: 26, correct: 'B', skill: ["文意文閱讀測驗"], weight: 5 },
                { id: 27, correct: 'A', skill: ["文意文閱讀測驗"], weight: 5 },

                { id: 28, correct: 'A', skill: ["散文閱讀理解"], weight: 5 },
                { id: 29, correct: 'D', skill: ["散文閱讀理解"], weight: 5 },
                { id: 30, correct: 'B', skill: ["散文閱讀理解"], weight: 5 },
                { id: 31, correct: 'C', skill: ["散文閱讀理解"], weight: 5 },
                { id: 32, correct: 'A', skill: ["散文閱讀理解"], weight: 5 },
                { id: 33, correct: 'D', skill: ["節氣氣候"], weight: 5 },
                { id: 34, correct: 'D', skill: ["散文閱讀理解"], weight: 5 },
                { id: 35, correct: 'C', skill: ["散文閱讀理解"], weight: 5 },
                { id: 36, correct: 'B', skill: ["散文閱讀理解"], weight: 5 },
                { id: 37, correct: 'A', skill: ["成語應用"], weight: 5 },
                { id: 38, correct: 'B', skill: ["文意文閱讀測驗"], weight: 5 },
                { id: 39, correct: 'D', skill: ["成語應用"], weight: 5 },
                { id: 40, correct: 'A', skill: ["文意文閱讀測驗"], weight: 5 },
                { id: 41, correct: 'B', skill: ["文意文閱讀測驗"], weight: 5 },
                { id: 42, correct: 'B', skill: ["文意文閱讀測驗"], weight: 5 }
            ]
        },

        // =====================================================================
        // 英文（E）
        // =====================================================================
        "英文": {
            maxScore: 215, // 43 題，每題 5 分
            skills: [
                "句型結構",          // E-1
                "常用介詞",          // E-2
                "動詞時態",          // E-3
                "基本字彙",          // E-4
                "冠詞使用規則",      // E-5
                "名詞單複數",        // E-6
                "形容詞與副詞",      // E-7
                "比較級與最高級",    // E-8
                "連接詞種類",        // E-9
                "疑問句結構",        // E-10
                "否定句型結構",      // E-11
                "關係代名詞",        // E-12
                "文章閱讀理解",      // E-13
                "助動詞使用規則",    // E-14
                "動名詞應用"         // E-15
            ],
            questions: [
                { id: 1, correct: 'A', skill: ["基本字彙"], weight: 5 },
                { id: 2, correct: 'A', skill: ["基本字彙"], weight: 5 },
                { id: 3, correct: 'A', skill: ["句型結構"], weight: 5 },
                { id: 4, correct: 'C', skill: ["基本字彙"], weight: 5 },
                { id: 5, correct: 'D', skill: ["常用介詞"], weight: 5 },
                { id: 6, correct: 'C', skill: ["基本字彙"], weight: 5 },
                { id: 7, correct: 'D', skill: ["基本字彙"], weight: 5 },
                { id: 8, correct: 'D', skill: ["基本字彙"], weight: 5 },
                { id: 9, correct: 'A', skill: ["句型結構"], weight: 5 },
                { id: 10, correct: 'B', skill: ["基本字彙"], weight: 5 },
                { id: 11, correct: 'B', skill: ["基本字彙"], weight: 5 },
                { id: 12, correct: 'B', skill: ["動詞時態"], weight: 5 },
                { id: 13, correct: 'D', skill: ["基本字彙"], weight: 5 },
                { id: 14, correct: 'D', skill: ["句型結構"], weight: 5 },
                { id: 15, correct: 'C', skill: ["基本字彙"], weight: 5 },
                { id: 16, correct: 'A', skill: ["基本字彙"], weight: 5 },
                { id: 17, correct: 'B', skill: ["疑問句結構"], weight: 5 },
                { id: 18, correct: 'C', skill: ["句型結構"], weight: 5 },
                { id: 19, correct: 'D', skill: ["基本字彙"], weight: 5 },
                { id: 20, correct: 'B', skill: ["基本字彙"], weight: 5 },
                { id: 21, correct: 'C', skill: ["文章閱讀理解"], weight: 5 },
                { id: 22, correct: 'B', skill: ["基本字彙"], weight: 5 },

                { id: 23, correct: 'D', skill: ["文章閱讀理解"], weight: 5 },
                { id: 24, correct: 'B', skill: ["文章閱讀理解"], weight: 5 },
                { id: 25, correct: 'A', skill: ["文章閱讀理解"], weight: 5 },
                { id: 26, correct: 'B', skill: ["文章閱讀理解"], weight: 5 },
                { id: 27, correct: 'C', skill: ["文章閱讀理解"], weight: 5 },
                { id: 28, correct: 'C', skill: ["文章閱讀理解"], weight: 5 },
                { id: 29, correct: 'A', skill: ["文章閱讀理解"], weight: 5 },
                { id: 30, correct: 'C', skill: ["文章閱讀理解"], weight: 5 },
                { id: 31, correct: 'D', skill: ["文章閱讀理解"], weight: 5 },
                { id: 32, correct: 'A', skill: ["文章閱讀理解"], weight: 5 },
                { id: 33, correct: 'C', skill: ["文章閱讀理解"], weight: 5 },
                { id: 34, correct: 'D', skill: ["文章閱讀理解"], weight: 5 },
                { id: 35, correct: 'C', skill: ["文章閱讀理解"], weight: 5 },
                { id: 36, correct: 'D', skill: ["文章閱讀理解"], weight: 5 },
                { id: 37, correct: 'C', skill: ["文章閱讀理解"], weight: 5 },
                { id: 38, correct: 'A', skill: ["文章閱讀理解"], weight: 5 },
                { id: 39, correct: 'B', skill: ["文章閱讀理解"], weight: 5 },
                { id: 40, correct: 'C', skill: ["文章閱讀理解"], weight: 5 },
                { id: 41, correct: 'D', skill: ["文章閱讀理解"], weight: 5 },
                { id: 42, correct: 'D', skill: ["文章閱讀理解"], weight: 5 },
                { id: 43, correct: 'C', skill: ["文章閱讀理解"], weight: 5 }
            ]
        },

        // =====================================================================
        // 數學（M）
        // =====================================================================
        "數學": {
            maxScore: 125, // 25 題，每題 5 分（非選題未納入此系統）
            skills: [
                "數的運算",          // M-1
                "多項式化簡運算",    // M-2
                "方程式列式",        // M-3
                "比例性質",          // M-4
                "等式不等式求解",    // M-5
                "函數圖形判別",      // M-6
                "數列規則",          // M-7
                "角的性質",          // M-8
                "平行線判別",        // M-9
                "四邊形性質",        // M-10
                "尺規作圖",          // M-11
                "全等與相似",        // M-12
                "平面座標",          // M-13
                "圓的性質",          // M-14
                "三心應用",          // M-15
                "圖表判定",          // M-16
                "統計資料",          // M-17
                "機率計算",          // M-18
                "因倍質數"           // M-19
            ],
            questions: [
                { id: 1,  correct: 'C', skill: ["數的運算"],      weight: 5 },
                { id: 2,  correct: 'A', skill: ["數的運算"],      weight: 5 },
                { id: 3,  correct: 'C', skill: ["圖表判定"],      weight: 5 },
                { id: 4,  correct: 'D', skill: ["因倍質數"],      weight: 5 },
                { id: 5,  correct: 'A', skill: ["比例性質"],      weight: 5 },
                { id: 6,  correct: 'B', skill: ["圖表判定"],      weight: 5 },
                { id: 7,  correct: 'C', skill: ["等式不等式求解"], weight: 5 },
                { id: 8,  correct: 'B', skill: ["因倍質數"],      weight: 5 },
                { id: 9,  correct: 'D', skill: ["函數圖形判別"],  weight: 5 },
                { id: 10, correct: 'C', skill: ["平面座標"],      weight: 5 },
                { id: 11, correct: 'B', skill: ["函數圖形判別"],  weight: 5 },
                { id: 12, correct: 'A', skill: ["等式不等式求解"], weight: 5 },
                { id: 13, correct: 'D', skill: ["統計資料"],      weight: 5 },
                { id: 14, correct: 'C', skill: ["等式不等式求解"], weight: 5 },
                { id: 15, correct: 'A', skill: ["比例性質"],      weight: 5 },
                { id: 16, correct: 'C', skill: ["因倍質數"],      weight: 5 },
                { id: 17, correct: 'D', skill: ["方程式列式"],    weight: 5 },
                { id: 18, correct: 'D', skill: ["平面座標"],      weight: 5 },
                { id: 19, correct: 'B', skill: ["統計資料"],      weight: 5 },
                { id: 20, correct: 'B', skill: ["等式不等式求解"], weight: 5 },
                { id: 21, correct: 'B', skill: ["等式不等式求解"], weight: 5 },
                { id: 22, correct: 'A', skill: ["統計資料"],      weight: 5 },
                { id: 23, correct: 'A', skill: ["比例性質"],      weight: 5 },
                { id: 24, correct: 'B', skill: ["數的運算"],      weight: 5 },
                { id: 25, correct: 'D', skill: ["等式不等式求解"], weight: 5 }
            ]
        },

        // =====================================================================
        // 自然（N）
        // =====================================================================
        "自然": {
            maxScore: 250, // 50 題，每題 5 分
            skills: [
                "牛頓運動定律",        // N-1
                "速度加速度",          // N-2
                "電磁力",              // N-3
                "基本電學",            // N-4
                "力與摩擦力",          // N-5
                "壓力與浮力",          // N-6
                "物質三態變化",        // N-7
                "元素化合物",          // N-8
                "聲波與光",            // N-9
                "原子結構與特性",      // N-10
                "化學、物理變化",      // N-11
                "化學反應方程式",      // N-12
                "原子量分子量",        // N-13
                "氧化還原與酸鹼",      // N-14
                "水溶液與濃度",        // N-15
                "細胞功能與結構",      // N-16
                "基因與遺傳",          // N-17
                "生物的分類",          // N-18
                "人體器官功能",        // N-19
                "生態與食物鏈",        // N-20
                "地球結構與層次",      // N-21
                "岩石種類與形成",      // N-22
                "天氣與氣候",          // N-23
                "地球月亮與太陽",      // N-24
                "水,碳,氧的循環"       // N-25
            ],
            questions: [
                { id: 1,  correct: 'C', skill: ["聲波與光"],          weight: 5 },
                { id: 2,  correct: 'D', skill: ["人體器官功能"],      weight: 5 },
                { id: 3,  correct: 'A', skill: ["細胞功能與結構"],    weight: 5 },
                { id: 4,  correct: 'C', skill: ["聲波與光"],          weight: 5 },
                { id: 5,  correct: 'B', skill: ["細胞功能與結構"],    weight: 5 },
                { id: 6,  correct: 'C', skill: ["人體器官功能"],      weight: 5 },
                { id: 7,  correct: 'C', skill: ["細胞功能與結構"],    weight: 5 },
                { id: 8,  correct: 'D', skill: ["生物的分類"],        weight: 5 },
                { id: 9,  correct: 'D', skill: ["生物的分類"],        weight: 5 },
                { id: 10, correct: 'C', skill: ["生物的分類"],        weight: 5 },
                { id: 11, correct: 'D', skill: ["聲波與光"],          weight: 5 },
                { id: 12, correct: 'C', skill: ["細胞功能與結構"],    weight: 5 },
                { id: 13, correct: 'B', skill: ["水溶液與濃度"],      weight: 5 },
                { id: 14, correct: 'C', skill: ["細胞功能與結構"],    weight: 5 },
                { id: 15, correct: 'C', skill: ["人體器官功能"],      weight: 5 },
                { id: 16, correct: 'D', skill: ["人體器官功能"],      weight: 5 },
                { id: 17, correct: 'A', skill: ["水溶液與濃度"],      weight: 5 },
                { id: 18, correct: 'B', skill: ["物質三態變化"],      weight: 5 },
                { id: 19, correct: 'A', skill: ["物質三態變化"],      weight: 5 },
                { id: 20, correct: 'C', skill: ["人體器官功能"],      weight: 5 },
                { id: 21, correct: 'C', skill: ["人體器官功能"],      weight: 5 },
                { id: 22, correct: 'B', skill: ["人體器官功能"],      weight: 5 },
                { id: 23, correct: 'A', skill: ["物質三態變化"],      weight: 5 },
                { id: 24, correct: 'B', skill: ["聲波與光"],          weight: 5 },
                { id: 25, correct: 'B', skill: ["生物的分類"],        weight: 5 },
                { id: 26, correct: 'C', skill: ["化學、物理變化"],    weight: 5 },
                { id: 27, correct: 'D', skill: ["人體器官功能"],      weight: 5 },
                { id: 28, correct: 'C', skill: ["聲波與光"],          weight: 5 },
                { id: 29, correct: 'D', skill: ["化學、物理變化"],    weight: 5 },
                { id: 30, correct: 'D', skill: ["聲波與光"],          weight: 5 },
                { id: 31, correct: 'B', skill: ["聲波與光"],          weight: 5 },
                { id: 32, correct: 'A', skill: ["生物的分類"],        weight: 5 },
                { id: 33, correct: 'C', skill: ["物質三態變化"],      weight: 5 },
                { id: 34, correct: 'A', skill: ["人體器官功能"],      weight: 5 },
                { id: 35, correct: 'C', skill: ["細胞功能與結構"],    weight: 5 },
                { id: 36, correct: 'B', skill: ["人體器官功能"],      weight: 5 },
                { id: 37, correct: 'C', skill: ["人體器官功能"],      weight: 5 },
                { id: 38, correct: 'D', skill: ["聲波與光"],          weight: 5 },
                { id: 39, correct: 'D', skill: ["生物的分類"],        weight: 5 },
                { id: 40, correct: 'A', skill: ["基因與遺傳"],        weight: 5 },
                { id: 41, correct: 'B', skill: ["聲波與光"],          weight: 5 },
                { id: 42, correct: 'D', skill: ["細胞功能與結構"],    weight: 5 },
                { id: 43, correct: 'C', skill: ["細胞功能與結構"],    weight: 5 },
                { id: 44, correct: 'B', skill: ["細胞功能與結構"],    weight: 5 },
                { id: 45, correct: 'B', skill: ["細胞功能與結構"],    weight: 5 },
                { id: 46, correct: 'B', skill: ["聲波與光"],          weight: 5 },
                { id: 47, correct: 'C', skill: ["聲波與光"],          weight: 5 },
                { id: 48, correct: 'D', skill: ["基因與遺傳"],        weight: 5 },
                { id: 49, correct: 'C', skill: ["基因與遺傳"],        weight: 5 },
                { id: 50, correct: 'B', skill: ["基因與遺傳"],        weight: 5 }
            ]
        },

        // =====================================================================
        // 社會（S）
        // =====================================================================
        "社會": {
            maxScore: 270, // 54 題，每題 5 分
            skills: [
                "區位認識",            // S-1
                "地球氣候",            // S-2
                "地形分布",            // S-3
                "文化特色",            // S-4
                "洋流與季風",          // S-5
                "自然災害",            // S-6
                "都市化人口組成",      // S-7
                "地圖判別",            // S-8
                "環境與永續",          // S-9
                "臺灣史的變遷",        // S-10
                "中國史演變",          // S-11
                "近代國民國史",        // S-12
                "世界古文明",          // S-13
                "普世宗教發展",        // S-14
                "歐洲革命",            // S-15
                "世界列強的殖民",      // S-16
                "一二次世界大戰",      // S-17
                "近代國際局勢",        // S-18
                "公民與權利",          // S-19
                "性別平權與家庭",      // S-20
                "多元文化與社會",      // S-21
                "國家的組織",          // S-22
                "政府的功能",          // S-23
                "法律與人權",          // S-24
                "自由市場經濟",        // S-25
                "金融與貨幣",          // S-26
                "全球化國際社會"       // S-27
            ],
            questions: [
                { id: 1,  correct: 'A', skill: ["地圖判別"],          weight: 5 },
                { id: 2,  correct: 'B', skill: ["區位認識"],          weight: 5 },
                { id: 3,  correct: 'C', skill: ["地形分布"],          weight: 5 },
                { id: 4,  correct: 'B', skill: ["地形分布"],          weight: 5 },
                { id: 5,  correct: 'B', skill: ["環境與永續"],        weight: 5 },
                { id: 6,  correct: 'B', skill: ["文化特色"],          weight: 5 },
                { id: 7,  correct: 'C', skill: ["臺灣史的變遷"],      weight: 5 },
                { id: 8,  correct: 'C', skill: ["世界列強的殖民"],    weight: 5 },
                { id: 9,  correct: 'D', skill: ["文化特色"],          weight: 5 },
                { id: 10, correct: 'D', skill: ["臺灣史的變遷"],      weight: 5 },
                { id: 11, correct: 'C', skill: ["公民與權利"],        weight: 5 },
                { id: 12, correct: 'C', skill: ["性別平權與家庭"],    weight: 5 },
                { id: 13, correct: 'B', skill: ["多元文化與社會"],    weight: 5 },
                { id: 14, correct: 'B', skill: ["性別平權與家庭"],    weight: 5 },
                { id: 15, correct: 'A', skill: ["多元文化與社會"],    weight: 5 },
                { id: 16, correct: 'D', skill: ["地形分布"],          weight: 5 },
                { id: 17, correct: 'B', skill: ["地形分布"],          weight: 5 },
                { id: 18, correct: 'C', skill: ["地圖判別"],          weight: 5 },
                { id: 19, correct: 'B', skill: ["地球氣候"],          weight: 5 },
                { id: 20, correct: 'A', skill: ["地圖判別"],          weight: 5 },
                { id: 21, correct: 'D', skill: ["臺灣史的變遷"],      weight: 5 },
                { id: 22, correct: 'C', skill: ["文化特色"],          weight: 5 },
                { id: 23, correct: 'B', skill: ["全球化國際社會"],    weight: 5 },
                { id: 24, correct: 'B', skill: ["全球化國際社會"],    weight: 5 },
                { id: 25, correct: 'B', skill: ["環境與永續"],        weight: 5 },
                { id: 26, correct: 'A', skill: ["文化特色"],          weight: 5 },
                { id: 27, correct: 'B', skill: ["多元文化與社會"],    weight: 5 },
                { id: 28, correct: 'D', skill: ["法律與人權"],        weight: 5 },
                { id: 29, correct: 'B', skill: ["多元文化與社會"],    weight: 5 },
                { id: 30, correct: 'C', skill: ["公民與權利"],        weight: 5 },
                { id: 31, correct: 'D', skill: ["地球氣候"],          weight: 5 },
                { id: 32, correct: 'D', skill: ["地球氣候"],          weight: 5 },
                { id: 33, correct: 'C', skill: ["都市化人口組成"],    weight: 5 },
                { id: 34, correct: 'A', skill: ["文化特色"],          weight: 5 },
                { id: 35, correct: 'B', skill: ["地形分布"],          weight: 5 },
                { id: 36, correct: 'B', skill: ["一二次世界大戰"],    weight: 5 },
                { id: 37, correct: 'C', skill: ["近代國民國史"],      weight: 5 },
                { id: 38, correct: 'D', skill: ["一二次世界大戰"],    weight: 5 },
                { id: 39, correct: 'C', skill: ["多元文化與社會"],    weight: 5 },
                { id: 40, correct: 'A', skill: ["性別平權與家庭"],    weight: 5 },
                { id: 41, correct: 'C', skill: ["多元文化與社會"],    weight: 5 },
                { id: 42, correct: 'C', skill: ["全球化國際社會"],    weight: 5 },
                { id: 43, correct: 'C', skill: ["公民與權利"],        weight: 5 },
                { id: 44, correct: 'D', skill: ["性別平權與家庭"],    weight: 5 },
                { id: 45, correct: 'B', skill: ["公民與權利"],        weight: 5 },

                { id: 46, correct: 'C', skill: ["文化特色"],          weight: 5 },
                { id: 47, correct: 'C', skill: ["都市化人口組成"],    weight: 5 },
                { id: 48, correct: 'A', skill: ["環境與永續"],        weight: 5 },
                { id: 49, correct: 'A', skill: ["近代國民國史"],      weight: 5 },
                { id: 50, correct: 'C', skill: ["環境與永續"],        weight: 5 },
                { id: 51, correct: 'A', skill: ["臺灣史的變遷"],      weight: 5 },
                { id: 52, correct: 'C', skill: ["多元文化與社會"],    weight: 5 },
                { id: 53, correct: 'B', skill: ["公民與權利"],        weight: 5 },
                { id: 54, correct: 'A', skill: ["多元文化與社會"],    weight: 5 }
            ]
        }
    }
};

// ------------------------------------------------------------
// 下方是年級 / 科目選擇與題目輸入欄位初始化邏輯
// 目前只有「國二」，但資料結構保留 allGradeData 方便未來擴充
// ------------------------------------------------------------

const DEFAULT_GRADE = "國二";
const DEFAULT_SUBJECT = "國文";

// 暴露給 script.js 使用的全域題庫變數
let quizData = null;

// 依目前 quizData，把題目輸入欄位畫在 #answers-form 裡
function initializeForm() {
    const answersForm = document.getElementById('answers-form');
    if (!answersForm) return;

    answersForm.innerHTML = '';

    if (!quizData || !quizData.questions) {
        answersForm.innerHTML =
            '<p style="text-align: center; color: #ff6666;">錯誤：找不到測驗數據！</p>';
        return;
    }

    quizData.questions.forEach((q) => {
        const skillsText = Array.isArray(q.skill)
            ? q.skill.join(' / ')
            : String(q.skill || '');

        const group = document.createElement('div');
        group.className = 'question-group';

        const label = document.createElement('label');
        label.htmlFor = `q${q.id}`;
        label.textContent = `第 ${q.id} 題`;
        label.title = skillsText; // 滑鼠移上去可看到知識點

        const input = document.createElement('input');
        input.type = 'text';
        input.id = `q${q.id}`;
        input.maxLength = 1;
        input.placeholder = 'A～E';
        input.autocomplete = 'off';
        input.className = 'answer-input';

        group.appendChild(label);
        group.appendChild(input);
        answersForm.appendChild(group);
    });

    // 方便一進來就可以直接作答
    const firstInput = answersForm.querySelector('.answer-input');
    if (firstInput) firstInput.focus();
}

document.addEventListener('DOMContentLoaded', () => {
    // 年級下拉選單：目前只保留「國二」
    const gradeSelect = document.getElementById('student-grade');
    if (gradeSelect) {
        gradeSelect.innerHTML = '';
        const opt = document.createElement('option');
        opt.value = DEFAULT_GRADE;
        opt.textContent = DEFAULT_GRADE;
        gradeSelect.appendChild(opt);
        gradeSelect.value = DEFAULT_GRADE;
    }

    const subjectSelect = document.getElementById('subject-name');
    if (!subjectSelect) return;

    // 目前只開「國二」這個年級的題庫
    const allSubjectData = allGradeData[DEFAULT_GRADE];

    // 建立科目下拉選單（國文／英文／數學／自然／社會）
    subjectSelect.innerHTML = '<option value="">選擇科目</option>';
    Object.keys(allSubjectData).forEach((subject) => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });

    // 預設選「國文」
    subjectSelect.value = DEFAULT_SUBJECT;
    quizData = allSubjectData[DEFAULT_SUBJECT];
    initializeForm();

    // 切換科目時，更新 quizData 並重畫輸入欄位
    subjectSelect.addEventListener('change', (e) => {
        const selectedSubject = e.target.value;

        if (!selectedSubject || !allSubjectData[selectedSubject]) {
            document.getElementById('answers-form').innerHTML =
                '<p style="text-align: center; color: #888;">請先選擇科目</p>';
            quizData = null;
            return;
        }

        quizData = allSubjectData[selectedSubject];
        initializeForm();
    });
});
