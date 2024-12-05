Esquema de la Base de Datos
Modelos Principales

Service
model Service {
  id          String   @id @default(cuid())
  name        String
  description String?
  duration    Int      // en minutos
  price       Decimal
  bookings    Booking[]
}

Booking
model Booking {
  id        String   @id @default(cuid())
  userId    String
  serviceId String
  date      DateTime
  status    Status   @default(PENDING)
  user      User     @relation(fields: [userId], references: [id])
  service   Service  @relation(fields: [serviceId], references: [id])
}