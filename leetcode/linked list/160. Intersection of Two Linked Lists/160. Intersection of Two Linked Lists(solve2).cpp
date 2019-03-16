#include <stdio.h>
#include <set>
using namespace std;

struct ListNode {
	int val;
	ListNode *next;
	ListNode(int x) : val(x), next(NULL) {};
 };
 
//class Solution {
//public:
//    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
//    	int m=listLen(headA);
//    	int n=listLen(headB);
//    	int len=0;
//    	
//    	if(m>n){
//    		len=m-n;
//    		while(len--){
//    			headA=headA->next;
//			}
//		}else{
//			len=n-m;
//			while(len--){
//				headB=headB->next;
//			}
//		}
//		
//		while(headA && headB){
//			if(headA==headB){
//				return headA;
//			}
//			headA=headA->next;
//			headB=headB->next;
//		}
//    	return NULL;
//    }
//    
//    int listLen(ListNode* head){
//    	int num=0;
//    	while(head){
//    		num++;
//    		head=head->next;
//		}
//		return num;
//	}
//};

class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
    	int m=listLen(headA);
    	int n=listLen(headB);
    	int len=0;
    	
    	if(m>n){
    		len=m-n;
    		headA=loop(headA,len);
		}else{
			len=n-m;
			headB=loop(headB,len);
		}
		
		while(headA && headB){
			if(headA==headB){
				return headA;
			}
			headA=headA->next;
			headB=headB->next;
		}
    	return NULL;
    }
    
    int listLen(ListNode* head){
    	int num=0;
    	while(head){
    		num++;
    		head=head->next;
		}
		return num;
	}
	
	ListNode* loop(ListNode* head,int len){
		while(len--){
			head=head->next;
		}
		return head;
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
