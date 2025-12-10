// =================================================================
// 輔助函數
// =================================================================
function getLevel(score) {
    if (score >= 80) {
        return `<span class="level-high">精通</span>`;
    } else if (score >= 60) {
        return `<span class="level-medium">熟練</span>`;
    } else {
        return `<span class="level-low">待加強</span>`;
    }
}

// 用在表格的背景顏色（熱力效果）
function getBackgroundColor(score) {
    const hue = Math.round((score / 100) * 120); // 0=紅,120=綠
    return `background-color: hsla(${hue}, 90%, 45%, 0.2);`;
}

// =================================================================
// 主函數：生成報告（不再產生雷達圖）
// =================================================================
function analyzeAndGenerateReport() {
    if (typeof quizData === 'undefined' || !quizData || !quizData.questions) {
        alert("錯誤：找不到測驗數據，請先選擇科目！");
        return;
    }

    // 1. 取得基本資料
    const subjectName = document.getElementById('subject-name').value;
    const studentName = document.getElementById('student-name').value.trim();
    const studentSchool = document.getElementById('student-school').value.trim();
    const studentGrade = document.getElementById('student-grade').value;
    const cramSchoolEl = document.getElementById('cram-school');
    const cramSchool = cramSchoolEl ? cramSchoolEl.value : '';

    if (!subjectName || !studentName || !studentSchool || !studentGrade || !cramSchool) {
        alert("請選擇科目、補習班名稱，並填寫完整的學生資訊！");
        return;
    }
    
    // 2. 收集答案：從所有 .answer-input 取出（按順序）
    const flowInputs = document.querySelectorAll('#answers-form .answer-input');
    let studentAnswers = '';
    
    flowInputs.forEach(input => {
        studentAnswers += (input.value || '').trim().toUpperCase();
    });

    if (studentAnswers.length < quizData.questions.length) {
        alert(`錯誤：尚未回答所有題目 (${studentAnswers.length}/${quizData.questions.length})，請檢查是否有遺漏！`);
        return;
    }

    // 3. 核心分數分析
    let totalScore = 0;
    let skillScores = {};     // 各知識點實得分
    let skillMaxScores = {};  // 各知識點滿分
    let skillWeights = {};    // 各知識點權重（目前等同滿分）

    quizData.skills.forEach(skill => {
        skillScores[skill] = 0;
        skillMaxScores[skill] = 0;
        skillWeights[skill] = 0;
    });

    quizData.questions.forEach((q, index) => {
        const userAnswer = studentAnswers[index];
        const numSkills = q.skill.length;
        const skillWeightContribution = q.weight / numSkills; 
        
        if (userAnswer === q.correct) {
            totalScore += q.weight; 
            q.skill.forEach(skill => {
                skillScores[skill] += skillWeightContribution;
            });
        }
        
        q.skill.forEach(skill => {
            skillMaxScores[skill] += skillWeightContribution;
            skillWeights[skill] += skillWeightContribution;
        });
    });

    // 4. 統整成每個知識點的百分比
    const skillRawData = quizData.skills.map(skill => {
        const score = skillScores[skill];
        const maxScore = skillMaxScores[skill] || 1; 
        const percentage = Math.round((score / maxScore) * 100);
        return {
            name: skill,
            score,
            maxScore,
            percentage,
            level: getLevel(percentage)
        };
    });

    const overallScore = totalScore;

    // 依知識點名稱排序，填表用
    const skillDataForTable = skillRawData
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name, 'zh-Hant'));

    let tableBodyHtml = '';
    for (let i = 0; i < skillDataForTable.length; i += 2) {
        const item1 = skillDataForTable[i];
        const item2 = skillDataForTable[i + 1];

        const color1 = getBackgroundColor(item1.percentage);
        const color2 = item2 ? getBackgroundColor(item2.percentage) : '';

        let rowHtml = '<tr>';
        rowHtml += `
            <td class="skill-name" style="${color1}">${item1.name} (${item1.percentage}%)</td>
            <td>${item1.level}</td>
        `;
        if (item2) {
            rowHtml += `
                <td class="skill-name" style="${color2}">${item2.name} (${item2.percentage}%)</td>
                <td>${item2.level}</td>
            `;
        } else {
            rowHtml += '<td></td><td></td>';
        }
        rowHtml += '</tr>';
        tableBodyHtml += rowHtml;
    }

    // 5. 更新報告內容（基本資料）
    const studentInfo = `
        <div>科目：${subjectName}</div>
        <div>姓名：${studentName}</div>
        <div>年級：${studentGrade}</div>
        <div>學校：${studentSchool}</div>
    `;
    document.getElementById('student-info-display').innerHTML = studentInfo;

    // 補習班標籤：小字「補習班名稱＋文理」
    const cramLabelEl = document.getElementById('cram-school-label');
    if (cramLabelEl) {
        cramLabelEl.innerHTML = `<span class="cram-school-label-text">${cramSchool}文理</span>`;
    }

    document.getElementById('report-subject-title').innerText =
        `${subjectName}學科能力深度評估報告`;
    document.getElementById('h3-knowledge-analysis').innerText =
        `:: 知識點熟練度分析 ::`;
    
    document.getElementById('score-summary').innerHTML = `
        <p>總學科能力分數</p>
        <div class="score">${overallScore}</div>
    `;

    const skillTableBody = document.getElementById('skill-table-body-two-columns');
    if (skillTableBody) {
        skillTableBody.innerHTML = tableBodyHtml;
    }

    // 6. 產生「綜合能力評語」──改為正常句子，不再有奇怪符號
    const strongSkills = skillRawData
        .filter(s => s.percentage >= 80)
        .map(s => s.name);
    const weakSkills = skillRawData
        .filter(s => s.percentage < 60)
        .map(s => s.name);

    let assessmentText = `本次 ${subjectName} 測驗，總分為 ${overallScore} 分。`;

    if (strongSkills.length > 0) {
        assessmentText += ` 表現較佳的領域有：${strongSkills.join("、")}。`;
    }

    if (weakSkills.length > 0) {
        assessmentText += ` 建議優先加強：${weakSkills.join("、")}，可從題目解析與相關練習著手，加強解題觀念。`;
    } else {
        assessmentText += ` 各知識點掌握度均達到及格以上，建議持續維持穩定練習，以鞏固既有實力。`;
    }

    document.getElementById('assessment-message').innerText = assessmentText;

    // 7. 顯示報告頁面
    document.getElementById('input-container').classList.add('hidden');
    document.getElementById('report-container').classList.remove('hidden');
    document.getElementById('report-container').scrollIntoView({ behavior: 'smooth' });
}

// =================================================================
// 答案輸入欄位自動跳格（A～E）
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    const answersForm = document.getElementById('answers-form');
    if (!answersForm) return;

    document.addEventListener('input', (event) => {
        const target = event.target;
        if (!target.classList.contains('answer-input')) return;

        const val = target.value.toUpperCase();
        if (val.length === 1 && /[A-E]/.test(val)) {
            target.value = val;
            const inputs = Array.from(document.querySelectorAll('#answers-form .answer-input'));
            const index = inputs.indexOf(target);
            const next = inputs[index + 1];

            if (next) {
                next.focus();
                next.select();
            } else {
                // 最後一題 → 跳到按鈕
                const btn = document.getElementById('generate-report-btn');
                if (btn) btn.focus();
            }
        }
    });
});
