import type { Messages } from "./types";

export const es: Messages = {
  "common": {
    "continue": "Continuar",
    "back": "Atrás",
    "copy": "Copiar",
    "copied": "Copiado ✓",
    "copyBoth": "Copiar ambos enlaces",
    "copyLink": "Copiar enlace",
    "copyAddress": "Copiar dirección",
    "copyCommand": "Copiar comando",
    "connect": "Conectar",
    "connecting": "Conectando…",
    "connected": "Conectado ✓",
    "openSettings": "Abrir configuración",
    "emailDetails": "Enviarme estos detalles por correo",
    "notNow": "Ahora no",
    "tryAgain": "Reintentar",
    "checking": "Comprobando…",
    "ready": "Listo",
    "notFound": "No encontrado",
    "demoMode": "Modo de demostración",
    "appTitle": "Second Brain",
    "continueToCloudflare": "Continuar a Cloudflare",
    "continueToConnectionDetails": "Continuar a los detalles de conexión",
    "trySetupAgain": "Intentar la configuración de nuevo",
    "skipUpdateForNow": "Omitir actualización por ahora"
  },
  "settings": {
    "title": "Configuración",
    "language": "Idioma",
    "languageDesc": "Elige cómo se muestra la aplicación de Second Brain en esta computadora.",
    "english": "English",
    "italian": "Italiano",
    "spanish": "Español"
  },
  "settingsPanel": {
    "title": "Configuración avanzada",
    "lede": "Cómo recuerda y busca tu Second Brain. Los cambios se aplican en tu próxima búsqueda.",
    "sectionRecall": "Recuperación",
    "sectionRemember": "Almacenamiento",
    "sectionAi": "IA",
    "sectionMatching": "Coincidencias",
    "custom": "Personalizado",
    "customNote": "Estos valores se configuraron fuera de la app y no coinciden con un ajuste predeterminado. Al elegir un nivel abajo se reemplazarán.",
    "reset": "Restablecer a valores predeterminados",
    "save": "Guardar cambios",
    "cancel": "Cancelar",
    "unsaved": "{count} cambios sin guardar",
    "unsavedOne": "1 cambio sin guardar",
    "saving": "Guardando…",
    "saved": "Guardado",
    "loadFailed": "No pudimos cargar la configuración avanzada. Cierra esta ventana e intenta de nuevo.",
    "recency": {
      "label": "Qué tanto priorizar recuerdos recientes sobre los antiguos",
      "desc": "Los recuerdos más antiguos pierden gradualmente relevancia frente a los nuevos. Esto define qué tan rápido pierden relevancia y cuánta protección reciben los recuerdos consolidados e importantes.",
      "levels": {
        "timeless": {
          "name": "Atemporal",
          "notice": "La antigüedad casi no importa. Ideal si tu cerebro es principalmente material de referencia que deseas encontrar sin importar cuándo lo guardaste."
        },
        "balanced": {
          "name": "Equilibrado",
          "notice": "El ajuste predeterminado. Lo reciente gana en empates, pero una coincidencia antigua sólida supera a una nueva débil."
        },
        "recent_first": {
          "name": "Lo más reciente primero",
          "notice": "Los recuerdos nuevos predominan. Ideal para proyectos dinámicos, a costa de relegar contexto más antiguo."
        }
      }
    },
    "variety": {
      "label": "Variedad en los resultados",
      "desc": "Cuando varios recuerdos dicen casi lo mismo, Second Brain puede devolverlos todos o diversificar los resultados.",
      "levels": {
        "focused": {
          "name": "Enfocado",
          "notice": "Las coincidencias más cercanas, incluso si algunas se repiten entre sí."
        },
        "balanced": {
          "name": "Equilibrado",
          "notice": "El ajuste predeterminado."
        },
        "varied": {
          "name": "Variado",
          "notice": "Una variedad más amplia de recuerdos distintos. Algunas coincidencias muy cercanas se omiten para hacer espacio."
        }
      }
    },
    "connections": {
      "label": "Qué tan lejos seguir las conexiones",
      "desc": "Más allá de las coincidencias directas, Second Brain puede explorar los enlaces entre recuerdos y traer a colación aquello con lo que se conectan.",
      "levels": {
        "off": {
          "name": "Desactivado",
          "notice": "Solo coincidencias directas."
        },
        "nearby": {
          "name": "Cercano",
          "notice": "A un paso de distancia. Muestra contexto evidente que no buscaste directamente."
        },
        "extended": {
          "name": "Extendido",
          "notice": "A dos pasos de distancia. Contexto más enriquecedor y, ocasionalmente, alguna asociación más distante."
        }
      }
    },
    "detail": {
      "label": "Qué tanto detalle devolver",
      "desc": "Define qué parte de cada recuerdo se envía a tu asistente de IA.",
      "levels": {
        "compact": {
          "name": "Compacto",
          "notice": "Fragmentos breves. Deja el mayor espacio disponible en la ventana de contexto de tu asistente."
        },
        "standard": {
          "name": "Estándar",
          "notice": "El ajuste predeterminado. Texto completo para las mejores coincidencias, fragmentos para el resto."
        },
        "full": {
          "name": "Completo",
          "notice": "Mayor extensión de cada recuerdo. Mejores respuestas, utiliza bastante más contexto."
        }
      }
    },
    "duplicates": {
      "label": "Bloqueo de recuerdos casi duplicados",
      "desc": "Cuando algo muy parecido ya está almacenado, Second Brain puede bloquear el guardado o permitirlo con una advertencia.",
      "note": "Se aplica a los nuevos recuerdos guardados. Los duplicados ya existentes en tu cerebro no se ven afectados.",
      "levels": {
        "permissive": {
          "name": "Permisivo",
          "notice": "Casi todo se guarda. Las repeticiones se van acumulando."
        },
        "standard": {
          "name": "Estándar",
          "notice": "El ajuste predeterminado. Se bloquean elementos casi idénticos y se marcan los similares."
        },
        "strict": {
          "name": "Estricto",
          "notice": "Bloquea rigurosamente. En ocasiones puede rechazar una actualización legítima de algo que ya habías guardado."
        }
      }
    },
    "compression": {
      "label": "Compresión de recuerdos antiguos",
      "desc": "Cada noche, los recuerdos antiguos que casi no consultas pueden sintetizarse en resúmenes para mantener la búsqueda ágil.",
      "note": "Entra en vigor en la ejecución de esta noche. Los recuerdos ya comprimidos permanecen comprimidos.",
      "levels": {
        "conservative": {
          "name": "Conservador",
          "notice": "Protege más información. Tu cerebro crece más y las búsquedas se vuelven gradualmente más lentas."
        },
        "standard": {
          "name": "Estándar",
          "notice": "El ajuste predeterminado. Los recuerdos importantes o consultados con frecuencia nunca se comprimen."
        },
        "aggressive": {
          "name": "Agresivo",
          "notice": "Comprime más pronto. Cerebro más ligero, y los detalles en recuerdos viejos se sintetizan."
        }
      }
    },
    "model": {
      "label": "Qué modelo de IA utilizar",
      "desc": "Se utiliza para ordenar, resumir y detectar contradicciones en tus recuerdos. No se utiliza para la búsqueda en sí ni para los descubrimientos de relaciones que Second Brain encuentra entre recuerdos, los cuales tienen su propio modelo abajo. Todos los modelos aquí se ejecutan en tu propia cuenta de Cloudflare.",
      "sizeNote": "Los modelos más grandes redactan mejores resúmenes y consumen más neuronas. Los más pequeños son más rápidos y económicos.",
      "neuronsNote": "Las neuronas son la unidad de uso de Cloudflare para IA. Tu plan incluye una cuota diaria."
    },
    "insightModel": {
      "label": "Qué modelo de IA genera descubrimientos",
      "desc": "Se utiliza únicamente cuando Second Brain compara dos recuerdos y redacta un descubrimiento sobre cómo se conectan. El modelo anterior se encarga de ordenar, resumir y detectar contradicciones.",
      "sizeNote": "Los modelos más grandes generan descubrimientos más agudos y consumen más neuronas. Los más pequeños son más rápidos y económicos.",
      "defaultNote": "Comparar dos recuerdos requiere un criterio más complejo que resumir uno solo, por lo que este ajuste usa de manera predeterminada un modelo más grande que el anterior. Como la comparación en sí es breve, el consumo es casi el mismo."
    },
    "migration": {
      "lede": "Cambiar cómo se leen tus recuerdos requiere releer cada uno de ellos. Esto puede tomar unos minutos y pausarse si tu cuota diaria de IA se agota.",
      "label": "Cómo leer tus recuerdos",
      "desc": "Define la precisión con la que se interpretan tus recuerdos para la búsqueda semántica.",
      "entries": "{entries} recuerdos guardados, todos para releerse.",
      "entriesOne": "1 recuerdo guardado, para releerse.",
      "entriesNone": "Aún no hay recuerdos guardados, por lo que no hay nada que releer.",
      "pickLabel": "Cómo leer tus recuerdos",
      "inUse": "{name} (en uso ahora)",
      "unknownValue": "Aún no se conoce",
      "storageWarning": "Esto supera lo que una cuenta gratuita de Cloudflare puede almacenar para un cerebro de tu tamaño. Mientras se ejecuta la reconstrucción, se conservan tanto los datos de búsqueda anteriores como los nuevos para que puedas cambiar de opinión. Ahí es cuando se agotaría el espacio y fallaría el guardado de nuevos recuerdos. Una opción más ligera o un plan de pago de Cloudflare evitan esto.",
      "pickNote": "Leer con mayor detalle permite coincidencias más precisas. Cada opción indica su consumo. Todas se ejecutan en tu propia cuenta de Cloudflare.",
      "levels": {
        "standard": {
          "name": "Estándar",
          "notice": "La opción en inglés más ligera para tu cuota diaria de IA y la más rápida de reconstruir. Suficiente para la mayoría de las búsquedas."
        },
        "finer": {
          "name": "Mayor detalle",
          "notice": "Captura mejor el significado de cada recuerdo para ordenar mejor resultados cercanos. Consume más de tu cuota diaria de IA."
        },
        "finest": {
          "name": "Máximo detalle",
          "notice": "La coincidencia más precisa y la opción más exigente en inglés, tanto para tu cuota diaria de IA como para el almacenamiento."
        },
        "multilingual": {
          "name": "Multilingüe",
          "notice": "Lee recuerdos en más de 100 idiomas con un detalle comparable a Máximo detalle. Las tres opciones anteriores solo están optimizadas para inglés. Más ligera en consumo de cuota diaria de IA que la Estándar; utiliza el mismo almacenamiento que Máximo detalle."
        }
      },
      "sameAsCurrent": "Esa es la opción en uso actualmente. Nada que hacer.",
      "dirtyNote": "Guarda o cancela tus otros cambios primero.",
      "startButton": "Reconstruir con esta opción",
      "confirmTitle": "Antes de comenzar",
      "confirmLead": "La búsqueda estará incompleta hasta que este proceso termine.",
      "confirmBody": "Tus recuerdos están seguros: únicamente se reconstruyen los datos que Second Brain utiliza para buscar.",
      "point1": "Los recuerdos que aún no se hayan releído no aparecerán en los resultados.",
      "point2": "Utiliza tu cuota diaria de IA y se pausará por hoy si esta se agota.",
      "point3": "{chunks} fragmentos por releer: aproximadamente {rounds} rondas consecutivas.",
      "point4": "No se elimina nada hasta que decidas liberar los datos de búsqueda anteriores al final.",
      "targetLine": "Cambiando a: {name}",
      "modelLine": "Modelo: {name}",
      "confirmButton": "Sí, reconstruir",
      "cancelButton": "Ahora no",
      "startingTitle": "Preparando todo",
      "startingBody": "Configurando la nueva forma de leer tus recuerdos y vinculando tu Second Brain a ella. Esto toma uno o dos minutos. Mantén abierta esta ventana.",
      "runningTitle": "Releyendo tus recuerdos",
      "runningBody": "La búsqueda estará incompleta hasta que esto termine. Mantén abierta esta ventana o pausa y regresa después. Lo que ya se haya releído no se pierde en ningún caso. El total puede aumentar si guardas algo nuevo mientras esto se ejecuta.",
      "pauseButton": "Pausar por ahora",
      "pausing": "Pausando después de esta ronda…",
      "pausedTitle": "Pausado",
      "pausedBody": "Todo lo que se ha releído hasta ahora está guardado. La búsqueda seguirá incompleta hasta que continúes, y continuar no tiene costo adicional por lo ya procesado.",
      "progress": "{done} de {total} recuerdos releídos",
      "progressPending": "Procesándolos ahora…",
      "skipped": "Recuerdos que no pudieron releerse todavía: {failed}. Se volverán a intentar al continuar.",
      "stalledTitle": "Pausado por hoy",
      "stalledBody": "La cuota de IA de hoy se ha agotado. Todo lo realizado hasta ahora está guardado y retomarlo no tiene costo por lo ya procesado. Regresa mañana o cuando se restablezca tu cuota.",
      "stalledFailingTitle": "Un recuerdo está bloqueando la reconstrucción",
      "stalledFailingBody": "El mismo recuerdo sigue fallando, por lo que la última ronda no avanzó. Esperar no cambiará la situación. El siguiente intento ejecutaría la misma ronda. Intenta de nuevo por si fue un problema momentáneo o reinicia para releer todo desde el principio.",
      "resumeButton": "Continuar",
      "startOverButton": "Reiniciar desde el principio",
      "startOverNote": "Reiniciar vuelve a leer cada recuerdo, incluidos los ya procesados, y consume tu cuota de IA por ese trabajo por segunda vez.",
      "resettingTitle": "Reiniciando",
      "resettingBody": "Borrando el registro de lo releído para comenzar desde tu primer recuerdo.",
      "interruptedTitle": "Una reconstrucción quedó inconclusa",
      "interruptedBody": "Una reconstrucción se detuvo a la mitad: {done} de {total} completados. La búsqueda permanecerá incompleta hasta que finalice, y continuar no cuesta nada por lo que ya está hecho.",
      "failedTitle": "La reconstrucción se detuvo",
      "failedBody": "Tus recuerdos están intactos y todo lo releído hasta ahora está guardado. Continuar retomará el proceso donde se detuvo. No empezará de nuevo.",
      "stuckTitle": "La reconstrucción dejó de avanzar",
      "stuck": "No se perdió nada y todo lo releído hasta ahora está guardado. Intentar de nuevo en unos minutos suele solucionarlo; si no, reinicia desde el principio.",
      "doneTitle": "Tus recuerdos se han releído por completo",
      "doneBody": "La búsqueda vuelve a estar completa y tu Second Brain ahora asocia los recuerdos con el nuevo método.",
      "changeAgain": "Cambiar esto nuevamente",
      "freeLabel": "Liberar los datos de búsqueda anteriores",
      "freeDesc": "Los datos de búsqueda anteriores a la reconstrucción aún ocupan espacio. Tus recuerdos no se modifican. Esto solo elimina los datos residuales que tu Second Brain ya no utiliza. Es el único paso que no se puede deshacer.",
      "freeButton": "Liberar datos anteriores",
      "freeConfirm": "Sí, liberar espacio. Entiendo que esto no se puede deshacer",
      "freeKeep": "Conservarlos por ahora",
      "freeing": "Liberando los datos de búsqueda anteriores",
      "freeingBody": "Esto solo tomará un momento.",
      "freedTitle": "Todo listo",
      "freedBody": "Tu Second Brain lee y asocia tus recuerdos de la nueva forma, y los datos de búsqueda anteriores han sido eliminados. Nada más cambió.",
      "loading": "Comprobando cómo se leen tus recuerdos…",
      "loadFailed": "No pudimos consultar la configuración de búsqueda en este momento. Intenta de nuevo en un momento.",
      "barRunning": "Releyendo tus recuerdos: {done} de {total} completados. El resto de las opciones están bloqueadas hasta que finalice.",
      "barWorking": "Trabajando en tu Second Brain. Las demás opciones están bloqueadas hasta que esto termine."
    }
  },
  "steps": {
    "navLabel": "Pasos de configuración",
    "start": "Inicio",
    "protect": "Contraseña",
    "signIn": "Iniciar sesión",
    "find": "Buscar",
    "connect": "Conectar",
    "build": "Construir",
    "tools": "Herramientas",
    "details": "Detalles",
    "backTo": "Volver a {step}",
    "locked": "Ya completado. La configuración no puede volver a este paso.",
    "compact": "Paso {n} de {total}"
  },
  "value": {
    "editorialHeading": "En sus propias palabras",
    "label": "Lo que la gente opina sobre Second Brain",
    "sourceProductHunt": "Product Hunt",
    "sourceReddit": "Reddit",
    "statSetup": "Configuración en 2 min",
    "statCost": "Gratis y de código abierto",
    "statData": "Tus datos, tu cuenta"
  },
  "welcome": {
    "title": "Configura tu Second Brain",
    "lede": "Una memoria privada para las herramientas de IA que elijas. Vive en una cuenta de Cloudflare que tú controlas.",
    "getStarted": "Crear un nuevo Second Brain",
    "alreadyHave": "Conectar un Second Brain que ya tengo",
    "footnote": "Gratis para comenzar · Tus datos se quedan en la cuenta de Cloudflare que elijas"
  },
  "audience": {
    "title": "¿Lo usarás por tu cuenta o con un equipo?",
    "lede": "Elige cómo planeas usar este nuevo Second Brain. Si te invitaron al equipo de alguien más, regresa y elige 'Conectar un Second Brain que ya tengo'.",
    "justMe": "Solo yo",
    "aTeam": "Crear un cerebro de equipo",
    "existingTitle": "¿Usarás este Second Brain con un equipo?",
    "existingLede": "Puedes convertirlo en un cerebro de equipo. Cada persona tendrá recuerdos privados y podrá elegir qué compartir con el equipo. Si eliges equipo, podrás invitar personas después desde el panel.",
    "existingFootnote": "Esta elección se vuelve definitiva una vez que alguien se une al equipo. Tus recuerdos personales existentes se mantienen privados.",
    "footnote": "En un cerebro de equipo, cada persona tiene su propio inicio de sesión y recuerdos privados. Cada quien elige qué recuerdos compartir con el equipo."
  },
  "connectExisting": {
    "title": "Conectar a un Second Brain",
    "lede": "Pega la dirección web de Second Brain e ingresa su contraseña o el token de acceso del equipo desde tu invitación. Conectar solo guarda el acceso en esta computadora.",
    "addressPlaceholder": "Dirección web de Second Brain (pega el enlace que te dieron)",
    "passwordPlaceholder": "Contraseña o token de acceso del equipo",
    "connect": "Conectar esta computadora",
    "footnote": "Encuentra la dirección en los detalles de conexión de otra computadora, o en el correo de invitación o confirmación.",
    "chooseLede": "Elige cómo conectarte. Si es tu propio Second Brain, podemos buscarlo en tu cuenta de Cloudflare. Si te invitaron a un equipo, usa la dirección y el token de acceso de tu invitación.",
    "signInButton": "Buscar mi Second Brain en Cloudflare",
    "signInHint": "Usa esto solo para un Second Brain en tu propia cuenta de Cloudflare.",
    "signInFootnote": "Para un Second Brain que tú mismo configuraste, Cloudflare nos permite buscar su dirección. Cloudflare gestiona el inicio de sesión; esta app nunca ve tu contraseña de Cloudflare. Si alguien te invitó a su equipo, no necesitas cuenta de Cloudflare: elige 'Tengo una dirección o token de acceso del equipo'.",
    "manualButton": "Tengo una dirección o token de acceso del equipo",
    "accountPickerTitle": "¿Qué cuenta de Cloudflare debemos buscar?",
    "accountPickerLede": "Elige la cuenta en la que creaste tu Second Brain.",
    "searchingTitle": "Buscando tu Second Brain",
    "searchingLede": "Buscando en esta cuenta de Cloudflare. Esto puede tomar hasta un minuto.",
    "searchingStep": "Buscando instancias de Second Brain en esta cuenta",
    "pickTitleOne": "¿Es este el Second Brain que deseas conectar?",
    "pickTitleMany": "¿Qué Second Brain deseas conectar?",
    "pickLedeOne": "Elígelo para continuar, o usa una dirección de otra computadora o invitación.",
    "pickLedeMany": "Elige el Second Brain al que deseas conectarte.",
    "noneFound": "No encontramos ningún Second Brain en esa cuenta de Cloudflare. Podría estar en otra cuenta, usar una dirección web distinta o pertenecer a un equipo que te invitó. Pega abajo la dirección que te proporcionaron.",
    "unlockTitle": "Ingresa tus datos de inicio de sesión",
    "unlockLede": "Usa la contraseña de este Second Brain o el token de acceso del equipo desde tu invitación. Conectar solo guarda el acceso en esta computadora.",
    "lostPassword": "No tengo mi contraseña",
    "memberTokenHelp": "Soy miembro del equipo. Pedir un nuevo token a mi administrador",
    "memberTokenHelpTitle": "Pide un nuevo token a tu administrador de equipo",
    "memberTokenHelpLede": "Un token que ha sido reemplazado, o una cuenta que ha sido suspendida o eliminada, no se puede arreglar en esta computadora. Pide a quien te invitó que genere uno nuevo."
  },
  "password": {
    "title": "Elige una contraseña",
    "lede": "Úsala para conectar tus computadoras y aplicaciones de IA.",
    "placeholder": "Elige una contraseña (al menos 12 caracteres)",
    "confirmPlaceholder": "Ingresa la misma contraseña de nuevo",
    "generateTitle": "Generar una contraseña segura",
    "tooShort": "Demasiado corta",
    "checking": "Comprobando…",
    "foundInBreaches": "Encontrada en filtraciones",
    "strong": "Segura",
    "good": "Buena",
    "easyToGuess": "Fácil de adivinar",
    "breachHint": "Esta contraseña ha aparecido en filtraciones de datos, por lo que no es seguro usarla aquí. Prueba con otra o permítenos generar una.",
    "mismatch": "Las contraseñas no coinciden todavía.",
    "notice": "Guárdala en un gestor de contraseñas. No podremos mostrártela más adelante.",
    "footnote": "La verificación de filtraciones usa un fragmento de huella digital, nunca tu contraseña."
  },
  "changePassword": {
    "title": "Cambiar tu contraseña",
    "lede": "Cambiar tu contraseña actualiza la clave de acceso en tu Second Brain. Las aplicaciones conectadas te pedirán la nueva contraseña.",
    "notice": "Guárdala en un lugar seguro. Esta app no podrá mostrártela después.",
    "signInButton": "Iniciar sesión con Cloudflare",
    "signInFootnote": "Cloudflare gestiona la autorización en tu cuenta.",
    "waitingLede": "Completa el inicio de sesión en tu navegador y regresa aquí.",
    "blockedTitle": "Una operación en curso impide el cambio",
    "blockedBody": "Tu Second Brain está ocupado en este momento (por ejemplo, reconstruyendo el índice de búsqueda). Espera a que termine antes de cambiar la contraseña.",
    "blockedEscape": "Puedes cerrar esta ventana e intentarlo más tarde.",
    "blockedButton": "Entendido",
    "blockedMayBeLive": "El cambio puede haberse aplicado en Cloudflare aunque la confirmación tardara.",
    "lostTitle": "Tus recuerdos están seguros",
    "lostLede": "Nadie, ni esta app ni Cloudflare, puede consultar tu contraseña por ti. Sin embargo, puede reemplazarse, y reemplazarla es la forma de recuperar tu acceso.",
    "lostBodySignedIn": "Ya iniciaste sesión en el espacio de Cloudflare donde vive tu Second Brain, que es quien decide el acceso. Por lo tanto, puedes establecer una nueva contraseña ahora mismo. Todo lo que has guardado permanece exactamente en su lugar.",
    "lostBodySignIn": "Tu Second Brain vive en tu propio espacio de Cloudflare, y eso es lo que decide el acceso. Inicia sesión allí y podrás establecer una nueva contraseña. Todo lo que has guardado permanece exactamente en su lugar.",
    "lostNotice": "Cualquier dispositivo o app que tenga la contraseña anterior pedirá la nueva: tus otras computadoras, la extensión del navegador, el complemento de Obsidian.",
    "lostContinueButton": "Elegir una nueva contraseña",
    "lostSignInButton": "Iniciar sesión con Cloudflare",
    "pickBrainLedeOne": "Establece una nueva contraseña en este cerebro, o regresa y elige otro.",
    "pickBrainLedeMany": "Elige aquel para el que olvidaste la contraseña.",
    "addressTitle": "¿Cuál es la dirección de tu Second Brain?",
    "addressLede": "No pudimos encontrarlo en ese espacio. Ingresa la dirección y estableceremos una nueva contraseña en él. No se requiere la contraseña actual.",
    "addressLedeManual": "Ingresa la dirección del Second Brain para el cual deseas una nueva contraseña. No se requiere la contraseña actual.",
    "pickTitle": "Elige una nueva contraseña",
    "pickLede": "Esta reemplaza a la anterior. Cloudflare no puede mostrártela de nuevo y nosotros tampoco, así que conserva tu propia copia.",
    "generatedNote": "Generamos una bastante segura para ti. Escribe encima si prefieres elegir la tuya.",
    "pickNotice": "La contraseña anterior dejará de funcionar en el momento en que esto surta efecto.",
    "saveTitle": "Guarda esto en un lugar seguro",
    "saveLede": "Una vez establecida, nada en esta app ni en Cloudflare te la volverá a mostrar. Permanecerá en pantalla en esta ventana hasta que la cierres, y después necesitarás la copia que guardaste.",
    "passwordLabel": "Tu nueva contraseña",
    "saveAdvice": "Un gestor de contraseñas es el lugar ideal para guardarla. Si la guardas en otro lado, que sea un lugar donde confiarías la llave de todo lo que has escrito.",
    "saveConfirm": "Ya la guardé: cambiar mi contraseña",
    "saveBack": "Elegir una diferente",
    "progressTitle": "Cambiando tu contraseña",
    "progressLede": "Esto toma uno o dos minutos. Mantén abierta esta ventana.",
    "stepSend": "Estableciendo la nueva contraseña",
    "stepConfirm": "Esperando a que tu Second Brain la acepte",
    "stepLocal": "Guardándola en esta computadora",
    "doneTitle": "Tu contraseña ha sido cambiada",
    "doneTitleLost": "Ya recuperaste el acceso",
    "doneLede": "Esta computadora ya está usando la nueva contraseña. Tus recuerdos, tu dirección y todo lo que has conectado no han cambiado.",
    "doneNeedsHead": "Qué aplicaciones pedirán la nueva contraseña",
    "doneNeeds1": "Tus otras computadoras, la próxima vez que abras Second Brain en ellas.",
    "doneNeeds2": "La extensión de navegador y el complemento de Obsidian, tanto en esta computadora como en cualquier otra. Cada uno guarda su propia copia y este cambio no los actualiza automáticamente.",
    "doneNeeds3": "El comando brain en una terminal en cualquier otra computadora.",
    "doneNeeds4": "Cualquier pestaña del navegador donde hayas abierto tu panel directamente.",
    "doneKeptHead": "Qué herramientas siguen conectadas",
    "doneKept": "Las herramientas de IA que conectaste iniciando sesión mediante tu enlace de conexión siguen conectadas y funcionando. A cada una se le otorgó su propio acceso en su momento, independiente de tu contraseña, por lo que cambiarla no las afecta. Cualquier app conectada pegando la contraseña directamente está en la lista anterior y te pedirá la nueva.",
    "doneLeak": "Si cambiaste tu contraseña porque alguien más pudo haberla tenido, esas conexiones son lo único que este cambio no cerró. Desconectarlas hará que cada herramienta solicite conectarse de nuevo.",
    "doneDisconnectButton": "Desconectar herramientas de IA…",
    "doneShow": "Mostrar mi nueva contraseña",
    "doneHide": "Ocultarla",
    "failNotSentTitle": "No se realizó ningún cambio",
    "failNotSentBody": "La nueva contraseña nunca llegó a tu Second Brain, por lo que tu contraseña anterior sigue funcionando y todo permanece exactamente como estaba. Es seguro intentar de nuevo.",
    "failNotSentLabel": "La contraseña que elegiste no está en uso",
    "failDetail": "Qué salió mal: {detail}",
    "failUnsureTitle": "Tu nueva contraseña podría estar ya en uso",
    "failUnsureBody": "El cambio se envió a tu Second Brain, pero no confirmó a tiempo, por lo que no podemos asegurarte cuál contraseña está activa. Guarda la de abajo antes de hacer cualquier otra cosa. Podría ser la que funciona ahora.",
    "failUnsureRetry": "Intenta de nuevo. Establecer la misma contraseña por segunda vez no cambia nada si ya se aplicó, y completa el proceso si no fue así. De cualquier forma, tendrás la certeza.",
    "failUnsureFootnote": "Esta computadora no se ha actualizado todavía, por lo que también podría pedirte contraseña. Si lo hace, usa la de arriba.",
    "failUnsureLeave": "Dejarlo por ahora",
    "recheckButton": "Comprobar de nuevo",
    "recheckConfirmed": "Tu Second Brain responde a la nueva contraseña, así que esa parte está lista. Esta computadora aún no la guarda. Intenta de nuevo para finalizar; nada en tu Second Brain cambiará.",
    "recheckUnconfirmed": "Tu Second Brain todavía no responde a la nueva contraseña. Podría requerir un momento más o el cambio no se aplicó. Intentar de nuevo resolverá la situación en cualquier caso.",
    "recheckUnreachable": "No pudimos comunicarnos con tu Second Brain para verificar, por lo que esto no confirma nada. El cambio podría haberse aplicado. Comprueba de nuevo en un momento o intenta el cambio directamente otra vez.",
    "failLocalTitle": "Tu contraseña cambió, pero no se pudo guardar en esta computadora",
    "failLocalTitlePartial": "Tu contraseña cambió, pero algún componente en esta computadora aún tiene la anterior",
    "failLocalBody": "Tu Second Brain está usando la nueva contraseña. Esta computadora no pudo guardarla, por lo que no podrá abrir tu Second Brain hasta que te conectes de nuevo con la nueva. Guárdala ahora si no lo has hecho.",
    "failLocalCli": "El comando brain en tu terminal todavía tiene configurada la contraseña anterior. Ejecuta brain setup para apuntarlo a la nueva.",
    "failLocalDashboard": "La ventana de Second Brain que ya está abierta continúa usando la contraseña anterior. Ciérrala y ábrela de nuevo.",
    "failLocalReconnect": "Conectar esta computadora de nuevo",
    "leaveWarn": "Esta es la última pantalla que muestra esta contraseña. Si no la has guardado en un lugar seguro, hazlo ahora.",
    "leaveConfirm": "Ya la guardé: salir",
    "leaveKeep": "Permanecer aquí"
  },
  "passwordChangedElsewhere": {
    "title": "Tu contraseña se cambió en otra computadora",
    "lede": "Tu Second Brain tiene una nueva contraseña, por lo que la guardada en esta computadora ya no permite el acceso. Nada se perdió ni se eliminó. Esta computadora solo necesita la nueva contraseña.",
    "body": "La encontrarás en el lugar donde la guardaste al cambiarla. Es el mismo Second Brain en la misma dirección.",
    "findAgain": "Buscar un Second Brain diferente",
    "findAgainHint": "Inicia sesión en Cloudflare y lo busca, en caso de que te estés conectando a uno distinto ahora.",
    "footnote": "¿No tienes la nueva contraseña o no la cambiaste tú? Elegir una nueva contraseña anula la anterior definitivamente."
  },
  "cloudflare": {
    "title": "Crea o conecta tu cuenta de Cloudflare",
    "lede": "Cloudflare alojará este nuevo Second Brain en una cuenta que tú controlas. Inicia sesión en una cuenta existente o crea una gratis en la ventana del navegador que se abrirá.",
    "signIn": "Abrir Cloudflare para crear mi Second Brain",
    "footnote": "Cloudflare gestiona el inicio de sesión. Esta app nunca ve tu contraseña de Cloudflare.",
    "waitingTitle": "Termina de iniciar sesión en tu navegador",
    "waitingLede": "Completa el inicio de sesión o creación de cuenta en la ventana del navegador. Cuando termines, regresa aquí.",
    "watchingSignIn": "Esperando a que finalice el inicio de sesión en Cloudflare",
    "pickerTitle": "Elige una cuenta de Cloudflare",
    "pickerLede": "Elige la cuenta que será propietaria y alojará este Second Brain."
  },
  "guard": {
    "existingBrainTitle": "Encontramos tu Second Brain existente",
    "existingBrainConnect": "Conectarme a él",
    "conflictTitle": "Ese nombre ya está en uso",
    "conflictChooseAnother": "Elegir otra cuenta"
  },
  "progress": {
    "title": "Creando tu Second Brain",
    "lede": "Esto suele tardar unos minutos. Mantén abierta esta ventana mientras creamos tu Second Brain; te mostraremos cada paso a medida que termine.",
    "stepSpace": "Preparando tu cuenta de Cloudflare",
    "stepMemory": "Creando el almacenamiento seguro de recuerdos",
    "stepRecall": "Preparando la búsqueda inteligente de recuerdos",
    "stepFinish": "Verificaciones finales",
    "stepInProgress": "en curso",
    "stepDone": "listo",
    "stepFailed": "falló"
  },
  "tools": {
    "title": "Conectar aplicaciones de IA",
    "lede": "Conecta las herramientas de IA que usas ahora, o salta este paso y agrégalas después. Cada app conectada usará este mismo Second Brain.",
    "autoSetup": "Agrega los detalles de conexión de esta computadora a la app automáticamente.",
    "notOnComputer": "No está instalado en esta computadora. Puedes conectarlo después desde Conexiones.",
    "doneRestart": "Listo. Reinicia la herramienta para empezar a usar tu Second Brain.",
    "cliSub": "Opcional: usa Second Brain desde tu terminal (para quienes usan herramientas de línea de comandos).",
    "setupCli": "Configurar CLI",
    "settingUp": "Configurando…",
    "cliDone": "Listo. El comando brain ya está disponible en tu terminal.",
    "installing": "Instalando…",
    "installed": "Instalado ✓",
    "reopenTerminal": "El comando brain está listo. Vuelve a abrir tu terminal si no lo reconoce aún.",
    "configSaved": "Configuración guardada ✓",
    "configSavedInstallFailed": "Tus datos de conexión se guardaron, pero el comando opcional para la terminal no se pudo instalar. Tu Second Brain sigue funcionando en la app.",
    "configSavedNoNpm": "Configuración guardada. Instala Node.js y luego ejecuta: ",
    "pasteInSettings": "Copia el enlace y pégalo en la sección de conectores dentro de la configuración.",
    "claudeCode": "Claude Code",
    "cursor": "Cursor",
    "cliTitle": "Second Brain CLI",
    "chatgpt": "ChatGPT",
    "claudeWeb": "Claude (web y escritorio)"
  },
  "details": {
    "title": "Conexiones",
    "lede": "En esta ventana conectas herramientas y aplicaciones a tu Second Brain. Tus recuerdos residen en el panel, el cual se abre en su propia ventana.",
    "notSetupTitle": "Aún no está configurado",
    "notSetupLede": "Primero termina de crear o conectar tu Second Brain. Los detalles de conexión aparecerán aquí cuando la configuración se complete.",
    "addressLabel": "Dirección de tu Second Brain",
    "addressDesc": "Tu panel web privado y el lugar donde conectas nuevas herramientas. Guárdala en un lugar seguro.",
    "mcpLabel": "Tu enlace de conexión (para herramientas de IA)",
    "mcpDesc": "Pega esto en cualquier herramienta de IA compatible con conectores MCP.",
    "passwordLabel": "Tu contraseña",
    "passwordDesc": "La clave de tu Second Brain. No se muestra aquí, pero esta computadora conserva una copia: en su almacenamiento seguro y en el archivo de configuración del comando brain si lo configuraste. Cloudflare no puede leerla de vuelta en absoluto. Si deseas una diferente, puedes establecerla ahora.",
    "passwordButton": "Cambiar mi contraseña",
    "disconnectLabel": "Desconectar tus herramientas de IA",
    "disconnectDesc": "A las herramientas de IA que iniciaron sesión a través de tu enlace de conexión se les otorgó su propio acceso individual, independiente de tu contraseña. Esto cierra todas esas sesiones a la vez. Cualquier cosa que hayas conectado pegando tu contraseña directamente no se ve afectada; cambiar tu contraseña es lo que cierra esas conexiones. Tus recuerdos y tu contraseña se mantienen intactos.",
    "disconnectButton": "Desconectar herramientas de IA…",
    "disconnectConfirmDesc": "Cada herramienta de IA que haya iniciado sesión a través de tu enlace de conexión, en esta computadora o en cualquier otra, necesitará conectarse nuevamente y te pedirá tu contraseña cuando lo hagas.",
    "disconnectConfirm": "Sí, desconectarlas todas",
    "disconnectKeep": "Mantenerlas conectadas",
    "disconnectWorking": "Desconectando…",
    "disconnectDone": "Desconectadas. Cada herramienta solicitará conectarse de nuevo la próxima vez que la uses.",
    "disconnectDoneNone": "Ninguna herramienta había iniciado sesión a través de tu enlace de conexión, así que no hubo nada que cerrar aquí. Las herramientas que usan tu contraseña no se ven afectadas; para esas, cambiar tu contraseña es lo que cierra el acceso.",
    "disconnectFailed": "No se pudieron cerrar algunas conexiones de apps de IA. Las conexiones que ya se cerraron permanecen cerradas. Intenta de nuevo para cerrar las restantes.",
    "connectToolsTitle": "Conecta tus herramientas de IA",
    "connectToolsDesc": "Las herramientas en esta computadora se conectan con un solo clic. Para cualquier otra, pega tu enlace de conexión en los ajustes de conectores de la app; te pedirá tu contraseña la primera vez.",
    "integrationsTitle": "Integraciones",
    "integrationsDesc": "Trae notas y páginas de las herramientas que ya utilizas.",
    "navConnection": "Conexión",
    "navTools": "Herramientas de IA",
    "navIntegrations": "Integraciones",
    "navComputer": "Esta computadora",
    "updateLabel": "Hay una versión más reciente de Second Brain disponible ({version})",
    "updateDesc": "Actualiza para obtener las últimas mejoras. Tus recuerdos, contraseña y herramientas conectadas se conservan.",
    "updateDescOther": "La persona que configuró este cerebro debe actualizarlo. La actualización se ejecuta en su propia cuenta de Cloudflare, por lo que no es algo que esta computadora pueda realizar. Nada de lo que has guardado se ve afectado mientras tanto.",
    "updateDescLegacy": "Este cerebro ejecuta una versión anterior que todavía no puede indicarle a esta aplicación quién eres, por lo que la actualización se ofrece a cualquiera que abra esta ventana. Solo se ejecuta en la cuenta de Cloudflare en la que se creó el cerebro. Si no es la tuya, se detendrá y te lo indicará. Al actualizar una vez, este cerebro aprenderá a responder y esta nota desaparecerá.",
    "updateButton": "Actualizar mi Second Brain",
    "allSetTitle": "Tu Second Brain está listo",
    "allSetLede": "Guarda estos dos enlaces si planeas conectar más dispositivos o aplicaciones de IA. También podrás encontrarlos después en esta app en Conexiones.",
    "allSetTeamLede": "Guarda estos dos enlaces y luego invita a tu equipo (team) desde el panel. Cada persona recibe su propio token de acceso.",
    "teamCardLabel": "El Second Brain de tu equipo",
    "teamCardBody": "Configuraste este equipo (team). Abre el panel y elige Equipo para invitar personas. Cada persona recibe un token de acceso independiente. Sus recuerdos privados se mantienen privados; los recuerdos que eligen compartir son visibles para el equipo.",
    "teamCardBodyAdmin": "Puedes invitar personas desde la sección Equipo del panel. Solo la persona que configuró originalmente este Second Brain puede cambiar su contraseña, porque se encuentra en su cuenta de Cloudflare.",
    "teamCardBodyMember": "Estás conectado como miembro del equipo (team). Tus recuerdos personales se mantienen privados. Los recuerdos que elijas compartir podrán ser consultados por todos en el equipo. Pide a un administrador del equipo un nuevo token de acceso si este deja de funcionar.",
    "openDashboard": "Abrir el panel de mi Second Brain"
  },
  "integrations": {
    "extensionTitle": "Extensión de navegador",
    "extensionSub": "Captura cualquier página o fragmento. Pega tu dirección y contraseña en su configuración.",
    "getExtension": "Obtener la extensión",
    "obsidianTitle": "Sincronización con Obsidian",
    "obsidianSub": "Mantén sincronizadas las notas de tu bóveda con tu Second Brain.",
    "openObsidian": "Abrir en Obsidian",
    "getPlugin": "Obtener el complemento",
    "connectedPlain": "Conectado.",
    "connectedTo": "Conectado a {workspace}.",
    "syncNow": "Sincronizar ahora",
    "syncing": "Sincronizando…",
    "manage": "Administrar",
    "setUp": "Configurar",
    "appsTitle": "Aplicaciones",
    "back": "Todas las integraciones",
    "categoryKnowledge": "Conocimiento",
    "categoryCalendar": "Calendarios",
    "categoryEmail": "Correo electrónico",
    "categoryOther": "Otros"
  },
  "logout": {
    "button": "Cerrar sesión en esta computadora",
    "confirm": "Sí, cerrar sesión",
    "keep": "Mantener mi sesión iniciada",
    "desc": "Podrás volver a conectarte con la dirección y contraseña, o con el token de acceso que te dieron para un cerebro de equipo."
  },
  "workerUpdate": {
    "title": "Actualiza tu Second Brain",
    "ledeWithVersion": "Una versión más reciente de tu Second Brain (versión {version}) está lista para instalarse. Tus recuerdos, contraseña y herramientas conectadas se conservan por completo. Nada se reinicia.",
    "ledeGeneric": "Una versión más reciente de tu Second Brain está lista para instalarse. Tus recuerdos, contraseña y herramientas conectadas se conservan por completo. Nada se reinicia.",
    "notice": "Iniciarás sesión en Cloudflare una vez para autorizar la actualización. Toma aproximadamente un minuto.",
    "signInUpdate": "Iniciar sesión y actualizar",
    "waitingLede": "Completa el inicio de sesión en Cloudflare en la ventana del navegador que se acaba de abrir y luego regresa aquí.",
    "updatingTitle": "Actualizando tu Second Brain",
    "updatingLede": "Esto suele tardar un minuto. Mantén abierta esta ventana mientras termina la actualización.",
    "stepMemory": "Actualizando tu almacén de recuerdos",
    "stepRecall": "Optimizando la búsqueda inteligente",
    "stepFinish": "Finalizando",
    "doneTitle": "Tu Second Brain está al día",
    "doneLede": "Todo está en la versión más reciente. Tus recuerdos, contraseña y herramientas conectadas permanecen sin cambios."
  },
  "email": {
    "subject": "Detalles de tu Second Brain",
    "bodyAddress": "Dirección de tu Second Brain (tu panel privado):",
    "bodyMcp": "Tu enlace de conexión (pégalo en herramientas de IA con soporte de conectores):"
  },
  "mascot": {
    "dismiss": "Descartar",
    "welcome": {
      "intro": "¡Hola! Soy Ridge, tu memoria adicional, a tu servicio. Elige una opción abajo para comenzar.",
      "guard": "¿Ya tienes un cerebro? Ese botón es para ti. Uno nuevo aquí podría alterar su contraseña."
    },
    "password": {
      "intro": "Al menos doce caracteres, y directo a tu gestor de contraseñas.",
      "breached": "Esa contraseña ya se filtró en internet, fácil de solucionar. Prueba otra o deja que la generemos."
    },
    "cloudflare": {
      "why": "La única cuenta real que necesitas: Cloudflare, gratuita y verdaderamente tuya.",
      "waiting": "Tómate tu tiempo en el navegador, aquí estaré cuando vuelvas.",
      "pickerWhy": "Hay varias cuentas aquí, elige con cuidado ya que todo se construirá en ella."
    },
    "progress": {
      "intro": "Construyendo tu espacio ahora, el único paso donde realmente te toca esperar."
    },
    "tools": {
      "intro": "¿Tienes Claude Code o Cursor? Con un clic quedan listos. Si no, solo es un enlace."
    },
    "details": {
      "allSetSolo": "¡Todo listo! Guarda estos dos enlaces, los encontrarás de nuevo en Conexiones.",
      "allSetTeam": "Tu cerebro de equipo está listo. Copia los enlaces e invita personas desde la pestaña Equipo cuando quieras.",
      "allSetMember": "¡Ya estás dentro! Tus recuerdos son privados hasta que decidas compartirlos."
    },
    "connect": {
      "fork": "¿Es tuyo? Inicia sesión con Cloudflare abajo y lo encontramos. ¿Te invitaron? Usa tu token."
    },
    "discover": {
      "searching": "Explorando tu cuenta de Cloudflare buscando algo con forma de cerebro."
    },
    "brainPicker": {
      "one": "Encontré uno, ¿es este? Si no, la opción manual está justo abajo.",
      "many": "Aparecieron varios, la dirección es lo que los distingue."
    },
    "unlock": {
      "hint": "Tu contraseña va aquí, o tu token de invitación si te estás uniendo a un equipo."
    },
    "manualEntry": {
      "combined": "Pega la dirección exacta. ¿Tienes token también? Va en la casilla de contraseña de abajo.",
      "insecureHttp": "Eso es http, no https: error común de dedo. Agrega la 's' y podrás continuar."
    },
    "existingTeam": {
      "repeatQuestion": "¿Ves esto de nuevo? Tal vez respondiste en otro lado y aún no llega a este cerebro."
    },
    "rotation": {
      "intro": "No se perdió nada, una nueva contraseña te devuelve el acceso enseguida. Yo guardo silencio desde aquí."
    },
    "error": {
      "provisioningHonest": "¡Ups! Se detuvo a la mitad: algunas partes pueden existir. Reintentar está bien; revisa el panel si se repite.",
      "wrongCredentialMemberAware": "¿Sin coincidencia: token viejo o un pequeño dedazo? Si usas token, no lo reinicies y pide uno a tu admin.",
      "cfSignIn": "Cloudflare dijo que no, intentemos iniciar sesión de nuevo. Nada se ha modificado aún.",
      "discoverFailed": "La búsqueda automática no encontró nada, pero la casilla manual de abajo funciona igual de bien.",
      "rotateNotSent": "Nada cambió, tu contraseña anterior sigue funcionando. Adelante, intenta de nuevo.",
      "rotateUnsure": "Se envió, pero tu cerebro no confirmó a tiempo. Guarda la contraseña mostrada, es seguro reintentar.",
      "rotateBlocked": "Una reconstrucción tiene ocupado al cerebro en este momento, dale seguimiento en Configuración avanzada.",
      "rotateLocal": "Tu cerebro ya tiene la nueva contraseña, solo falta que esta computadora se ponga al día.",
      "staleLocal": "Tu cerebro recibió una nueva contraseña en otro lugar. Todo está bien, solo ingrésala aquí también.",
      "disconnectPartial": "Algunas no se cerraron, pero las que sí permanecen cerradas. Reintentar se encarga del resto.",
      "clipboard": "No se copió al portapapeles esta vez; selecciona el texto y cópialo a mano."
    }
  }
};
