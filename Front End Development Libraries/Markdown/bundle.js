const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Función para actualizar la vista previa
function updatePreview() {
  // Obtener el valor del editor de Markdown
  const markdown = editor.value;
  
  // Convertir el Markdown a HTML usando la biblioteca "marked"
  const html = marked(markdown);
  
  // Actualizar el contenido del elemento de vista previa
  preview.innerHTML = html;
}

// Actualizar la vista previa cada vez que se escribe en el editor
editor.addEventListener('input', updatePreview);

// Actualizar la vista previa inicialmente
updatePreview();