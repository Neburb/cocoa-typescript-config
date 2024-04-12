
# PR Checklist

## Código

* [ ] No existe mega-funciones
* [ ] No existe funciones del lenguaje, librerías o framework que realicen la misma lógica que algunas funciones
* [ ] Las variables y métodos tienen nombres semánticos
* [ ] Las variables y métodos siguen la convención del lenguaje
* [ ] No existe código duplicado
* [ ] El código es sencillo de entender (Keep it simple)
* [ ] No existe código comentado sin razón justificada
* [ ] No existen demasiados ifs anidados (Cambiar por If -> Return)
* [ ] Check de nulls en casos posibles de nulls
* [ ] Edge cases cubiertos

## Buenas Practicas

* [ ] La clase se especializa solo en una utilidad o responsabilidad (Single Responsability Principle)
* [ ] Acceso de variables y métodos correctos. Abiertos para extensión y cerrados para modificación (Open/Close principle)
* [ ] Se depende de abstracciones, y no se depende de ninguna implementación (Liskov Substitution Principle)
* [ ] Todas las abstracciones o interfaces son sencillas y pequeñas (Interface Segregation Princpiple)
* [ ] No existen abstracciones o interfaces generales
* [ ] Todos los datos abstraibles están abstraidos (ConnectionDetails, ContactDetails, PaymentData...)
* [ ] Las funciones no modifican variables u objetos fuera de la función más de las que indican
* [ ] Todas las operaciones están separadas de los objetos (Fachadas, adaptadores, proxies...)

### Rendimiento

* [ ] No existe lógica de iniciación fuera del constructor o función inicializadora
* [ ] No existe lógica que pueda ser sencilla de cachear
* [ ] No existen bucles innecesarios
* [ ] Los bucles se rompen cuando deben
* [ ] No existen bucles que puedan reemplazarse con mapeos
* [ ] Todas las funciones tienen la mejor Big-O posible O(1 > log n > n > n^2 > n^n)

### Instrumentación

### Logs

* [ ] El código tiene logs suficientes (edge, happy path y errores)
* [ ] Existen logs para cada llamada a servicio externo
* [ ] Cada log tienen impresos los parámetros (no sensibles) de la función y el resultado
* [ ] Los logs tienen un nivel de log adecuado

### Métricas

* [ ] El código tiene métricas suficientes
* [ ] Existe métricas para errores, latencia, y acciones
* [ ] Existe métricas para cada llamada a servicio
* [ ] No existen logs que puedan ser reemplazados con métricas

## Seguridad

* [ ] Sólo los permisos necesarios son concedidos
* [ ] Evitado el acceso excesivo o el uso de *
* [ ] La información sensible está codificada o encriptada
* [ ] Los logs o métricas no envían información sensible
* [ ] Los user inputs están sanitized

## Documentación

* [ ] Métodos y clases documentadas
* [ ] Javadocs con argumentos y returns
* [ ] Cada TODO tiene un JIRA asociado
