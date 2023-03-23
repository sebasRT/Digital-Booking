package com.example.booking.service;

import com.example.booking.DTO.ClienteDTO;
import com.example.booking.DTO.ProductoDTO;
import com.example.booking.DTO.ReservaCompletaDTO;
import com.example.booking.entity.Cliente;
import com.example.booking.entity.Producto;
import com.example.booking.entity.Reserva;
import com.example.booking.exception.ResourceNotFoundException;
import org.modelmapper.ModelMapper;
import com.example.booking.DTO.ReservaDTO;
import com.example.booking.repository.IReservaRepository;
import com.example.booking.service.impl.IReservaService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@Service
public class ReservaService implements IReservaService {
    @Autowired
    IReservaRepository iReservaRepository;
    @Autowired
    ObjectMapper mapper;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    ProductoService serviceProducto;
    @Autowired
    ClienteService serviceCliente;
    @Override
    public ReservaDTO create(ReservaDTO reservaDTO) {
        if (reservaDTO == null) {
            throw new ResourceNotFoundException("Reserva", "id", reservaDTO.getId());
        }

        Reserva reserva = mapEntity(reservaDTO);
        return mapDTO(iReservaRepository.save(reserva));
    }
    @Override
    public ReservaDTO save(ReservaDTO reservaDTO) {
        ProductoDTO productoDTO = serviceProducto.findOne(reservaDTO.getProducto().getIdproductos());
        ClienteDTO clienteDTO = serviceCliente.findOne(reservaDTO.getClienteDTO().getIdclientes());
        if(productoDTO!=null&&clienteDTO!=null){
            Reserva reserva = mapper.convertValue(reservaDTO,Reserva.class);
            reserva.setHoraComienzo(mapper.convertValue(reserva.getHoraComienzo(), Date.class));
            reserva.setProducto(mapper.convertValue(productoDTO, Producto.class));
            reserva.setCliente(mapper.convertValue(clienteDTO, Cliente.class));
            ReservaDTO reservaCreated = mapper.convertValue(iReservaRepository.save(reserva),ReservaDTO.class);
            reservaCreated.setProducto(mapper.convertValue(productoDTO, ProductoDTO.class));
            reservaCreated.setClienteDTO(mapper.convertValue(clienteDTO,ClienteDTO.class));
            return reservaCreated;
        }else {
            return null;
        }
    }
    private Reserva mapEntity(ReservaDTO reservaDTO) {
        return mapper.convertValue(reservaDTO, Reserva.class);
    }

    private ReservaDTO mapDTO(Reserva reserva) {
        return mapper.convertValue(reserva, ReservaDTO.class);
    }

    @Override
    public ReservaDTO findOne(Long id) {
        Reserva reserva = iReservaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reserca", "Id", id));
        return mapDTO(reserva);
    }

    @Override
    public List<ReservaDTO> findAll() {
        Collection<Reserva> reserva = iReservaRepository.findAll();
        return modelMapper.map(reserva,new TypeToken<List<ReservaDTO>>() {}.getType());
    }

    @Override
    public ReservaDTO update(ReservaDTO reservaDTO, Long id) {
        if(findOne(reservaDTO.getId())!=null){
            return save(reservaDTO);
        }
        return null;
    }

    @Override
    public void delete(Long id) {
        if(findOne(id)!=null){
            iReservaRepository.deleteById(id);
        }
    }
    @Override
    public List<ReservaDTO> findAllReservationsByProduct(Long producto_id){
        if (serviceProducto.findOne(producto_id)!=null){
            Collection<Reserva> reservaList = iReservaRepository.findAllReservationsByProduct(producto_id);
            return modelMapper.map(reservaList,new TypeToken<List<ReservaDTO>>() {}.getType());
        }else {
            return null;
        }
    }
    @Override
    public List<ReservaCompletaDTO> findAllReservationsByUser(Long cliente_id){

        Collection<Reserva> reservaList = iReservaRepository.findAllReservationsByUser(cliente_id);

        if (reservaList != null){
            return modelMapper.map(reservaList,new TypeToken<List<ReservaCompletaDTO>>() {}.getType());
        }else {
            return null;
        }
    }
}
