#include <stdio.h>
#include <vector>

struct ListNode {
 	int val;
	ListNode *next;
	ListNode(int x) : val(x), next(NULL) {}
};



class Solution {
public:
    ListNode* mergeKLists(std::vector<ListNode*>& lists) {
    	if(lists.size()==0){
    		return NULL;
		}
		if(lists.size()==1){
			return lists[0];
		}
		if(lists.size()==2){
			return mergeTwoLists(lists[0],lists[1]);
		}
    	
    	ListNode* left=NULL;
    	ListNode* right=NULL;
    	std::vector<ListNode*>left_vec;
    	std::vector<ListNode*>right_vec;
    	
    	int mid=lists.size()/2;
    	
    	for(int i=0;i < mid;i++){
    		left_vec.push_back(lists[i]);
		}
		left=mergeKLists(left_vec);
		
		for(int i=mid; i < lists.size();i++){
			right_vec.push_back(lists[i]);
		}
		right=mergeKLists(right_vec);
		
		ListNode* head=mergeTwoLists(left,right);
		
		return head;
    }
    
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode new_node(0);
        ListNode* ptr= &new_node;
        
        while(l1 && l2){
        	if(l1->val < l2->val){
        		ptr->next=l1;
        		l1=l1->next;
			}else{
				ptr->next=l2;
				l2=l2->next;
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
	ListNode g(2);
	ListNode h(3);
	a.next = &b;
	b.next = &c;	
	d.next = &e;
	e.next = &f;	
	g.next = &h;	
	Solution solve;	
	std::vector<ListNode *> lists;
	lists.push_back(&a);
	lists.push_back(&d);
	lists.push_back(&g);	
	ListNode *head = solve.mergeKLists(lists);
	while(head){
		printf("%d\n", head->val);
		head = head->next;
	}
	return 0;
}
