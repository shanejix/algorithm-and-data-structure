#include <stdio.h>
#include <stack>


class MinStack {
private:
	std::stack<int>data_stack;
	std::stack<int>min_stack;
public:
    /** initialize your data structure here. */
    MinStack() {
        
    }
    
    void push(int x) {
//        if(data_stack.empty()){
//        	data_stack.push(x);
//        	min_stack.push(x);
//		}
//		if(x<min_stack.top()){
//			min_stack.push(x);
//		}else{
//			int x=min_stack.top();
//			min_stack.push(x);
//		}
//		data_stack.push(x);
		//error			???
		
		data_stack.push(x);
		if(min_stack.empty()){
			min_stack.push(x);
		}else{
//			if(x>min_stack.top()){
//				x=min_stack.top();
//				min_stack.push(x);
//			}else{
//				min_stack.push(x);
//			}
			if(x>min_stack.top()){
				x=min_stack.top();
			}
			min_stack.push(x);
			
		}
		
    }
    
    void pop() {
//        int x=data_stack.top();
        data_stack.pop();
        min_stack.pop();
//        return x;
    }
    
    int top() {
        return data_stack.top();
    }
    
    int getMin() {
        return min_stack.top();
    }
};

int main(){
	MinStack ms;
	ms.push(0);
	ms.push(-5);
	ms.push(3);
	ms.push(-2);
	ms.push(10);
	printf("%d\n",ms.getMin());
	ms.pop();
	printf("%d\n",ms.getMin());
	ms.pop();
	printf("%d\n",ms.getMin());
	ms.pop();
	printf("%d\n",ms.getMin());
	ms.pop();
	printf("%d\n",ms.getMin());
}
/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
