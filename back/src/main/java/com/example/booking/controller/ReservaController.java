package com.example.booking.controller;

import com.example.booking.DTO.ReservaDTO;
import com.example.booking.service.impl.IReservaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Reserva", description = "Reserva API")
@RestController
@RequestMapping("/reserva")
@CrossOrigin(origins = "*")
public class ReservaController {

    @Autowired
    IReservaService iReservaService;

    @Operation(summary = "Create a new reserva")
    @PostMapping("/register")
    public ResponseEntity<ReservaDTO> addReserva(@RequestBody ReservaDTO reservaDTO) {
        ReservaDTO reservaCreated = iReservaService.create(reservaDTO);
        return ResponseEntity.ok(reservaCreated);
    }

    @Operation(summary = "Get list of reservas for id producto")
    @GetMapping("/producto/{id}")
    public ResponseEntity<Iterable<ReservaDTO>> findAllReservasByProductoId(@PathVariable Long id) {
        return ResponseEntity.ok(iReservaService.findByProductoId(id));
    }
}
