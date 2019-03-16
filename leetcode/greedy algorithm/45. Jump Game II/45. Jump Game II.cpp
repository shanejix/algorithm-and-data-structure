#include <stdio.h>
#include <vector>


class Solution {
public:
    int jump(std::vector<int>& nums) {
    	if(nums.size()<2){
    		return 0;
		}
		
    	int jump_num=1;
    	int current=nums[0];
    	int pre_max=nums[0];
    	
    	for(int i=0;i<nums.size();i++){
    		
			if(i>current){
				jump_num++;
				current=pre_max;
			}
			if(pre_max<nums[i]+i){
				pre_max=nums[i]+i;
			}
		}
        return jump_num;
    }
};

//class Solution {
//public:
//    int jump(std::vector<int>& nums) {
//    	if(nums.size()<2){
//    		return 0;
//		}
//		
//    	int jump_num=1;
//    	int current=nums[0];
//    	int pre_max=nums[0];
//    	
//    	for(int i=0;i<nums.size();i++){
//    		if(i<=current){
//    			if(pre_max<nums[i]+i){
//    				pre_max=nums[i]+i;
//				}
//			}else{
//				jump_num++;
//				current=pre_max;
//			}
//		}
//        return jump_num;
//    }
//};

int main(){
	std::vector<int> nums;
	nums.push_back(2);
//	nums.push_back(3);
//	nums.push_back(1);
	nums.push_back(1);
//	nums.push_back(4);
	Solution solve;
	printf("%d\n", solve.jump(nums));
	return 0;
}

