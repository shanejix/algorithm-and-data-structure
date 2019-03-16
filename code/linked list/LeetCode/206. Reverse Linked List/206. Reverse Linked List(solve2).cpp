#include <stdio.h>
using namespace std;

struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
    	ListNode temp_head(0);
//    	ListNode* temp;
    	ListNode* next;
//    	
//    	while(head){
//    		next=head->next;
//    		temp=temp_head.next;
//    		temp_head.next=head;
//    		head->next=temp;
//    		head=next;
//		}

		while(head){
			next=head->next;
			head->next=temp_head.next;
			temp_head.next=head;
			head=next;
		}
		
		return temp_head.next;
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
	e.next=NULL;
	
	ListNode* head=&a;
	
	
	printf("before soluion:\n");
	while(head){
		printf("%d\n",head->val);
		head=head->next;
	}
	
	printf("after solution:\n");
	Solution solve;
	head=solve.reverseList(&a);
	while(head){
		printf("%d\n",head->val);
		head=head->next;
	}
}
