myList=[1,2,3,4,"Hello"]
myList2 = [None]* 4
for i in range(1,len(myList)):
    myList2[i-1] = myList[i]
    
    
    
print(myList2)

myList2.append("new Item")
print(myList2)

myList2.pop(2)

print(myList2)
