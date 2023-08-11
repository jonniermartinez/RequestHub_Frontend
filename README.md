## Guía para Contribuir a Request Hub (FRONTEND)

### 1. Requisitos previos:

- Asegúrate de tener instalado Node.js en la versión estable 18.15 en tu PC.

### 2. Configuración del Entorno de Desarrollo:

- Utiliza el editor de código de tu preferencia, como VScode, Vim o Sublime Text.

### 3. Configuración Local del Proyecto:

- Clona el repositorio RequestHub_API en tu máquina local.

```
git clone https://github.com/jonniermartinez/RequestHub_Frontend.git
```

- Abre una terminal en el directorio del proyecto y ejecuta `npm install` para instalar todas las dependencias.
- Luego, ejecuta `npm run dev` para iniciar el servidor en tu entorno local.
- Ya tendrias el proyecto funcionando en tu computadora

### 4. Uso de GitHub Project:

- Visita el tablero de GitHub Projects para ver las tareas y su estado.
- `https://github.com/users/jonniermartinez/projects/4`

### 5. Contribuir al Proyecto:

- Identifica una tarea que tengas asignada, que te interese o que consideres que puedes resolver.
- Si una tarea nueva que estas creando procura poner una descripción y convertila en un issue.
- Crea una rama con un nombre descriptivo relacionado con el issue/tarea.
  - `git fetch origin`.
  - `git checkout ejemplo-tarea-123`.
- Realiza los cambios necesarios en tu rama local y realiza el commits.
- Subir los cambios a la rama de la tarea.
  - `git add .`
  - `git commit -m "mensaje de tus cambios"`
  - `git push -u origin ejemplo-tarea-123`
- Una vez que hayas terminado, abre un Pull Request hacia la rama "dev" del repositorio correspondiente.
- Describe detalladamente los cambios realizados en el PR.
- Asigna el PR a un revisor o mantenedor del proyecto.

### 7. Manejo de Errores (Issues):

- Si encuentras un error o un problema en el proyecto, crea un issue en el repositorio correspondiente en GitHub.
- Describe el problema detalladamente, Imagenes , incluyendo pasos para reproducirlo y el resultado esperado.
- Asigna el issue a ti mismo o déjalo sin asignar para que otro miembro del equipo pueda trabajar en él.

### 8. Revisión y Merge (Pull Requests):

- Los Pull Requests serán revisados por un mantenedor del proyecto.
- Si es necesario realizar cambios adicionales, se te notificará en el PR.
- Una vez que el PR haya sido aprobado y revisado, será mergeado en la rama "dev".

### 9. Despliegue en Producción:

- Cuando se tengan suficientes cambios y mejoras en la rama "dev", se preparará el despliegue en producción.
- Un mantenedor llevará a cabo el merge desde "dev" hacia "main".
- El código mergeado en "main" se desplegará en el entorno de producción.

Recuerda que es esencial seguir las reglas de estilo de código establecidas por el proyecto y asegurarte de que los tests se ejecuten correctamente antes de enviar cualquier contribución.
