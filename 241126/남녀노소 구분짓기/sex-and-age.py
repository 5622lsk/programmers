sex = int(input())
age = int(input())

if sex==0 and age>=19:
    print("MAN")
elif sex==0 and age<19:
    print("BOY")
else:
    if age>=19:
        print("WOMAN")
    else:
        print("GIRL")