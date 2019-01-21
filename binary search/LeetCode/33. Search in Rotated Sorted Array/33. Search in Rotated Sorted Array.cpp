#include <stdio.h>
#include <vector>
using namespace std;

class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left=0;
        int right=nums.size()-1;
        int mid;
        
        while(left<=right){
        	mid=(left+right)/2;
        	
        	if(target==nums[mid]){
        		return mid;
			}
			else if(target<nums[mid]){
				if(nums[left]<nums[mid]){
					if(target>=nums[left]){
						right=mid-1;
					}
					else{
						left=mid+1;
					}
				}
				else if(nums[left]>nums[mid]){
					right=mid-1;
				}
				else if(nums[left]==nums[mid]){
					left=mid+1;
				}
			}
			else if(target>nums[mid]){
				if(nums[left]<nums[mid]){
					left=mid+1;
				}
				else if(nums[left]>nums[mid]){
					if(target>=nums[left]){
						right=mid-1;
					}else{
						left=mid+1;
					}
				}
				else if(nums[left]==nums[mid]){
					left=mid+1;
				}
			}
		}
		return -1;
    }
};

int main(){
	int test[] = {9, 12, 15, 20, 1, 3, 6, 7};
	std::vector<int> nums;
	Solution solve;
	for (int i = 0; i < 8; i++){
		nums.push_back(test[i]);
	}
	for (int i = 0; i < 22; i++){
		printf("%d : %d\n", i, solve.search(nums, i));
	}
	return 0;
}
