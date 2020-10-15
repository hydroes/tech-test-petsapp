I have not used any libraries for the implementation to solve the problem, however I
am using jest for testing to demonstrate testing best practices such as arrange, act assert

I tried to break down functions into small re-usable bits and stuck to the one file exports one function

I focused on 'happy paths' and always do when developing as I like to see something working and it works well with agile.
I would implement unhappy paths if I had more time. Things like testing for invalid input etc as well as the following:
threshold limits:
eg now+400d, should actually be 1year Xmonths xdays
duplication hierarchy testing eg none of this: now-1d-1d-1d
boundary limits: integers exceeding Number.MAX_SAFE_INTEGER and Dates exceeding ranges
Parsing errors
Use typescript

I started with the parse function, and still have the following to complete:
- rounding
- date range for months (if the 'now' date is the 1st and now-1d then the month utc must be subtracted)
- did not implement week support

