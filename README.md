# GitHub Pages Portfolio MVP

원페이지 정적 포트폴리오(순수 HTML/CSS/JS) 템플릿입니다.

## 구성 파일
- `index.html`: 섹션 구조, 접근성 마크업, 기본 SEO 메타
- `styles.css`: 반응형 스타일, 컬러/타이포 시스템, UI 컴포넌트
- `script.js`: 한영 토글, 프로젝트/기술 렌더링, 모바일 메뉴 동작
- `assets/`: 프로필 플레이스홀더, favicon, OG 이미지

## 빠른 시작
1. 로컬에서 열기  
   브라우저로 `index.html` 직접 열거나, 간단한 로컬 서버를 실행합니다.
2. 콘텐츠 교체  
   `script.js`의 `portfolioData`와 `copy` 객체를 본인 정보로 수정합니다.
3. URL 치환  
   `index.html`, `script.js`의 `your-username`, `your-repo-name` 플레이스홀더를 실제 값으로 변경합니다.

## GitHub 배포
1. 원격 저장소 연결
```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
```
2. 첫 커밋 & 푸시
```bash
git add .
git commit -m "feat: add portfolio MVP for GitHub Pages"
git push -u origin main
```
3. GitHub Pages 설정
- 저장소 `Settings` → `Pages`
- `Build and deployment`에서 `Deploy from a branch`
- `Branch`: `main` / `/(root)` 저장 후 반영 확인

## 데이터 스키마
`script.js`의 프로젝트 구조:
```js
{
  title: "Project title",
  period: "2026.01 - 2026.03",
  summary: "Project summary",
  tech: ["HTML", "CSS", "JavaScript"],
  links: {
    github: "https://github.com/...",
    demo: "https://..." // optional
  }
}
```

`script.js`의 연락처 구조:
```js
{
  email: "hello@example.com",
  githubUrl: "https://github.com/...",
  linkedinUrl: "https://www.linkedin.com/in/..."
}
```
