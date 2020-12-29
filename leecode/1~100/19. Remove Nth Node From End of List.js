/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    let state = head;
    let LENGTH = 0;
    while(state.next !== null){ // 길이 구하기
        state = state.next;
        LENGTH++;
    }
    if(LENGTH > 0 && state.next === null){ 
        LENGTH++;
    }
    LENGTH -= n;

    if(LENGTH > 0){
        state = head;
        while(LENGTH > 1){ // 노드 교체하기
            state = state.next;
            LENGTH--;
        }
        state.next = state.next.next;
    } else {
        head = head.next;
    }

    return head;
};

/**
 * Runtime: 76 ms, faster than 94.50% of JavaScript online submissions for Remove Nth Node From End of List.
 * Memory Usage: 40.3 MB, less than 28.89% of JavaScript online submissions for Remove Nth Node From End of List.
 */

removeNthFromEnd([1, 2, 3, 4, 5], 2);
removeNthFromEnd([1, 2], 1);
removeNthFromEnd([1], 1);