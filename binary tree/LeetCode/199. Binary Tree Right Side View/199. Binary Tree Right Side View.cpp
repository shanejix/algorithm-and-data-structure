#include <stdio.h>
#include<vector>
#include<queue>

using namespace std;

struct TreeNode {
	int val;
	TreeNode *left;
	TreeNode *right;
	TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
 
class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {
        queue<pair<TreeNode*,int> > temp_q;
        vector<int> result;
        
//        if(!root){
//        	return NULL;
//		}
		if(root){
			temp_q.push(make_pair(root,0));
		}
		
		while(!temp_q.empty()){
			
			TreeNode* node=temp_q.front().first;
			int deep=temp_q.front().second;
			
			temp_q.pop();
			
			if(result.size()==deep){
				result.push_back(node->val);
			}else{
				result[deep]=node->val;
			}
			
			if(node->left){
				temp_q.push(make_pair(node->left,deep+1));
			}
			
			if(node->right){
				temp_q.push(make_pair(node->right,deep+1));
			}
		}
		
		return result;
    }
};

int main(){
	TreeNode a(1);
	TreeNode b(2);
	TreeNode c(5);
	TreeNode d(3);
	TreeNode e(4);
	TreeNode f(6);
	a.left = &b;
	a.right = &c;
	b.left = &d;
	b.right = &e;
	c.right = &f;
	Solution solve;
	std::vector<int> result = solve.rightSideView(&a);
	for (int i = 0; i < result.size(); i++){
		printf("[%d]\n", result[i]);	
	}
	return 0;
}
