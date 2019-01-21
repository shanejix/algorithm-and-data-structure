#include <queue>
#include <stdio.h>


class MyStack {
private:
	std::queue<int> s;
public:
    /** Initialize your data structure here. */
    MyStack() {
        
    }
    
    /** Push element x onto stack. */
    void push(int x) {
        std::queue<int> temp_q;
        temp_q.push(x);
        while(!s.empty()){
        	temp_q.push(s.front());
        	s.pop();
		}
		while(!temp_q.empty()){
			s.push(temp_q.front());
			temp_q.pop();
		}
    }
    
    /** Removes the element on top of the stack and returns that element. */
    int pop() {
    	int x=s.front();
    	s.pop();
        return x;
    }
    
    /** Get the top element. */
    int top() {
        return s.front();
    }
    
    /** Returns whether the stack is empty. */
    bool empty() {
        return s.empty();
    }
};

int main(){
	MyStack s;
	s.push(10);
	s.push(20);
	s.push(11);
	printf("%d\n",s.top());
	s.pop();
	printf("%d\n",s.top());
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * bool param_4 = obj.empty();
 */
