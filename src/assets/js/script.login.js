document.addEventListener("DOMContentLoaded", function() {
    console.log("El nuevo script se ha cargado correctamente.");
    const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})

    // Aquí agregas la funcionalidad adicional
});


console.log("Cargando Modos")

document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("themeSwitch");
    const body = document.body;
  
    // Aplicar el tema guardado
    if (localStorage.getItem("dark-mode") === "true") {
      body.classList.add("dark-mode");
    }
  
    themeSwitch.addEventListener("click", () => {
      const isDarkMode = body.classList.toggle("dark-mode");
      localStorage.setItem("dark-mode", isDarkMode);
    });
  });
  
  

console.log("Modos cargados")