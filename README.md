# CareerFit AI

> 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치

## 프로젝트 개요

CareerFit AI는 대학생 사용자가 전공, 보유 스킬, 관심 고용 형태를 입력하면 채용 공고 데이터와 AI 분석을 바탕으로 현재 역량에 맞는 방향과 보완할 스킬, 추천 프로젝트를 제안하는 맞춤형 포트폴리오 코치 서비스입니다.

## 기술 스택

| 영역 | 기술 |
|---|---|
| 백엔드 | Python, FastAPI |
| AI API | Gemini 2.5 Flash-Lite |
| 데이터 | Pandas, SQLite, ChromaDB |
| 프론트엔드 | React, Vite, Tailwind CSS |
| 실행 환경 | Docker |

## 진행 현황

- [x] 1일차: 프로젝트 기획 및 개발 환경 세팅

- [x] 2일차: FastAPI 서버 구축 및 Gemini API 연결
  - Python 가상환경 및 `requirements.txt` 기반 백엔드 환경 세팅
  - `/health`, `/jobs`, `/analyze` FastAPI 엔드포인트 구현
  - Gemini 2.5 Flash-Lite API 연동
  - `.env`의 `MOCK_MODE` 환경변수로 실 API·목업 응답 전환 설정

- [x] 3일차: 데이터 파이프라인 구축
  - 채용 공고 CSV 데이터를 전처리하는 `preprocess.py` 파이프라인 구현
  - 결측치 확인·처리, 중복 공고 제거, 스킬 키워드 표준화 기능 추가
  - 전처리된 데이터를 SQLite `careerfit.db`의 `jobs` 테이블로 저장
  - RAG 검색을 위한 자연어 문서 변환 및 `rag_documents.json` 저장 기능 구현

- [x] 4일차: RAG 기반 서비스 + React UI 구현
  - ChromaDB 기반 채용 공고 문서 검색 기능 구현
  - `/analyze` API에서 사용자 입력을 바탕으로 관련 공고 검색 및 AI 분석 결과 생성
  - Gemini 2.5 Flash-Lite를 활용한 RAG 기반 답변 생성 흐름 구성
  - React + Vite 기반 프론트엔드 프로젝트 생성
  - 전공, 보유 스킬, 관심 고용 형태를 입력하는 `InputForm` 컴포넌트 구현
  - AI 분석 결과를 보여주는 `ResultCard` 컴포넌트 구현
  - 참고한 공고 데이터를 표시하는 `SourceCard` 컴포넌트 구현
  - `fetch`를 사용해 프론트엔드에서 FastAPI `/analyze` API 연결
  - UI 작업 기준을 정리한 `design-skill.md` 작성

- [ ] 5일차: Docker + 포트폴리오 완성

## 프론트엔드 실행 방법

```bash
cd frontend
npm install
npm run dev