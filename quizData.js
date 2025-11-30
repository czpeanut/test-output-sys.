// 測驗數據結構：定義每道題的正確答案、分數和相關知識點
const QUIZ_DATA = [
    {
        id: 1,
        correctAnswer: "B",
        points: 5,
        knowledgePoints: ["三角函數", "角度轉換"]
    },
    {
        id: 2,
        correctAnswer: "D",
        points: 4,
        knowledgePoints: ["代數運算", "不等式"]
    },
    {
        id: 3,
        correctAnswer: "A",
        points: 6,
        knowledgePoints: ["幾何證明", "面積計算"]
    },
    {
        id: 4,
        correctAnswer: "C",
        points: 5,
        knowledgePoints: ["機率論", "排列組合"]
    },
    {
        id: 5,
        correctAnswer: "B",
        points: 4,
        knowledgePoints: ["方程式求解", "函數圖形"]
    }
    // 請在此處繼續新增或修改您的題目數據
];

// 從 QUIZ_DATA 中自動提取並去重所有知識點
const ALL_KNOWLEDGE_POINTS = Array.from(
    new Set(
        QUIZ_DATA.flatMap(item => item.knowledgePoints)
    )
);