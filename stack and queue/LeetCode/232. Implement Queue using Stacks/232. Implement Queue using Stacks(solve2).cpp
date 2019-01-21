#include <stack>
#include <stdio.h>


class MyQueue {
private:
	std::stack<int> data_s;
	std::stack<int> temp_s;
public:
	
	void maintain(){
		while(!data_s.empty()){
			int x=data_s.top();
			data_s.pop();
			temp_s.push(x);
		}
	}
	
    /** Initialize your data structure here. */
    MyQueue() {
        
    }
    
    /** Push element x to the back of queue. */
    void push(int x) {
        data_s.push(x);
    }
    
    /** Removes the element from in front of queue and returns that element. */
    int pop() {
        if(!temp_s.empty()){
        	int x=temp_s.top();
        	temp_s.pop();
        	return x;
		}
		
//		while(!data_s.empty()){
//			int x=data_s.top();
//			data_s.pop();
//			temp_s.push(x);
//		}

		maintain();
		
		int x=temp_s.top();
        temp_s.pop();
        return x;
    }
    
    /** Get the front element. */
    int peek() {
        if(!temp_s.empty()){
        	return temp_s.top();
		}
		
//		while(!data_s.empty()){
//			int x=data_s.top();
//			data_s.pop();
//			temp_s.push(x);
//		}
		
		maintain();
		
		return temp_s.top();
    }
    
    /** Returns whether the queue is empty. */
    bool empty() {
        return data_s.empty()&&temp_s.empty();
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
