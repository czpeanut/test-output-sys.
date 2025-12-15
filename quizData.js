// quizData.js - 依「114 國二寒訓模擬考 知識點對照表」建置資料，並加入年級層級
// 目前只提供「國二」，結構已預留擴充。

const allGradeData = {
  "國二": {
    // ======================= 國文 =======================
    "國文": {
      maxScore: 210, // 42 題 × 5 分
      skills: [
        "基本詞義","語句的種類","語法的類型","節氣氣候","字音字形","修辭手法",
        "成語應用","書信格式","標點符號","古典詩詞賞析","文意文閱讀測驗",
        "分析圖表文章","散文閱讀理解","古典詩詞格式","現代詩詞解讀"
      ],
      questions: [
        { id:1, correct:'D', skill:["現代詩詞解讀"], weight:5 },
        { id:2, correct:'C', skill:["字音字形"], weight:5 },
        { id:3, correct:'B', skill:["語法的類型"], weight:5 },
        { id:4, correct:'B', skill:["語句的種類"], weight:5 },
        { id:5, correct:'D', skill:["語句的種類"], weight:5 },
        { id:6, correct:'D', skill:["字音字形"], weight:5 },
        { id:7, correct:'B', skill:["標點符號"], weight:5 },
        { id:8, correct:'A', skill:["古典詩詞格式"], weight:5 },
        { id:9, correct:'C', skill:["基本詞義"], weight:5 },
        { id:10, correct:'B', skill:["節氣氣候"], weight:5 },
        { id:11, correct:'A', skill:["修辭手法"], weight:5 },
        { id:12, correct:'D', skill:["語句的種類"], weight:5 },
        { id:13, correct:'B', skill:["語法的類型"], weight:5 },
        { id:14, correct:'B', skill:["字音字形"], weight:5 },
        { id:15, correct:'D', skill:["散文閱讀理解"], weight:5 },
        { id:16, correct:'D', skill:["散文閱讀理解"], weight:5 },
        { id:17, correct:'C', skill:["古典詩詞格式"], weight:5 },
        { id:18, correct:'B', skill:["語句的種類"], weight:5 },
        { id:19, correct:'D', skill:["文意文閱讀測驗"], weight:5 },
        { id:20, correct:'C', skill:["語句的種類"], weight:5 },
        { id:21, correct:'C', skill:["語句的種類"], weight:5 },
        { id:22, correct:'C', skill:["修辭手法"], weight:5 },
        { id:23, correct:'B', skill:["古典詩詞賞析"], weight:5 },
        { id:24, correct:'C', skill:["古典詩詞賞析"], weight:5 },
        { id:25, correct:'B', skill:["文意文閱讀測驗"], weight:5 },
        { id:26, correct:'B', skill:["文意文閱讀測驗"], weight:5 },
        { id:27, correct:'A', skill:["文意文閱讀測驗"], weight:5 },
        { id:28, correct:'A', skill:["散文閱讀理解"], weight:5 },
        { id:29, correct:'D', skill:["散文閱讀理解"], weight:5 },
        { id:30, correct:'B', skill:["散文閱讀理解"], weight:5 },
        { id:31, correct:'C', skill:["散文閱讀理解"], weight:5 },
        { id:32, correct:'A', skill:["散文閱讀理解"], weight:5 },
        { id:33, correct:'D', skill:["節氣氣候"], weight:5 },
        { id:34, correct:'D', skill:["散文閱讀理解"], weight:5 },
        { id:35, correct:'C', skill:["散文閱讀理解"], weight:5 },
        { id:36, correct:'B', skill:["散文閱讀理解"], weight:5 },
        { id:37, correct:'A', skill:["成語應用"], weight:5 },
        { id:38, correct:'B', skill:["文意文閱讀測驗"], weight:5 },
        { id:39, correct:'D', skill:["成語應用"], weight:5 },
        { id:40, correct:'A', skill:["文意文閱讀測驗"], weight:5 },
        { id:41, correct:'B', skill:["文意文閱讀測驗"], weight:5 },
        { id:42, correct:'B', skill:["文意文閱讀測驗"], weight:5 }
      ]
    },

    // ======================= 英文 =======================
    "英文": {
      maxScore: 215, // 43 題 × 5 分
      skills: [
        "句型結構","常用介詞","動詞時態","基本字彙","冠詞使用規則","名詞單複數",
        "形容詞與副詞","比較級與最高級","連接詞種類","疑問句結構","否定句型結構",
        "關係代名詞","文章閱讀理解","助動詞使用規則","動名詞應用"
      ],
      questions: [
        {id:1,correct:'A',skill:["基本字彙"],weight:5},{id:2,correct:'A',skill:["基本字彙"],weight:5},
        {id:3,correct:'A',skill:["句型結構"],weight:5},{id:4,correct:'C',skill:["基本字彙"],weight:5},
        {id:5,correct:'D',skill:["常用介詞"],weight:5},{id:6,correct:'C',skill:["基本字彙"],weight:5},
        {id:7,correct:'D',skill:["基本字彙"],weight:5},{id:8,correct:'D',skill:["基本字彙"],weight:5},
        {id:9,correct:'A',skill:["句型結構"],weight:5},{id:10,correct:'B',skill:["基本字彙"],weight:5},
        {id:11,correct:'B',skill:["基本字彙"],weight:5},{id:12,correct:'B',skill:["動詞時態"],weight:5},
        {id:13,correct:'D',skill:["基本字彙"],weight:5},{id:14,correct:'D',skill:["句型結構"],weight:5},
        {id:15,correct:'C',skill:["基本字彙"],weight:5},{id:16,correct:'A',skill:["基本字彙"],weight:5},
        {id:17,correct:'B',skill:["疑問句結構"],weight:5},{id:18,correct:'C',skill:["句型結構"],weight:5},
        {id:19,correct:'D',skill:["基本字彙"],weight:5},{id:20,correct:'B',skill:["基本字彙"],weight:5},
        {id:21,correct:'C',skill:["文章閱讀理解"],weight:5},{id:22,correct:'B',skill:["基本字彙"],weight:5},
        {id:23,correct:'D',skill:["文章閱讀理解"],weight:5},{id:24,correct:'B',skill:["文章閱讀理解"],weight:5},
        {id:25,correct:'A',skill:["文章閱讀理解"],weight:5},{id:26,correct:'B',skill:["文章閱讀理解"],weight:5},
        {id:27,correct:'C',skill:["文章閱讀理解"],weight:5},{id:28,correct:'C',skill:["文章閱讀理解"],weight:5},
        {id:29,correct:'A',skill:["文章閱讀理解"],weight:5},{id:30,correct:'C',skill:["文章閱讀理解"],weight:5},
        {id:31,correct:'D',skill:["文章閱讀理解"],weight:5},{id:32,correct:'A',skill:["文章閱讀理解"],weight:5},
        {id:33,correct:'C',skill:["文章閱讀理解"],weight:5},{id:34,correct:'D',skill:["文章閱讀理解"],weight:5},
        {id:35,correct:'C',skill:["文章閱讀理解"],weight:5},{id:36,correct:'D',skill:["文章閱讀理解"],weight:5},
        {id:37,correct:'C',skill:["文章閱讀理解"],weight:5},{id:38,correct:'A',skill:["文章閱讀理解"],weight:5},
        {id:39,correct:'B',skill:["文章閱讀理解"],weight:5},{id:40,correct:'C',skill:["文章閱讀理解"],weight:5},
        {id:41,correct:'D',skill:["文章閱讀理解"],weight:5},{id:42,correct:'D',skill:["文章閱讀理解"],weight:5},
        {id:43,correct:'C',skill:["文章閱讀理解"],weight:5}
      ]
    },

    // ======================= 數學（僅選擇題 25 題） =======================
    "數學": {
      maxScore: 125, // 25 題 × 5 分；非選題未納入
      skills: [
        "數的運算","多項式化簡運算","方程式列式","比例性質","等式不等式求解",
        "函數圖形判別","數列規則","角的性質","平行線判別","四邊形性質",
        "尺規作圖","全等與相似","平面座標","圓的性質","三心應用",
        "圖表判定","統計資料","機率計算","因倍質數"
      ],
      questions: [
        {id:1,correct:'C',skill:["數的運算"],weight:5},{id:2,correct:'A',skill:["數的運算"],weight:5},
        {id:3,correct:'C',skill:["圖表判定"],weight:5},{id:4,correct:'D',skill:["因倍質數"],weight:5},
        {id:5,correct:'A',skill:["比例性質"],weight:5},{id:6,correct:'B',skill:["圖表判定"],weight:5},
        {id:7,correct:'C',skill:["等式不等式求解"],weight:5},{id:8,correct:'B',skill:["因倍質數"],weight:5},
        {id:9,correct:'D',skill:["函數圖形判別"],weight:5},{id:10,correct:'C',skill:["平面座標"],weight:5},
        {id:11,correct:'B',skill:["函數圖形判別"],weight:5},{id:12,correct:'A',skill:["等式不等式求解"],weight:5},
        {id:13,correct:'D',skill:["統計資料"],weight:5},{id:14,correct:'C',skill:["等式不等式求解"],weight:5},
        {id:15,correct:'A',skill:["比例性質"],weight:5},{id:16,correct:'C',skill:["因倍質數"],weight:5},
        {id:17,correct:'D',skill:["方程式列式"],weight:5},{id:18,correct:'D',skill:["平面座標"],weight:5},
        {id:19,correct:'B',skill:["統計資料"],weight:5},{id:20,correct:'B',skill:["等式不等式求解"],weight:5},
        {id:21,correct:'B',skill:["等式不等式求解"],weight:5},{id:22,correct:'A',skill:["統計資料"],weight:5},
        {id:23,correct:'A',skill:["比例性質"],weight:5},{id:24,correct:'B',skill:["數的運算"],weight:5},
        {id:25,correct:'D',skill:["等式不等式求解"],weight:5}
      ]
    },

    // ======================= 自然 =======================
    "自然": {
      maxScore: 250, // 50 題 × 5 分
      skills: [
        "牛頓運動定律","速度加速度","電磁力","基本電學","力與摩擦力","壓力與浮力",
        "物質三態變化","元素化合物","聲波與光","原子結構與特性","化學、物理變化",
        "化學反應方程式","原子量分子量","氧化還原與酸鹼","水溶液與濃度","細胞功能與結構",
        "基因與遺傳","生物的分類","人體器官功能","生態與食物鏈","地球結構與層次",
        "岩石種類與形成","天氣與氣候","地球月亮與太陽","水,碳,氧的循環"
      ],
      questions: [
        {id:1,correct:'C',skill:["聲波與光"],weight:5},{id:2,correct:'D',skill:["人體器官功能"],weight:5},
        {id:3,correct:'A',skill:["細胞功能與結構"],weight:5},{id:4,correct:'C',skill:["聲波與光"],weight:5},
        {id:5,correct:'B',skill:["細胞功能與結構"],weight:5},{id:6,correct:'C',skill:["人體器官功能"],weight:5},
        {id:7,correct:'C',skill:["細胞功能與結構"],weight:5},{id:8,correct:'D',skill:["生物的分類"],weight:5},
        {id:9,correct:'D',skill:["生物的分類"],weight:5},{id:10,correct:'C',skill:["生物的分類"],weight:5},
        {id:11,correct:'D',skill:["聲波與光"],weight:5},{id:12,correct:'C',skill:["細胞功能與結構"],weight:5},
        {id:13,correct:'B',skill:["水溶液與濃度"],weight:5},{id:14,correct:'C',skill:["細胞功能與結構"],weight:5},
        {id:15,correct:'C',skill:["人體器官功能"],weight:5},{id:16,correct:'D',skill:["人體器官功能"],weight:5},
        {id:17,correct:'A',skill:["水溶液與濃度"],weight:5},{id:18,correct:'B',skill:["物質三態變化"],weight:5},
        {id:19,correct:'A',skill:["物質三態變化"],weight:5},{id:20,correct:'C',skill:["人體器官功能"],weight:5},
        {id:21,correct:'C',skill:["人體器官功能"],weight:5},{id:22,correct:'B',skill:["人體器官功能"],weight:5},
        {id:23,correct:'A',skill:["物質三態變化"],weight:5},{id:24,correct:'B',skill:["聲波與光"],weight:5},
        {id:25,correct:'B',skill:["生物的分類"],weight:5},{id:26,correct:'C',skill:["化學、物理變化"],weight:5},
        {id:27,correct:'D',skill:["人體器官功能"],weight:5},{id:28,correct:'C',skill:["聲波與光"],weight:5},
        {id:29,correct:'D',skill:["化學、物理變化"],weight:5},{id:30,correct:'D',skill:["聲波與光"],weight:5},
        {id:31,correct:'B',skill:["聲波與光"],weight:5},{id:32,correct:'A',skill:["生物的分類"],weight:5},
        {id:33,correct:'C',skill:["物質三態變化"],weight:5},{id:34,correct:'A',skill:["人體器官功能"],weight:5},
        {id:35,correct:'C',skill:["細胞功能與結構"],weight:5},{id:36,correct:'B',skill:["人體器官功能"],weight:5},
        {id:37,correct:'C',skill:["人體器官功能"],weight:5},{id:38,correct:'D',skill:["聲波與光"],weight:5},
        {id:39,correct:'D',skill:["生物的分類"],weight:5},{id:40,correct:'A',skill:["基因與遺傳"],weight:5},
        {id:41,correct:'B',skill:["聲波與光"],weight:5},{id:42,correct:'D',skill:["細胞功能與結構"],weight:5},
        {id:43,correct:'C',skill:["細胞功能與結構"],weight:5},{id:44,correct:'B',skill:["細胞功能與結構"],weight:5},
        {id:45,correct:'B',skill:["細胞功能與結構"],weight:5},{id:46,correct:'B',skill:["聲波與光"],weight:5},
        {id:47,correct:'C',skill:["聲波與光"],weight:5},{id:48,correct:'D',skill:["基因與遺傳"],weight:5},
        {id:49,correct:'C',skill:["基因與遺傳"],weight:5},{id:50,correct:'B',skill:["基因與遺傳"],weight:5}
      ]
    },

    // ======================= 社會 =======================
    "社會": {
      maxScore: 270, // 54 題 × 5 分
      skills: [
        "區位認識","地球氣候","地形分布","文化特色","洋流與季風","自然災害",
        "都市化人口組成","地圖判別","環境與永續","臺灣史的變遷","中國史演變",
        "近代國民國史","世界古文明","普世宗教發展","歐洲革命","世界列強的殖民",
        "一二次世界大戰","近代國際局勢","公民與權利","性別平權與家庭","多元文化與社會",
        "國家的組織","政府的功能","法律與人權","自由市場經濟","金融與貨幣","全球化國際社會"
      ],
      questions: [
        {id:1,correct:'A',skill:["地圖判別"],weight:5},{id:2,correct:'B',skill:["區位認識"],weight:5},
        {id:3,correct:'C',skill:["地形分布"],weight:5},{id:4,correct:'B',skill:["地形分布"],weight:5},
        {id:5,correct:'B',skill:["環境與永續"],weight:5},{id:6,correct:'B',skill:["文化特色"],weight:5},
        {id:7,correct:'C',skill:["臺灣史的變遷"],weight:5},{id:8,correct:'C',skill:["世界列強的殖民"],weight:5},
        {id:9,correct:'D',skill:["文化特色"],weight:5},{id:10,correct:'D',skill:["臺灣史的變遷"],weight:5},
        {id:11,correct:'C',skill:["公民與權利"],weight:5},{id:12,correct:'C',skill:["性別平權與家庭"],weight:5},
        {id:13,correct:'B',skill:["多元文化與社會"],weight:5},{id:14,correct:'B',skill:["性別平權與家庭"],weight:5},
        {id:15,correct:'A',skill:["多元文化與社會"],weight:5},{id:16,correct:'D',skill:["地形分布"],weight:5},
        {id:17,correct:'B',skill:["地形分布"],weight:5},{id:18,correct:'C',skill:["地圖判別"],weight:5},
        {id:19,correct:'B',skill:["地球氣候"],weight:5},{id:20,correct:'A',skill:["地圖判別"],weight:5},
        {id:21,correct:'D',skill:["臺灣史的變遷"],weight:5},{id:22,correct:'C',skill:["文化特色"],weight:5},
        {id:23,correct:'B',skill:["全球化國際社會"],weight:5},{id:24,correct:'B',skill:["全球化國際社會"],weight:5},
        {id:25,correct:'B',skill:["環境與永續"],weight:5},{id:26,correct:'A',skill:["文化特色"],weight:5},
        {id:27,correct:'B',skill:["多元文化與社會"],weight:5},{id:28,correct:'D',skill:["法律與人權"],weight:5},
        {id:29,correct:'B',skill:["多元文化與社會"],weight:5},{id:30,correct:'C',skill:["公民與權利"],weight:5},
        {id:31,correct:'D',skill:["地球氣候"],weight:5},{id:32,correct:'D',skill:["地球氣候"],weight:5},
        {id:33,correct:'C',skill:["都市化人口組成"],weight:5},{id:34,correct:'A',skill:["文化特色"],weight:5},
        {id:35,correct:'B',skill:["地形分布"],weight:5},{id:36,correct:'B',skill:["一二次世界大戰"],weight:5},
        {id:37,correct:'C',skill:["近代國民國史"],weight:5},{id:38,correct:'D',skill:["一二次世界大戰"],weight:5},
        {id:39,correct:'C',skill:["多元文化與社會"],weight:5},{id:40,correct:'A',skill:["性別平權與家庭"],weight:5},
        {id:41,correct:'C',skill:["多元文化與社會"],weight:5},{id:42,correct:'C',skill:["全球化國際社會"],weight:5},
        {id:43,correct:'C',skill:["公民與權利"],weight:5},{id:44,correct:'D',skill:["性別平權與家庭"],weight:5},
        {id:45,correct:'B',skill:["公民與權利"],weight:5},{id:46,correct:'C',skill:["文化特色"],weight:5},
        {id:47,correct:'C',skill:["都市化人口組成"],weight:5},{id:48,correct:'A',skill:["環境與永續"],weight:5},
        {id:49,correct:'A',skill:["近代國民國史"],weight:5},{id:50,correct:'C',skill:["環境與永續"],weight:5},
        {id:51,correct:'A',skill:["臺灣史的變遷"],weight:5},{id:52,correct:'C',skill:["多元文化與社會"],weight:5},
        {id:53,correct:'B',skill:["公民與權利"],weight:5},{id:54,correct:'A',skill:["多元文化與社會"],weight:5}
      ]
    }
  }
};

// =============== 題目輸入欄位初始化（由本檔建立） ===============
const DEFAULT_GRADE = "國二";
const DEFAULT_SUBJECT = "國文";
let quizData = null;

function initializeForm() {
  const answersForm = document.getElementById('answers-form');
  if (!answersForm) return;

  answersForm.innerHTML = '';

  if (!quizData || !quizData.questions) {
    answersForm.innerHTML = '<p style="text-align:center;color:#ff6666;">錯誤：找不到測驗數據！</p>';
    return;
  }

  quizData.questions.forEach((q) => {
    const skillsText = Array.isArray(q.skill) ? q.skill.join(' / ') : String(q.skill || '');
    const group = document.createElement('div');
    group.className = 'question-group';

    const label = document.createElement('label');
    label.htmlFor = `q${q.id}`;
    label.textContent = `第 ${q.id} 題`;
    label.title = skillsText;

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

  const firstInput = answersForm.querySelector('.answer-input');
  if (firstInput) firstInput.focus();
}

document.addEventListener('DOMContentLoaded', () => {
  // 年級固定「國二」
  const gradeSelect = document.getElementById('student-grade');
  if (gradeSelect) {
    gradeSelect.innerHTML = '';
    const opt = document.createElement('option');
    opt.value = DEFAULT_GRADE;
    opt.textContent = DEFAULT_GRADE;
    gradeSelect.appendChild(opt);
  }

  // 科目下拉
  const subjectSelect = document.getElementById('subject-name');
  if (!subjectSelect) return;

  const allSubjectData = allGradeData[DEFAULT_GRADE];
  subjectSelect.innerHTML = '<option value="">選擇科目</option>';
  Object.keys(allSubjectData).forEach((subject) => {
    const option = document.createElement('option');
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });

  subjectSelect.value = DEFAULT_SUBJECT;
  quizData = allSubjectData[DEFAULT_SUBJECT];
  initializeForm();

  subjectSelect.addEventListener('change', (e) => {
    const selectedSubject = e.target.value;
    if (!selectedSubject || !allSubjectData[selectedSubject]) {
      document.getElementById('answers-form').innerHTML =
        '<p style="text-align:center;color:#888;">請先選擇科目</p>';
      quizData = null;
      return;
    }
    quizData = allSubjectData[selectedSubject];
    initializeForm();
  });
});
