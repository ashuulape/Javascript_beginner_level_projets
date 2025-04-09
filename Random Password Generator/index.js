function generatepass(length ,lowercase,uppercase,num,symbol){
    const lowercasechar="abcdefghijklmnopqrstuvwxyz";
    const uppercasechar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="0123456789";
    const symbols="$ & @ # ^ () ~ | `\` ` ` `";
    
    let allowchars="";
    let password="";
 
    allowchars += lowercase ? lowercasechar : "";
    allowchars += uppercase ? uppercasechar : "";
    allowchars += num ? numbers : "";
    allowchars += symbol ? symbols : "";
 
     if(length<=0){
         return "`pass must be 1 charecter"
     }
     if(allowchars.length===0){
         return`(at least 1 set of vhar needs to be selected )`
     }
 
     for(let i=0 ; i<length ;i++){
         const randomIndex = Math.floor(Math.random()*allowchars.length);
         password+= allowchars[randomIndex];
     }
    
     return password;
 }
 
 
 const length= 8;
 const lowercase=true;
 const uppercase=true;
 const num=true;
 const symbol=0;
 
 const password=generatepass(length,lowercase,uppercase,num,symbol);
 
 alert(password);