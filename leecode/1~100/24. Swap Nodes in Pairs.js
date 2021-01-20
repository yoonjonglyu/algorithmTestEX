/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
    const result = new ListNode(0);
    let state = result;
    
    while(head !== null){
        let left = head;
        let right = head.next;

        if(right !== null){ // 남은 길이가 쌍 이면 서로 스왑해서 리스트에 삽입
            state.next = new ListNode(right.val);
            state = state.next;
            state.next = new ListNode(left.val);
            state = state.next;
            head = right.next;
        } else {
            if(left !== null){ // 남은게 하나면 그대로 리스트에 삽입
                state.next = new ListNode(left.val);
            }
            head = null;
        }
    }
    
    return result.next;
};
/**
 * Runtime: 64 ms, faster than 99.67% of JavaScript online submissions for Swap Nodes in Pairs.
 * Memory Usage: 38.6 MB, less than 79.36% of JavaScript online submissions for Swap Nodes in Pairs.
 */