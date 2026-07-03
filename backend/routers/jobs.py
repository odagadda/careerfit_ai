# backend/routers/jobs.py

from fastapi import APIRouter

from typing import List

router = APIRouter()



# 목업 데이터: 3일차에 실제 CSV 데이터로 교체한다

MOCK_JOBS = [

    {

        "id": 1,

        "company": "교보생명",

        "title": "신입 보험계리사 (생명보험)",

        "required_skills": ["R", "SQL", "확률·통계"],

        "preferred_skills": ["Python", "Excel VBA", "SOA Exam P/FM"],

        "description": "생명보험 상품의 위험률 산출 및 준비금 평가 업무를 수행합니다. 통계 모델을 활용해 사망률·해지율 등 기초율을 분석하고, 상품 손익 시뮬레이션 결과를 경영진 보고 자료로 정리합니다.",

        "deadline": "2026-08-31"

    },

    {

        "id": 2,

        "company": "DB손해보험",

        "title": "손해율 분석 계리 (손해보험)",

        "required_skills": ["Python", "SQL", "회귀분석"],

        "preferred_skills": ["SAS", "Power BI", "보험계리사 2차"],

        "description": "자동차·화재 등 손해보험의 손해율 추이를 분석하고 요율 산출에 필요한 데이터를 가공합니다. 세그먼트별 위험도를 비교·검증하며, 언더라이팅 정책 개선을 위한 통계 근거를 제공합니다.",

        "deadline": "2026-08-31"

    },

    {

        "id": 3,

        "company": "신한라이프",

        "title": "IFRS 17 계리·상품개발",

        "required_skills": ["R", "Excel", "IFRS 17"],

        "preferred_skills": ["Python", "머신러닝", "Tableau"],

        "description": "국제회계기준(IFRS 17)에 따른 보험부채 측정 및 상품 개발 시 계리적 타당성 검토를 담당합니다. 계약자 행동·수익성 지표를 분석해 신규 상품 설계와 기존 포트폴리오 관리 의사결정을 지원합니다.",

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