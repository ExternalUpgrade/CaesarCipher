function encrypt() {
    const shift = document.getElementById("key").value;
    const plaintext = document.getElementById("input").value; // get the input text
    let ciphertext = ""; // initialize an empty string for the output text
    
    // loop through each character in the plaintext
    for (let i = 0; i < plaintext.length; i++) {
        let charCode = plaintext.charCodeAt(i); // get the Unicode value of the character
        
        // apply the shift to uppercase letters
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 + shift) % 26) + 65;
        }
        // apply the shift to lowercase letters
        else if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 + shift) % 26) + 97;
        }
        // leave non-alphabetic characters unchanged
        else {
            charCode = charCode;
        }
        
        ciphertext += String.fromCharCode(charCode); // add the encrypted character to the output string
    }
    
    document.getElementById("output").textContent = ciphertext; // display the encrypted text
}
