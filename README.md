# fullstack-challenge
.net5 webapi + ef + sqlexpress + angular

![alt text](https://github.com/smatveev/fullstack-challenge/raw/main/screenshot%201.png?raw=true)

# Environment:

- .NET 5
- Microsoft SQL Server 2019
- Node.js 14

# Running:

Install Angular 
```sh
npm install -g @angular/cli
```
Set SQL connection string
```sh
appsettings.json > ConnectionStrings > DevConnection
```
Run server and execute DB migrations
```sh
WebAPI\bin\Debug\net5.0\WebAPI.exe
```
Populate DB 
```sh
executing FILLDB.sql
```
Run frontend app
```sh
ng serve --o
```
Open http://localhost:4200/