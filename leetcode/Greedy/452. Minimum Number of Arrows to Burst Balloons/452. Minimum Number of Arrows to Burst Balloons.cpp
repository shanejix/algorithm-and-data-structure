#include <stdio.h>
#include <vector>
#include <algorithm>

bool cmp(std::pair<int,int>&a,std::pair<int,int>&b){
	return a.first<b.first;
}

class Solution {
public:
    int findMinArrowShots(std::vector<std::pair<int, int> >& points) {
    	if(points.size()==0){
    		return 0;
		}
    	
    	std::sort(points.begin(),points.end(),cmp);
    	
    	int num=1;
    	int left=points[0].first;
    	int right=points[0].second;
    	
    	for(int i=1;i<points.size();i++){
    		if(points[i].first<=right){
    			left=points[i].first;
    			if(right>points[i].second){
    				right=points[i].second;
				}
			}else{
				num++;
				left=points[i].first;
				right=points[i].second;
			}
		}
        return num;
    }
};

int main(){
	std::vector<std::pair<int, int> > points;
	points.push_back(std::make_pair(10, 16));
	points.push_back(std::make_pair(2, 8));
	points.push_back(std::make_pair(1, 6));
	points.push_back(std::make_pair(7, 12));	
	Solution solve;
	printf("%d\n", solve.findMinArrowShots(points));
	return 0;
}
