
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
    void flatten(TreeNode* root) {
    	
        vector<TreeNode*> left_node;
		vector<TreeNode*> right_node; 
		
		travel(root->left,left_node);
		travel(root->right,right_node);
		
		for(int i=1;i<left_node.size();i++){
			left_node[i-1]->left=NULL;
			left_node[i-1]->right=left_node[i];
		}
		for(int i=1;i<right_node.size();i++){
			right_node[i-1]->left=NULL;
			right_node[i-1]->right=right_node[i];
		}
		
		
		root->left=NULL;
		root->right=left_node[0];
		left_node[left_node.size()-1]->left=NULL;
		left_node[left_node.size()-1]->right=right_node[0];
		right_node[right_node.size()-1]->left=NULL;
		right_node[right_node.size()-1]->right=NULL;
    }
    
private:
	void travel(TreeNode* node,vector<TreeNode*>& result){
		
		if(!node){
			return;
		}
		
		result.push_back(node);
		
		travel(node->left,result);
		
		travel(node->right,result);
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
	solve.flatten(&a);
	TreeNode *head = &a;
	while(head){
		if (head->left){
			printf("ERROR\n");
		}
		printf("[%d]", head->val);
		head = head->right;
	}
	printf("\n");
	return 0;
}
