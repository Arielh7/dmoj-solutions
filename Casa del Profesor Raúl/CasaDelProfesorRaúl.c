#include <stdio.h>

int main()
{
    long long caso;
    scanf("%lld", &caso);

    int encontrado = 0;
    long long i = 1;

    while (!encontrado && (caso - i) > 0)
    {
        long long numero_actual = caso - i;

        long long antecesores = numero_actual * (numero_actual - 1) / 2;

        long long suma_hasta_caso   = caso * (caso + 1) / 2;
        long long suma_hasta_actual = numero_actual * (numero_actual + 1) / 2;
        long long sucesores = suma_hasta_caso - suma_hasta_actual;

        if (antecesores == sucesores)
        {
            encontrado = 1;
            printf("%lld\n", numero_actual);
        }

        i++;
    }

    return 0;
}

//tuve que meter el long long porque con un int se desbordaba con las ecuaciones de antecesor y sucesor