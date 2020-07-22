class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    isEmpthy() {
        return !this.head;
    }
    add(value) {
        //create new node with value
        let node = new Node(value);
        // check if queue is empthy
        if (!this.head) {
            //point head and tail to new node
            this.head = node;
            this.tail = node;
            //else the queue is not empthy
        } else {
            //push the node the back of the queue
            // by pointing of the last node to the newly created one
            this.tail.next = node;

            //move tail to new node
            this.tail = node;
        }
        this.print();
    }
    print(){
        //if the queue is empthy
        if (this.isEmpthy()) {
            console.log("empthy queue");
        }
        //else it is not empthy
        else {
            // temp array
            let tmpArr = [];
            //tmp the variable to the head of the queue
            let tmp = this.head;
            //itterrate through the queue
            while (tmp) {
                //add value into tmp arr 
                tmpArr.push(tmp.value);
                //move to the next element
                tmp = tmp.next;
            }
            // print the values
            console.log(tmpArr.join(','));
        }
    }

remove(){
    //pointer of the front of the queue
    let node = this.head;
    //if the queue is not empthy
    if(!this.isEmpthy()){
          //move front to the next element
        this.head = this.head.next;
    }

    //check if front is null //past the end of the queue
    if(!this.head){
        //set back to null
        this.back = null;
    }
   
    //print 
    this.print();
    //return  node at the infront of the node
    return node;
}
}
let qu = new Queue();
qu.add("Pesho");
qu.add("Mimi");
qu.add("Ivana");

qu.remove();
qu.remove();
qu.remove();




