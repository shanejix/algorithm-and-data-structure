#include <stdio.h>
#include <vector>

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
    	vector<int> visited;
        
        //v
        for(int i=0;i<numCourses;i++){
        	graph.push_back(new GraphNode(i));
        	visited.push_back(-1);
		}
		//e
		for(int i=0;i<prerequisites.size();i++){
			GraphNode* front=graph[prerequisites[i].first];
			GraphNode* end=graph[prerequisites[i].second];
			end->neighbors.push_back(front);
		}
		//dfs
		for(int i=0;i<graph.size();i++){
			if(visited[i]==-1&&!DFS(graph[i],visited)){
				return false;
			}
		}
		
		for(int i=0;i<numCourses;i++){
			delete graph[i];
		}
		
		return true;
    }
    
private:
	bool DFS(GraphNode* node,vector<int> & visited){
		visited[node->label]=0;
		for(int i=0;i<node->neighbors.size();i++){
			if(visited[node->neighbors[i]->label]==-1){
				if(DFS(node->neighbors[i],visited)==0)
				return false;
			}else if(visited[node->neighbors[i]->label]==0){
				return false;
			}
		}
		visited[node->label]=1;
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
