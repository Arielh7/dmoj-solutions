#include <stdio.h>

int main()
{
    int T;
    scanf("%d", &T);

    int casos[20][10]; 
    int largos[20];      


    for (int c = 0; c < T; c++)
    {
        int N;
        scanf("%d", &N);
        largos[c] = N;

        for (int i = 0; i < N; i++)
            scanf("%d", &casos[c][i]);
    }

    for (int c = 0; c < T; c++)
    {
        int suma =0;
         for (int i = 0; i < largos[c] - 1; i++)
            suma += casos[c][i] - 1;

        suma += casos[c][largos[c] - 1];

        printf("%d\n", suma);
    }

    return 0;
}