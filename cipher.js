function encrypt()
{
    var plaintext = document.getElementById('input').value;
      if((plaintext.length < 1))
    {
         alert("Please Enter Atleast a Word to Create a Cipher Encryption"); 
         return;
    }
    var shift = 5;
    var encryptedtext ="";
    var plainWordLength = plaintext.length;
    for(var i=0; i<plainWordLength; i++)
    { 
            var plaincode = plaintext.charCodeAt(i);
            if(plaincode >= 97 && plaincode <= 122)
            {
                encryptedtext += String.fromCharCode(((plaincode - 97 - shift + 26) % 26) + 97);

            } 
            else if(plaincode >= 65 && plaincode <= 90)
            {
                encryptedtext += String.fromCharCode(((plaincode - 65 - shift + 26) % 26) + 65);
            }
            else  encryptedtext += plaintext.charAt(i); 
            document.getElementById("output1").value = encryptedtext;     
        
    } 
    return encryptedtext; 
    
}


function decrypt()
{
    var encryptedtext = document.getElementById('input').value;
      if((encryptedtext.length < 1))
    {
         alert("Please Enter Atleast a Word to Create a Cipher Encryption"); 
         return;
    }
    var shift1 = 5;
    var decryptedtext ="";
    var cipherWordLength = encryptedtext.length;
    for(var i=0; i<cipherWordLength; i++)
    { 
       
            var encryptcode = encryptedtext.charCodeAt(i);
            if(encryptcode >= 97 && encryptcode <= 122)
            {
                decryptedtext  += String.fromCharCode(((encryptcode - 97 + shift1) % 26) + 97);

            } 
            else if(encryptcode >= 65 && encryptcode <= 90)
            {
                decryptedtext += String.fromCharCode(((encryptcode - 65 + shift1) % 26) + 65);
            }
            else decryptedtext += encryptedtext.charAt(i);
            document.getElementById("output1").value = decryptedtext; 
              
    } 
    return decryptedtext; 
    
}