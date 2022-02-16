// 문제 설명
// 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

// 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
// 2. words에 있는 단어로만 변환할 수 있습니다.
// 예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.

// 두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 각 단어는 알파벳 소문자로만 이루어져 있습니다.
// 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
// words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
// begin과 target은 같지 않습니다.
// 변환할 수 없는 경우에는 0를 return 합니다.
// 입출력 예
// begin	target	words	return
// "hit"	"cog"	["hot", "dot", "dog", "lot", "log", "cog"]	4
// "hit"	"cog"	["hot", "dot", "dog", "lot", "log"]	0
// 입출력 예 설명
// 예제 #1
// 문제에 나온 예와 같습니다.

// 예제 #2
// target인 "cog"는 words 안에 없기 때문에 변환할 수 없습니다.

function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    const result = [];
    const visited = words.reduce((result, current) => {
        result[current] = false;
        return result;
    }, {});

    const dfs = (current, count) => {
        words.some((word) => {
            let isTarget = 0;
            let isDiff = 0;
            for (let idx = 0; idx < word.length; idx++) {
                if (current[idx] !== target[idx]) isTarget++;
                if (current[idx] !== word[idx]) isDiff++;
            }
            if (isTarget === 1) {
                result.push(count + 1);
                return true;
            } else if (isDiff === 1 && !visited[word]) {
                visited[word] = true;
                dfs(word, count + 1);
            }
        });
    }

    dfs(begin, 0);

    return Math.min(...result);
}
/** 다른 사람 풀이 큐를 활용했다. */
function solution(begin, target, words) {
    const queue = [begin];
    const visitArr = new Array(words.length).fill(false);
    let ctr = 0;
    let shiftedWord = begin;
    let queueLeng = 1;

    while(queue.length > 0) {
        shiftedWord = queue.shift();
        queueLeng--;

        for(let i in words) {            
            if(check(shiftedWord, words[i])) {
                if(visitArr[i] == true) 
                    continue;

                if(words[i] == target)
                    return ctr+1;

                visitArr[i] = true;
                queue.push(words[i]);
            }
        }

        if(queueLeng == 0) {
            ctr++;
            queueLeng = queue.length;
        }
    }
    return 0;

    function check(standard, word) {
        let diffCtr = 0;

        if(standard.length != word.length) 
            return false;

        for(let i=0; i<standard.length; i++) {
            if(standard.charAt(i) != word.charAt(i))
                diffCtr++;
            if(diffCtr > 1)
                return false;
        }
        return true;
    }
}
