const provinces = ["Azuay","Bolívar","Cañar","Carchi","Chimborazo","Cotopaxi","El Oro","Esmeraldas",
    "Galápagos","Guayas","Imbabura","Loja","Los Ríos","Manabí","Morona Santiago","Napo","Orellana","Pastaza","Pichincha",
    "Santa Elena","Santo Domingo de los Tsáchilas","Sucumbíos","Tungurahua","Zamora Chinchipe"];

const years = ["1er Año","2do Año","3er Año","4to Año","5to Año","6to Año","7mo Año"]

document.addEventListener("DOMContentLoaded", ()=>{
    const selectProvinces = document.getElementById("provinces");
    const selectStudentYears = document.getElementById("years");
    const onlyString = document.querySelectorAll(".input-str");


    provinces.forEach(provinces => {
        const option = document.createElement("option");
        option.value = provinces;
        option.textContent = provinces;
        selectProvinces.appendChild(option)
    });

    years.forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        selectStudentYears.appendChild(option);
      });

    onlyString.forEach(input => {
        input.addEventListener("input", () => {
            input.value = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚ\s]/g, "")
        });
    });

    document.querySelector('.input-date').addEventListener('input', function (e) {
        let input = e.target.value;
        let formattedInput = input.replace(/\D/g, '');

        if (formattedInput.length >= 3 && formattedInput.length <= 4) {
            formattedInput = formattedInput.slice(0, 2) + '/' + formattedInput.slice(2);
        } else if (formattedInput.length >= 5) {
            formattedInput = formattedInput.slice(0, 2) + '/' + formattedInput.slice(2, 4) + '/' + formattedInput.slice(4, 8);
        }

        e.target.value = formattedInput;
    });
});