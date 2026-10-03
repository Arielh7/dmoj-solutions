numero = int(input())
asientos = input()
resultado = asientos.replace("LL", "S")
print(min(numero, len(resultado) + 1))
