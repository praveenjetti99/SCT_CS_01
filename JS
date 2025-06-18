function caesarCipher(str, shift, mode) {
  const output = [];
  if (mode === "decrypt") shift = -shift;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char.match(/[a-z]/i)) {
      const code = str.charCodeAt(i);
      let base = code >= 65 && code <= 90 ? 65 : 97;
      output.push(String.fromCharCode(((code - base + shift + 26) % 26) + base));
    } else {
      output.push(char); // Non-alphabet characters remain unchanged
    }
  }

  return output.join("");
}

function processCipher() {
  const message = document.getElementById("message").value;
  const shift = parseInt(document.getElementById("shift").value);
  const mode = document.querySelector('input[name="mode"]:checked').value;

  if (message === "" || isNaN(shift)) {
    document.getElementById("result").innerText = "Please enter both message and shift value.";
    return;
  }

  const result = caesarCipher(message, shift, mode);
  document.getElementById("result").innerText = `Result: ${result}`;
}
