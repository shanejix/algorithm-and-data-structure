#include <stack>
#include <stdio.h>

class MyQueue {
private:
	std::stack<int> data_s;
public:
    /** Initialize your data structure here. */
    MyQueue() {
        
    }
    
    /** Push element x to the back of queue. */
    void push(int x) {
        std::stack<int> temp_stack;
        
        while(!data_s.empty()){
        	int x=data_s.top();
        	data_s.pop();
        	temp_stack.push(x);
		}
		
		temp_stack.push(x);
		
		while(!temp_stack.empty()){
			int x= temp_stack.top();
			temp_stack.pop();
			data_s.push(x);
		}
    }
    
    /** Removes the element from in front of queue and returns that element. */
    int pop() {
        int x = data_s.top();
        data_s.pop();
        return x;
    }
    
    /** Get the front element. */
    int peek() {
        return data_s.top();
    }
    
    /** Returns whether the queue is empty. */
    bool empty() {
        return data_s.empty();
    }
};

int main(){
	MyQueue mq;
	mq.push(10);
	mq.push(15);
	mq.push(13);
	mq.push(1);
	mq.pop();
	mq.pop();
	printf("%d\n",mq.peek());
//	printf("%d\n",mq.empty());
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * bool param_4 = obj.empty();
 */
