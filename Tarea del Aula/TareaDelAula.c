#include <stdio.h>
#include <string.h>

int main()
{
    char A[105], B[105];
    char op;
    int i;

    fgets(A, sizeof(A), stdin);
    scanf(" %c", &op);
    getchar(); 
    fgets(B, sizeof(B), stdin);

    A[strcspn(A, "\n")] = '\0';
    B[strcspn(B, "\n")] = '\0';
    
    if (op == '*')
{
    int lenA = strlen(A);
    int lenB = strlen(B);
    printf("1");
    for (i = 0; i < (lenA - 1) + (lenB - 1); i++)
        printf("0");
}
    
    else{
        int lenB = strlen(B);
        int lenA = strlen(A);
        if (lenA > lenB)
        {
            A[lenA - lenB] = '1';
            printf("%s\n", A);
        }
        else if (lenB > lenA)
        {
            B[lenB - lenA] = '1';
            printf("%s\n", B);
        }
        else
        {
            A[0] = '2';
            printf("%s\n", A);
        }
    
    }
}