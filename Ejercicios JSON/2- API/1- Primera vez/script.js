let url = 'https://raw.githubusercontent.com/Daniel-Alvarez-Zambrano/LLMM/main/Ejercicios%20JSON/1-%20Primera%20Vez/5-Tiempo%20Atmosférico.json'

fetch(url)
 .then(response => response.json())
 .then(data => console.log(data));