// Función para calcular el incremento basado en la marca
export function calcularMarca(marca) {
    let incremento;

    if (marca === "1") {
        incremento = 1.3;
    } else if (marca === "2") {
        incremento = 1.15;
    } else if (marca === "3") {
        incremento = 1.05;
    } else {
        incremento = 1;
    }

    return incremento;
}

// Función para calcular el incremento basado en el plan
export function calcularPlan(plan) {
    let incremento;

    if (plan === "1") {
        incremento = 1.2;
    } else if (plan === "2") {
        incremento = 1.5;
    } else {
        incremento = 1;
    }

    return incremento;
}

// Función para formatear una cantidad en formato de moneda
export function formatearDinero(cantidad) {
    return cantidad.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}

export function obtenerDiferenciaYear(year) {
    const currentYear = new Date().getFullYear();
    const diferencia = currentYear - parseInt(year, 10);
    return diferencia;
}


/*export function calcularMarca(marca) {
    let incremento;

    switch (marca) {
        case "1":
            incremento = 1.3; // Cambiado "-" por "="
            break;
        case "2":
            incremento = 1.15;
            break;
        case "3":
            incremento = 1.05;
            break;
        default:
            incremento = 1;
            break;
    }

    return incremento;
}


export function calcularPlan(plan) {
    return plan === "1" ? 1.2 : 1.5
}


export function formatearDinero(cantidad) {
    return cantidad.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}*/