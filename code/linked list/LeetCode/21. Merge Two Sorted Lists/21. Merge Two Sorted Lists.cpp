#include <stdio.h> 

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode new_node(0);
        ListNode* ptr= &new_node;
        
        while(l1 && l2){
        	if(l1->val < l2->val){
        		ptr->next=l1;
        		l1=l1->next;
//        		ptr=ptr->next;
			}else{
				ptr->next=l2;
				l2=l2->next;
//				ptr=ptr->next;
			}
			ptr=ptr->next;
		}
		
		if(l1){
			ptr->next=l1;
		}
		if(l2){
			ptr->next=l2;
		}
		return new_node.next;
    }
};

int main(){
	ListNode a(1);
	ListNode b(4);
	ListNode c(6);
	ListNode d(0);
	ListNode e(5);
	ListNode f(7);
	a.next = &b;
	b.next = &c;
	d.next = &e;
	e.next = &f;
	Solution solve;
	ListNode *head = solve.mergeTwoLists(&a, &d);
	while(head){
		printf("%d\n", head->val);
		head = head->next;
	}
	return 0;
}

