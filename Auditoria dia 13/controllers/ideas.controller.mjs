export function crearIdeaController(req, res) {
  const { titulo } = req.body;

  const errorValidacion = validarTitulo(titulo);
  if (errorValidacion) {
    return res.status(400).json({ data: null, error: errorValidacion });
  }

  if (existeTituloDuplicado(titulo)) {
    return res.status(400).json({ data: null, error: 'Ya existe una idea con ese título.' });
  }

  const nuevaIdea = crearIdea(titulo);
  return res.status(201).json({ data: nuevaIdea, error: null });
}