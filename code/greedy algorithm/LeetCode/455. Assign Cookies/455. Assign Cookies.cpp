#include <stdio.h>
#include <algorithm>
#include <vector>


class Solution {
public:
    int findContentChildren(std::vector<int>& g, std::vector<int>& s) {
        
        std::sort(g.begin(),g.end());
        std::sort(s.begin(),s.end());
        
//        int num=0;
        int g_index=0;
        int s_index=0;
        
        while(g_index<g.size()&&s_index<s.size()){
        	if(s[s_index]>=g[g_index]){
//        		num++;
        		g_index++;
			}
			s_index++;
		}
		return g_index;
    }
};

//class Solution {
//public:
//    int findContentChildren(std::vector<int>& g, std::vector<int>& s) {
//        
//        std::sort(g.begin(),g.end());
//        std::sort(s.begin(),s.end());
//        
//        int child=0;
//        int s_index=0;
//        
//        while(child<g.size()&&s_index<s.size()){
//        	if(s[s_index]>=g[child]){
//        		child++;
//			}
//			s_index++;
//		}
//		return child;
//    }
//};

int main(){
	Solution solve;
	std::vector<int> g;
	std::vector<int> s;
	g.push_back(5);
	g.push_back(10);
	g.push_back(2);
	g.push_back(9);
	g.push_back(15);
	g.push_back(9);
	s.push_back(6);
	s.push_back(1);
	s.push_back(20);
	s.push_back(3);
	s.push_back(8);	
	printf("%d\n", solve.findContentChildren(g, s));
	return 0;
}
