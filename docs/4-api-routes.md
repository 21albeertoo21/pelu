Rutas de API
Endpoints Públicos
Servicios

GET /api/services - Obtener lista de servicios
GET /api/services/{id} - Obtener detalle de un servicio

Reservas

POST /api/bookings - Crear nueva reserva
GET /api/bookings/{id} - Obtener detalle de reserva
PATCH /api/bookings/{id} - Actualizar estado de reserva

Endpoints Protegidos (Admin)

POST /api/services - Crear nuevo servicio
PUT /api/services/{id} - Actualizar servicio
DELETE /api/services/{id} - Eliminar servicio
GET /api/admin/bookings - Obtener todas las reservas