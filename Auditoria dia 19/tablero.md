# Dia 19
## Tablero
### Tareas del usuario
1. Ingresa datos
2. Dejar vacío el cuadro de dato
3. Ingresar datos invalidos
### Resultados
1. completado sin problemas 
2. Sale un texto donde dice "Ingresa datos validos"
3. Si no se ingresan datos validos, el programa no los lee y muestra en pantalla el texto ("Ingrese datoa")
### Estado
1. Aprobado
2. Aprobado
3. Observaciones (Deberia de ingresar otro texto que diga "Datos invalidos".)

#### Como observación el input esta en  type=number , lo que no permite escribir otro tipo de datos que no sean numericos.

## Lista de BUG
### Bug No°1 - Errores visuales
Impacto --> Error estetico en la pagina web.
### Bug No°2 - Si escribimos un numero negativo no se mostrara como "Dato invalido"
Impacto --> Otro error estetico del usuario
### Bug No°3 - La maquina permite ingresar valores decimales en el input "Personas", lo cual no tiene sentido
Impacto --> Podria causar confusión en los usuarios.

## Registro de decisiones tecnicas
Decisión --> Usar condicionales en el codigo de js
contexto --> Se decidio usar para que el texto de resultado cambie dependiendo de la condición ingresada
Conseciencias --> Hace que el programa sea funcional . Pero aun no esta optimizado de la mejor manera.

## Auditoria de accesibilidad
### Navegación por teclado
A la hora de utilizar la tecla "tab" y "shift + tab" (para retroceder), si funciona y el foco visible se hace ver al seleccionar algun input o boton.
### Zoom
Con el 200% en 200% abarca un 40% de la pantalla.
### Contraste
El contraste entre el fondo blanco del recuadro input , y el texto de placeholder gris claro.