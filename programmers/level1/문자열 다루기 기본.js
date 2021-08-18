// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true

function solution(s) {
    return (s.length === 4 || s.length === 6) ?
        (isNaN(s.replace("e",'a')) ? false : true) : // 지수나 16진법을 isNaN에서 숫자로 인식한다...;
        false;
}

/* 다른 사람 풀이 정규 표현식을 통해서 깔끔하게 풀었다.*/
function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/; // 시작부터(^)정수가 6자리 이거나 | 4자리인 것을 찾는 정규표현식
    return regex.test(s);
}


