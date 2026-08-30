#include <iostream>
#include <string> 
using namespace std;

int main() {
    string cadena;
    getline(cin, cadena);
    int happy = 0;
    int sad = 0;
    

    for(int i = 0; i < (int)cadena.length() - 2; i++) {
        if(cadena[i] == ':') {
            if(cadena[i+1] == '-') {
                if(cadena[i+2] == '(') {
                    sad++;
                }
                if(cadena[i+2] == ')') {
                    happy++;
                }
            }
        }
    }
        
    if(happy == 0 && sad == 0) {
        cout << "none";
    }
    else if(happy == sad) {
        cout << "unsure";
    }
    else if(happy > sad) {
        cout << "happy";
    }
    else if(sad > happy) {
        cout << "sad"; 
    }

    return 0;
}