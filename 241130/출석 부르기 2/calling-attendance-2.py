name = {
    1:"John",
    2:"Tom",
    3:"Paul",
    4:"Sam"
}

while True:
    n=int(input())
    if n in name:
        print(name[n])
    else:
        print("Vacancy")
        break