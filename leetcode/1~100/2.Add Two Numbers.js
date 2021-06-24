/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) { // 리스트를 사용하지 않았다고 빠꾸먹었다.
    const result = [];
    
    for(let int = 0; int < l1.length; int++){
        let state = (l1[int] ? l1[int] : 0) + (l2[int] ? l2[int] : 0);

        if(state > 9){
            if(l1[int + 1] !== undefined){
                l1[int + 1]++;
            } else {
                l1[int + 1] = ((state - (state % 10)) / 10);
            }
            state = (state % 10);
        }
        
        result.push(state);
    }

    return result
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);
addTwoNumbers([0], [0]);
addTwoNumbers([9,9,9,9,9,9,9], [9, 9, 9, 9]);


/**
 * 연결 리스트를 사용한 풀이
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const addTwoNumbers = function(l1, l2) {
    const result = new ListNode(0);
    let current = result;

    while(l1 != null || l2 != null){
        let state = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);

        if(state > 9){
            if(l1.next !== null){
                l1.next.val++;
            } else {
                l1.next= new ListNode((state - (state % 10)) / 10);
            }
        }
        
        current.next = new ListNode ((state % 10));
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        current = current.next;
    }

    return result.next;
};

/**
 * Runtime: 120 ms, faster than 96.33% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 43.8 MB, less than 6.00% of JavaScript online submissions for Add Two Numbers.
 */
