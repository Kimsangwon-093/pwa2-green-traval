<!-- ** Git 호스트와 연동 **
0. 프로젝트 폴더까지 이동
1. git 초기화 : git init
2. 기본 브런치 변경 : git branch -M main
[git branch -M 브런치명]
3. 레파지토리 Remote : git remote add [리모트명] [레파지토리 주소]
git remote add origin [레파지토리 주소]
4. Remote 확인 : git remote -v
-'또는'의 의미
5. 처음 푸시할 때 뭔가 경고창이나 에러가 떴을 때
git push -u origin main
git push -u  [리모트명]  [브런치명]
(((vscode > pull,push > push to)))

** 브런치 변경 **
1. 브런치 변경 : git checkout [브런치명]

** 브런치 생성 **
1. 브런치 생성(로컬) : git branch [브런치명]
2. 브런치 호스트에 push(호스트) : git push -u  [리모트명] [새로운 브런치명]
3. 브런치 확인(-a : 로컬과 호스트 모두 확인) : git branch -a

** 브런치 Merge **
1. 기본 브런치로 변경 : git checkout[기본 브런치 명]
2. 프로젝트 브런치와 기본 브런치 Merge : git merge [프로젝트 브런치명]

** 브런치 삭제 **
1. 로컬에 브런치 삭제 : git branch -d [브런치명]
2. 호스트 브런치 삭제 : git push [리모트명] -d [삭제할 브런치명]  -->

npm i react-router-dom @reduxjs/toolkit react-redux redux-thunk axios

** PWA 적용 **
1. 설치
    npm i -D vite-plugin-pwa

2. Mainfest 설정
    - `vite.config.js`에 PWA Mainfest 설정을 추가
    - 아이콘 이미지는 아래 사이즈 별로 필요
        - 180 × 180(IOS), 192 × 192(web | Android), 512 × 512(web | Android)

3. 서비스 워커 작성
    - `src/sw.js`, `src/swRegister.js` 파일 생성


4. `main.jsx`에 서비스 워커 레지스터 추가


5. IOS 대응을 위해 `index.html`에 meta데이터 설정(IOS 대응 및 Manifest 기본 설정)


6. 위 설정 완료 후 빌드 
    npm run build

7. 빌드한 것으로 동작하는 내장서버 실행
    npm run preview