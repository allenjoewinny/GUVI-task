// inserting a new node in linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class linked_list {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }
  add(element) {
    this.head = new Node(element, this.head);
  }
  insert_at(index, element) {
    let temp = this.head;
    if (index === 0) {
      this.head = new Node(element, this.head);
    } else {
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
      }
      temp.next = new Node(element, temp.next);
    }
  }
  deleteAt(index) {
    let temp = this.head;
    if (index === 0) {
      this.head = temp.next;
    } else {
      let i = 0;
      while (i < index - 1) {
        temp = temp.next;
        i++;
      }
      temp.next = temp.next.next;
    }
  }
  Middle() {
    let fast = this.head;
    let slow = this.head;

    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(slow.data);
  }
}

let ll = new linked_list();

// ll.add(100);
ll.add(200);
ll.add(300);
ll.add(400);
ll.add(800);
ll.insert_at(1, 900);
ll.deleteAt(1);
ll.deleteAt(1);
ll.Middle();
console.log(ll);
