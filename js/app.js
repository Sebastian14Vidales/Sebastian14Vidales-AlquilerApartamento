const actual = {
    inmueble : '',
    habitaciones : '',
    minimo : '',
    maximo : '',
    bathroom : '',
    parqueaderos : '',
    ciudad : '',
    year : ''
}

const inmueble = document.querySelector('#inmueble');
const habitaciones = document.querySelector('#habitaciones');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const bathroom = document.querySelector('#bathroom');
const parqueaderos = document.querySelector('#parqueaderos');
const ciudad = document.querySelector('#ciudad');
const year = document.querySelector('#year');
const row = document.querySelector('#row');

document.addEventListener('DOMContentLoaded', () => {
    mostrarContenido(apartamentos);
    llenarCampo();
});

inmueble.addEventListener('change', e => {
    actual.inmueble = e.target.value;
    filtrarApartamentos();
});

habitaciones.addEventListener('change', e => {
    actual.habitaciones = Number(e.target.value);
    filtrarApartamentos();
});

minimo.addEventListener('change', e => {
    actual.minimo = Number(e.target.value);
    filtrarApartamentos();
});

maximo.addEventListener('change', e => {
    actual.maximo = Number(e.target.value);
    filtrarApartamentos();
});

bathroom.addEventListener('change', e => {
    actual.bathroom = Number(e.target.value);
    filtrarApartamentos();
});

parqueaderos.addEventListener('change', e => {
    actual.parqueaderos = Number(e.target.value);
    filtrarApartamentos();
});

ciudad.addEventListener('change', e => {
    actual.ciudad = e.target.value;
    filtrarApartamentos();
});

year.addEventListener('change', e => {
    actual.year = Number(e.target.value);
    filtrarApartamentos();
});

function mostrarContenido(apartamentos) {
    borrarFiltro();
    apartamentos.forEach(apto => {
        
        // crear span
        const spanCop = document.createElement('span');

        const icono = document.createElement('i');
        const divCard = document.createElement('DIV');
        const divCardBody = document.createElement('DIV');
        const divCardInfo = document.createElement('DIV');
        const divCardFooter = document.createElement('DIV');
        const imagen = document.createElement('IMG');
        const precioTitulo = document.createElement('H3');
        const tipoInmueble = document.createElement('P');
        const tipoServicio = document.createElement('P');
        const habitacion = document.createElement('P');
        const bath = document.createElement('P');
        const parking = document.createElement('P');
        const city = document.createElement('P');
        const anio = document.createElement('P');

        divCard.classList.add('card', 'p-0', 'mb-3', 'shadow', 'border-0', 'overflow-hidden');
        divCardBody.classList.add('card-body');
        divCardInfo.classList.add('d-flex', 'justify-content-between');
        divCardFooter.classList.add('card-footer', 'd-flex', 'justify-content-center');

        icono.classList.add('bi', 'bi-building', 'me-2');
        imagen.src = `${apto.image}`;
        imagen.alt = 'Imagen Lugar';
        imagen.classList.add('card-img-top', 'h-100', 'hover-imagen');


        precioTitulo.classList.add('fw-bold', 'card-title');
        precioTitulo.textContent = `$ ${apto.precio} `;
        spanCop.classList.add('fw-normal', 'cop');
        spanCop.textContent = 'COP';
        precioTitulo.appendChild(spanCop);

        tipoInmueble.classList.add('card-text', 'mb-1');
        tipoInmueble.textContent = `${apto.inmueble}`;

        tipoServicio.classList.add('card-text', 'mb-1', 'text-danger', 'fw-bold');
        tipoServicio.textContent = `${apto.servicio}`;

        habitacion.classList.add('card-text', 'mb-1');
        habitacion.textContent = `Habitaciones: ${apto.habitaciones}`;

        bath.classList.add('card-text', 'mb-1');
        bath.textContent = `Baños: ${apto.bathroom}`;

        parking.classList.add('card-text', 'mb-1');
        parking.textContent = `Parqueadero: ${apto.parqueadero}`;

        anio.classList.add('card-text', 'text-center', 'mantimiento');
        anio.textContent = `Tiempo en ${apto.servicio} desde el año: ${apto.year}`;

        city.classList.add('card-text', 'fw-bold');
        city.textContent = `Ciudad: ${apto.ciudad}`;

        divCardInfo.appendChild(tipoInmueble);
        divCardInfo.appendChild(tipoServicio);
        divCardBody.appendChild(precioTitulo);
        divCardBody.appendChild(divCardInfo);
        divCardBody.appendChild(habitacion);
        divCardBody.appendChild(bath);
        divCardBody.appendChild(parking);
        divCardBody.appendChild(anio);
        divCardFooter.appendChild(icono);
        divCardFooter.appendChild(city);
        divCard.appendChild(imagen);
        divCard.appendChild(divCardBody);
        divCard.appendChild(divCardFooter);

        row.appendChild(divCard);
    });
    console.log(row);
    
}

function llenarCampo() {
    const yearActual = new Date().getFullYear();
    for (let i = yearActual; i >= yearActual - 10; i--) {
        const valor = document.createElement('option');
        valor.textContent = i;
        year.appendChild(valor);
    }
}

function filtrarApartamentos() {
    const nuevoApartamento = apartamentos.filter(filtrarInmueble).filter(filtrarHabitacion).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarBath).filter(filtrarParking).filter(filtrarCiudad).filter(filtrarYear);
    if(nuevoApartamento.length) {
        mostrarContenido(nuevoApartamento);
        
    } else {
        borrarFiltro();
    }
}

function filtrarInmueble(apartamentos) {
    
    const { inmueble } = actual;
    if( inmueble) {
        return apartamentos.inmueble === inmueble;
    }
    return apartamentos;
}

function filtrarHabitacion(apartamentos) {
    
    const { habitaciones } = actual;
    if( habitaciones) {
        return apartamentos.habitaciones === habitaciones;
    }
    return apartamentos;
}

function filtrarMinimo(apartamentos) {
    
    const { minimo } = actual;
    if( minimo) {
        return apartamentos.precio >= minimo;
    }
    return apartamentos;
}

function filtrarMaximo(apartamentos) {
    
    const { maximo } = actual;
    if( maximo) {
        return apartamentos.precio <= maximo;
    }
    return apartamentos;
}

function filtrarBath(apartamentos) {
    
    const { bathroom } = actual;
    if( bathroom) {
        return apartamentos.bathroom === bathroom;
    }
    return apartamentos;
}

function filtrarParking(apartamentos) {
    
    const { parqueaderos } = actual;
    if( parqueaderos) {
        return apartamentos.parqueadero === parqueaderos;
    }
    return apartamentos;
}

function filtrarCiudad(apartamentos) {
    
    const { ciudad } = actual;
    if( ciudad) {
        return apartamentos.ciudad === ciudad;
    }
    return apartamentos;
}

function filtrarYear(apartamentos) {
    
    const { year } = actual;
    if( year) {
        return apartamentos.year === year;
    }
    return apartamentos;
}

function borrarFiltro() {
    while(row.firstChild) {
        row.removeChild(row.firstChild);
    }
}
