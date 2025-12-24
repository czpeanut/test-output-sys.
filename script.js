// script.js - 分析、等級判定、成績單渲染（無雷達圖）

// ====== 熟練度標籤（知識點用；與 PDF 等級無關）======
function getLevel(percentage) {
  if (percentage >= 80) return `<span class="level-high">精通</span>`;
  if (percentage >= 60) return `<span class="level-medium">熟練</span>`;
  return `<span class="level-low">待加強</span>`;
}

// 知識點百分比對應的淺色背景（熱力感）
function getBackgroundColor(percentage) {
  const hue = Math.round((percentage / 100) * 120); // 0=紅, 120=綠
  return `background-color: hsla(${hue}, 90%, 45%, 0.20);`;
}

/**
 * ====== 等級級距判定（支援「每個測驗」各自一套級距）======
 *
 * 優先使用：allGradeData[studentGrade].gradeBands[subjectName]
 *  - 支援兩種模式：
 *    1) mode: "correct"  -> 用 correctCount 判定（傳統：看答對題數）
 *    2) mode: "score"    -> 用 totalScore  判定（建議數學含非選時用）
 *
 * gradeBands 格式範例：
 * allGradeData["國三第一次模考"].gradeBands = {
 *   "數學": { mode:"score", thresholds:{ "A++":95, "A+":90, "A":80, "B++":70, "B+":60, "B":50 } },
 *   "國文": { mode:"correct", thresholds:{ "A++":41, "A+":39, "A":36, "B++":32, "B+":28, "B":18 } }
 * }
 *
 * 回傳字串：A++ / A+ / A / B++ / B+ / B / C / —
 */
function getGradeBand(studentGrade, subjectName, correctCount, totalScore) {
  const order = ['A++', 'A+', 'A', 'B++', 'B+', 'B'];

  // ---- 1) 優先：讀取「該測驗」的級距設定 ----
  const cfg = allGradeData?.[studentGrade]?.gradeBands?.[subjectName];
  if (cfg) {
    // 允許寫成 {A++:xx, A+:xx, ...}（預設視為 correct 模式）
    const mode = (typeof cfg.mode === 'string') ? cfg.mode : 'correct';
    const thresholds = cfg.thresholds ? cfg.thresholds : cfg;

    const v = (mode === 'score') ? Number(totalScore) : Number(correctCount);
    if (!Number.isFinite(v)) return '—';

    for (const band of order) {
      const minVal = Number(thresholds[band]);
      if (Number.isFinite(minVal) && v >= minVal) return band;
    }
    return 'C';
  }

  // ---- 2) 相容舊版：如果你還沒在 quizData.js 填 gradeBands，就走原本寫死的規則 ----

  // 國文：42 題（PDF 第 2 頁）
  if (subjectName === "國文") {
    if (correctCount >= 41) return "A++";
    if (correctCount === 39 || correctCount === 40) return "A+";
    if (correctCount >= 36) return "A";
    if (correctCount >= 32) return "B++";
    if (correctCount >= 28) return "B+";
    if (correctCount >= 18) return "B";
    return "C";
  }

  // 英文：43 題（PDF 第 3 頁）
  if (subjectName === "英文") {
    if (correctCount >= 42) return "A++";
    if (correctCount === 41) return "A+";
    if (correctCount >= 38) return "A";
    if (correctCount >= 33) return "B++";
    if (correctCount >= 28) return "B+";
    if (correctCount >= 22) return "B";
    return "C";
  }

  // 自然：50 題（PDF 第 5 頁）
  if (subjectName === "自然") {
    if (correctCount >= 48) return "A++";
    if (correctCount === 47) return "A+";
    if (correctCount >= 44) return "A";
    if (correctCount >= 37) return "B++";
    if (correctCount >= 28) return "B+";
    if (correctCount >= 19) return "B";
    return "C";
  }

  // 社會：54 題（PDF 第 6 頁）
  if (subjectName === "社會") {
    if (correctCount >= 52) return "A++";
    if (correctCount >= 50) return "A+";
    if (correctCount >= 47) return "A";
    if (correctCount >= 41) return "B++";
    if (correctCount >= 34) return "B+";
    if (correctCount >= 21) return "B";
    return "C";
  }

  // 數學：舊版推估（你後續補非選時，建議改用「score」模式的 gradeBands）
  if (subjectName === "數學") {
    if (correctCount >= 24) return "A++";
    if (correctCount === 23) return "A+";
    if (correctCount >= 21) return "A";
    if (correctCount >= 17) return "B++";
    if (correctCount >= 13) return "B+";
    if (correctCount >= 9) return "B";
    return "C";
  }

  return "—";
}

// ====== 主分析流程（無雷達圖）======
function analyzeAndGenerateReport() {
  if (typeof quizData === 'undefined' || !quizData || !quizData.questions) {
    alert("錯誤：找不到測驗數據，請先選擇科目！");
    return;
  }

  // 1) 讀基本資料
  const subjectName   = document.getElementById('subject-name').value;
  const studentName   = document.getElementById('student-name').value.trim();
  const studentSchool = document.getElementById('student-school').value.trim();
  const studentGrade  = document.getElementById('student-grade').value;
  const cramSchool    = (document.getElementById('cram-school')?.value || "").trim();

  if (!subjectName || !studentName || !studentSchool || !studentGrade || !cramSchool) {
    alert("請選擇科目、補習班名稱，並填寫完整的學生資訊！");
    return;
  }

  // 2) 收集作答
  const inputs = Array.from(document.querySelectorAll('#answers-form .answer-input'));
  let studentAnswers = '';
  inputs.forEach(inp => { studentAnswers += (inp.value || '').trim().toUpperCase(); });

  if (studentAnswers.length < quizData.questions.length) {
    alert(`錯誤：尚未回答所有題目 (${studentAnswers.length}/${quizData.questions.length})，請檢查是否有遺漏！`);
    return;
  }

  // 3) 計分（維持原本邏輯：答對加 weight；答錯 0 分）
  let totalScore = 0;
  let correctCount = 0;

  const skillScores = {};
  const skillMaxScores = {};
  quizData.skills.forEach(s => { skillScores[s]=0; skillMaxScores[s]=0; });

  quizData.questions.forEach((q, i) => {
    const ans = studentAnswers[i];
    const perSkill = q.weight / q.skill.length;

    if (ans === q.correct) {
      totalScore += q.weight;     // 你的「非選每題 3/2 分」只要 weight=1.5 就會自然成立
      correctCount += 1;
      q.skill.forEach(s => { skillScores[s] += perSkill; });
    }
    q.skill.forEach(s => { skillMaxScores[s] += perSkill; });
  });

  // 4) 知識點百分比
  const skillRaw = quizData.skills.map(s => {
    const score = skillScores[s] || 0;
    const max   = skillMaxScores[s] || 1;
    const pct   = Math.round((score / max) * 100);
    return { name:s, percentage:pct, level:getLevel(pct) };
  }).sort((a,b)=>a.name.localeCompare(b.name,'zh-Hant'));

  // 5) 等級：改成可依「測驗項目」分開（必要改動）
  const gradeBand = getGradeBand(studentGrade, subjectName, correctCount, totalScore);

  // 6) 渲染基本資訊
  document.getElementById('report-subject-title').innerText = `${subjectName}學科能力深度評估報告`;
  document.getElementById('student-info-display').innerHTML = `
    <div>科目：${subjectName}</div>
    <div>姓名：${studentName}</div>
    <div>測驗項目：${studentGrade}</div>
    <div>學校：${studentSchool}</div>
  `;

  // 7) 總結卡片（顯示總分、作答數、等級）
  const totalItems = quizData.questions.length;
  document.getElementById('score-summary').innerHTML = `
    <p>總學科能力分數</p>
    <div class="score">${totalScore}</div>
    <div class="score-extra">
      答對題數：${correctCount} / ${totalItems}　|　等級：<strong>${gradeBand}</strong>
    </div>
  `;

  // 8) 兩欄知識點表格
  let tbodyHTML = '';
  for (let i=0; i<skillRaw.length; i+=2) {
    const a = skillRaw[i], b = skillRaw[i+1];
    const row = [
      `<td class="skill-name" style="${getBackgroundColor(a.percentage)}">${a.name} (${a.percentage}%)</td>`,
      `<td>${a.level}</td>`,
      b ? `<td class="skill-name" style="${getBackgroundColor(b.percentage)}">${b.name} (${b.percentage}%)</td>` : '<td></td>',
      b ? `<td>${b.level}</td>` : '<td></td>'
    ].join('');
    tbodyHTML += `<tr>${row}</tr>`;
  }
  const bodyEl = document.getElementById('skill-table-body-two-columns');
  if (bodyEl) bodyEl.innerHTML = tbodyHTML;

  // 9) 綜合評語
  const strong = skillRaw.filter(s=>s.percentage>=80).map(s=>s.name);
  const weak   = skillRaw.filter(s=>s.percentage<60).map(s=>s.name);
  let msg = `本次 ${subjectName} 測驗總分 ${totalScore} 分，答對 ${correctCount} 題，等級為 ${gradeBand}。`;
  if (strong.length) msg += ` 表現較佳：${strong.join("、")}。`;
  if (weak.length)   msg += ` 建議優先加強：${weak.join("、")}。`;
  if (!weak.length)  msg += ` 各知識點掌握度均達及格以上，建議持續維持練習以鞏固實力。`;
  document.getElementById('assessment-message').innerText = msg;

  // 10) 補習班標籤
  const label = document.getElementById('cram-school-label');
  if (label) label.innerHTML = `<span class="cram-school-label-text">${cramSchool}文理</span>`;

  // 11) 切換畫面
  document.getElementById('input-container').classList.add('hidden');
  document.getElementById('report-container').classList.remove('hidden');
  document.getElementById('report-container').scrollIntoView({behavior:'smooth'});
}

// ====== 輸入框自動跳格（A~E）======
document.addEventListener('input', (ev) => {
  const el = ev.target;
  if (!el.classList || !el.classList.contains('answer-input')) return;
  const v = (el.value || '').toUpperCase();
  if (v.length === 1 && /[A-E]/.test(v)) {
    el.value = v;
    const inputs = Array.from(document.querySelectorAll('#answers-form .answer-input'));
    const idx = inputs.indexOf(el);
    const next = inputs[idx + 1];
    if (next) next.focus();
  } else {
    el.value = v.replace(/[^A-E]/g, '');
  }
});
