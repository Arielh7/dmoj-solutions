#include <stdio.h>
#include <stdlib.h>
int main()
{
    int luces;
    int pruebas;
    

    scanf("%d %d", &luces , &pruebas);

    char vacas[luces];
    int i=0;
    for(i; i<luces; i++)
    {
        vacas[i]=0;
    }
    int casos[pruebas][3];
    int a=0;
    int b=0;

    for(a=0; a<pruebas; a++)
    {
            scanf("%d %d %d", &casos[a][0], &casos[a][1], &casos[a][2] );
    }


    int count;
    int c;
    for(a=0; a<pruebas; a++)
    {
        count=0;
        int primeraLuz= casos[a][1];
        int segundaLuz= casos[a][2];
            if(casos[a][0]==0)
            {
                for(c=primeraLuz-1; c<=segundaLuz-1; c++)
                {
                    vacas[c] = !vacas[c];
                }
                   
            }
            else
            {
                for(c=primeraLuz-1; c<=segundaLuz-1; c++)
                {
                    count+=vacas[c];
                }
                printf("%d\n", count);
            }
    }




    system("pause");
    return 0;
}