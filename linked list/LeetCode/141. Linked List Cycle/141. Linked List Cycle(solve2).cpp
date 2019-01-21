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
    	
    	if(!head) return false;
    	
        ListNode* fast=head;
        ListNode* slow=head;
        
        while(fast){
        	fast=fast->next;
        	if(!fast){
        		return false;
			}
			fast=fast->next;
			slow=slow->next;
			
			if(fast==slow)
				return true;
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
//	e.next=&d;
	
	printf("after solution:\n");
	Solution solve;
	bool head=solve.hasCycle(&a);
	printf("%d\n",head);
}
