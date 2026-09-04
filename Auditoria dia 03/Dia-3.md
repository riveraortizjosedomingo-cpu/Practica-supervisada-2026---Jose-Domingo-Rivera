# Dia 3
## Actividad No°1
1. Para encontrar PATH sin modificar se usa el comando "$env:USERPROFILE $env:PATHsplit ';'". Para localizar la carpeta relacionada con Git se usa: "Get-Command git"
2. ¿por qué permite escribir git desde cualquier carpeta? = La carpeta esta registrada en PATH y le indica a powershell donde buscar git.exe .

## Actividad No°2
Para empezar con este comando se necesita ejecutar el comando "pwd" para mostrar la carpeta actual, luego crear una carpeta la cual en este caso llamaremos "secreto" usando el comando "mkdir secreto" . Usando el comando "cd secreto" y de nuevo "pwd", creamos sub carpetas llamadas entrada, procesado y salida, usando "mkdir" para cada una. Luego ubicamos la sub carpeta "entrada" y en la misma creamos 5 archivos, 3 que sean .md y 2 que no tengan interfaz gráfica (Usando New-Item .md o .txt) luego movemos dos sin interfaz grafica usando el comando "Move carpeta/archivo.md destinatario/" Luego creamos "Inventario.txt" usando el comando "set-content".

## Predicción/Resultado
1. pwd = Para identifcar la variable PATH / mostro la carpeta actual.
2. mkdir = definia alguna varianle / crea una carpeta 
3. cd = Cambia de carpeta / cambia de una carpeta a otra
4. New-Item = Crea subcarpetas / crea archivos
5. Move = Va a mover las carpetas / Mueve los archivos entre carpetas
6. Set-content = Mandaria contenido a alguna carpeta / toma lo que recibe del comando anterior y lo guarda dentro de.
7. Get childItem = ver los archivos que creamos / Listar los archivos y verlos mas ordenados.
8. -Filter.md = Filtra los archivos creados con ".md".