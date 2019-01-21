#include <stdio.h>
#include <set>
using namespace std;

struct ListNode {
	int val;
	ListNode *next;
	ListNode(int x) : val(x), next(NULL) {};
 };
 
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
    	
    	std::set<ListNode*> set_node;
    	while(headA){
    		set_node.insert(headA);
    		headA=headA->next;
		}
		
		while(headB){
			if(set_node.find(headB)!=set_node.end()){
				return headB;
			}
			headB=headB->next;
		}
    	return NULL;
    }
};
int main(){
	ListNode a(1);
	ListNode b(2);
	ListNode c(3);
	ListNode d(4);
	ListNode e(5);
	a.next=&b;
	b.next=&c;
	c.next=&d;
	d.next=&e;
	
	printf("after solution:\n");
	Solution solve;
	ListNode* head=solve.getIntersectionNode(&a,&b);
	printf("%d\n",head->val);
}
