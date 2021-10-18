// 사전에 알파벳 모음 'A', 'E', 'I', 'O', 'U'만을 사용하여 만들 수 있는, 길이 5 이하의 모든 단어가 수록되어 있습니다. 사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA"이며, 마지막 단어는 "UUUUU"입니다.

// 단어 하나 word가 매개변수로 주어질 때, 이 단어가 사전에서 몇 번째 단어인지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// word의 길이는 1 이상 5 이하입니다.
// word는 알파벳 대문자 'A', 'E', 'I', 'O', 'U'로만 이루어져 있습니다.
// 입출력 예
// word	result
// "AAAAE"	6
// "AAAE"	10
// "I"	1563
// "EIO"	1189
// 입출력 예 설명
// 입출력 예 #1

// 사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA", "AAA", "AAAA", "AAAAA", "AAAAE", ... 와 같습니다. "AAAAE"는 사전에서 6번째 단어입니다.

// 입출력 예 #2

// "AAAE"는 "A", "AA", "AAA", "AAAA", "AAAAA", "AAAAE", "AAAAI", "AAAAO", "AAAAU"의 다음인 10번째 단어입니다.

// 입출력 예 #3

// "I"는 1563번째 단어입니다.

// 입출력 예 #4

// "EIO"는 1189번째 단어입니다.

function solution(word) {
    return ['A', 'E', 'I', 'O', 'U'].reduce((result, c, _, char) => {
        const rec = (state, n) => {
            if (!result.has(word)) {
                char.some((current) => {
                    state.push(current);
                    const check = state.join('');
                    if (!result.has(check)) {
                        result.set((check), result.size + 1);
                        if (check === word) return true;
                    }
                    if (n > 0) {
                        rec(state, n - 1);
                    }
                    state.pop();
                });
            }
        }
        rec([], 4);

        return result;
    }, new Map()).get(word);
}

/** 다른 사람풀이 중간 과정 생략한 풀이 효율적이다. */
function solution(words) {
    return words.split('').reduce((r, c, i) => r + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(c) + 1, 0);
}
