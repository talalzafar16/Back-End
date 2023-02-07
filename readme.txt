

TYPES OF DATABASE

1)SQL  --entity based(table format) -- have to create schema
2)NO-SQL  --JSON based(JSON to be precised BSON(binary) store hota hai jis ki waja say data sapce kam consume hoti hai)-- optional to create schema


we will use mongo DB atlas it will use cloud technology
there is also mong DB shell which store daata on local but we wont use it

------------------------------------------
admin -username
admin -pass
0.0.0.0/0 -ip
----------------------------------------------
Get mongo db uri and put it on variable in node server
----------------------------------------------
mongodb direct node say baat nhi karta we have to use third party that is mongoose
--------------------------------------------
steps for connecting DB
1)first install mongoose
2)const mongose=require("mongoose")
3)mongoose.connect(DBURI).then().catch()