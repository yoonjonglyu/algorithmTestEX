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
const mergeTwoLists = function (l1, l2) {
    let result;
    let state;
    if (l1 !== null && l2 !== null) {
        if (l1.val === l2.val) {
            result = new ListNode(l1.val);
            state = result;
            state.next = new ListNode(l2.val);
            state = state.next;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1.val < l2.val) {
            result = new ListNode(l1.val);
            state = result;
            l1 = l1.next;
        } else {
            result = new ListNode(l2.val);
            state = result;
            l2 = l2.next;
        }
        while (l1 !== null && l2 !== null) {
            if (state.val === l1.val && state.val === l2.val) {
                state.next = new ListNode(l1.val);
                state = state.next;
                state.next = new ListNode(l2.val);
                state = state.next;
                l1 = l1.next;
                l2 = l2.next;
            } else if (state.val === l1.val) {
                state.next = new ListNode(l1.val);
                state = state.next;
                l1 = l1.next;
            } else if (state.val === l2.val) {
                state.next = new ListNode(l2.val);
                state = state.next;
                l2 = l2.next;
            } else if (l1.val > l2.val) {
                state.next = new ListNode(l2.val);
                state = state.next;
                l2 = l2.next;
            } else if (l1.val < l2.val) {
                state.next = new ListNode(l1.val);
                state = state.next;
                l1 = l1.next;
            } else {
                state.next = new ListNode(l1.val);
                state = state.next;
                state.next = new ListNode(l2.val);
                state = state.next;
                l1 = l1.next;
                l2 = l2.next;
            }
        }
        if (l1 !== null) {
            state.next = l1;
        }
        if (l2 !== null) {
            state.next = l2;
        }
    } else if (l1 !== null) {
        result = l1;
    } else if (l2 !== null) {
        result = l2;
    } else {
        result = l1;
    }


    return result;
};
/**
 * Runtime: 92 ms, faster than 60.91% of JavaScript online submissions for Merge Two Sorted Lists.
 * Memory Usage: 41.5 MB, less than 5.02% of JavaScript online submissions for Merge Two Sorted Lists.
 */
const mergeTwoLists = function (l1, l2) {
    let result;
    let state;
    if (l1 !== null && l2 !== null) {
        if (l1.val === l2.val) {
            result = new ListNode(l1.val);
            state = result;
            state.next = new ListNode(l2.val);
            state = state.next;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1.val < l2.val) {
            result = new ListNode(l1.val);
            state = result;
            l1 = l1.next;
        } else {
            result = new ListNode(l2.val);
            state = result;
            l2 = l2.next;
        }
        while (l1 !== null && l2 !== null) {
            if (l1.val > l2.val) {
                state.next = new ListNode(l2.val);
                state = state.next;
                l2 = l2.next;
            } else if (l1.val < l2.val) {
                state.next = new ListNode(l1.val);
                state = state.next;
                l1 = l1.next;
            } else {
                state.next = new ListNode(l1.val);
                state = state.next;
                state.next = new ListNode(l2.val);
                state = state.next;
                l1 = l1.next;
                l2 = l2.next;
            }
        }
        if (l1 !== null) {
            state.next = l1;
        }
        if (l2 !== null) {
            state.next = l2;
        }
    } else if (l1 !== null) {
        result = l1;
    } else if (l2 !== null) {
        result = l2;
    } else {
        result = l1;
    }

    return result;
};
/**
 * Runtime: 80 ms, faster than 97.79% of JavaScript online submissions for Merge Two Sorted Lists.
 * Memory Usage: 40.6 MB, less than 20.72% of JavaScript online submissions for Merge Two Sorted Lists.
 */

const mergeTwoLists = function (l1, l2) {
    let result;

    if (l1 !== null && l2 !== null) {
        result = new ListNode(0);
        let state = result;
        while (l1 !== null && l2 !== null) {
            if (l1.val > l2.val) {
                state.next = new ListNode(l2.val);
                state = state.next;
                l2 = l2.next;
            } else if (l1.val < l2.val) {
                state.next = new ListNode(l1.val);
                state = state.next;
                l1 = l1.next;
            } else {
                state.next = new ListNode(l1.val);
                state = state.next;
                state.next = new ListNode(l2.val);
                state = state.next;
                l1 = l1.next;
                l2 = l2.next;
            }
        }

        if (l1 !== null) {
            state.next = l1;
        }
        if (l2 !== null) {
            state.next = l2;
        }
        result = result.next;

    } else if (l1 !== null) {
        result = l1;
    } else {
        result = l2;
    }

    return result;
};
/**
 * Runtime: 80 ms, faster than 97.79% of JavaScript online submissions for Merge Two Sorted Lists.
 * Memory Usage: 40.2 MB, less than 67.05% of JavaScript online submissions for Merge Two Sorted Lists.
 */
const mergeTwoLists = function (l1, l2) {
    let result;

    if (l1 !== null && l2 !== null) {
        result = new ListNode(0);
        let state = result;
        while (l1 !== null && l2 !== null) {
            if (l1.val >= l2.val) {
                state.next = new ListNode(l2.val);
                state = state.next;
                l2 = l2.next;
            } else {
                state.next = new ListNode(l1.val);
                state = state.next;
                l1 = l1.next;
            }
        }

        if (l1 !== null) {
            state.next = l1;
        }
        if (l2 !== null) {
            state.next = l2;
        }
        result = result.next;

    } else if (l1 !== null) {
        result = l1;
    } else {
        result = l2;
    }

    return result;
};
/**
 * Runtime: 88 ms, faster than 81.24% of JavaScript online submissions for Merge Two Sorted Lists.
 * Memory Usage: 40.2 MB, less than 80.44% of JavaScript online submissions for Merge Two Sorted Lists.
 */
const mergeTwoLists = function (l1, l2) {
    let result;

    if (l1 !== null && l2 !== null) {
        result = new ListNode(0);
        let state = result;
        
        while (l1 !== null && l2 !== null) {
            if (l1.val >= l2.val) {
                state.next = new ListNode(l2.val);
                state = state.next;
                l2 = l2.next;
            } else {
                state.next = new ListNode(l1.val);
                state = state.next;
                l1 = l1.next;
            }
        }

        if (l1 !== null) {
            state.next = l1;
        } else if (l2 !== null) {
            state.next = l2;
        }
        result = result.next;

    } else if (l1 !== null) {
        result = l1;
    } else {
        result = l2;
    }

    return result;
};
/**
 * Runtime: 84 ms, faster than 92.48% of JavaScript online submissions for Merge Two Sorted Lists.
 * Memory Usage: 40.6 MB, less than 20.72% of JavaScript online submissions for Merge Two Sorted Lists.
 */