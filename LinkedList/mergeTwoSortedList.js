/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoListsApproach1 = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    let curr = null;

    if (list1.val < list2.val) {
        curr = list1
        list1 = list1.next
    } else {
        curr = list2;
        list2 = list2.next
    }

    let start = curr;

    while (list1 && list2) {
        if (list1?.val < list2?.val) {
            curr.next = list1;
            list1 = list1.next
        } else {
            curr.next = list2;
            list2 = list2.next
        }

        curr = curr.next;
    }
    if (!list1) curr.next = list2;
    if (!list2) curr.next = list1;

    return start;
};

var mergeTwoListsApproach2 = function (list1, list2) {
    let start = new ListNode();
    let curr = start;

    while (list1 && list2) {
        if (list1?.val < list2?.val) {
            curr.next = list1;
            list1 = list1.next
        } else {
            curr.next = list2;
            list2 = list2.next
        }

        curr = curr.next;
    }
    if (!list1) curr.next = list2;
    if (!list2) curr.next = list1;

    return start.next;
};


var mergeTwoListsApproach3 = function(list1, list2) {
    if ( list1 == null || list2 == null) {
        return list1 == null ? list2 : list1
    }

    if ( list1.val <= list2.val){
        list1.next = mergeTwoListsApproach3(list1.next, list2)
        return list1
    }

    if ( list1.val > list2.val) {
        list2.next = mergeTwoListsApproach3(list1, list2.next)
        return list2
    }
};