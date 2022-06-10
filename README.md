# GroupTest1

백로그 참고: https://backlog.com/git-tutorial/kr/stepup/stepup2_1.html
각자 브랜치 생성
1. 브랜치 이름: 각자의 이름(영문으로) 브랜치 생성
  ($ git branch <branchname>)
2. 생성한 브랜치로 전환하기: checkout 명령어 사용
  ($ git checkout <branch>)
3. 브랜치 병합: merge 명령어 사용
  ($ git merge <commit>)
  병합할 커밋 이름을 넣어서 실행하면 지정한 커밋 내용이 현재 HEAD가 가리키고 있는 브랜치에 넣어지므로 master
  브랜치에 넣을려면 checkout master해서 HEAD 위치 전환하고 실행
* -m 옵션으로 반드시 commit에 대한 설명을 추가하여 작성하므로서 어떤 작업 부분이 병합되었는지 확인할 수 있도록 해주세요
* 'CONFLICT' 발생 
    여러 개의 브랜치에서 한 파일에 작업하여 충돌이 발생하는 해당 파일 같은 행에 수정이 있었을 경우, merge conflict in file name
  이 발생할 수 있습니다. 
    충돌이 발생할 경우에는 충돌 정보를 포함하여 파일 내용을 변경하므로 어떤 브랜치에서 어떤 부분이 충돌되었는지 알 수 있습니다. 
    충돌이 일어난 부분은 확인하여 일일이 수정해주셔야 합니다. 

이클립스를 이용하여 브랜치 생성, 전환, 변환하기
블로그 참고: https://zodiack.tistory.com/70
