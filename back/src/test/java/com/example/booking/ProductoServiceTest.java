package com.example.booking;

import com.example.booking.DTO.CategoriaDTO;
import com.example.booking.DTO.ProductoDTO;
import com.example.booking.entity.Categoria;
import com.example.booking.service.CategoriaService;
import com.example.booking.service.ProductoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class ProductoServiceTest {

    @Autowired
    private ProductoService productoService;

    @Autowired
    private CategoriaService categoriaService;


    @Test
    public void createProductoTest() {

        //buscamos una categoria
        CategoriaDTO categoriaDTO = categoriaService.findOne(1L);

        //convertimos a categoria
        Categoria categoria = new Categoria(categoriaDTO.getIdcategorias(), categoriaDTO.getTitulo(), categoriaDTO.getDescripcion(), categoriaDTO.getUrl_imagen(), null);

        //Creamos un producto
        ProductoDTO productoDTO = new ProductoDTO("Producto 1", "ubicacion 1", "descripcion 1", "imagenPrincipal 1", null, categoria,"SI",null, null, null);
        productoService.create(productoDTO);
        assertNotNull(productoDTO);

    }

    @Test
    public void findOneProductoTest() {
        ProductoDTO productoDTO = productoService.findOne(1L);
        assertNotNull(productoDTO);
    }

    @Test
    public void findAllProductoTest() {
        Iterable<ProductoDTO> productoDTOList = productoService.findAll();
        assertNotNull(productoDTOList);
    }

    @Test
    public void updateProductoTest() {
        ProductoDTO productoDTO = productoService.findOne(1L);
        productoDTO.setTitulo("Producto 1 actualizado");
        productoService.update(productoDTO, 28L);
        assertNotNull(productoDTO);
    }

    @Test
    public void deleteProductoTest() {
        productoService.delete(28L);
    }

    @Test
    public void findRandomProductosTest() {
        Iterable<ProductoDTO> productoDTOList = productoService.findRandomProductos();
        assertNotNull(productoDTOList);
    }


}
