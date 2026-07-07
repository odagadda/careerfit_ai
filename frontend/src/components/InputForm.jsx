import { useState } from "react";

function InputForm({ onSubmit, isLoading }) {
  const [major, setMajor] = useState("");
  const [skillsInput, setSkillsInput] = useState("");
  const [jobType, setJobType] = useState("");

  function handleSubmit() {
    const skills = skillsInput
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);

    onSubmit({
      major: major.trim(),
      skills,
      job_type: jobType,
    });
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-lg font-semibold text-slate-800 mb-1">
        나의 커리어 정보 입력
      </h2>

      <p className="text-sm text-slate-500 mb-5">
        전공, 스킬, 관심 고용 형태를 바탕으로 맞춤 역량 분석을 진행합니다.
      </p>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            전공
          </label>
          <p className="text-xs text-slate-500 mb-2">
            현재 전공 또는 가장 가까운 학과명을 입력해 주세요.
          </p>
          <input
            type="text"
            value={major}
            onChange={e => setMajor(e.target.value)}
            placeholder="예: 통계학과, 컴퓨터공학과, 경영학과"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            보유 스킬
          </label>
          <p className="text-xs text-slate-500 mb-2">
            사용할 수 있는 도구나 기술을 쉼표로 구분해서 입력해 주세요.
          </p>
          <input
            type="text"
            value={skillsInput}
            onChange={e => setSkillsInput(e.target.value)}
            placeholder="예: Python, SQL, Excel, 데이터 시각화"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            관심 고용 형태
          </label>
          <p className="text-xs text-slate-500 mb-2">
            어떤 형태의 기회를 찾고 있는지 선택해 주세요.
          </p>
          <select
            value={jobType}
            onChange={e => setJobType(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">관심 고용 형태 선택</option>
            <option value="인턴">인턴</option>
            <option value="정규직">정규직</option>
            <option value="계약직">계약직</option>
            <option value="공모전">공모전</option>
            <option value="프로젝트">프로젝트</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          disabled={
            isLoading ||
            !major.trim() ||
            !skillsInput.trim() ||
            !jobType
          }
          className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
        >
          {isLoading ? "분석 중..." : "맞춤 분석 시작하기"}
        </button>
      </div>
    </div>
  );
}

export default InputForm;