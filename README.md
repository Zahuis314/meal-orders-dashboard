# Vue Dashboard

## Instalación
```
npm install
```

### Compilar y recarga en caliente para desarrolo
```
npm run serve
```

### Compilar y minificar para producción
```
npm run build
```
### Configuración



### Estructura de los datos

Para la obtención de los datos utilizando la API, se debe responder con un Array con el siguiente formato:

[
    {
        id: Integer,
        day: Integer [1..31],
        month: Integer [0..12],
        year: Integer,
        meals: Integer,
        costumers: Integer,
        lunches: Integer,
        dinners: Integer,
        special_request: Integer,
        is_in_service: Boolean,
        is_blocked: Boolean,
        is_stopped: Boolean
    }
    .
    .
    .
]

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
