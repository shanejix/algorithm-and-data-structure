#include <stdio.h>
#include <vector>
#include <string>

class Solution {
public:
    std::string removeKdigits(std::string num, int k) {
    	
    	std::vector<int> num_stack;
    	std::string result="";
    	
    	for(int i=0;i<num.length();i++){
    		
    		int temp_num=num[i]-'0';
    		
    		while(num_stack[num_stack.size()-1]>temp_num && num_stack.size()!=0 && k>0){
    			
    			num_stack.pop_back();
//    			num_stack.push_back(temp_num);
    			k--;
			}
			
			if(num_stack.size()!=0 || temp_num!=0){
				num_stack.push_back(temp_num);
			}
			
		}
		
		while(num_stack.size()!=0 && k>0){
			num_stack.pop_back();
			k--;
		}
		
		for(int i=0;i<num_stack.size();i++){
			result.append(1,'0'+num_stack[i]);
		}
		if(result == "") result = "0";
		
		return result;
        
    }
};

int main(){
	Solution solve;
	std::string result = solve.removeKdigits("1432219", 3);
	printf("%s\n", result.c_str());
	std::string result2 = solve.removeKdigits("100200", 1);
	printf("%s\n", result2.c_str());
	return 0;
}
