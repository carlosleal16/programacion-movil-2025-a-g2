# 🧾 HU-02: Definir el Diseño del Negocio - Lavadero Luxury

## 1. Introducción

Para lograr una identidad visual coherente en la aplicación **Lavadero Luxury**, es fundamental establecer una guía de estilos que unifique los elementos visuales de la interfaz. Este documento define la **paleta de colores**, **tipografía**, **iconografía** y el **diseño general de las pantallas clave**. 

El objetivo es ofrecer una experiencia de usuario clara, profesional y enfocada en la comodidad del cliente para registrar reservas y gestionar sus vehículos de forma eficiente.

---

## 2. Paleta de Colores

La estética de Lavadero Luxury evoca limpieza, confianza y sofisticación. Por ello, se usa una combinación moderna de tonos neutros con acentos elegantes.

### 🎨 Colores principales:
- 🔵 **Azul oscuro** `#007bff` → Botones principales e interacciones importantes.
- 🔵 **Azul más oscuro** `#0069d9` → Hover y estados activos.
- ⚪ **Blanco** `#FFFFFF` → Fondos principales y formularios.
- ⚫ **Negro** `#000000` → Textos destacados y títulos.

### 🎨 Colores secundarios:
- 🟠 **Naranja dorado** `#EBA845` → Alertas, advertencias y acentos en tarjetas.
- 🟣 **Gris oscuro** `#333333` → Etiquetas de formularios y subtítulos.

---

## 3. Tipografía

Se emplean fuentes modernas y accesibles para reforzar la claridad del contenido y la jerarquía visual.

- **Header Principal (30px)** – *Fuente:* Rubik Bold – Usado en títulos como “Registrar Reserva”.
- **Subtítulo (24px)** – *Fuente:* Rubik Bold – Para secciones importantes.
- **Texto destacado (36px)** – *Fuente:* Medula One – Para mensajes clave o elementos llamativos.
- **Texto regular (16px)** – *Fuente:* Cantarell Regular – Usado en formularios y cuerpo del contenido.

---

## 4. Iconografía

Se utilizan íconos representativos para mejorar la interacción del usuario en cada sección de la aplicación.

### 🔐 Autenticación
- 👤 **Usuario** – Para campos de correo electrónico.
- 🔒 **Candado** – Para contraseñas.

### 🧽 Reservas y Vehículos
- 🚗 **Vehículo** – Para seleccionar un automóvil.
- 📅 **Calendario** – Para la fecha de reserva.
- 🧼 **Espuma/servicio** – Para tipo de servicio.

### ⚙️ Acciones
- ➕ **Agregar** – Registrar nueva reserva.
- ✅ **Confirmar** – Finalizar factura.
- 🔄 **Actualizar** – Cambiar detalles de reserva.

---

## 5. Descripción de Pantallas

### 🏠 Pantalla de Inicio de Sesión
- Imagen superior con el logo de Lavadero Luxury.
- Formulario centrado con fondo blanco y bordes redondeados.
- Iconos de usuario y candado en los campos.
- Botón oscuro (negro o azul oscuro) de "Ingresar".
- Enlace para recuperar contraseña y registrar nueva cuenta.

### 📝 Pantalla de Registro de Reserva
- Título centrado: “Registrar Reserva”.
- Selectores desplegables para elegir vehículo y tipo de servicio.
- Campo de fecha con selector tipo calendario.
- Botón azul principal para registrar.
- Al registrar, se muestra un resumen con ID, fecha, servicio y botones de selección de método de pago.

### 💳 Pantalla de Métodos de Pago
- Resumen de reserva dentro de una tarjeta informativa (`alert-info`).
- Botones divididos en 3 opciones: Tarjeta, Transferencia (PayPal) y Efectivo.
- Diseño limpio, con íconos posibles como 💳, 💸 y 🏦.

### 🧾 Pantalla de Factura Final
- Tarjeta verde (`alert-success`) con todos los datos de la reserva.
- Datos clave: número de reserva, placa, fecha, servicio, método de pago y estado.
- Botón para iniciar una nueva reserva.
