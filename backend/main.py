try:
    from clockwork import clockwork
except:
    print("You don't seem to have the required packages. Please run the following in a bash shell:")
    print("    sh installer.sh")

api = clockwork.API("7fdd1c3ddb68b727b2e07c840138425e605032f6")
name = raw_input("what is your name")
print("hi there ",name)
age = raw_input("how old are you")
print("im 12 ",)
street = raw_input("what street do you live on")
print("i live on inglis road ",)
emotion = raw_input("How are you feeling, ok?")
print("well i hope you feel better soon ",)
hi = raw_input("i work for smile more and im going to help you smile")
print("you will see a series of pictures on this website to make you happy" ,)