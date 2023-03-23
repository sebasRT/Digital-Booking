package com.example.booking.controller;

import com.example.booking.DTO.ReservaCompletaDTO;
import com.example.booking.DTO.ReservaDTO;
import com.example.booking.service.impl.IReservaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Reserva", description = "Reserva API")
@RestController
@RequestMapping("/reserva")
@CrossOrigin(origins = "*")

public class ReservaController {

    @Autowired
    @Qualifier("ReservationService")
    IReservaService iReservaService;

    @Operation(summary = "Get list of id reservations")
    @GetMapping("/id/{id}")
    public ResponseEntity<?> findReservationById(@PathVariable Long id) {
        ReservaDTO reservaDTO = iReservaService.findOne(id);
        if (reservaDTO != null) {
            //Si existe la categoría la devuelve
            return ResponseEntity.ok(reservaDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }

    @Operation(summary = "Get list of reservation by product")
    @GetMapping("/producto/{id}")
    public ResponseEntity<List<ReservaDTO>> listaPorProducto(@PathVariable Long id){
        List<ReservaDTO> list = iReservaService.findAllReservationsByProduct(id);
        if(list!=null){
            return ResponseEntity.ok(list);
        }else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }

    @Operation(summary = "Get list of reservation by product")
    @GetMapping("/cliente/{id}")
    public ResponseEntity<List<ReservaCompletaDTO>> listaPorCliente(@PathVariable Long id){
        List<ReservaCompletaDTO> list = iReservaService.findAllReservationsByUser(id);
        if(list!=null){
            return ResponseEntity.ok(list);
        }else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }

    @Operation(summary = "Get list of reservation")
    @GetMapping()
    public ResponseEntity<Iterable<ReservaDTO>> findAllReservation() {
        return ResponseEntity.ok(iReservaService.findAll());
    }

    @Operation(summary = "Update an existing producto")
    @PutMapping("/{id}")
    public ResponseEntity<ReservaDTO> updateReserva(@RequestBody ReservaDTO reservaDTO, @PathVariable Long id) {
        if (iReservaService.findOne(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            ReservaDTO reservaUpdated = iReservaService.update(reservaDTO, id);
            return new ResponseEntity<>(reservaUpdated, HttpStatus.OK);
        }
    }

    @Operation(summary = "Delete a reservation")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteReserva(@PathVariable Long id) {
        if (iReservaService.findOne(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            iReservaService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
