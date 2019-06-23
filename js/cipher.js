const encryptButton = document.getElementById('encrypt');
const decryptButton = document.getElementById('decrypt');
encryptButton.addEventListener('click', () => encrypt());
decryptButton.addEventListener('click', () => decrypt());

encrypt = () => {
  const plaintext = document.getElementById("input").value;
  if ((plaintext.length < 1)) {
    alert("Please Enter At least a Word to Create a Cipher Encryption");
    return;
  }
  const shift = 5;
  let encryptedText = "";
  const plainWordLength = plaintext.length;
  for (var i = 0; i < plainWordLength; i++) {
    const plainCode = plaintext.charCodeAt(i);
    if (plainCode >= 97 && plainCode <= 122) {
      encryptedText += String.fromCharCode(((plainCode - 97 - shift + 26) % 26) + 97);
    }
    else if (plainCode >= 65 && plainCode <= 90) {
      encryptedText += String.fromCharCode(((plainCode - 65 - shift + 26) % 26) + 65);
    }
    else encryptedText += plaintext.charAt(i);
    document.getElementById("output").value = encryptedText;
  }
  return encryptedText;
}

decrypt = () => {
  let decryptedText = "";
  const shift = 5;
  const encryptedText = document.getElementById('input').value;
  if ((encryptedText.length < 1)) {
    alert("Please Enter At least a Word to Create a Cipher Decryption");
    return;
  }
  const cipherWordLength = encryptedText.length;
  for (var i = 0; i < cipherWordLength; i++) {
    const encryptCode = encryptedText.charCodeAt(i);
    if (encryptCode >= 97 && encryptCode <= 122) {
      decryptedText += String.fromCharCode(((encryptCode - 97 + shift) % 26) + 97);
    }
    else if (encryptCode >= 65 && encryptCode <= 90) {
      decryptedText += String.fromCharCode(((encryptCode - 65 + shift) % 26) + 65);
    }
    else decryptedText += encryptedText.charAt(i);
    document.getElementById("output").value = decryptedText;
  }
  return decryptedText;
}