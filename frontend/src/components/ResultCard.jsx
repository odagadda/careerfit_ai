function ResultCard({ result }) {
    if (!result) return null;
  
    const {
      answer,
      matched_skills = [],
      missing_skills = [],
      recommended_projects = [],
      confidence,
    } = result;
  
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="mb-5">
          <p className="text-xs font-semibold text-emerald-600 mb-1">
            AI 분석 결과
          </p>
          <h2 className="text-lg font-semibold text-slate-800">
            맞춤 역량 분석 리포트
          </h2>
        </div>
  
        <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 mb-5">
          <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
            {answer || "분석 결과가 없습니다."}
          </p>
        </div>
  
        <div className="grid gap-4 md:grid-cols-2 mb-5">
          <div className="border border-slate-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-slate-700 mb-2">
              잘 맞는 스킬
            </h3>
            {matched_skills.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {matched_skills.map(skill => (
                  <span
                    key={skill}
                    className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">
                아직 매칭된 스킬이 없습니다.
              </p>
            )}
          </div>
  
          <div className="border border-slate-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-slate-700 mb-2">
              보완하면 좋은 스킬
            </h3>
            {missing_skills.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {missing_skills.map(skill => (
                  <span
                    key={skill}
                    className="bg-amber-50 text-amber-700 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">
                추가로 보완할 스킬이 없습니다.
              </p>
            )}
          </div>
        </div>
  
        {recommended_projects.length > 0 && (
          <div className="border border-slate-200 rounded-lg p-4 mb-5">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">
              추천 프로젝트
            </h3>
            <ul className="space-y-2">
              {recommended_projects.map(project => (
                <li
                  key={project}
                  className="text-sm text-slate-600 leading-relaxed"
                >
                  • {project}
                </li>
              ))}
            </ul>
          </div>
        )}
  
        {confidence !== undefined && (
          <p className="text-xs text-slate-500">
            분석 신뢰도: {Math.round(confidence * 100)}%
          </p>
        )}
      </div>
    );
  }
  
  export default ResultCard;