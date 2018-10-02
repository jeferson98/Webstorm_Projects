num = int(input())
entrada = []
i = 0
x = 0
ejemplo = 'abcdefghijklmnopqrstuvwxyz'
while i < num:
    entrada.append(input())
    i += 1
for iter in ejemplo:
    j = 0
    contador = 0
    #if x < num:
    while j < len(entrada[x]):
        if iter == entrada[x][j].lower():
            contador += 1
            break
        j += 1
    x += 1
    if (contador == len(ejemplo)):
        print("SI")
    else:
        print("NO")
