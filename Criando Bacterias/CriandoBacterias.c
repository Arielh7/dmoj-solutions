#include <stdio.h>
int main()
{
    int objetivo;
    int count=0;
    scanf("%d", &objetivo);

    while (objetivo>9){
    if (objetivo%2!=0)
    {
    count+=1;
    objetivo-=1;
    }
    objetivo=objetivo/2;
    }

    if(objetivo==1 || objetivo ==2 || objetivo ==4 || objetivo ==8)
    {
        printf("%d", 1+count);
    }
    else if(objetivo==7)
    {
        printf("%d", 3+count);
    }
    else
    {
        printf("%d", 2+count);
    }
    return 0;
}

