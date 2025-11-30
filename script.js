// 知識點統計容器
let knowledgePointsStats = {};
// 【新增】全局變數儲存圖表實例，用於銷毀舊圖表
let radarChartInstance = null;

// A. 初始化：根據 QUIZ_DATA 生成答案輸入框 (保持不變)
document.addEventListener('DOMContentLoaded', () => {
    const answersForm = document.getElementById('answers-form');
    QUIZ_DATA.forEach(item => {
        const div = document.createElement('div');
        div.className = 'answer-input-group';
        div.innerHTML = `
            <label for="ans-${item.id}">題號 ${item.id} (${item.points}分, 知識點: ${item.knowledgePoints.join(', ')})</label>
            <input type="text" id="ans-${item.id}" data-qid="${item.id}" placeholder="請輸入答案 (如 A)">
        `;
        answersForm.appendChild(div);
    });
});

// B. 核心分析函數
function analyzeAndGenerateReport() {
    // 1. 獲取學生輸入 (保持不變)
    const studentName = document.getElementById('student-name').value;
    const studentSchool = document.getElementById('student-school').value;
    const studentGrade = document.getElementById('student-grade').value;

    const studentAnswers = {};
    QUIZ_DATA.forEach(item => {
        const input = document.getElementById(`ans-${item.id}`);
        if (input && input.value) {
            studentAnswers[item.id.toString()] = input.value.toUpperCase().trim();
        }
    });

    if (!studentName || !studentSchool || !studentGrade || Object.keys(studentAnswers).length !== QUIZ_DATA.length) {
        alert("請確保所有學生資訊和所有題目答案都已填寫！");
        return;
    }

    // 2. 進行評分與知識點分析 (保持不變)
    let totalScore = 0;
    knowledgePointsStats = {}; 
    const totalMaxScore = QUIZ_DATA.reduce((sum, item) => sum + item.points, 0);

    ALL_KNOWLEDGE_POINTS.forEach(kp => {
        knowledgePointsStats[kp] = { attempted: 0, correct: 0, score: 0, maxScore: 0 };
    });

    QUIZ_DATA.forEach(item => {
        const studentAns = studentAnswers[item.id.toString()];
        const isCorrect = (studentAns === item.correctAnswer);

        if (isCorrect) {
            totalScore += item.points;
        }

        item.knowledgePoints.forEach(kp => {
            if (knowledgePointsStats[kp]) {
                knowledgePointsStats[kp].attempted += 1;
                knowledgePointsStats[kp].maxScore += item.points;
                if (isCorrect) {
                    knowledgePointsStats[kp].correct += 1;
                    knowledgePointsStats[kp].score += item.points;
                }
            }
        });
    });

    // 3. 判斷熟練度等級和生成綜合評語 (保持不變)
    const knowledgeAnalysisHTML = generateKnowledgeAnalysisHTML(knowledgePointsStats);
    const assessmentMessage = generateAssessmentMessage(totalScore, totalMaxScore);

    // 4. 渲染成績單基礎內容
    renderReport(studentName, studentSchool, studentGrade, totalScore, totalMaxScore, knowledgeAnalysisHTML, assessmentMessage);

    // 【新增】 5. 準備數據並渲染雷達圖
    const chartLabels = [];
    const chartData = [];
    ALL_KNOWLEDGE_POINTS.forEach(kp => {
        chartLabels.push(kp);
        // 計算百分比 (0-100)
        const stat = knowledgePointsStats[kp];
        const percentage = stat.maxScore > 0 ? (stat.score / stat.maxScore) * 100 : 0;
        chartData.push(percentage.toFixed(1));
    });
    renderRadarChart(chartLabels, chartData);
}


// C. 渲染成績單 HTML (保持不變)
function renderReport(name, school, grade, score, maxScore, analysisHTML, assessmentMsg) {
    document.getElementById('student-info-display').innerHTML = `
        <div><strong>姓名:</strong> ${name}</div>
        <div><strong>學校:</strong> ${school}</div>
        <div><strong>年級:</strong> ${grade}</div>
    `;

    document.getElementById('score-summary').innerHTML = `
        <h4>總學科能力分數</h4>
        <div class="score">${score} / ${maxScore}</div>
        <p>本次測驗得分率: ${((score / maxScore) * 100).toFixed(1)}%</p>
    `;

    document.getElementById('skill-chart').innerHTML = analysisHTML;
    document.getElementById('assessment-message').innerHTML = assessmentMsg;

    document.getElementById('input-container').classList.add('hidden');
    document.getElementById('report-container').classList.remove('hidden');
}

// 【新增】 F. 渲染雷達圖函數
function renderRadarChart(labels, data) {
    const ctx = document.getElementById('skillRadarChart').getContext('2d');

    // 如果已經存在圖表實例，先銷毀它，防止重疊
    if (radarChartInstance) {
        radarChartInstance.destroy();
    }

    // Chart.js 配置
    radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: '知識點熟練度 (%)',
                data: data,
                // 螢幕顯示：科技感螢光藍填充和邊框
                backgroundColor: 'rgba(0, 240, 255, 0.3)', 
                borderColor: '#00f0ff',
                pointBackgroundColor: '#00f0ff',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#00f0ff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // 允許我們透過 CSS 控制高度
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(201, 209, 217, 0.3)' // 網格線顏色 (適應深色和淺色背景)
                    },
                    grid: {
                        color: 'rgba(201, 209, 217, 0.3)' // 環形網格顏色
                    },
                    pointLabels: {
                        color: '#8b949e', // 標籤文字顏色 (適應深色和淺色背景)
                        font: {
                            size: 12
                        }
                    },
                    ticks: {
                        beginAtZero: true,
                        max: 100, // 最大值固定為 100%
                        stepSize: 20, // 刻度間隔
                        color: '#8b949e', // 刻度數字顏色
                        backdropColor: 'transparent' // 刻度背景透明
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // 隱藏圖例，讓畫面更簡潔
                }
            }
        }
    });
}


// D. 知識點分析 HTML 生成 (保持不變)
function generateKnowledgeAnalysisHTML(stats) {
    let html = `
        <table class="skill-table">
            <thead>
                <tr>
                    <th>知識點名稱 (KP)</th>
                    <th>總配分</th>
                    <th>實得分數</th>
                    <th>熟練度 (%)</th>
                    <th>熟練度等級</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (const kp in stats) {
        const stat = stats[kp];
        const proficiency = stat.maxScore > 0 ? (stat.score / stat.maxScore) : 0;
        const proficiencyPercent = (proficiency * 100).toFixed(0);
        const level = getProficiencyLevel(proficiency);

        html += `
            <tr>
                <td>${kp}</td>
                <td>${stat.maxScore} 分</td>
                <td>${stat.score} 分</td>
                <td>${proficiencyPercent}%</td>
                <td class="level-${level.class}">${level.text}</td>
            </tr>
        `;
    }

    html += `
            </tbody>
        </table>
    `;
    return html;
}

// 根據百分比返回熟練度等級 (保持不變)
function getProficiencyLevel(ratio) {
    if (ratio >= 0.85) {
        return { text: "精通 (Master)", class: "high" };
    } else if (ratio >= 0.60) {
        return { text: "掌握 (Proficient)", class: "medium" };
    } else {
        return { text: "待加強 (Need Improvement)", class: "low" };
    }
}


// E. 綜合能力評語生成 (保持不變)
function generateAssessmentMessage(score, maxScore) {
    const ratio = score / maxScore;
    let message = "";

    if (ratio >= 0.9) {
        message = "評語: **學科能力卓越**，顯示出對所有知識點的深度理解和應用能力，建議多挑戰高難度複雜題型。";
    } else if (ratio >= 0.75) {
        message = "評語: **學科能力優良**，基礎知識紮實，少數知識點表現略有波動。建議針對性地複習得分率較低的知識模塊。";
    } else if (ratio >= 0.6) {
        message = "評語: **學科能力合格**，已掌握大部分基礎內容，但在複雜運算和綜合題型上仍需加強訓練，以鞏固熟練度。";
    } else {
        message = "評語: **學科能力待加強**，部分核心知識點掌握不牢固，建議從基礎概念開始，全面梳理知識體系。";
    }

    const lowestSkill = ALL_KNOWLEDGE_POINTS.reduce((min, kp) => {
        const stat = knowledgePointsStats[kp];
        const ratio = stat.maxScore > 0 ? (stat.score / stat.maxScore) : 1;
        if (ratio < min.ratio) {
            return { name: kp, ratio: ratio };
        }
        return min;
    }, { name: "", ratio: 1 });
    
    if (lowestSkill.ratio < 0.5 && lowestSkill.name) {
        message += `<br><br>特別提醒：您在「**${lowestSkill.name}**」知識點的得分率最低 (${(lowestSkill.ratio * 100).toFixed(0)}%)，這是您目前最需要優先加強的部分。`;
    }

    return message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}