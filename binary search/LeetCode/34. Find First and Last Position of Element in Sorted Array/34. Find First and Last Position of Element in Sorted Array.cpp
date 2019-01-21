#include <stdio.h>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        vector<int> result;
        result.push_back(left_index(nums,target));
        result.push_back(right_index(nums,target));
        return result;
    }
    
private:
	int left_index(vector<int>&nums,int target){
		int index=-1;
		int left=0;
		int right=nums.size()-1;
		int mid;
		
		while(left<=right){
			mid=(left+right)/2;
			
			if(nums[mid]==target){
				if(mid==0 || nums[mid-1]<target){
					index=mid;
				}
				right=mid-1;
			}else if(target < nums[mid]){
				right=mid-1;
			}else if(target > nums[mid]){
				left=mid+1;
			}
		}
		return index;
	}
	int right_index(vector<int>&nums,int target){
		int index=-1;
		int left=0;
		int right=nums.size()-1;
		int mid;
		
		while(left<=right){
			mid=(left+right)/2;
			
			if(nums[mid]==target){
				if(mid==nums.size()-1 || nums[mid+1]>target){
					index=mid;
				}
				left=mid+1;
			}else if(target < nums[mid]){
				right=mid-1;
			}else if(target > nums[mid]){
				left=mid+1;
			}
		}
		return index;
	}
};

int main(){
	int test[] = {5, 7, 7, 8, 8, 8, 8, 10};
	std::vector<int> nums;
	Solution solve;
	for (int i = 0; i < 8; i++){
		nums.push_back(test[i]);
	}
	for (int i = 0; i < 12; i++){
		std::vector<int> result = solve.searchRange(nums, i);
		printf("%d : [%d, %d]\n",i , result[0], result[1]);
	}
	return 0;
}
