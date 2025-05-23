# HU-06 - Recuperación de Contraseña

## Descripción

**Como usuario registrado quiero poder recuperar mi contraseña si la he olvidado para volver a acceder a mi cuenta sin crear una nueva.**

**Programador:** Carlos Leal

---

## Criterios de Aceptación:

- El sistema solicita el correo electrónico asociado a la cuenta.
- Se envía un correo con una nueva contraseña generada automáticamente.
- La nueva contraseña se almacena encriptada en la base de datos.
- El usuario puede iniciar sesión con la nueva contraseña.
- Se implementan medidas de seguridad para evitar abusos del sistema.

---

## Definición de Listo (DoR - Definition of Ready):

- Se ha definido el proceso de recuperación de contraseña.
- Se ha establecido el método para generar nuevas contraseñas.
- Se ha configurado el sistema de envío de correos electrónicos.
- Se han definido los mensajes y notificaciones para el usuario.

---

## Definición de Hecho (DoD - Definition of Done):

- El sistema solicita y valida correctamente el correo electrónico del usuario.
- Los correos con la nueva contraseña se envían correctamente.
- Las nuevas contraseñas se encriptan antes de almacenarse en la base de datos.
- Las pruebas de seguridad y funcionalidad han sido ejecutadas exitosamente.
- El proceso es intuitivo para el usuario.

---

## Prioridad y Estimación:

- **Prioridad:** Media  
- **Estimación:** 2 días

---

## Código que implementa la recuperación de la contraseña:

### Backend (Java Spring Boot):

```java
@PostMapping("/recuperar")
public ResponseEntity<?> recuperarContrasena(@RequestBody Map<String, String> request) {
    String correo = request.get("correo");

    if (correo == null || correo.isEmpty()) {
        System.out.println("ERROR: No se ingresó un correo.");
        return ResponseEntity.badRequest().body("El correo es obligatorio");
    }

    System.out.println("Intentando recuperar contraseña para: " + correo);

    boolean enviado = userService.recuperarContrasenia(correo);
    System.out.println("Resultado de recuperar contraseña: " + enviado);

    if (enviado) {
        return ResponseEntity.ok("Se ha enviado la nueva contraseña al correo.");
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El correo no está registrado.");
    }
}

---

## Frontend (Angular):

### `inicio-sesion.component.html`:

```html
<!-- Botón para recuperar contraseña -->
<button class="btn btn-link mt-2" (click)="abrirRecuperacion()">¿Olvidaste tu contraseña?</button>


// Método para abrir la alerta de recuperación de contraseña
abrirRecuperacion() {
  Swal.fire({
    title: 'Recuperar Contraseña',
    input: 'email',
    inputLabel: 'Ingresa tu correo electrónico',
    inputPlaceholder: 'correo@example.com',
    showCancelButton: true,
    confirmButtonText: 'Recuperar',
    preConfirm: (correo) => {
      if (!correo) {
        Swal.showValidationMessage('El correo es obligatorio');
        return false;
      }
      return correo;
    }
  }).then((result) => {
    if (result.isConfirmed) {
      this.lavaderoService.recuperarContrasena({ correo: result.value }).subscribe({
        next: (response: string) => {
          Swal.fire('Éxito', response, 'success');
        },
        error: (err) => {
          console.error('Error en recuperación:', err);

          let mensajeError = 'No se pudo recuperar la contraseña. Inténtalo nuevamente.';
          if (err.status === 404) {
            mensajeError = 'El correo ingresado no está registrado.';
          } else if (err.status === 500) {
            mensajeError = 'Hubo un error en el servidor. Inténtalo más tarde.';
          }

          Swal.fire({
            title: 'Error',
            text: mensajeError,
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo'
          });
        }
      });
    }
  });
}

// Método para enviar la solicitud de recuperación de contraseña al backend
recuperarContrasena(correo: string) {
  this.lavaderoService.recuperarContrasena({ correo }).subscribe({
    next: () => {
      Swal.fire({
        title: 'Éxito',
        text: 'Se ha enviado una nueva contraseña a tu correo.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    },
    error: () => {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo recuperar la contraseña. Verifica el correo ingresado.',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      });
    }
  });
}
