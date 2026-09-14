export function validarTitulo(titulo) {
  if (typeof titulo !== 'string') {
    return 'El título es obligatorio y debe ser texto.';
  }
  const limpio = titulo.trim();
  if (limpio.length < 3 || limpio.length > 80) {
    return 'El título debe tener entre 3 y 80 caracteres.';
  }
  return null; // sin errores
}