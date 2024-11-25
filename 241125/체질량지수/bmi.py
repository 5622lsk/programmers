h, w = map(int, input().split())
b = (1000*w)/(h**2)
b2 = math.floor(b)
print(b2)
if b2>=25:
    print("obesity")


