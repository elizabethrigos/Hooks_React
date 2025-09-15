# Tabla de Hooks de React

| Nombre              | Tipo                 | Descripción                                                                |
|---------------------|----------------------|----------------------------------------------------------------------------|
| useState            | Estado               | Permite manejar estados locales en componentes.                            |
| useNavigate         | Navegación           | Permite navegar programáticamente entre rutas.                             |
| useDebugValue       | Depuración           | Muestra información útil para depuración en React DevTools.                |
| useEffect           | Efecto               | Permite ejecutar efectos secundarios en componentes.                       |
| useRef              | Referencia           | Permite crear referencias mutables para elementos o valores.               |
| useCallback         | Memorización         | Memoriza funciones para evitar renders innecesarios.                       |
| useContext          | Contexto             | Accede al valor de un contexto en cualquier componente.                    |
| useReducer          | Estado               | Maneja estados complejos con funciones reductor as.                        |
| useMemo             | Memorización         | Memoriza valores calculados para optimizar el rendimiento.                 |
| useId               | Identificador        | Genera identificadores únicos y estables para elementos.                   |
| useOptimistic       | Estado               | Permite mostrar actualizaciones optimistas en la UI.                       |
| useLayoutEffect     | Efecto de layout     | Ejecuta efectos después del render pero antes de pintar.                   |
| useTransition       | Transición           | Permite manejar actualizaciones de estado transitorias.                    |
| useActionState      | Estado               | Maneja el estado de acciones asíncronas.                                   |
| useSyncExternalStore| Sincronización       | Sincroniza el estado con fuentes externas.                                 |
| useImperativeHandle | Referencia           | Personaliza los valores expuestos por refs.                                |
| useInsertionEffect  | Efecto de inserción  | Inserta estilos CSS antes de que se renderice el DOM.                      |
| useUse              | Recursos             | Permite usar promesas y recursos directamente en componentes.              |
| useDeferredValue    | Estado diferido      | Retrasa el valor de una actualización para mejorar la experiencia.         |


Elizabeth Trigos Guerrero:

HOOK USE ACTION STATE: Actualiza el valor del contador cada vez que se envía el formulario con el botón “incrementar”. el formAction ejecuta la función increment, que incrementa 1 al contador

HOOK USE CONTEXT: Se guarda un useContext llamado ThemeContext en una variable theme, con ThemeContext.Provider se le da acceso a la variable la cual cambiará a modo “light” o “dark” segun el botón que se presione

HOOK USE DEBUG: Se usa la función de useDebug para ver el estado del Hook en este caso el useCustomHook si está activo o no

HOOK USE MEMO: El useMemo memoriza el resultado de la función filterTodos que contiene los valores de la lista tab que se filtran por medio del tab y este filtro queda guardado para mostrar los valores según el filtro cada que se cambie de pestaña (todos, activos y completados) 

HOOK USE REDUCER: Usa una función que cambia el estado de la variable “age” al presionar los botones "incremented_age" la incrementa en 1 y si es "decremented_age" le disminuye 1.

HOOK USE SYNC EXTERNAL STORE: Se crea una store llamada “themestore” con temas “light” y “dark”, el UseSyncExternalStore toma su estado y según este cambia el tema actual por el otro.

HOOK USE TRANSITION: Simula un envío que tarda 1.5 segundos en completarse mientras desactiva el boton porque la transición está pendiente (isPending)


Brian Matheo Alvarez Pacheco:

HOOK USE DEFERRED VALUE: Haciendo uso de una constante para mostrar álbumes y con DeferredValue se genera una búsqueda automática al escribir el nombre del álbum.

HOOK USE CALLBACK: Muestra un contador y un botón, usando una función generada por CallBack esta aumenta en 1 el contador.

HOOK USE EFFECT: Al iniciar la página el hook UseEffect muestra un mensaje en la consola.

HOOK USE ID: Se usa el Hook UseId para crear identificadores únicos, y atributos como aria-describedby para contraseñas únicas, cada uno de ellos usando un ID único con UseId.

HOOK USE IMPERATIVE: Usando funciones de UseImperativeHandle como Focus y Clear para personalizar un input.

HOOK USE INSERTION EFFECT: Haciendo uso de estilos de css y el hook InsertionEffect el texto escrito en el input se refleja en un div.

HOOK USE LAYOUT EFFECT: Utilizando el hook LayoutEffect toma el valor que es ingresado el usuario para modificar el padding, y con este mostrar la altura del div posicionado debajo.

HOOK USE OPTIMISTIC: Simulando hook UseOptimistic y escribir en el input, este genera el texto y lo guarda antes de que termine el proceso de guardado.

HOOK USE REF: Creando una variable llamada ref que es int, sumará en 1 cada que se seleccione el botón y usando UseRef mandará una alerta.

HOOK USE USE: Usando el hook Use se genera una promesa, luego con suspense se genera un tiempo de espera hasta que se cumpla la promesa, para que finalmente devuelva el valor resuelto.
 
