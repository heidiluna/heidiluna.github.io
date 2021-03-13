myList=[1,2,3,4,"Hello"]
myList2 = [None]* 4
for i in range(1,len(myList)):
    myList2[i-1] = myList[i]
    
    
    
print(myList2)

myList2.append("new Item")
print(myList2)

myList2.pop(2)

print(myList2)

#Part2:
count(sub,[start,[end]])
vowels = ['a', 'e', 'i', 'o', 'i', 'u']
count = vowels.count('i')
print('The count of i is:', count)

endswith(suffix,[start,[end]])
sentence = "How easy is to learn python?"
result = sentence.endswith('learn python?')
print(result)
result = sentence.endswith('How easy')
print(result)


find/index(sub,[start,[end]])
sentence = "How easy is to learn python?"

result = sentence.endswith('learn python?')
print(result)

result = sentence.endswith('How easy')
print(result)

isalnum()
name = "M234onica"
print(name.isalnum())

isalpha() 
name = "Monica"
print(name.isalpha())

isdigit()
s = "28212"
print(s.isdigit())


islower()
sentence_seven = 'this is another sentence'
print(sentence_seven.islower())

isspace()
sentence_eight = '   \t'
print(sentence_eight.isspace())

sentence_eight = ' a '
print(sentence_eight.isspace())

istitle()
s = 'Python Is Good.'
print(s.istitle())

isupper()
string = "THIS IS GOOD!"
print(string.isupper());

join()
numList = ['1', '2', '3', '4']
separator = ' items '
print(separator.join(numList))

lower()
sentence_12 = "Hello My FRIENDS"
x = sentence_12.lower()
print(x)

replace(old,new[,count])
sentence_13 = "I like Python"
x = sentence_13.replace("Python", "Javascript")
print(x)


split([sep[,maxsplit]])
text= 'Love thy neighbor'
print(text.split())

splitlines([keepends])
grocery = 'Milk\nChicken\r\nBread\rButter'
print(grocery.splitlines())

startswith(prefix[,start[,end]])
text = "Python is easy to learn."
result = text.startswith('is easy')
print(result)

strip([chars])
string = '  xoxo love xoxo   '
print(string.strip())

upper()
sentence_18 = "Hello my friends"
x = sentence_18.upper()
print(x)
