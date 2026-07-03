# CareerFit AI

> 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치



## 프로젝트 개요

[본인이 작성한 문제 정의 한 단락]



## 기술 스택

| 영역 | 기술 |
|---|---|
| 백엔드 | Python, FastAPI |
| AI API | Gemini 2.5 Flash-Lite |
| 데이터 | Pandas, SQLite, ChromaDB |
| 프론트엔드 | React, Vite |
| 실행 환경 | Docker |


## 진행 현황

- [x] 1일차: 프로젝트 기획 및 개발 환경 세팅

- [x] 2일차: FastAPI 서버 구축 및 Gemini API 연결
  - Python 가상환경 및 `requirements.txt` 기반 백엔드 환경 세팅
  - `/health`, `/jobs`, `/analyze` FastAPI 엔드포인트 구현
  - Gemini 2.5 Flash-Lite API 연동
  - `.env`의 `MOCK_MODE` 환경변수로 실 API·목업 응답 전환 설정

- [x] 3일차: 데이터 파이프라인 구축
  - 채용 공고 CSV 데이터를 전처리하는 preprocess.py 파이프라인 구현
  - 결측치 확인·처리, 중복 공고 제거, 스킬 키워드 표준화 기능 추가
  - 전처리된 데이터를 SQLite careerfit.db의 jobs 테이블로 저장
  - RAG 검색을 위한 자연어 문서 변환 및 rag_documents.json 저장 기능 구현

- [ ] 4일차: RAG 기반 서비스 + React UI

- [ ] 5일차: Docker + 포트폴리오 완성
