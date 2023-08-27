// 기본 문자열
// 엔터키 불가능
// 변수넣으려면 따옴표 닫아서 문자열 분리하고 + 변수명 해야됨
var string = '손흥민 ' + 1;
console.log(string);

// backtick
// 엔터키 가능
// 중간중간 변수넣기 쉬움 ${변수명}
// html 작성하기 좋음 (특히 리액트)
var string2 = `손흥민 ${1}`;
console.log(string2);

function func() {
  return 10;
}
