#include <iostream>

using namespace std;

int main() {
    
double porciento;
int dinero;
int anos;
cin>>porciento>>dinero>>anos;
porciento = 1+porciento/100;
double aux = dinero;

for(int i=0; i<anos; i++)
{
      aux = porciento * aux;
}

cout<<int(aux);

    return 0;
} hazlo de nuevo

//Tuve que recurrir a la vieja confiable de Automatica, C++