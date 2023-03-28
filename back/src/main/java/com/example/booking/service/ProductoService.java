package com.example.booking.service;

import com.example.booking.DTO.ProductoDTO;
import com.example.booking.entity.Producto;
import com.example.booking.exception.ResourceNotFoundException;
import com.example.booking.repository.IProductoRepository;
import com.example.booking.service.impl.IProductoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductoService implements IProductoService {

    @Autowired
    IProductoRepository iProductoRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public ProductoDTO create(ProductoDTO productoDTO) {
        if (productoDTO == null) {
            throw new ResourceNotFoundException("Producto", "id", productoDTO.getIdproductos());
        }

        //Si no existe la categoria no se puede crear el producto
        if (productoDTO.getCategoria() == null) {
            throw new ResourceNotFoundException("Categoria", "id", productoDTO.getCategoria().getIdcategorias());
        }

        Producto producto = mapEntity(productoDTO);
        return mapDTO(iProductoRepository.save(producto));
    }

    @Override
    public ProductoDTO findOne(Long id) {
        Producto producto = iProductoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto", "Id", id));
        return mapDTO(producto);
    }

    @Override
    public Iterable<ProductoDTO> findAll() {
        List<ProductoDTO> productoDTOList = new ArrayList<>();
        iProductoRepository.findAll().forEach(producto -> productoDTOList.add(mapDTO(producto)));
        return productoDTOList;
    }

    @Override
    public ProductoDTO update(ProductoDTO productoDTO, Long id) {
        Producto producto = iProductoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto", "Id", id));

        producto.setTitulo(productoDTO.getTitulo());
        producto.setDescripcion(productoDTO.getDescripcion());
        producto.setUbicacion(productoDTO.getUbicacion());
        producto.setImagenPrincipal(productoDTO.getImagenPrincipal());
        producto.setImagenes(productoDTO.getImagenes());
        producto.setDisponibilidad(productoDTO.getDisponibilidad());
        producto.setPoliticas(productoDTO.getPoliticas());

        return mapDTO(iProductoRepository.save(producto));
    }

    @Override
    public void delete(Long id) {

        Producto producto = iProductoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto", "Id", id));

        iProductoRepository.delete(producto);
    }

    private Producto mapEntity(ProductoDTO productoDTO) {
        return mapper.convertValue(productoDTO, Producto.class);
    }

    private ProductoDTO mapDTO(Producto producto) {
        return mapper.convertValue(producto, ProductoDTO.class);
    }

    // trae 5 productos random
    @Override
    public Iterable<ProductoDTO> findRandomProductos() {
        // trae todos los productos
        List<ProductoDTO> productoDTOList = new ArrayList<>();
        iProductoRepository.findAll().forEach(producto -> productoDTOList.add(mapDTO(producto)));

        // crea una lista de productos random
        List<ProductoDTO> productoRandomList = new ArrayList<>();
        for (int i = 0; i < 8; i++) {
            int random = (int) (Math.random() * productoDTOList.size());
            productoRandomList.add(productoDTOList.get(random));
        }
        return productoRandomList;
    }
}
