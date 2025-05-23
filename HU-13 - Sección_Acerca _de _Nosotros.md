# Historia y Valores del Lavadero

## Historia de Usuario

**Como** usuario del sistema  
**quiero** poder acceder a una sección con información sobre la empresa  
**para** conocer más sobre el lavadero, su historia y valores.

**Programador:** Carlos Leal

---

## 🧪 Criterios de Aceptación

- La sección muestra información detallada sobre la empresa.
- Se incluye información relevante como historia, misión, visión y valores.
- El diseño es coherente con la imagen corporativa.
- La información es clara y está bien estructurada.
- La página es accesible desde el menú principal.

---

## ✅ Definición de Listo (DoR - Definition of Ready)

- Se cuenta con el contenido que debe incluirse en esta sección.
- Se ha definido la estructura para presentar la información.
- Se ha diseñado la interfaz para esta sección.
- Se ha establecido la ubicación de acceso a esta sección.

---

## ✅ Definición de Hecho (DoD - Definition of Done)

- La sección "Acerca de Nosotros" muestra correctamente toda la información.
- La navegación a esta sección es intuitiva y accesible.
- El diseño es coherente con el resto del sitio.
- La información está bien estructurada y es fácil de leer.
- El diseño es responsivo y se adapta a diferentes dispositivos.

---

## 🔧 Prioridad y Estimación

- **Prioridad:** Baja  
- **Estimación:** 2 días

---

## 🧩 Implementación Frontend

### `acercadenosotros.component.html`

```html
<ion-app>
    <ion-header>
        <app-navbar></app-navbar>
    </ion-header>

    <ion-content fullscreen class="ion-padding">
        <ion-grid>
            <ion-row>
                <ion-col size="12" size-md="3">
                </ion-col>

                <ion-col size="12" size-md="9">
                    <ion-text class="ion-text-center">
                        <h1>{{ titulo }}</h1>
                    </ion-text>

                    <section class="ion-margin-top ion-margin-bottom">
                        <ion-text>
                            <h2>¿Quiénes somos?</h2>
                            <p>{{ descripcion }}</p>
                        </ion-text>
                    </section>

                    <section class="ion-margin-top ion-margin-bottom">
                        <ion-text>
                            <h2>Misión</h2>
                            <p>{{ mision }}</p>
                        </ion-text>
                    </section>

                    <section class="ion-margin-top ion-margin-bottom">
                        <ion-text>
                            <h2>Visión</h2>
                            <p>{{ vision }}</p>
                        </ion-text>
                    </section>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
</ion-app>

```

### `acercadenosotros.component.ts`


```javascript

    import { Component } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-acercadenosotros',
  templateUrl: './acercadenosotros.component.html',
  styleUrls: ['./acercadenosotros.component.scss'],
  standalone: false,
})
export class AcercadenosotrosComponent {
  titulo = 'Lavadero Luxury';
  descripcion = 'En Lavadero Luxury nos especializamos en el cuidado integral de tu vehículo. Ofrecemos un servicio de limpieza y mantenimiento detallado para automóviles, motos y buses, garantizando excelencia y satisfacción.';
  mision = 'Brindar un servicio de lavado de vehículos con altos estándares de calidad, eficiencia y atención personalizada, garantizando la satisfacción total de nuestros clientes.';
  vision = 'Ser reconocidos como el mejor lavadero de vehículos a nivel regional, destacando por la excelencia en el servicio, innovación tecnológica y compromiso con el medio ambiente.';
}

```
