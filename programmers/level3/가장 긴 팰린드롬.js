// 문제 설명
// 앞뒤를 뒤집어도 똑같은 문자열을 팰린드롬(palindrome)이라고 합니다.
// 문자열 s가 주어질 때, s의 부분문자열(Substring)중 가장 긴 팰린드롬의 길이를 return 하는 solution 함수를 완성해 주세요.

// 예를들면, 문자열 s가 "abcdcba"이면 7을 return하고 "abacde"이면 3을 return합니다.

// 제한사항
// 문자열 s의 길이 : 2,500 이하의 자연수
// 문자열 s는 알파벳 소문자로만 구성
// 입출력 예
// s	answer
// "abcdcba"	7
// "abacde"	3
// 입출력 예 설명
// 입출력 예 #1
// 4번째자리 'd'를 기준으로 문자열 s 전체가 팰린드롬이 되므로 7을 return합니다.

// 입출력 예 #2
// 2번째자리 'b'를 기준으로 "aba"가 팰린드롬이 되므로 3을 return합니다.

function solution(s) {
    let result = 1;

    for (let idx = 0; idx < s.length; idx++) {
        let count = 1;
        while (idx > 0) {
            let left = idx - 1;
            let right = idx + count;
            if (s[left] === s[right]) {
                while (s[left - 1] === s[right + 1]) {
                    if (left - 1 < 0 || right + 1 >= s.length) break;
                    left--;
                    right++;
                }
            } else {
                left = 0;
                right = 0;
            }
            const state = Math.max(right - left + 1, count);
            result = result > state ?
                result :
                state;

            if (s[idx] !== s[idx + count]) break;
            count++;
        }
    }

    return result;
}

/** 이쁜 코드 지금은 작동안된다. */
// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function longest_palindrom(s){
    // 함수를 완성하세요
    if (s === s.split("").reverse().join("")) {
      return s.length;
    } else {
      var A = longest_palindrom(s.substring(0, s.length-1));
      var B = longest_palindrom(s.substring(1, s.length));
      return Math.max(A, B);
    }
  }
  