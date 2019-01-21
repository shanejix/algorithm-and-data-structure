####栈

1. 如何理解栈（什么是栈）

   栗子：叠盘子

   - 从上往下一个一个一次取
   - 后进后出
   - 先进先出
   - 不能从中间任意抽取

2. 特点

   “操作受限”的线性表，**只允许在一端插入和删除数据，后进先出，先进后出**

3. 如何实现栈

   - 顺序栈——数组实现

     ```c++
     typeof int Position;
     typeof struct SNode* PtrToSNode;
     
     struct SNode{
         ElementType* Data;//存储元素的数组
         Position Top;//栈顶指针
         int MaxSize;//最大容量
     }
     
     typeof PtrToSNode Stack;
     
     Stack CreateStack(int MaxSize){
         Stack S=(Stack)malloc(sizeof(stuct SNode));
         S->Data=(ElementType*)malloc(MaxSize*sizeof(ElementType));
         S->Top=-1;
         S->MaxSize=MaxSize;
         return S;
     }
     
     //isFull
     bool IsFull(Stack S){
         return(S->Top==S->MaxSize)
     }
     
     //push
     bool Push(Stack S,ElementType X){
         if(IsFull(S)){
             printf("is Full");
             return false;
         }
         else{
             S->Data[++(S->Top)]=X;
             return true;
         }
     }
     
     //isEmpty
     bool IsEmpty(Stack S){
         return(S->Top==-1);
     }
     
     //pop
     ElementType Pop(Stack S){
         if(IsEmpty(S)){
             printf("is empty");
             return ERROR;
         }
         else{
             return(S->Data[(S->top])--];
         }
     }
     ```

     一个数组实现两个链表

     TODO

   - 链式栈——链表实现

     ```c++
     typedef struct SNode*PtrToNode;
     struct SNode{
         ElementType Data;
         PtrToSNode Next;
     }
     typedef PtrToSNode Stack;
     
     //带头结点的链栈操作
     
     Stack CreateStack(){
         Stack S;//头结点
         
         S=malloc(sizeof(stuct SNode));
         S->Next=NULL;
         return S;
     }
     
     bool IsEmpty(Stack S){
         return (S->Next==NULL)
     }
     
     bool Push(Stack S,Element X){
         PtrToSNode TempCell;
         TempCell=(PtrToSNode)malloc(sizeof(struct SNode));
         TempCell->Data=X;
         TempCell->next=S->next;
         S->next=TempCell;
         return true;
     }
     
     ElementType Pop(Stack S){
         PrrToSNode FisrtCell;
         ElementType TopElem;
         
         if(IsEmpty(S)){
             printf("is empty");
             return ERROR;
         }else{
             FirstCell=S->next;
             TopElem=FistCell->Data;
             S->next=FistCell->Next;
             free(FirstCell);
             return TopElem;
         }
     }
     ```

4. 支持动态扩容的顺序栈

   - 底层依赖一个支持动态扩容的数组
   - 出栈操作——时间复杂度O(1)
   - 入栈操作——
     - 栈中有空闲空间——最好时间复杂度O(1)
     - 栈中空间不够时，重新申请空间数据搬移——最坏时间复杂度O(n)
     - 平均时间复杂度（均摊时间复杂度）
       - 假设
         - 栈空间不够时，申请原来大小两倍的数组
         - 只有入栈操作
         - 不涉及内存搬移的入栈操作为 simple-push 操作，时间复杂度为O(1)
       - 如果当前栈大小为 K，并且已满，当再有新的数据要入栈时，就需要重新申请 2 倍大小的内存，并且做 K 个数据的搬移操作，然后再入栈
       - 接下来的 K-1 次入栈操作，都不需要再重新申请内存和搬移数据，所以这 K-1 次入栈操作都只需要一个 simple-push 操作就可以完成
       - 这 K 次入栈操作，总共涉及了 K 个数据的搬移，以及 K 次 simple-push 操作
       - 将 K 个数据搬移均摊到 K 次入栈操作，那每个入栈操作只需要一个数据搬移和一个 simple-push 操作
       - 以此类推，入栈操作的均摊时间复杂度就为 O(1)
       - 所以把耗时多的入栈操作的时间均摊到其他入栈操作上，平均情况下的耗时就接近 O(1)

5. 栈在函数调用中的应用——**函数调用栈**

   操作系统给每个线程分配了一块独立的内存空间，这块内存被组织成“栈”这种结构, 用来存储函数调用时的临时变量

6. 栈在表达式求值中的应用——**后缀表达式**

   加减乘除四则运算，**两个栈**来实现的

   - 保存操作数的栈
   - 保存运算符的栈

   实现：

   - 从左向右遍历表达式，当遇到数字，直接压入操作数栈；
   - 当遇到运算符，就与运算符栈的栈顶元素进行比较
     - 如果比运算符栈顶元素的优先级高，就将当前运算符压入栈；
     - 如果比运算符栈顶元素的优先级低或者相同，从运算符栈中取栈顶运算符，从操作数栈的栈顶取 2 个操作数，然后进行计算，再把计算完的结果压入操作数栈，继续比较

7. 栈在括号匹配中的应用

   实现：

   - 用栈来保存未匹配的左括号，从左到右依次扫描字符串。
   - 当扫描到左括号时，则将其压入栈中；
   - 当扫描到右括号时，从栈顶取出一个左括号。
     - 如果能够匹配，比如“(”跟“)”匹配，“[”跟“]”匹配，“{”跟“}”匹配，则继续扫描剩下的字符串。
   - 如果扫描的过程中，遇到不能配对的右括号，或者栈中没有数据，
     - 则说明为非法格式
   - 当所有的括号都扫描完成之后，如果栈为空，则说明字符串为合法格式；否则，说明有未匹配的左
     括号，为非法格式

8. 如何实现浏览器的前进后退功能？

   实现：

   - 使用两个栈，X 和 Y，
   - 把首次浏览的页面依次压入栈 X，
   - 当点击后退按钮时，再依次从栈X 中出栈，并将出栈的数据依次放入栈 Y
   - 当我们点击前进按钮时，我们依次从栈 Y 中取出数据，放入栈 X 中
   - 当栈 X 中没有数据时，那就说明没有页面可以继续后退浏览了
   - 当栈 Y 中没有数据，那就说明没有页面可以点击前进按钮浏览了

#### 队列

1. 如何理解队列

   队列跟栈一样，也是一种操作受限的线性表数据结构

   - **先进先出**
   - **后进后出**

   基本操作：

   - 入队（enqueue）
   - 出队（dequeue）

   变体：

   - 循环队列
   - 阻塞队列
   - 并发队列

2. 顺序队列和链式队列

   顺序队列——数组实现

   ```c++
   typedef int Position;
   struct QNode {
       ElementType *Data;     /* 存储元素的数组 */
       Position Front, Rear;  /* 队列的头、尾指针 */
       int MaxSize;           /* 队列最大容量 */
   };
   typedef struct QNode *Queue;
    
   Queue CreateQueue( int MaxSize )
   {
       Queue Q = (Queue)malloc(sizeof(struct QNode));
       Q->Data = (ElementType *)malloc(MaxSize * sizeof(ElementType));
       Q->Front = Q->Rear = 0;
       Q->MaxSize = MaxSize;
       return Q;
   }
   
   bool AddQ( Queue Q, Queue X ){
       if(Rear==MaxSize){
           return false;
       }
       Data[Rear]=x;
       Rear++;
       return true;
   }
   ElementType DeleteQ( Queue Q ){
       if(Front==Rear){
           return NULL;
       }
       ElementType temp=Data[Front];
       Front++;
       return temp;
   }
   ```



   链式队列——链表实现

```c++
   typedef struct Node *PtrToNode;
   struct Node { /* 队列中的结点 */
       ElementType Data;
       PtrToNode Next;
   };
   typedef PtrToNode Position;
    
   struct QNode {
       Position Front, Rear;  /* 队列的头、尾指针 */
       int MaxSize;           /* 队列最大容量 */
   };
   typedef struct QNode *Queue;
    
   bool IsEmpty( Queue Q )
   {
       return ( Q->Front == NULL);
   }
    
   ElementType DeleteQ( Queue Q )
   {
       Position FrontCell; 
       ElementType FrontElem;
        
       if  ( IsEmpty(Q) ) {
           printf("队列空");
           return ERROR;
       }
       else {
           FrontCell = Q->Front;
           if ( Q->Front == Q->Rear ) /* 若队列只有一个元素 */
               Q->Front = Q->Rear = NULL; /* 删除后队列置为空 */
           else                     
               Q->Front = Q->Front->Next;
           FrontElem = FrontCell->Data;
    
           free( FrontCell );  /* 释放被删除结点空间  */
           return  FrontElem;
       }
   }
   
   bool AddQ( Queue Q, Queue X ){
       if  ( IsEmpty(Q) ) {
           front=rear=x;
       }
       rear->next=x;
       rear=rear->next;
       return ture;
   }
```

1. 循环队列

   ```c++
   typedef int Position;
   struct QNode {
       ElementType *Data;     /* 存储元素的数组 */
       Position Front, Rear;  /* 队列的头、尾指针 */
       int MaxSize;           /* 队列最大容量 */
   };
   typedef struct QNode *Queue;
    
   Queue CreateQueue( int MaxSize )
   {
       Queue Q = (Queue)malloc(sizeof(struct QNode));
       Q->Data = (ElementType *)malloc(MaxSize * sizeof(ElementType));
       Q->Front = Q->Rear = 0;
       Q->MaxSize = MaxSize;
       return Q;
   }
    
   bool IsFull( Queue Q )
   {
       return ((Q->Rear+1)%Q->MaxSize == Q->Front);
   }
    
   bool AddQ( Queue Q, ElementType X )
   {
       if ( IsFull(Q) ) {
           printf("队列满");
           return false;
       }
       else {
           Q->Rear = (Q->Rear+1)%Q->MaxSize;
           Q->Data[Q->Rear] = X;
           return true;
       }
   }
    
   bool IsEmpty( Queue Q )
   {
       return (Q->Front == Q->Rear);
   }
    
   ElementType DeleteQ( Queue Q )
   {
       if ( IsEmpty(Q) ) { 
           printf("队列空");
           return ERROR;
       }
       else  {
           Q->Front =(Q->Front+1)%Q->MaxSize;
           return  Q->Data[Q->Front];
       }
   }
   ```

   队满时，其实有一个数据域没有存储数据

   - 可以避免

2. 阻塞队列和并发队列

   阻塞队列：在队列基础上**增加了阻塞操作**

   - 如果在队列为空的时候，从队头取数据会被阻塞。
     - 因为此时还没有数据可取，直到队列中有了数据才能返回；
   - 如果队列已经满了，那么插入数据的操作就会被阻塞，
     - 直到队列中有空闲位置后再插入数据，然后再返回

   可以使用阻塞队列，实现一个“**生产者 - 消费者模型**”——可以有效地协调生产和消费的速度

   - 当“生产者”生产数据的速度过快，“消费者”来不及消费时，存储数据的队列很快就会满了
     - 这个时候，生产者就阻塞等待，直到“消费者”消费了数据，“生产者”才会被唤醒继续“生产”
   - 基于阻塞队列，还可以通过协调“生产者”和“消费者”的个数，来提高数据的处理效率
     - 可以多配置几个“消费者”，来应对一个“生产者”

   并发队列：——线程安全的队列

   - to do

3. 队列队列在线程池等有限资源池中的应用

   线程池没有空闲线程时，新的任务请求线程资源时，线程池该如何处理？

   非阻塞的处理方式：直接拒绝任务请求

   阻塞的处理方式：将请求排队，等到有空闲线程时，取出排队的请求继续处理

   - 公平地处理每个排队的请求，先进者先服务——队列（适合来存储排队请求）
     - 基于链表
       - 可以实现一个支持无限排队的无界队列
       - 可能会导致过多的请求排队等待，请求处理的响应时间过长
       - 针对响应时间比较敏感的系统
     - 基于数组
       - 队列的大小有限制
         - 太大导致等待的请求太多，
         - 太小会导致无法充分利用系统资源、发挥最大性能
         - 合理的大小——讲究
       - 所以线程池中排队的请求超过队列大小时，接下来的请求就会被拒绝
       - 针对响应时间敏感的系统

