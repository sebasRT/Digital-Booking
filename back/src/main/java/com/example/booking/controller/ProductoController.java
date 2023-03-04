package com.example.booking.controller;


import com.example.booking.DTO.ProductoDTO;
import com.example.booking.service.impl.IProductoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @Operation(summary = "Create a new producto")
    @PostMapping("/register")
    public ResponseEntity<ProductoDTO> addProducto(@RequestBody ProductoDTO productoDTO) {
        ProductoDTO productoCreated = iProductoService.create(productoDTO);
        return new ResponseEntity<>(productoCreated, HttpStatus.OK);
    }

    @Operation(summary = "Get list of productos")
    @GetMapping()
    public ResponseEntity<Iterable<ProductoDTO>> findAllProductos() {
        return ResponseEntity.ok(iProductoService.findAll());
    }

    @Operation(summary = "Update an existing producto")
    @PutMapping("/{id}")
    public ResponseEntity<ProductoDTO> updateProducto(@RequestBody ProductoDTO productoDTO, @PathVariable Long id) {
        if (iProductoService.findOne(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            ProductoDTO productoUpdated = iProductoService.update(productoDTO, id);
            return new ResponseEntity<>(productoUpdated, HttpStatus.OK);
        }
    }

    @Operation(summary = "Delete a producto")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProducto(@PathVariable Long id) {
        if (iProductoService.findOne(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            iProductoService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

}
