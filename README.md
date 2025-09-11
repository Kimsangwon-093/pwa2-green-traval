** Git 호스트와 연동 **
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
3. 브런치 확인(-a : 로컬과 호스트 모두 확인) : git branch -a [브런치명]

** 브런치 Merge **
1. 기본 브런치로 변경 : git checkout[기본 브런치 명]
2. 프로젝트 브런치와 기본 브런치 Merge : git merge [프로젝트 브런치명]

** 브런치 삭제 **
1. 로컬에 브런치 삭제 : git branch -d [브런치명]
2. 호스트 브런치 삭제 : [리모트명] -d [삭제할 브런치명] 
