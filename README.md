# CareerFit AI

> 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치

## 📌 프로젝트 개요

CareerFit AI는 대학생 사용자가 전공, 보유 스킬, 관심 고용 형태를 입력하면 채용 공고 데이터를 기반으로 현재 역량에 맞는 방향과 보완할 스킬, 추천 프로젝트를 제안하는 맞춤형 포트폴리오 코치 서비스입니다.

취업 준비 과정에서 학생들은 수많은 채용 공고를 직접 확인하며 어떤 역량이 필요한지 파악해야 합니다. 하지만 공고마다 요구하는 기술, 경험, 자격요건이 다르고, 본인의 현재 역량과 비교해 무엇이 부족한지 판단하기 어렵다는 문제가 있습니다.

CareerFit AI는 이러한 문제를 해결하기 위해 실제 채용 공고 데이터를 SQLite와 ChromaDB에 저장하고, RAG 구조를 활용해 사용자 입력과 관련 있는 공고를 검색한 뒤 Gemini API를 통해 맞춤형 분석 결과를 생성합니다.

## 🛠 기술 스택

| 영역     | 기술                        |
| ------ | ------------------------- |
| 백엔드    | Python, FastAPI           |
| AI API | Gemini 2.5 Flash-Lite     |
| 데이터    | Pandas, SQLite, ChromaDB  |
| 프론트엔드  | React, Vite, Tailwind CSS |
| 실행 환경  | Docker                    |
| 환경 관리  | `.env`, `.env.example`    |

## 🏗 아키텍처

```text
사용자
  ↓
React Frontend
  ↓
FastAPI Backend
  ↓
/analyze API
  ↓
ChromaDB 벡터 검색
  ↓
관련 채용 공고 검색
  ↓
Gemini 2.5 Flash-Lite
  ↓
AI 분석 결과 + sources 반환
  ↓
React 결과 카드 출력
```

## 📊 데이터 파이프라인

```text
CSV 데이터
  ↓
Pandas 전처리
  ↓
결측치 확인 및 처리
  ↓
중복 공고 제거
  ↓
스킬 키워드 표준화
  ↓
SQLite 저장
  ↓
RAG 문서 구조 변환
  ↓
ChromaDB 저장 및 검색
```

### 데이터 선택 이유

CareerFit AI는 실제 채용 시장에서 요구하는 역량을 바탕으로 사용자에게 맞춤형 조언을 제공하는 서비스입니다. 따라서 기업명, 직무명, 고용 형태, 요구 기술, 자격 요건 등이 포함된 채용 공고 데이터를 사용했습니다.

### SQLite와 ChromaDB를 함께 사용하는 이유

SQLite와 ChromaDB는 같은 데이터를 저장하지만 목적이 다릅니다.

* SQLite: 기업명, 직무명, 고용 형태 등 구조화된 데이터를 안정적으로 저장하고 조회하기 위한 저장소
* ChromaDB: 채용 공고 텍스트를 벡터화하여 사용자 입력과 의미적으로 유사한 공고를 검색하기 위한 저장소

즉, SQLite는 정확한 데이터 조회용이고 ChromaDB는 RAG 기반 의미 검색용입니다.

## ✨ 주요 기능

* 사용자 입력 기반 맞춤형 역량 분석
* 채용 공고 데이터 기반 RAG 검색
* Gemini 2.5 Flash-Lite를 활용한 AI 분석 결과 생성
* 분석 결과와 함께 참고한 공고 sources 반환
* React UI에서 결과 카드와 출처 카드 출력
* MOCK_MODE를 통한 목업 응답 전환
* Docker 기반 백엔드 실행 지원

## 🚀 실행 방법

### 1. 백엔드 로컬 실행

```bash
cd backend

python -m venv venv
```

Windows PowerShell 기준:

```bash
.\venv\Scripts\Activate.ps1
```

PowerShell 실행 정책 오류가 발생할 경우:

```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\venv\Scripts\Activate.ps1
```

패키지 설치:

```bash
pip install -r requirements.txt
```

FastAPI 서버 실행:

```bash
uvicorn main:app --reload --port 8000
```

실행 확인:

```text
http://localhost:8000/health
http://localhost:8000/docs
```

### 2. 프론트엔드 로컬 실행

```bash
cd frontend

npm install
npm run dev
```

실행 확인:

```text
http://localhost:5173
```

### 3. Docker로 백엔드 실행

```bash
docker build -t careerfit-ai ./backend
```

```bash
docker run -p 8000:8000 --env-file backend/.env careerfit-ai
```

실행 확인:

```text
http://localhost:8000/health
```

## 🔐 환경변수 설정

실제 API Key는 `.env` 파일에 저장하고, GitHub에는 업로드하지 않습니다.

### `.env.example`

```env
GEMINI_API_KEY=your_gemini_api_key_here
MOCK_MODE=true
FRONTEND_ORIGINS=http://localhost:5173
```

### 프론트엔드 환경변수 예시

```env
VITE_API_BASE_URL=http://localhost:8000
```

`.env` 파일에는 실제 API Key가 포함되므로 반드시 `.gitignore`에 추가해야 합니다.

```gitignore
.env
chroma_db/
__pycache__/
venv/
```

## 📡 API 명세

### GET `/health`

서버 상태를 확인하는 API입니다.

응답 예시:

```json
{
  "status": "ok"
}
```

### GET `/jobs`

채용 공고 목록을 반환하는 API입니다.

### POST `/analyze`

사용자의 전공, 보유 스킬, 관심 고용 형태를 입력받아 AI 분석 결과를 반환하는 API입니다.

요청 예시:

```json
{
  "major": "통계학과",
  "skills": "Python, SQL, 데이터분석",
  "job_type": "인턴"
}
```

응답 예시:

```json
{
  "answer": "사용자 입력을 바탕으로 분석한 결과입니다.",
  "sources": [
    {
      "company": "예시 기업",
      "title": "데이터 분석 인턴",
      "skills": "Python, SQL"
    }
  ]
}
```

## 📁 프로젝트 구조

```text
careerfit-ai/
├── backend/
│   ├── main.py
│   ├── routers/
│   │   ├── health.py
│   │   ├── jobs.py
│   │   └── analyze.py
│   ├── services/
│   ├── data/
│   │   ├── preprocess.py
│   │   └── rag_documents.json
│   ├── requirements.txt
│   ├── .env.example
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── InputForm.jsx
│   │   │   ├── ResultCard.jsx
│   │   │   └── SourceCard.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── docs/
│   ├── AI_TA_RULES.md
│   ├── CHECKLIST.md
│   ├── EVAL_QUESTIONS.md
│   ├── PROJECT_PLAN.md
│   └── PROMPTS.md
│
├── README.md
└── .gitignore
```

## ✅ 진행 현황

* [x] 1일차: 프로젝트 기획 및 개발 환경 세팅
* [x] 2일차: FastAPI 서버 구축 및 Gemini API 연결
* [x] 3일차: 데이터 파이프라인 구축
* [x] 4일차: RAG 기반 서비스 및 React UI 구현
* [x] 5일차: Docker 설정 및 포트폴리오 정리

## 🧪 검증 내용

* FastAPI `/health` 응답 확인
* FastAPI `/docs` 접속 확인
* `/jobs` API 응답 확인
* `/analyze` API에서 AI 분석 결과와 sources 반환 확인
* React UI에서 입력 폼, 결과 카드, 출처 카드 출력 확인
* Docker build 성공 확인
* Docker run 후 `/health` 응답 확인
* `.env` 파일 GitHub 미포함 확인

## 🔮 향후 개선

* [ ] 이력서 PDF 업로드 후 자동 역량 추출
* [ ] 공모전 마감일 알림 기능 추가
* [ ] 사용자별 관심 직무 저장 기능 추가
* [ ] RAG 검색 품질 평가 지표 추가
* [ ] 추천 공고 북마크 기능 추가
* [ ] 배포 환경에서 프론트엔드와 백엔드 자동 연결 개선

## 📝 개발 과정에서 어려웠던 점

가장 어려웠던 부분은 백엔드 실행 환경을 세팅하고 API가 정상적으로 동작하도록 연결하는 과정이었습니다. 특히 Python 가상환경을 활성화하려고 PowerShell 스크립트 명령어를 실행했을 때 실행 정책 때문에 차단되는 문제가 있었습니다.

이 문제는 현재 프로세스 범위에서 실행 정책을 임시로 변경한 뒤 가상환경을 다시 활성화하는 방식으로 해결했습니다. 이후 FastAPI 서버를 실행하고 `/health`, `/jobs`, `/analyze` 엔드포인트가 정상적으로 응답하는지 확인했습니다.

## Demo

* Local Backend: `http://localhost:8000`
* API Docs: `http://localhost:8000/docs`
* Local Frontend: `http://localhost:5173`
* Live Demo: 추후 배포 URL 추가 예정

## Developer

* Name: 오다빈
* Role: Backend / AI Service / Frontend UI
* GitHub: @a039000412star
* Email: [a039000412star@gmail.com](mailto:a039000412star@gmail.com)
