function SourceCard({ sources }) {
    const hasSources = Array.isArray(sources) && sources.length > 0;
  
    if (!hasSources) {
      return (
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 text-sm text-slate-500">
          참고한 공고 데이터가 없습니다.
        </div>
      );
    }
  
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="mb-4">
          <p className="text-xs font-semibold text-blue-600 mb-1">
            참고 데이터
          </p>
          <h2 className="text-lg font-semibold text-slate-800">
            참고한 공고 출처
          </h2>
        </div>
  
        <div className="space-y-3">
          {sources.map((source, index) => {
            const requiredSkills = Array.isArray(source.required_skills)
              ? source.required_skills.join(", ")
              : source.required_skills || "정보 없음";
  
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-lg p-4"
              >
                <p className="text-sm font-semibold text-slate-700">
                  {source.company || "회사명 없음"}
                </p>
  
                <p className="text-sm text-slate-600 mt-1">
                  {source.title || "공고명 없음"}
                </p>
  
                <p className="text-xs text-slate-500 mt-3">
                  필수 스킬: {requiredSkills}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default SourceCard;