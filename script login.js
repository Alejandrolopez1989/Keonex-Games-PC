document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtén el nombre de usuario y la contraseña ingresados
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Define un objeto o un array con los usuarios y contraseñas permitidos
  var users = [
    { username: "Keonex", password: "alejandro89" },
    { username: "Guillermo", password: "maykol2023" },
    { username: "yosbani", password: "yosbani2024cuba" },
    { username: "Perrito18", password: "supercan" },
    { username: "Dragón", password: "12345" },
    { username: "Owen", password: "owendg06" },
    { username: "Jumahite", password: "jumahite56" },
    { username: "Carlos Santana", password: "Guau0215" },
    { username: "yelenygarcia22", password: "WWJQP22" },
    { username: "José Alvarez", password: "2074" },
    { username: "ladydante903", password: "dmc12345" }, 
    { username: "Miguel", password: "miguel" },
    { username: "Annabel", password: "manolito" },
    { username: "Anita", password: "2507" },
    { username: "Tatik", password: "Tatik-25" },
    { username: "Madeline", password: "Cejesian*33" },
    { username: "jemilygh", password: "jemily*1234" },
    { username: "mimosinbolmir", password: "bolmir2016" },
    { username: "Ibarra.Cesar", password: "Marzo01598" },
    { username: "Vanitas", password: "03036969" },
    { username: "Yani", password: "yani" },
    { username: "kevin892xz", password: "237164926@" },
    { username: "Naylis", password: "Nefc01" }
    
  ];

  // Verifica si el usuario y la contraseña coinciden con los datos almacenados
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      // Redirecciona a la página deseada si se encuentra una coincidencia
      window.location.href = "inicio.html";
      return;
    }
  }

  // Si no se encuentra una coincidencia, muestra un mensaje de error
  alert("Nombre de usuario o contraseña inválidos. Por favor, inténtalo de nuevo.");
});
