import React from "react";

function HomeHook() {
  return (
    <div className="container text-center">
      <h2>Tabla de hooks de React</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Link</th>
            <th>Tipo</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>useState</td>
            <td><a href="UseState">UseState</a></td>
            <td>Estado</td>
            <td>Permite manejar estados locales en componentes.</td>
          </tr>
          <tr>
            <td>useNavigate</td>
            <td><a href="UseNavigate">UseNavigate</a></td>
            <td>Navegación</td>
            <td>Permite navegar programáticamente entre rutas.</td>
          </tr>
          <tr>
            <td>useDebugValue</td>
            <td><a href="useDebug">useDebug</a></td>
            <td>Depuración</td>
            <td>Muestra información útil para depuración en React DevTools.</td>
          </tr>
          <tr>
            <td>useEffect</td>
            <td><a href="useEffect">useEffect</a></td>
            <td>Efecto</td>
            <td>Permite ejecutar efectos secundarios en componentes.</td>
          </tr>
          <tr>
            <td>useRef</td>
            <td><a href="useRef">useRef</a></td>
            <td>Referencia</td>
            <td>Permite crear referencias mutables para elementos o valores.</td>
          </tr>
          <tr>
            <td>useCallback</td>
            <td><a href="useCallback">useCallback</a></td>
            <td>Memorización</td>
            <td>Memoriza funciones para evitar renders innecesarios.</td>
          </tr>
          <tr>
            <td>useContext</td>
            <td><a href="useContext">useContext</a></td>
            <td>Contexto</td>
            <td>Accede al valor de un contexto en cualquier componente.</td>
          </tr>
          <tr>
            <td>useReducer</td>
            <td><a href="useReducer">useReducer</a></td>
            <td>Estado</td>
            <td>Maneja estados complejos con funciones reductoras.</td>
          </tr>
          <tr>
            <td>useMemo</td>
            <td><a href="useMemo">useMemo</a></td>
            <td>Memorización</td>
            <td>Memoriza valores calculados para optimizar el rendimiento.</td>
          </tr>
          <tr>
            <td>useId</td>
            <td><a href="useId">useId</a></td>
            <td>Identificador</td>
            <td>Genera identificadores únicos y estables para elementos.</td>
          </tr>
          <tr>
            <td>useOptimistic</td>
            <td><a href="useOptimistic">useOptimistic</a></td>
            <td>Estado</td>
            <td>Permite mostrar actualizaciones optimistas en la UI.</td>
          </tr>
          <tr>
            <td>useLayoutEffect</td>
            <td><a href="useLayoutEffect">useLayoutEffect</a></td>
            <td>Efecto de layout</td>
            <td>Ejecuta efectos después del render pero antes de pintar.</td>
          </tr>
          <tr>
            <td>useTransition</td>
            <td><a href="useTransition">useTransition</a></td>
            <td>Transición</td>
            <td>Permite manejar actualizaciones de estado transitorias.</td>
          </tr>
          <tr>
            <td>useActionState</td>
            <td><a href="useActionState">useActionState</a></td>
            <td>Estado</td>
            <td>Maneja el estado de acciones asíncronas.</td>
          </tr>
          <tr>
            <td>useSyncExternalStore</td>
            <td><a href="useSyncExternalStore">useSyncExternalStore</a></td>
            <td>Sincronización</td>
            <td>Sincroniza el estado con fuentes externas.</td>
          </tr>
          <tr>
            <td>useImperativeHandle</td>
            <td><a href="useImperativeHandle">useImperativeHandle</a></td>
            <td>Referencia</td>
            <td>Personaliza los valores expuestos por refs.</td>
          </tr>
          <tr>
            <td>useInsertionEffect</td>
            <td><a href="useInsertionEffect">useInsertionEffect</a></td>
            <td>Efecto de inserción</td>
            <td>Inserta estilos CSS antes de que se renderice el DOM.</td>
          </tr>
          <tr>
            <td>use</td>
            <td><a href="useUse">useUse</a></td>
            <td>Recursos</td>
            <td>Permite usar promesas y recursos directamente en componentes.</td>
          </tr>
          <tr>
            <td>useDeferredValue</td>
            <td><a href="useDeferredValue">useDeferredValue</a></td>
            <td>Estado diferido</td>
            <td>Retrasa el valor de una actualización para mejorar la experiencia.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HomeHook;
