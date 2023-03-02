package com.example.booking.controller;


import com.example.booking.DTO.ProductoDTO;
import com.example.booking.service.impl.IProductoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Producto", description = "Producto API")
@RestController
@RequestMapping("/producto")
public class ProductoController {

    @Autowired
    IProductoService iProductoService;

    @Operation(summary = "Get list of id productos")
    @GetMapping("/id/{id}")
    public ResponseEntity<?> findProductoById(@PathVariable Long id) {
        ProductoDTO productoDTO = iProductoService.findOne(id);
        return ResponseEntity.ok(productoDTO);
    }

}
