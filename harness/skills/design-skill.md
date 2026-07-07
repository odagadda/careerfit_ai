# CareerFit AI Design Skill

## 1. 목적

CareerFit AI React UI를 취업·공모전 데이터 기반 AI 포트폴리오 코치처럼 보이게 만든다.

이 문서는 바이브코딩 시 AI가 참고할 UI 디자인 규칙이다.  
프로젝트의 주 사용자는 대학생이며, 전체 분위기는 전문성 있고 친근해야 한다.

디자인 목표는 다음과 같다.

- 신뢰감 있는 AI 코치 서비스
- 발표 화면에서 한눈에 이해되는 구조
- 입력, 분석 결과, 출처, 신뢰도가 분리된 화면
- 과도하게 화려하기보다 설명 가능한 디자인
- 취업 준비 서비스에 어울리는 차분한 UI

---

## 2. 디자인 키워드

```text
전문성
친근함
신뢰감
명확함
실용성
차분함
대학생 친화적
```

CareerFit AI는 금융권 서비스처럼 너무 딱딱하면 안 되고,  
SNS 서비스처럼 너무 가볍게 보여서도 안 된다.

적절한 느낌은 다음과 같다.

```text
깔끔한 대학 취업지원센터 + AI 코치 + 포트폴리오 피드백 도구
```

---

## 3. 컬러 팔레트

Tailwind CSS 기본 색상 체계를 사용한다.  
가능하면 커스텀 색상보다 Tailwind 기본 class를 우선 사용한다.

## 3-1. 기본 색상

| 역할 | Tailwind Class | Hex | 사용 위치 |
| -- | -- | -- | -- |
| Primary | `bg-slate-900`, `text-slate-900` | `#0F172A` | 메인 버튼, 제목, 핵심 강조 |
| Primary Hover | `hover:bg-slate-800` | `#1E293B` | 버튼 hover |
| Secondary | `bg-indigo-50`, `text-indigo-700` | `#EEF2FF`, `#4338CA` | 보조 강조, 안내 문구, 태그 |
| Accent | `bg-emerald-50`, `text-emerald-700` | `#ECFDF5`, `#047857` | 추천, 긍정 상태, 적합도 |
| Background | `bg-slate-50` | `#F8FAFC` | 전체 페이지 배경 |
| Surface | `bg-white` | `#FFFFFF` | 카드, 폼, 결과 박스 |
| Text Main | `text-slate-900` | `#0F172A` | 제목, 핵심 텍스트 |
| Text Body | `text-slate-700` | `#334155` | 본문 |
| Text Muted | `text-slate-500` | `#64748B` | 보조 설명 |
| Text Light | `text-slate-400` | `#94A3B8` | 캡션, 도움말 |
| Border | `border-slate-200` | `#E2E8F0` | 카드 테두리 |
| Input Border | `border-slate-300` | `#CBD5E1` | 입력창 테두리 |
| Error Background | `bg-red-50` | `#FEF2F2` | 에러 박스 배경 |
| Error Text | `text-red-700` | `#B91C1C` | 에러 메시지 |
| Error Border | `border-red-200` | `#FECACA` | 에러 박스 테두리 |
| Warning | `bg-amber-50`, `text-amber-700` | `#FFFBEB`, `#B45309` | 주의, 준비 필요 |
| Disabled | `bg-slate-400` | `#94A3B8` | 비활성 버튼 |

---

## 3-2. 색상 사용 규칙

### 전체 배경

```text
bg-slate-50
```

### 카드 배경

```text
bg-white border border-slate-200
```

### 메인 버튼

```text
bg-slate-900 text-white hover:bg-slate-800
```

### 에러 메시지

```text
bg-red-50 border border-red-200 text-red-700
```

### 보조 태그

```text
bg-slate-50 text-slate-500
```

### 추천 또는 긍정 태그

```text
bg-emerald-50 text-emerald-700
```

---

## 3-3. 색상 금지 규칙

- 원색 빨강, 파랑, 초록을 넓은 배경으로 사용하지 않는다.
- neon 색상 사용 금지.
- 카드마다 전혀 다른 색을 부여하지 않는다.
- 버튼 색상을 페이지마다 다르게 만들지 않는다.
- 에러가 아닌 곳에 빨간색을 남발하지 않는다.
- `text-gray-*`와 `text-slate-*`를 섞어 쓰지 말고, 기본은 `slate` 계열로 통일한다.

---

## 4. 타이포그래피 규칙

한국어 가독성을 우선한다.  
기본 시스템 폰트를 사용하고, 장식적인 폰트는 사용하지 않는다.

---

## 4-1. 글자 크기 기준

| 요소 | Tailwind Class | 사용 예시 |
| -- | -- | -- |
| 페이지 제목 | `text-3xl font-bold text-slate-900` | CareerFit AI |
| 페이지 설명 | `text-sm text-slate-500` | 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치 |
| 섹션 제목 | `text-lg font-bold text-slate-900` | AI 분석 결과 |
| 카드 제목 | `text-base font-semibold text-slate-800` | 회사명, 공고명 |
| 본문 | `text-sm leading-6 text-slate-700` | AI 답변 |
| 보조 설명 | `text-sm text-slate-500` | 입력 안내 |
| 캡션 | `text-xs text-slate-400` | 쉼표로 구분해서 입력하세요 |
| 버튼 | `text-sm font-semibold` | 분석하기 |

---

## 4-2. 문장 톤

사용자에게 보이는 문장은 한국어로 작성한다.

좋은 예:

```text
분석 중입니다...
FastAPI 서버에 연결할 수 없습니다. 서버가 실행 중인지 확인하세요.
쉼표로 구분해서 입력하세요.
AI 분석 결과
참고한 공고
```

피해야 할 예:

```text
Loading...
Submit
Failed to fetch
Invalid request
Server Error
```

영어 시스템 메시지를 그대로 노출하지 않는다.

---

## 4-3. 줄 간격

AI 답변처럼 긴 텍스트는 다음 class를 사용한다.

```text
whitespace-pre-wrap text-sm leading-6 text-slate-700
```

줄바꿈을 유지하고, 줄 간격을 넉넉히 둔다.

---

## 5. 컴포넌트 구조

React UI는 다음 구조를 기본으로 한다.

```text
App
├── InputForm
├── ResultCard
└── SourceCard
```

각 컴포넌트는 역할을 명확히 분리한다.

---

## 6. App 컴포넌트 규칙

## 6-1. 역할

`App.jsx`는 전체 화면과 상태 관리를 담당한다.

담당하는 것:

- 페이지 전체 레이아웃
- 입력 폼 제출 처리
- FastAPI `/analyze` 요청
- 로딩 상태 관리
- 에러 상태 관리
- 분석 결과 상태 관리
- ResultCard 표시
- SourceCard 표시

담당하지 않는 것:

- input 세부 UI
- 결과 카드 내부 UI
- 참고 공고 카드 내부 UI
- API Key 관리
- LLM 직접 호출

---

## 6-2. 상태 규칙

`App.jsx`는 다음 상태를 가진다.

```text
result
isLoading
error
```

| 상태 | 의미 |
| -- | -- |
| `result` | 백엔드에서 받은 분석 결과 |
| `isLoading` | 분석 요청 진행 여부 |
| `error` | 서버 연결 또는 응답 오류 메시지 |

---

## 6-3. API 규칙

프론트엔드는 직접 LLM API를 호출하지 않는다.  
반드시 FastAPI 백엔드만 호출한다.

```text
React
→ FastAPI /analyze
→ ChromaDB 검색
→ LLM 응답 생성
→ React 표시
```

프론트엔드 코드에는 API Key를 넣지 않는다.

금지:

```text
GEMINI_API_KEY
MISTRAL_API_KEY
OPENAI_API_KEY
```

이런 값은 절대 `App.jsx`에 넣지 않는다.

---

## 6-4. App 레이아웃 기준

전체 페이지:

```text
min-h-screen bg-slate-50 py-10 px-4
```

중앙 컨테이너:

```text
max-w-2xl mx-auto
```

상단 제목 영역:

```text
mb-8
```

결과 영역:

```text
mt-8 space-y-4
```

---

## 7. InputForm 컴포넌트 규칙

## 7-1. 역할

`InputForm.jsx`는 사용자 입력을 담당한다.

입력 항목:

- 전공
- 보유 스킬
- 관심 고용 형태 또는 관심 직무 조건

예시 입력:

```text
전공: 통계학과
보유 스킬: Python, SQL, R
관심 고용 형태: 정규직
```

---

## 7-2. Form 카드 스타일

```text
rounded-xl border border-slate-200 bg-white p-5 shadow-sm
```

---

## 7-3. Input 스타일

```text
w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500
```

입력창은 너무 화려하게 만들지 않는다.  
focus 상태는 명확하게 보여야 한다.

---

## 7-4. Label 규칙

모든 input에는 label이 있어야 한다.

좋은 구조:

```text
label
input
도움말
```

placeholder만으로 입력 의미를 전달하지 않는다.

---

## 7-5. Button 스타일

```text
w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400
```

로딩 중에는 버튼을 disabled 처리한다.

버튼 문구:

```text
분석하기
분석 중...
```

---

## 8. ResultCard 컴포넌트 규칙

## 8-1. 역할

`ResultCard.jsx`는 AI 분석 결과를 보여준다.

표시 내용:

- 현재 역량 평가
- 추천 공고 또는 공모전
- 부족한 역량 및 준비 방향

---

## 8-2. 카드 스타일

```text
rounded-xl border border-slate-200 bg-white p-5 shadow-sm
```

제목:

```text
text-lg font-bold text-slate-900
```

본문:

```text
whitespace-pre-wrap text-sm leading-6 text-slate-700
```

---

## 8-3. 표시 규칙

- AI 답변의 줄바꿈을 유지한다.
- 긴 문장은 줄 간격을 넉넉하게 둔다.
- 결과가 없을 때 빈 카드가 보이지 않게 한다.
- 너무 많은 장식보다 정보 전달을 우선한다.
- 답변이 실제 공고 기반인지 일반 조언인지 구분할 수 있게 한다.

---

## 9. SourceCard 컴포넌트 규칙

## 9-1. 역할

`SourceCard.jsx`는 AI가 참고한 공고를 보여준다.

표시 내용:

- 회사명
- 공고명
- 고용 형태
- 마감일
- distance 값

---

## 9-2. 전체 카드 스타일

```text
rounded-xl border border-slate-200 bg-white p-5 shadow-sm
```

---

## 9-3. 개별 공고 박스 스타일

```text
rounded-lg border border-slate-100 bg-slate-50 p-4
```

---

## 9-4. 태그 스타일

```text
rounded-full bg-white px-2 py-1 text-xs text-slate-500
```

---

## 9-5. 표시 규칙

- sources가 없으면 SourceCard를 숨긴다.
- 회사명이 없으면 `회사명 없음`으로 표시한다.
- 공고명이 없으면 `공고명 없음`으로 표시한다.
- distance는 참고용으로만 표시한다.
- distance를 점수처럼 과장하지 않는다.
- distance는 낮을수록 질문과 가까운 결과라는 설명을 나중에 캡션으로 추가할 수 있다.

---

## 10. 레이아웃 규칙

## 10-1. 전체 페이지

```text
min-h-screen bg-slate-50 py-10 px-4
```

---

## 10-2. 중앙 컨테이너

```text
max-w-2xl mx-auto
```

데스크톱에서 너무 넓게 퍼지지 않게 한다.

필요하면 결과 화면에서는 다음까지 허용한다.

```text
max-w-3xl
```

---

## 10-3. 카드 간격

컴포넌트 사이 간격:

```text
space-y-4
```

결과 영역 위쪽 간격:

```text
mt-8
```

에러 메시지 위쪽 간격:

```text
mt-4
```

---

## 10-4. 반응형 규칙

- 모바일에서는 `px-4`를 유지한다.
- 데스크톱에서도 너무 넓은 레이아웃을 만들지 않는다.
- 태그는 `flex flex-wrap gap-2`로 줄바꿈을 허용한다.
- 입력창과 버튼은 모바일에서 한 줄 전체 너비를 사용한다.
- 카드 내부 여백은 `p-5` 또는 `p-6`을 사용한다.

---

## 10-5. 정보 우선순위

화면 정보는 다음 순서로 배치한다.

```text
1. 서비스 제목
2. 서비스 설명
3. 입력 폼
4. 에러 또는 로딩 상태
5. AI 분석 결과
6. 참고한 공고
```

---

## 11. 상태별 UI 규칙

## 11-1. 기본 상태

- 입력 폼만 보인다.
- 결과 카드와 참고 공고 카드는 숨긴다.
- 사용자가 무엇을 입력해야 하는지 바로 알 수 있어야 한다.

---

## 11-2. 로딩 상태

로딩 중에는 다음을 지킨다.

- 버튼 텍스트를 `분석 중...`으로 변경한다.
- 버튼을 disabled 처리한다.
- 화면에 `분석 중입니다...` 문구를 표시한다.
- 중복 요청이 발생하지 않게 한다.

로딩 박스 예시:

```text
mt-8 rounded-lg border border-slate-200 bg-white p-5 text-center text-sm text-slate-500
```

---

## 11-3. 에러 상태

에러 박스 스타일:

```text
rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700
```

에러 메시지는 사용자 친화적인 한국어로 표시한다.

좋은 예:

```text
FastAPI 서버에 연결할 수 없습니다. 서버가 실행 중인지 확인하세요.
```

나쁜 예:

```text
Failed to fetch
```

---

## 11-4. 결과 상태

- `ResultCard`를 먼저 보여준다.
- `sources`가 있을 때만 `SourceCard`를 보여준다.
- 결과가 너무 길어도 줄바꿈을 유지한다.
- 출처 공고는 AI 답변보다 아래에 배치한다.

---

## 12. 접근성 규칙

## 12-1. 기본 접근성

- 페이지에는 하나의 명확한 `h1`이 있어야 한다.
- 주요 섹션에는 `h2`를 사용한다.
- 모든 input에는 label이 있어야 한다.
- 버튼에는 명확한 텍스트가 있어야 한다.
- 아이콘만 있는 버튼은 사용하지 않는다.
- 색상만으로 상태를 전달하지 않는다.

---

## 12-2. 에러 접근성

에러 메시지는 시각적으로만 보이지 않게 한다.  
나중에 필요하면 `role="alert"` 적용을 고려한다.

---

## 12-3. 로딩 접근성

로딩 상태는 사용자에게 명확히 보여야 한다.  
나중에 필요하면 `aria-live` 적용을 고려한다.

---

## 13. 보안 규칙

## 13-1. 프론트엔드 보안

금지:

- 프론트엔드에 API Key 작성
- API Key를 localStorage에 저장
- API Key를 sessionStorage에 저장
- API Key를 URL query string에 포함
- 프론트에서 Gemini, Mistral 같은 외부 LLM API 직접 호출

허용:

- 프론트에서 FastAPI 백엔드 호출
- 백엔드에서 `.env`를 통해 API Key 관리

---

## 13-2. 사용자 입력 렌더링

사용자 입력 또는 LLM 응답을 렌더링할 때 다음을 금지한다.

```text
dangerouslySetInnerHTML
```

기본 텍스트 렌더링을 사용한다.

---

## 14. 금지 사항

## 14-1. UI 금지

- 과한 그라데이션 사용 금지
- neon 색상 사용 금지
- 과한 그림자 사용 금지
- 과한 애니메이션 사용 금지
- 카드마다 전혀 다른 색상 사용 금지
- 버튼 색상 랜덤 변경 금지
- 작은 글씨 남발 금지
- 영어 시스템 메시지 그대로 노출 금지

---

## 14-2. UX 금지

- 로딩 중 버튼을 계속 누를 수 있게 두지 않는다.
- 에러가 발생했는데 아무 메시지도 보여주지 않는 상태를 만들지 않는다.
- sources가 없는데 빈 참고 공고 카드만 보여주지 않는다.
- distance 값을 핵심 점수처럼 과장해서 보여주지 않는다.
- AI 답변이 실제 공고 기반인지 일반 조언인지 구분하지 않는 UI를 만들지 않는다.

---

## 14-3. 코드 구조 금지

- 모든 UI를 `App.jsx`에 몰아넣지 않는다.
- `InputForm`, `ResultCard`, `SourceCard` 역할을 섞지 않는다.
- 컴포넌트 이름을 모호하게 짓지 않는다.
- 백엔드 응답 구조와 다른 이름을 임의로 사용하지 않는다.
- 프론트에서 백엔드 내부 로직을 흉내 내지 않는다.

---

## 15. 기본 Tailwind 조합 예시

## 15-1. 페이지

```text
min-h-screen bg-slate-50 py-10 px-4
```

## 15-2. 컨테이너

```text
max-w-2xl mx-auto
```

## 15-3. 카드

```text
rounded-xl border border-slate-200 bg-white p-5 shadow-sm
```

## 15-4. 제목

```text
text-3xl font-bold text-slate-900
```

## 15-5. 섹션 제목

```text
text-lg font-bold text-slate-900
```

## 15-6. 본문

```text
text-sm leading-6 text-slate-700
```

## 15-7. 버튼

```text
rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400
```

## 15-8. 입력창

```text
w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500
```

## 15-9. 에러 박스

```text
rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700
```

## 15-10. 태그

```text
rounded-full bg-white px-2 py-1 text-xs text-slate-500
```

---

## 16. 최종 UI 기준

CareerFit AI의 UI는 다음 기준을 만족해야 한다.

- 사용자가 10초 안에 무엇을 입력해야 하는지 이해할 수 있어야 한다.
- 분석 버튼이 명확하게 보여야 한다.
- 분석 결과는 카드 형태로 읽기 쉽게 제공되어야 한다.
- 참고한 공고는 AI 답변 아래에 분리해서 보여야 한다.
- 전체 분위기는 대학생 취업 코치 서비스답게 차분하고 신뢰감 있어야 한다.
- 디자인은 튀기보다 실용적이어야 한다.
- 사용자는 이 서비스가 “AI가 아무 말이나 하는 서비스”가 아니라 “데이터 기반으로 추천하는 서비스”라고 느껴야 한다.