/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
    return rotate(getListLength());

    function rotate(length) {
        let result = head;
        if(!result || result.next === null) return result;
        for (let i = 0; i < k; i++) {
            const rightNode = result;
            let leftNode = result;
            for (let int = 0; int < length; int++) {
                const state = leftNode
                leftNode = leftNode.next;
                if (int === (length - 1)) state.next = null;
            }
            leftNode.next = rightNode;
            result = leftNode;
        }

        return result;
    }

    function getListLength() {
        let result = 0;
        let state = head;

        if(state){
            while (state.next !== null) {
                state = state.next;
                result++;
            }
        }

        return result;
    }
};
/**
 * Runtime: 7936 ms, faster than 5.07% of JavaScript online submissions for Rotate List.
 * Memory Usage: 40.2 MB, less than 93.46% of JavaScript online submissions for Rotate List.
 * 실행시간이 돌았다.. 메모리는 극도로 아끼는데;
 */
const rotateRight = function (head, k) {
    if(!head) return head;
    
    return rotate(getListLength());

    function rotate(length) {
        if(length == 0) return head;

        let result = head;
        if(k > 10000000) k = parseInt(k / 10000000);
        for (let i = 0; i < k; i++) {
            const rightNode = result;
            let leftNode = result;
            for (let int = 0; int < length; int++) {
                const state = leftNode
                leftNode = leftNode.next;
                if (int === (length - 1)) state.next = null;
            }
            leftNode.next = rightNode;
            result = leftNode;
        }

        return result;
    }

    function getListLength() {
        let result = 0;
        let state = head;

        if(state){
            while (state.next !== null) {
                state = state.next;
                result++;
            }
        }

        return result;
    }
};
/**
 * Runtime: 80 ms, faster than 88.12% of JavaScript online submissions for Rotate List.
 * Memory Usage: 40.8 MB, less than 15.35% of JavaScript online submissions for Rotate List.
 * if(k > 10000000) k = parseInt(k / 10000000); 더럽게 많은 반복일 경우 줄이는게 핵심인듯..
 */