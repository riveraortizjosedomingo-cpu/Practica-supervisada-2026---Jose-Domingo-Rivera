let ideas = [];
let siguienteId = 1;

export function listarIdeas() {
  return ideas;
}

export function buscarIdeaPorId(id) {
  return ideas.find((idea) => idea.id === id);
}

export function existeTituloDuplicado(titulo) {
  const t = titulo.trim().toLowerCase();
  return ideas.some((idea) => idea.titulo.trim().toLowerCase() === t);
}

export function crearIdea(titulo) {
  const nuevaIdea = { id: siguienteId++, titulo: titulo.trim() };
  ideas.push(nuevaIdea);
  return nuevaIdea;
}
