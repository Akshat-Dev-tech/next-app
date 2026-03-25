Next JS Project

#1 This commmit contains changes about routing , 
we created difffent files , 
when we add folder/pages.tsx -> it will become routable compnent 
when we want pass params while routing component we will add slug [eventname]


#2 This commit contains chanegs about grouping related components in same folder ,
since foldername/page.tsx becomes route -> we can do something like (name)/foldername1   
(name)/foldername2
to group services or related components together 
and access directly as 
localhost:3000/foldername1
localhost:3000/foldername2 



#3 THis commit contains changes about calling APU -> nc routes.ts contains api -> sayhipage displays data passed from api /apis/sayhi

#4 This commit conatins chnage about applying css -> .module.css for compnent level css -> import styles -> styles.classname, for global css you can directly use it


#5 THis commit , we will start creating a porject , in this commit , we added json server
db.json
   ↓
Top level keys in JSON
   ↓
API endpoints -> /contacts,/users

#5 Created login  page client  -> added auth logic server -> redirect to sucesful else show error


#6 Added typecheck in auth.ts -> added login and logout logic using cookies to determine session