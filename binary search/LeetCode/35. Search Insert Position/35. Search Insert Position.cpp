#include <stdio.h>
#include <vector>
using namespace std;

class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int index=-1;
        int left=0;
        int right=nums.size()-1;
        int mid;
        
        while(index==-1){
        	mid=(left+right)/2;
        	if(target==nums[mid]){
        		index=mid;
			}
			else if(target>nums[mid]){
				if(target<nums[mid+1]||mid==nums.size()-1){
					index=mid+1;
				}
				left=mid+1;
			}else if(target<nums[mid]){
				if(target>nums[mid-1]||mid==0){
					index=mid;
				}
				right=mid-1;
			}
		}
		return index;
    }
};

int main(){
	int test[] = {1, 3, 5, 6};
	std::vector<int> nums;
	Solution solve;
	for (int i = 0; i < 4; i++){
		nums.push_back(test[i]);
	}
	for (int i = 0; i < 8; i++){
		printf("i = %d index = %d\n", i, solve.searchInsert(nums, i));
	}
	return 0;
}
