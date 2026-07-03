# PROJECT_PLAN.md — CareerFit AI 프로젝트 기획 초안

## 1. 문제 정의

취업이나 공모전을 준비하는 학생들은 자신의 전공, 보유 스킬, 관심 직무가 실제 채용 시장에서 어떤 직무와 연결되는지 파악하기 어렵다.

특히 통계학과 학생처럼 데이터 분석, 보험계리, 금융, AI 등 여러 진로로 확장 가능한 전공의 경우, 어떤 역량을 우선적으로 준비해야 하는지 판단하기 어렵다.

CareerFit AI는 취업 공고와 공모전 데이터를 기반으로 사용자의 전공, 관심 직무, 보유 스킬을 분석하고, 적합한 직무와 부족한 역량을 추천하는 맞춤형 AI 포트폴리오 코치 서비스를 목표로 한다.

## 2. 사용자 정의

- 대상: 취업과 공모전을 준비하는 대학생 및 주니어 구직자
- 주요 사용자 예시:
  - 통계학과 학생
  - 데이터 분석가를 준비하는 학생
  - 보험계리 직무에 관심 있는 학생
  - 공모전 경험을 포트폴리오로 연결하고 싶은 학생

- 사용 시나리오:

1. 사용자가 전공, 보유 스킬, 관심 직무를 입력한다.
2. CareerFit AI가 취업 공고 및 공모전 데이터를 검색한다.
3. 사용자의 입력과 데이터의 required_skills, preferred_skills를 비교한다.
4. CareerFit AI가 역량 매칭 결과를 반환한다.
5. 부족한 스킬과 준비 방향을 함께 제안한다.
6. 어떤 데이터를 기반으로 답변했는지 출처를 함께 표시한다.

## 3. 데이터 계획

- 취업 공고 컬럼:
  - company
  - title
  - required_skills
  - preferred_skills
  - description
  - job_type
  - deadline

- 현재 jobs.csv 예시 데이터:
  - 한빛생명보험 / IFRS17 계리결산 주니어 Actuary
  - 다온손해보험 / 장기보험 상품계리 및 수익성 분석 담당
  - 케이리재보험 / Valuation 및 K-ICS 리스크 분석 Assistant

- 공모전 컬럼:
  - contest_name
  - organizer
  - required_skills
  - preferred_skills
  - description
  - field
  - deadline

- 데이터 출처:
  - 강사 제공 목업 CSV
  - 실습용으로 직접 작성한 유사 채용 공고 데이터
  - 실제 기업명이 아닌 유사 기업명 사용

## 4. 기능 목록

| 기능 | 설명 | 구현 상태 |
|---|---|---|
| 프로젝트 폴더 구조 생성 | backend, frontend, docs, .cursor/rules 구조 생성 | 완료 |
| 보안 파일 설정 | .gitignore, .env.example 생성 | 완료 |
| Cursor 규칙 작성 | project-rules.mdc에 프로젝트 규칙 작성 | 완료 |
| 문서 정리 | PROMPTS.md, CHECKLIST.md, EVAL_QUESTIONS.md, PROJECT_PLAN.md 작성 | 진행 중 |
| FastAPI 서버 구성 | backend/main.py를 중심으로 API 서버 구성 | 완료 |
| Health Check API | 서버 상태 확인용 /health 엔드포인트 구현 | 완료 |
| Jobs API | jobs.csv 데이터를 읽어 채용 공고 목록 반환 | 진행 중 |
| Analyze API | 사용자 입력을 받아 직무 적합도 분석 | 진행 예정 |
| CSV 데이터 관리 | backend/data/jobs.csv 생성 및 pandas로 읽기 확인 | 완료 |
| Gemini API 연결 | Gemini 2.5 Flash-Lite 기반 답변 생성 | 진행 예정 |
| Mock Mode | API Key 없이 테스트 가능한 MOCK_MODE 설정 | 진행 중 |
| RAG 검색 | ChromaDB를 이용해 관련 문서 검색 | 진행 예정 |
| 프론트엔드 화면 | React/Vite 기반 사용자 입력 화면 구현 | 진행 예정 |
| Docker 실행 환경 | 백엔드와 프론트엔드 실행 환경 통일 | 진행 예정 |

## 5. 향후 개선 아이디어

지금은 구현하지 않지만, 나중에 해보고 싶은 것들

- 이력서 PDF 자동 분석
- 자기소개서 문항별 피드백
- 공모전 마감일 달력 연동
- 관심 직무별 추천 스킬 로드맵 제공
- 보험계리, 데이터 분석, AI 직무별 맞춤 포트폴리오 추천
- 사용자의 전공과 수강 과목을 기반으로 직무 적합도 분석
- 채용 공고와 공모전 데이터를 주기적으로 업데이트
- 분석 결과를 카드 형태로 시각화
- 추천 결과에 사용된 데이터 출처 표시 강화
- SQLite를 이용한 검색 기록 저장
- ChromaDB를 활용한 RAG 검색 고도화