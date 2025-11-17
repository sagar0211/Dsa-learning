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
var removeNthFromEndTwoPass = function (head, n) {
    let sentinelNode = new ListNode();
    sentinelNode.next = head;
    let length = 0;
    while (head) {
        head = head.next;
        length++
    }

    let prevPosition = length - n;

    let prev = sentinelNode;
    for (let i = 0; i < prevPosition; i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next;

    return sentinelNode.next;

};


var removeNthFromEndOnePass = function (head, n) {
    let sentinelNode = new ListNode();
    sentinelNode.next = head;

    let firstPointer = sentinelNode;
    let secondPointer = sentinelNode;

    for (let i = 0; i < n; i++) {
        firstPointer = firstPointer.next;
    }

    while (firstPointer && firstPointer.next) {
        secondPointer = secondPointer.next;
        firstPointer = firstPointer.next;
    }
    secondPointer.next = secondPointer.next.next;

    return sentinelNode.next;

};