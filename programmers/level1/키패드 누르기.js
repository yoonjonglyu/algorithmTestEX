// 문제 설명
// 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

// kakao_phone1.png

// 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
// 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

// [제한사항]
// numbers 배열의 크기는 1 이상 1,000 이하입니다.
// numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
// hand는 "left" 또는 "right" 입니다.
// "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
// 왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.
// 입출력 예
// numbers	hand	result
// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"
// 입출력 예에 대한 설명
// 입출력 예 #1

// 순서대로 눌러야 할 번호가 [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]이고, 오른손잡이입니다.

// 왼손 위치	오른손 위치	눌러야 할 숫자	사용한 손	설명
// *	#	1	L	1은 왼손으로 누릅니다.
// 1	#	3	R	3은 오른손으로 누릅니다.
// 1	3	4	L	4는 왼손으로 누릅니다.
// 4	3	5	L	왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
// 5	3	8	L	왼손 거리는 1, 오른손 거리는 3이므로 왼손으로 8을 누릅니다.
// 8	3	2	R	왼손 거리는 2, 오른손 거리는 1이므로 오른손으로 2를 누릅니다.
// 8	2	1	L	1은 왼손으로 누릅니다.
// 1	2	4	L	4는 왼손으로 누릅니다.
// 4	2	5	R	왼손 거리와 오른손 거리가 1로 같으므로, 오른손으로 5를 누릅니다.
// 4	5	9	R	9는 오른손으로 누릅니다.
// 4	9	5	L	왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
// 5	9	-	-	
// 따라서 "LRLLLRLLRRL"를 return 합니다.

// 입출력 예 #2

// 왼손잡이가 [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]를 순서대로 누르면 사용한 손은 "LRLLRRLLLRR"이 됩니다.

// 입출력 예 #3

// 오른손잡이가 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]를 순서대로 누르면 사용한 손은 "LLRLLRLLRL"이 됩니다.

function solution(numbers, hand) {
    const handPosition = [[0, 0], [0, 2]];

    return numbers.map((num) => checkNums(num)).join("");

    function checkNums(num) {
        const fixNums = {
            1: "L",
            4: "L",
            7: "L",
            3: "R",
            6: "R",
            9: "R",
        };

        if (fixNums[num]) {
            setKey(num, fixNums[num]);
            return fixNums[num];
        } else {
            const leftLength = Math.abs(getKey(num)[0] - handPosition[0][0]) + Math.abs(getKey(num)[1] - handPosition[0][1]);
            const rightLength = Math.abs(getKey(num)[0] - handPosition[1][0]) + Math.abs(getKey(num)[1] - handPosition[1][1]);
            if (leftLength < rightLength) {
                setKey(num, "L");
                return "L";
            }
            if (leftLength > rightLength) {
                setKey(num, "R");
                return "R";
            }
            if (hand === "left") {
                setKey(num, "L");
                return "L"
            } else {
                setKey(num, "R");
                return "R";
            }
        }

        function setKey(num, hand){
            hand === "L" ?
            handPosition[0] = getKey(num) :
            handPosition[1] = getKey(num);
        }
        function getKey(num) {
            return {
                "*": [0, 0],
                "0": [0, 1],
                "#": [0, 2],
                "7": [1, 0],
                "8": [1, 1],
                "9": [1, 2],
                "4": [2, 0],
                "5": [2, 1],
                "6": [2, 2],
                "1": [3, 0],
                "2": [3, 1],
                "3": [3, 2]
            }[num];
        }
    }
}
/** 다른사람 풀이 깔끔하게 잘풀었다. */

function solution(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L"
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2] // 포지션 계산하려다 귀찮아서 안했는데 이 코드는 했다.
  let h = { L: [1, 1], R: [1, 1] }
  return numbers.map(x => {
    if (/[147]/.test(x)) {
      h.L = [position[x], 1]
      return "L"
    }
    if (/[369]/.test(x)) {
      h.R = [position[x], 1]
      return "R"
    }
    let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
    let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
    if (distL === distR) { // 핸드를 미리 정리해서 좀 더 간결한 코드가 나오는게 인상 깊다.
      h[hand] = [position[x], 0]
      return hand
    }
    if (distL < distR) {
      h.L = [position[x], 0]
      return "L"
    }
    h.R = [position[x], 0]
    return "R"
  }).join("")
}
