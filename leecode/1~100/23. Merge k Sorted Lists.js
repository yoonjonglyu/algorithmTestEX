/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) { // 가장 간단한 브루트 포스
    const result = new ListNode(0);

    if(lists.length !== 0){
        let state = result;

        while(true){
            let currentIndex = 0;
            let currentValue = 999999999;
            let count = 0;
            
            for(let int = 0; int < lists.length; int++){
                
                if(lists[int] !== null && currentValue > lists[int].val){
                    currentValue = lists[int].val;
                    currentIndex = int;
                } else if(lists[int] === null) {
                    count++;
                }
            }
            if(count === lists.length){
                break;
            }

            state.next = new ListNode(lists[currentIndex].val);
            state = state.next;
            lists[currentIndex] = lists[currentIndex].next;
        }
    }
    
    return result.next;
};
/**
 * Runtime: 424 ms, faster than 23.13% of JavaScript online submissions for Merge k Sorted Lists.
 * Memory Usage: 43.2 MB, less than 96.58% of JavaScript online submissions for Merge k Sorted Lists.
 */
/** 성능이 구린대신 메모리는 덜쓴다.. 아니 메모리를 덜써서 성능이 구리다는게 더 맞는 거 같다. */