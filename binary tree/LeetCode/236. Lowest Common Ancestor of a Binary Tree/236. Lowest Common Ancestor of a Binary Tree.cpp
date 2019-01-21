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
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    	vector<TreeNode*>p_path;
    	vector<TreeNode*>q_path;
    	vector<TreeNode*>path;
    	
    	TreeNode* result=NULL;
    	
    	int finish=0;
    	int len=0;
    	
    	travel(root,p,path,p_path,finish);
    	
    	finish=0;
    	path.clear();
    	
    	travel(root,q,path,q_path,finish);
    	
        if(p_path.empty() || q_path.empty()){
        	return NULL;
		}
		
		if(p_path.size()>q_path.size()){
			len=q_path.size();
		}else{
			len=p_path.size();
		}
		
		for(int i=0;i<len;i++){
			if(q_path[i]==p_path[i]){
				result=q_path[i];
			}
		}
		
		return result;
    }
    
private:
	void travel(TreeNode* root,TreeNode* search,vector<TreeNode*> & path,vector<TreeNode*>& result,int & finish){
		
		if(!root || finish){
			return ;
		}
		
		path.push_back(root);
		
		if(search->val==root->val){
			result=path;
			finish=1;
		}
		
		travel(root->left,search,path,result,finish);
		travel(root->right,search,path,result,finish);
		
		path.pop_back();
	}
};

int main(){
	TreeNode a(3);
	TreeNode b(5);
	TreeNode c(1);
	TreeNode d(6);
	TreeNode e(2);
	TreeNode f(0);
	TreeNode x(8);
	TreeNode y(7);
	TreeNode z(4);
	a.left = &b;
	a.right = &c;
	b.left = &d;
	b.right = &e;
	c.left = &f;
	c.right = &x;
	e.left = &y;
	e.right = &z;
	
	Solution solve;
	TreeNode *result = solve.lowestCommonAncestor(&a, &b, &f);
	printf("lowestCommonAncestor = %d\n", result->val);
	result = solve.lowestCommonAncestor(&a, &d, &z);
	printf("lowestCommonAncestor = %d\n", result->val);
	result = solve.lowestCommonAncestor(&a, &b, &y);
	printf("lowestCommonAncestor = %d\n", result->val);
	
	return 0;
}
