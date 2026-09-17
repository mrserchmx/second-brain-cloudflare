<p align="center">
  <a href="https://www.thesecondbrain.dev"><img src="https://www.thesecondbrain.dev/logos/sb-lockup.svg" alt="Second Brain" width="400"></a>
</p>

**Memoria privada para ti. Memoria compartida para tu equipo. Disponible para todas las herramientas de IA compatibles con MCP que utilizas.**

Ahora con **Edición para Equipos (Team Edition)**: capas personales privadas más una capa compartida para el equipo, todo en un solo Worker.

[🇺🇸 English version](README.md) · **[🇲🇽 Versión en Español](README.es.md)**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Built with Cloudflare Workers](https://img.shields.io/badge/Built%20with-Cloudflare%20Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-8B5CF6)](https://modelcontextprotocol.io/)

Claude, ChatGPT, Cursor, Codex y las demás herramientas de IA que utilizas no comparten contexto entre sí por defecto. Terminas repitiendo los mismos proyectos, decisiones y preferencias en cada aplicación.

Second Brain le brinda a esas herramientas un sistema de memoria persistente unificado. Se ejecuta directamente en tu propia cuenta de Cloudflare, permanece bajo tu control absoluto y recupera el contexto adecuado por su significado en lugar de buscar coincidencias exactas de palabras.

---

La aplicación de escritorio es la forma más sencilla de comenzar. Configura tu Second Brain y conecta tus herramientas de IA en unos dos minutos, sin necesidad de usar la terminal ni configurar Cloudflare manualmente.

### [Descargar para Mac o Windows](releases/latest)

---

[Desplegar en Cloudflare](https://deploy.workers.cloudflare.com/?url=https://github.com/mrserchmx/second-brain-cloudflare) · [Leer la documentación](wiki)


## Qué hace

- **Recuerda por significado.** Haz preguntas en lenguaje natural y encuentra el recuerdo correcto incluso si utilizas palabras distintas a las que escribiste al guardarlo.
- **Funciona en todas tus herramientas y dispositivos.** Cada cliente se comunica con el mismo Worker, por lo que no hay nada que copiar ni sincronizar manualmente entre aplicaciones.
- **Tú tienes el control total.** Explora, edita, agrega notas, conecta, comparte, exporta o elimina de forma permanente cualquier recuerdo desde el panel de control.
- **Construye contexto útil.** Clasificación automática, detección de duplicados, relaciones entre notas, priorización según antigüedad y descubrimientos semanales opcionales que ayudan a que tu cerebro siga siendo útil a medida que crece.
- **Captura información donde ya trabajas.** Utiliza clientes MCP, la terminal (CLI), extensiones de navegador, Obsidian, Notion, calendarios, correo, Atajos de iOS o el panel web.
- **Permanece en tu cuenta.** Tus recuerdos, vectores de búsqueda, credenciales y recursos de la aplicación residen en tu propia cuenta de Cloudflare.

---

## Edición para Equipos (Team Edition)

Second Brain ahora puede ser la memoria de todo tu equipo sin dejar de ser tu memoria personal.

- Cada integrante cuenta con un espacio de trabajo **Personal** que nadie más puede leer, además de una capa **Compartida (Shared)** visible para todo el equipo.
- Los recuerdos son privados por defecto y solo entran a la capa Compartida cuando alguien decide compartirlos explícitamente.
- Al compartir un recuerdo se traslada el elemento original en lugar de duplicarlo. Su autor permanece visible y solo el autor o un administrador pueden editarlo, eliminarlo o dejar de compartirlo.
- Los administradores pueden gestionar miembros, accesos, políticas de captura e integraciones sin tener acceso a los espacios personales de nadie.
- Los recuerdos existentes de la versión 2 se convierten en recuerdos privados del propietario al actualizar. Nada se expone automáticamente al equipo.

| Capa | Quién puede leerla | Quién puede editarla o eliminarla |
| --- | --- | --- |
| **Personal** | Solo tú | Solo tú |
| **Compartida (Shared)** | Todos en el equipo | El autor o un administrador |

El mismo Worker admite tanto el uso individual como en equipo; no se requiere un despliegue independiente para equipos. En la API, la CLI y las herramientas MCP, la capa compartida está representada por el valor de espacio de trabajo `company`.

---

## Cómo funciona

Second Brain se ejecuta como un Cloudflare Worker respaldado por D1 (base de datos relacional SQLite), Vectorize (búsqueda semántica vectorial), Workers AI (modelos de lenguaje e incrustaciones) y KV (almacenamiento clave-valor). Cada aplicación y cliente de IA se conecta a ese Worker a través de REST o el protocolo estándar Model Context Protocol (MCP).

1. **Captura:** Guarda una decisión, preferencia, actualización de proyecto, nota o fuente desde cualquier cliente conectado.
2. **Organización:** Second Brain clasifica el contenido, comprueba si existen duplicados o contradicciones, establece relaciones y genera el índice para búsqueda semántica.
3. **Recuperación:** Pregunta en lenguaje natural. Second Brain recupera los recuerdos pertinentes, sigue conexiones útiles y devuelve contexto fundamentado a la herramienta que estés utilizando.

Si Vectorize no estuviera disponible momentáneamente, la captura y la búsqueda por palabras clave continúan funcionando sin interrupciones.

### Herramientas MCP disponibles

| Herramienta | Qué hace |
| --- | --- |
| `remember` | Guarda ideas, decisiones, preferencias y contexto de proyectos |
| `append` | Agrega una nota con marca de tiempo a un recuerdo existente |
| `update` | Reemplaza un recuerdo existente |
| `recall` | Busca recuerdos por significado conceptual |
| `list_recent` | Explora los recuerdos guardados recientemente |
| `list_teams` | Muestra los equipos compartidos a los que perteneces |
| `get_prompt_capsule` | Lee una cápsula de contexto determinista para prefijos de prompts |
| `get` | Consulta un recuerdo por su ID |
| `forget` | Elimina permanentemente un recuerdo |
| `set_status` | Marca un recuerdo como `canonical`, `draft` o `deprecated` |
| `link` | Crea un enlace explícito entre dos recuerdos |
| `unlink` | Elimina la relación entre dos recuerdos |
| `connections` | Muestra los recuerdos asociados a un recuerdo específico |
| `share` | Mueve un recuerdo entre la capa Personal y la Compartida |

En un cerebro de equipo, las herramientas de memoria aceptan el parámetro `workspace`: `"personal"` o `"company"` (la capa compartida). Si se omite, la captura utiliza los valores predeterminados y la búsqueda consulta todo lo que tienes permiso de ver.

Ejemplo en terminal (CLI):

```bash
brain remember --workspace company "Las entregas se realizan los jueves"
brain recall --workspace company "¿cuándo se hacen las entregas?"
```

---

## Cómo empezar

Los tres métodos de instalación configuran exactamente el mismo Second Brain en tu cuenta de Cloudflare.

### 1. Aplicación de escritorio (Recomendado)

[Descarga la versión más reciente](releases/latest), ábrela, elige una contraseña e inicia sesión en Cloudflare. La aplicación aprovisionará el Worker y sus recursos automáticamente, y te guiará para conectar tus clientes de IA, la CLI, la extensión de navegador, Obsidian y Notion.

La versión para macOS está firmada y notarizada por Apple. Las compilaciones de Windows están firmadas con certificado de código.

### 2. Despliegue con un clic en Cloudflare

Utiliza [Deploy to Cloudflare](https://deploy.workers.cloudflare.com/?url=https://github.com/mrserchmx/second-brain-cloudflare) para aprovisionar el Worker directamente sin necesidad de clonar el repositorio.

Tu `AUTH_TOKEN` será la contraseña de tu Second Brain: el valor que te solicitará cada cliente. Puedes usar una frase segura o generar un token aleatorio:

```bash
openssl rand -base64 32
```

En el formulario de configuración de Cloudflare, ingresa:

| CAMPO | VALOR |
| --- | --- |
| `AUTH_TOKEN` | Tu contraseña o token elegido |
| `DIMENSION` | `384` |
| `METRIC` | `cosine` |

Una vez desplegado, conecta tus herramientas a:

```text
https://TU-WORKER-URL/mcp
```

### 3. Despliegue manual (Para desarrolladores)

Si prefieres tener control completo mediante la línea de comandos:

```bash
npm install
npm run vectors:create
npm run deploy
```

**Desarrollo local:**

```bash
npm run dev      # Inicia el Worker localmente
npm test         # Ejecuta la suite de pruebas
```

**Verificar el despliegue:**

```bash
curl -X POST https://TU-WORKER-URL/capture \
  -H "Authorization: Bearer TU-TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"content":"mi second brain está funcionando","source":"test"}'
```

La respuesta exitosa confirmará con `{"ok":true,"id":"..."}`.

---

## Captura desde cualquier lugar

- **Clientes de IA:** Claude Desktop, Claude Code, ChatGPT, Cursor, Codex y cualquier herramienta con soporte MCP.
- **Línea de comandos:** [`second-brain-cf-cli`](https://github.com/rahilp/second-brain-cli).
- **Navegador web:** [Extensión de Chrome](https://github.com/rahilp/second-brain-browser-extension) o el marcador interactivo en [`integrations/bookmarklet.js`](integrations/bookmarklet.js).
- **Notas personales:** [Sincronizador para Obsidian](https://community.obsidian.md/plugins/second-brain-sync) y Notion.
- **Calendarios y correo:** Integraciones con Google Calendar, Outlook, iCloud y Gmail.
- **iPhone y iPad:** Atajos para notas de voz, texto y menú de compartir en [`integrations/ios-shortcuts/`](integrations/ios-shortcuts/).
- **Claude Code:** Hooks de sesión que recuerdan el contexto del proyecto al inicio y guardan la conversación al salir en [`integrations/claude-code-hooks/`](integrations/claude-code-hooks/).
- **Panel Web:** Captura, busca, explora grafos de conocimiento, comparte y gestiona respaldos desde la interfaz web integrada.

---

## Tecnología y privacidad

Second Brain está construido sobre Cloudflare Workers, D1 SQLite, Vectorize, Workers AI, KV, Model Context Protocol (MCP) y TypeScript. Funciona holgadamente dentro del plan gratuito de Cloudflare para uso personal.

Tus datos, recuerdos y credenciales residen exclusivamente en tu propia cuenta de Cloudflare. Ni los autores ni los mantenedores del proyecto pueden acceder a tu información. Las integraciones solo se comunican con los servicios que decidas conectar de manera explícita.

---

[Licencia MIT](LICENSE)
