#include <stdio.h>
#include <map>
#include <vector>

struct RandomListNode {
		int label;
		RandomListNode *next, *random;
		RandomListNode(int x) : label(x), next(NULL), random(NULL) {}
};
 
class Solution {
public:
    RandomListNode *copyRandomList(RandomListNode *head) {
    	RandomListNode* ptr=head;
    	RandomListNode* new_head=NULL;
    	std::vector<RandomListNode*> node_vec;
    	std::map<RandomListNode*,int>node_map;
        int i=0;
        
        while(ptr){
        	
        	node_map[ptr]=i;
        	node_vec.push_back(new RandomListNode(ptr->label));
        	
        	i++;
        	ptr=ptr->next;
		}
		
		ptr=head;
		node_vec.push_back(0);
		i=0;
		while(ptr){
			node_vec[i]->next=node_vec[i+1];
			if(ptr->random){
				int id=node_map[ptr->random];
				node_vec[i]->random=node_vec[id];
			}
			i++;
			ptr=ptr->next;
		}
		return node_vec[0];
    }
};

//int main()
//	
//	RandomListNode a(1);
//	RandomListNode b(2);
//	RandomListNode c(3);
//	a.next=&b;
//	b.next=&c;
//	a.random=&c;
//	b.random=&a;
//	c.random=NULL;
//	
//	printf("after solution\n");
//	Solution solve;
//	RandomListNode* head=solve.copyRandomList(&a);
//	while(head){
//		printf("%d	",head->label);
//		if (head->random){
//			printf("rand = %d\n", head->random->label);
//		}
//		else{
//			printf("rand = NULL\n");
//		}
//		head = head->next;
//		head=head->next;
//	}
//	
//}

int main(){
	RandomListNode a(1);
	RandomListNode b(2);
	RandomListNode c(3);
	RandomListNode d(4);
	RandomListNode e(5);
	a.next = &b;
	b.next = &c;
	c.next = &d;
	d.next = &e;	
	a.random = &c;
	b.random = &d;
	c.random = &c;
	e.random = &d;	
	Solution solve;
	RandomListNode *head = solve.copyRandomList(&a);	
	while(head){
		printf("label = %d ", head->label);
		if (head->random){
			printf("rand = %d\n", head->random->label);
		}
		else{
			printf("rand = NULL\n");
		}
		head = head->next;
	}
	return 0;
}
