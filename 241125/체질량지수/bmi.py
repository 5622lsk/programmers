h, w = map(int, input().split())
b = (1000*w)/(h**2)
print(b)
if b>=25:
    print("obesity")


