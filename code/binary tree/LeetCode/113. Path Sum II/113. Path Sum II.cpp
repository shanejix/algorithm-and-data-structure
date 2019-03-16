#include <stdio.h>
#include <vector>

using namespace std;

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    vector<vector<int> > pathSum(TreeNode* root, int sum) {
    	
    	vector<vector<int> > result;
    	vector<int> path;
    	int path_value=0;
    	
    	travel(root,path,path_value,result,sum);
        return result;
    }
    
private:
	void travel(TreeNode* root,vector<int>& path,int &path_value,vector<vector<int> >& result,int sum){
		if(!root){
			return;
		}
		
		path.push_back(root->val);
		path_value+=root->val;
		
		if(root->left==NULL&&root->right==NULL){
			if(path_value==sum){
				result.push_back(path);
			}
		}
		
		travel(root->left,path,path_value,result,sum);
		travel(root->right,path,path_value,result,sum);
		
		path.pop_back();
		path_value-=root->val;
	}
};

int main(){
	TreeNode a(5);
	TreeNode b(4);
	TreeNode c(8);
	TreeNode d(11);
	TreeNode e(13);
	TreeNode f(4);
	TreeNode g(7);
	TreeNode h(2);
	TreeNode x(5);
	TreeNode y(1);
	a.left = &b;
	a.right = &c;
	b.left = &d;
	c.left = &e;
	c.right = &f;
	d.left = &g;
	d.right = &h;
	f.left = &x;
	f.right = &y;
	Solution solve;
	std::vector<std::vector<int> > result = solve.pathSum(&a, 22);
	for (int i = 0; i < result.size(); i++){
		for (int j = 0; j < result[i].size(); j++){
			printf("[%d]", result[i][j]);
		}
		printf("\n");
	}
	return 0;
}
