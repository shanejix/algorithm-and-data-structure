#include <stdio.h>

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* partition(ListNode* head, int x) {
    	ListNode m_head(0);
    	ListNode l_head(0);
    	ListNode* m_list=&m_head;
    	ListNode* l_list=&l_head;
    	
    	while(head){
    		
    		if(x>head->val){
    			l_list->next=head;
    			l_list=l_list->next;
			}else{
				m_list->next=head;
				m_list=m_list->next;
			}
			head=head->next;
		}
		l_list->next=m_head.next;
		m_list->next=NULL;
		return l_head.next;
    }
};

int main(){
	ListNode a(5);
	ListNode b(4);
	ListNode c(3);
	ListNode d(2);
	ListNode e(1);
	a.next=&b;
	b.next=&c;
	c.next=&d;
	d.next=&e;
	
	printf("after solution:\n");
	Solution solve;
	ListNode* head=solve.partition(&a, 3);
	while(head){
		printf("%d\n",head->val);
		head=head->next;
	}
}
