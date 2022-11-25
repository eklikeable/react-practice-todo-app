## React로 Todo App 만들기

### 컴포넌트의 역할 설정

1. TodoList : 할 일 배열 업데이트 및 전체 기능 관리(입력/수정/삭제/완료)  
   1-1. TodoForm : 할 일을 입력 받을 화면 구성, submit 처리  
   1-2. Todo : 개별 todo(할 일) 완료/수정/삭제 기능 - TodoList와 연결

### 📚 기능 구현 목록

- [x] 입력받은 값을 저장/상태관리 할 변수를 만들고 화면을 구성한다.
- [x] 새로운 값이 들어오면, Todos 배열을 업데이트하고, 공백이 들어온 경우 무시한다.
- [x] 가장 최근에 등록한 할 일이 가장 위에 출력되도록 화면을 구성한다. (+ CSS)
- [x] 개별 할 일의 수정/삭제 아이콘을 삽입한다.
- [x] 개별 할 일 클릭시 완료처리가 되도록 한다.
- [x] 삭제 아이콘 클릭시 해당 값은 기존 배열에서 삭제하고 나머지를 화면에 표시한다.
- [ ] 수정 아이콘 클릭시 수정용 별도 Input창이 뜨도록 설정한다.
- [ ] 변경된 내용이 있는 경우 상태 업데이트, 변경된 내용이 없거나 공백인 경우 무시한다.
