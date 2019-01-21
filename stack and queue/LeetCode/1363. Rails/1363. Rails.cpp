#include <stdio.h>
#include <stack>
#include <queue>

class rails{
private:
	
public:
	bool check(int n,std::queue<int>& order){
		std::stack<int> temp_stack;
//		std::queue<int> order;
		
		for(int i=1;i<=n;i++){//key
			temp_stack.push(i);
			while(!temp_stack.empty()&&order.front()==temp_stack.top()){
				order.pop();
				temp_stack.pop();
			}
		}
		if(!temp_stack.empty()){
			return false;
		}
		return true;
	}
};

int main(){
	rails rail;
	std::queue<int> que;
	que.push(1);
	que.push(2);
	que.push(3);
	if(rail.check(3,que)){
		printf("yes!");
	}else{
		printf("no!");
	}
}
