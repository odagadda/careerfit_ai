from fastapi import APIRouter

from typing import List

router = APIRouter()



# 목업 데이터: 3일차에 실제 CSV 데이터로 교체한다

MOCK_JOBS = [
  {
    "id": 1,
    "company": "삼성생명",
    "title": "보험계리 신입사원",
    "required_skills": ["통계분석", "Excel", "보험수리"],
    "preferred_skills": ["Python", "SQL"],
    "description": "보험상품의 위험률과 손익 구조를 분석하고, 계리 모델 산출 결과를 검토하는 업무입니다. 통계적 사고를 바탕으로 보험료 산정과 준비금 분석을 지원합니다.",
    "deadline": "2026-08-31"
  },
  {
    "id": 2,
    "company": "현대해상",
    "title": "IFRS17 계리 분석 담당자",
    "required_skills": ["IFRS17", "K-ICS", "Excel"],
    "preferred_skills": ["Prophet", "SAS"],
    "description": "IFRS17 기준에 따른 보험부채 평가와 손익 분석을 수행합니다. K-ICS 관련 리스크 지표를 검토하고 계리 산출 데이터의 정합성을 확인합니다.",
    "deadline": "2026-08-31"
  },
  {
    "id": 3,
    "company": "DB손해보험",
    "title": "장기보험 상품계리 담당자",
    "required_skills": ["보험수리", "통계분석", "SQL"],
    "preferred_skills": ["Python", "데이터 시각화"],
    "description": "장기보험 상품의 보험료 산출, 위험률 분석, 수익성 검토를 지원하는 업무입니다. 계약 및 사고 데이터를 분석해 상품 운영과 개정 방향을 도출합니다.",
    "deadline": "2026-08-31"
  }
]



@router.get("/jobs", tags=["Jobs"])

def get_jobs():

    """

    취업 공고 목록을 반환하는 엔드포인트.

    현재는 목업 데이터를 반환하며, 3일차에 실제 데이터로 교체한다.

    """

    return {

        "count": len(MOCK_JOBS),

        "jobs": MOCK_JOBS

    }



@router.get("/jobs/{job_id}", tags=["Jobs"])

def get_job_by_id(job_id: int):

    """

    특정 공고의 상세 정보를 반환한다.

    """

    for job in MOCK_JOBS:

        if job["id"] == job_id:

            return job

    # 찾지 못한 경우

    from fastapi import HTTPException

    raise HTTPException(status_code=404, detail=f"공고 ID {job_id}를 찾을 수 없습니다.")