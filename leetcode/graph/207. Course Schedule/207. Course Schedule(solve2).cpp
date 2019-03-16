#include <stdio.h>
#include <vector>
#include <queue>

using namespace std;

struct GraphNode{
	int label;
	vector<GraphNode*> neighbors;
	GraphNode(int x):label(x){};
};


class Solution {
public:
    bool canFinish(int numCourses, vector<pair<int, int> >& prerequisites) {
    	vector<GraphNode*> graph;
    	vector<int> degree;
        
        //v
        for(int i=0;i<numCourses;i++){
        	graph.push_back(new GraphNode(i));
        	degree.push_back(0);
		}
		//e
		for(int i=0;i<prerequisites.size();i++){
			GraphNode* front=graph[prerequisites[i].first];
			GraphNode* end=graph[prerequisites[i].second];
			end->neighbors.push_back(front);
			degree[prerequisites[i].first]++;
		}
		//
		queue<GraphNode*> temp_q;
		
		//
		for(int i=0;i<numCourses;i++){
			if(degree[i]==0){
				temp_q.push(graph[i]);
			}
		}
		//
		while(!temp_q.empty()){
			GraphNode*node=temp_q.front();
			temp_q.pop();
			
			for(int i=0;i<node->neighbors.size();i++){
				degree[node->neighbors[i]->label]--;
				if(degree[node->neighbors[i]->label]==0){
					temp_q.push(node->neighbors[i]);
				}
			}
		}
		
		for(int i=0;i<numCourses;i++){
			delete graph[i];
		}
		
		for(int i=0;i<graph.size();i++){
			if(degree[i]){
				return false;
			}
		}
		
		return true;
    }
    
};

int main(){	
	std::vector<std::pair<int, int> > prerequisites;
	prerequisites.push_back(std::make_pair(1, 0));
	prerequisites.push_back(std::make_pair(2, 0));
	prerequisites.push_back(std::make_pair(3, 1));
	prerequisites.push_back(std::make_pair(3, 2));
	Solution solve;
	printf("%d\n", solve.canFinish(4, prerequisites));
	return 0;
}
