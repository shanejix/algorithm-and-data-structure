# 队列

## 一，特点

和栈类似，也是一种操作受限的线性表数据结构

- **先进先出**
- **后进后出**

基本操作：

- 入队（enqueue）（队列尾部 push）
- 出队（dequeue）（队列头部 pop）

变体：

- 循环队列
- 阻塞队列
- 并发队列

## 二，顺序队列和链式队列

**顺序队列——数组实现**

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

**链式队列——链表实现**

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

## 三,循环队列

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

**队满时，其实有一个数据域没有存储数据**

- 可以避免

## 四，阻塞队列和并发队列

阻塞队列：在队列基础上**增加了阻塞操作**

- 如果在队列为空的时候，从队头取数据会被阻塞，此时还没有数据可取，直到队列中有了数据才能返回；
- 如果队列已经满了，那么插入数据的操作就会被阻塞，直到队列中有空闲位置后再插入数据，然后再返回

可以使用阻塞队列，实现一个“**生产者 - 消费者模型**”

- 可以有效地协调生产和消费的速度

并发队列：——线程安全的队列

- to do
