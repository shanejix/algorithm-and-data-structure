#include <stdio.h>
#include <set>

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    bool hasCycle(ListNode *head) {
        std::set<ListNode*> set_node;
        
        while(head){
        	if(set_node.find(head)!=set_node.end()){
//        		return head;
				return true;
			}
			set_node.insert(head);
			head=head->next;
		}
		return false;
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
//	e.next=&c;
	
	printf("after solution:\n");
	Solution solve;
//	ListNode* head=solve.hasCycle(&a);
	bool head=solve.hasCycle(&a);
	printf("%d\n",head);
}
