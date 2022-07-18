# discount-mini-server
 
 
 
בשביל להימנע משגיאה שהתעודת אבטחה הינה פרטית ולא מאומתת, הנתיבים שונו לנתיב 3001 שהוא שרת ללא תעודה.
<br/>
לניסיון קבלת תגובה בסביבה אחרת התומכת בתעודה עצמית, שנו את הנתיב ל HTTPS ביציאה 3000

בכל קריאה לשרת עם טוקן חוקי, יתקבל בתשובה טוקן חדש לצורך המשך התוקף שלו.
תוקף הטוקן הוא 5 דקות
<br/>
<br/>
<br/>



## get a token with "customerID" filed

- curl -X POST http://localhost:3001/signin/Israeli-222210023



## get all customers

- curl http://localhost:3001 -H "Authorization: Bearer {token}"




## get one customer

- curl http://localhost:3001/Israeli-222210023 -H "Authorization: Bearer {token}"




## create new customer
- לצורך העניין בשביל ליצור לקוח גם כן נצטרך לשלוח טוקן חוקי של משתמש אחר כך שחייב להיות תמיד משתמש אחד לפחות
<br/>
-  סכמת המשתמש החדש צריכה להיות עטופה בסוגריים מרובעים בהתאם לסכמה 
<br/>
<br/>

- curl -X POST http://localhost:3001 -H "Content-Type: application/json" -H "Authorization: Bearer {token} -d '[new customer schema]'




## update customer

- curl -X PUT http://localhost:3001/{customerID}/{scope}/{status} -H "Authorization: Bearer {token}"




## delete customer

- curl -X DELETE http://localhost:3001/{customerID} -H "Authorization: Bearer {token}"




