# Playwright Test Project

Este proyecto contiene pruebas automatizadas usando Playwright para el flujo de inicio de sesión de Mercado Libre.

## Requisitos Previos

- Node.js (versión 16 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Madafanes0/testPlaywright.git
cd testPlaywright
```

2. Instala las dependencias:
```bash
npm install
```

3. Instala los navegadores necesarios para Playwright:
```bash
npx playwright install
```

## Estructura del Proyecto

```
testPlaywright/
├── tests/
│   └── mercadolibre-login.spec.ts    # Tests de inicio de sesión
├── playwright.config.ts              # Configuración de Playwright
└── package.json                      # Dependencias del proyecto
```

## Ejecutar los Tests

Para ejecutar todos los tests:
```bash
npx playwright test
```

Para ejecutar los tests en modo UI:
```bash
npx playwright test --ui
```

Para ejecutar los tests en modo debug:
```bash
npx playwright test --debug
```

## Tests Incluidos

El proyecto incluye los siguientes escenarios de prueba para el inicio de sesión de Mercado Libre:

1. **Error con credenciales inválidas**
   - Verifica que se muestre un mensaje de error al ingresar un email inválido

2. **Navegación a la página de contraseña**
   - Verifica que al ingresar un email válido se redirija a la página de contraseña

3. **Persistencia del email**
   - Verifica que el email ingresado se mantenga al regresar a la página anterior

## Reportes

Después de ejecutar los tests, puedes ver los reportes generados:
```bash
npx playwright show-report
```

## Contribuir

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles. 