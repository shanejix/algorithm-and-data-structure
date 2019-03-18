#include <stdio.h>

#include <vector>

class Solution {
public:
    int wiggleMaxLength(std::vector<int>& nums) {
    	if(nums.size()<2){
		 	return nums.size();
		}
    	
    	const int BG=0;
    	const int UP=1;
    	const int DW=2;
    	int ST=BG;
    	
        int length=1;
        
        for(int i=1;i<nums.size();i++){
        	
        	switch(ST){
        		case BG:
        			if(nums[i]>nums[i-1]){
        				ST=UP;
        				length++;
					}
					else if(nums[i]<nums[i-1]){
						ST=DW;
						length++;
					}
					break;
        		case UP:
        			if(nums[i]<nums[i-1]){
        				ST=DW;
        				length++;
					}
					break;
				
        		case DW:
        			if(nums[i]>nums[i-1]){
        				ST=UP;
        				length++;
					}
					break;
			}
		}
		return length;
    }
};

int main(){
	std::vector<int> nums;
	int arr[]={33,53,12,64,50,41,45,21,97,35,47,92,39,0,93,55,40,46,69,42,6,95,51,68,72,9,32,84,34,64,6,2,26,98,3,43,30,60,3,68,82,9,97,19,27,98,99,4,30,96,37,9,78,43,64,4,65,30,84,90,87,64,18,50,60,1,40,32,48,50,76,100,57,29,63,53,46,57,93,98,42,80,82,9,41,55,69,84,82,79,30,79,18,97,67,23,52,38,74,15};
	for(int i=0;i<sizeof(arr)/sizeof(arr[0]);i++){
		nums.push_back(arr[i]);
	}
	Solution solve;
	printf("%d\n", solve.wiggleMaxLength(nums));
	return 0;
}
