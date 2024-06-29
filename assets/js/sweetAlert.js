document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (formularioCompleto()) {
      Swal.fire({
        title: "Gracias por formar parte de la familia ICON",
        icon: "success",
        confirmButtonText: "Confirmar",
        showClass: {
          popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
        },
        hideClass: {
          popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
        },
      });
    } else {
      alert("Por favor, complete todos los campos");
    }
  });

function formularioCompleto() {
  const form = document.getElementById("miFormulario");
  const inputs = form.querySelectorAll(
    "input[required], select[required], textarea[required]"
  );

  for (let input of inputs) {
    if (!input.value) {
      return false;
    }
  }
  return true;
}

// var btn = document.getElementById("btn-pop-up");
// btn.onclick = function () {
//   Swal.fire({
//     title: "Gracias por registrarte",
//     icon: "success",
//     confirmButtonText: "Confirmar",
//     showClass: {
//       popup: `
//             animate__animated
//             animate__fadeInUp
//             animate__faster
//           `,
//     },
//     hideClass: {
//       popup: `
//             animate__animated
//             animate__fadeOutDown
//             animate__faster
//           `,
//     },
//   });
// };
