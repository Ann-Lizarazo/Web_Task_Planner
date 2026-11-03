<div align="center">

# 📝 Planificador de Tareas

**Aplicación web Full Stack de gestión de tareas, construida sprint a sprint.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Java](https://img.shields.io/badge/Java-ED8B00?logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?logo=springboot&logoColor=white)
![Estado](https://img.shields.io/badge/Estado-En_desarrollo-orange)

</div>

---

## 🔗 Enlaces del proyecto

| Recurso | Enlace |
|---|---|
| 📋 Tablero de Trello (sprints y tareas) | **https://trello.com/b/nzfNSjj8/taskplanner** |
| 🎨 Wireframe en Figma | **https://www.figma.com/design/7mvplyeryBmAuFO9Ai2zYG/Untitled?t=OJoWFxhyyeisMcYG-1** |
| 💻 Repositorio en GitHub | **https://github.com/Ann-Lizarazo/Task_Planner.git** |

> ⚠️ Recuerda que el link de Trello y el de Figma deben tener permisos de **visualización pública** (o "cualquiera con el enlace") para que el evaluador pueda abrirlos.

---

## 📑 Tabla de contenido

1. [Descripción](#-descripción)
2. [Objetivos](#-objetivos)
3. [Alcance](#-alcance)
4. [Tecnologías](#-tecnologías)
5. [Planificación](#-planificación)
6. [Wireframe](#-wireframe)
7. [Estructura del proyecto](#-estructura-del-proyecto)
8. [Requerimientos](#-requerimientos)
9. [Instalación y uso](#-instalación-y-uso)
10. [Flujo de trabajo con Git](#-flujo-de-trabajo-con-git)
11. [Criterios de aceptación](#-criterios-de-aceptación)
12. [Autor](#-autor)

---

## 📖 Descripción

**Planificador de Tareas** es una aplicación web que permite al usuario **registrar, visualizar y gestionar sus tareas** de forma intuitiva. Es el proyecto individual del bootcamp: se desarrolla de manera incremental, siguiendo un flujo de trabajo similar al de un equipo de desarrollo profesional (planificación, sprints, control de versiones y entregas progresivas).

Cada sprint agrega nuevas funcionalidades y tecnologías hasta obtener una aplicación **Full Stack completa**: interfaz, servidor, base de datos e integración entre cliente y servidor.

## 🎯 Objetivos

- Aplicar los conocimientos de cada módulo en un único proyecto evolutivo.
- Practicar **planificación de proyectos** y organización del trabajo por **sprints**.
- Diseñar interfaces a partir de un **wireframe** de baja fidelidad.
- Desarrollar el **frontend** (HTML5, CSS3, Bootstrap, JavaScript, DOM, consumo de APIs).
- Desarrollar el **backend** (Java, Spring Boot, persistencia, SQL, CRUD).
- Usar **Git y GitHub** como control de versiones y evidencia de progreso.
- Aplicar buenas prácticas de programación y resolución de problemas.

## 🧭 Alcance

| Capa | Contenido |
|---|---|
| **Frontend** | HTML5, CSS3, Bootstrap, JavaScript, manipulación del DOM, consumo de APIs |
| **Backend** | Java, Spring Boot, persistencia de datos, base de datos SQL, operaciones CRUD |
| **Integración** | Conexión entre frontend y backend para una aplicación completamente funcional |

> En esta primera etapa el alcance se limita a la **interfaz de usuario** (HTML5 + Bootstrap). Aún **no** se implementa lógica de negocio con JavaScript, salvo la validación de entradas del formulario.

## 🛠 Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica de la página |
| CSS3 | Estilos personalizados (`css/styles.css`) |
| Bootstrap 5 (CDN) | Sistema de rejilla, componentes y utilidades |
| Figma | Wireframe de baja fidelidad |
| Trello | Gestión del sprint (tablero Kanban) |
| Git / GitHub | Control de versiones y repositorio remoto |

## 🗂 Planificación

La planificación de los sprints, sus tareas, estados y criterios de finalización se gestionan en el **tablero de Trello** del proyecto (ver [enlaces](#-https://trello.com/b/nzfNSjj8/taskplanner)).

| Backlog | Por hacer | En proceso | Finalizado |
|---|---|---|---|
| Ideas y tareas de sprints futuros | Tareas del sprint actual | Tarea en desarrollo | Tareas terminadas y verificadas |

Cada tarjeta incluye una descripción de lo que se debe desarrollar y los criterios para considerarla completada.

## 🖼 Wireframe

Wireframe de baja fidelidad diseñado en Figma (ver [enlace](#-https://www.figma.com/design/7mvplyeryBmAuFO9Ai2zYG/Untitled?t=OJoWFxhyyeisMcYG-1)). Estructura mínima:

```
┌──────────────────────────────────────────┐
│        HEADER — Planificador de Tareas   │
├──────────────────────────────────────────┤
│  FORMULARIO                              │
│  ┌────────────────────────────────────┐  │
│  │ Título        [__________________] │  │
│  │ Descripción   [__________________] │  │
│  │                  [ + Agregar tarea ]│  │
│  └────────────────────────────────────┘  │
├──────────────────────────────────────────┤
│  LISTA DE TAREAS                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │ Tarea 1  │ │ Tarea 2  │ │ Tarea 3  │  │
│  └──────────┘ └──────────┘ └──────────┘  │
└──────────────────────────────────────────┘
```

> Referencia de distribución únicamente: las proporciones y componentes se adaptan al diseño final de Figma.

## 📁 Estructura del proyecto

```
Planificador-Tareas/
│
├── css/
│   └── styles.css      # Estilos personalizados
│
├── index.html          # Página principal
└── README.md           # Documentación del proyecto
```

> En etapas posteriores se añadirán carpetas como `js/` (lógica del cliente) y el proyecto backend de Spring Boot.

## ✅ Requerimientos

### Funcionales

| ID | Requerimiento |
|---|---|
| RF-01 | La página muestra un encabezado con el nombre de la aplicación |
| RF-02 | La página incluye un formulario para registrar tareas |
| RF-03 | La página incluye un área destinada a la lista de tareas |
| RF-04 | Cada tarea se representa con un componente de tarjeta |
| RF-05 | El formulario valida las entradas antes de aceptar una tarea |

### No funcionales

| ID | Requerimiento |
|---|---|
| RNF-01 | Interfaz responsive basada en Bootstrap 5 |
| RNF-02 | HTML semántico y código ordenado e indentado |
| RNF-03 | Estructura de carpetas clara y escalable |
| RNF-04 | Accesibilidad básica: `label` asociados, contraste adecuado, `alt` en imágenes |

## 🚀 Instalación y uso

**Requisitos:** un navegador moderno y Git (por ahora no requiere servidor).

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/Planificador-Tareas.git

# 2. Entrar a la carpeta
cd Planificador-Tareas

# 3. Abrir index.html en el navegador
#    (doble clic, o con la extensión "Live Server" de VS Code)
```

## 🌿 Flujo de trabajo con Git

- Rama principal: `main`.
- Commits pequeños y descriptivos, en infinitivo o con prefijo convencional:

```bash
git add .
git commit -m "feat: agrega estructura inicial con Bootstrap"
git commit -m "feat: crea componente tarjeta de tarea"
git commit -m "fix: corrige validación del campo título"
git commit -m "docs: actualiza README con enlaces de Trello y Figma"
git push origin main
```

| Prefijo | Uso |
|---|---|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de errores |
| `style` | Cambios de estilos/formato |
| `docs` | Documentación |
| `refactor` | Reorganización sin cambiar comportamiento |

## ✔️ Criterios de aceptación

- [ ] Repositorio creado en GitHub con al menos un commit.
- [ ] Tablero de Trello con las listas Backlog, Por hacer, En proceso y Finalizado.
- [ ] Una tarjeta de Trello por cada tarea del sprint, con descripción y criterios.
- [ ] Wireframe de baja fidelidad en Figma (encabezado, formulario, lista de tareas, botones, organización general).
- [ ] Interfaz implementada con HTML5 + Bootstrap 5 según el wireframe.
- [ ] Componente de tarjeta de tarea y lista de tareas.
- [ ] Formulario con validación de entradas.
- [ ] README con los enlaces de Trello y Figma.

## 👤 Autor

**Ana Cristina Lizarazo Páez**


