package com.example.booking.service;

import com.example.booking.DTO.ClienteDTO;
import com.example.booking.entity.Cliente;
import com.example.booking.exception.ResourceNotFoundException;
import com.example.booking.repository.IClienteRepository;
import com.example.booking.service.impl.IClienteService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClienteService implements IClienteService {
    @Autowired
    IClienteRepository iClienteRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public ClienteDTO create(ClienteDTO clienteDTO) {
        if (clienteDTO == null) {
            throw new ResourceNotFoundException("Cliente", "id", clienteDTO.getIdclientes());
        }

        Cliente cliente = mapEntity(clienteDTO);
        return mapDTO(iClienteRepository.save(cliente));
    }

    @Override
    public ClienteDTO findOne(Long id) {
        Cliente cliente = iClienteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente", "Id", id));
        return mapDTO(cliente);
    }

    @Override
    public Iterable<ClienteDTO> findAll() {
        List<ClienteDTO> clienteDTOList = new ArrayList<>();
        iClienteRepository.findAll().forEach(cliente -> clienteDTOList.add(mapDTO(cliente)));
        return clienteDTOList;
    }

    @Override
    public ClienteDTO update(ClienteDTO clienteDTO, Long id) {
        Cliente cliente = iClienteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente", "Id", id));

        cliente.setNombre(clienteDTO.getNombre());
        cliente.setApellido(clienteDTO.getApellido());
        cliente.setEmail(clienteDTO.getEmail());
        cliente.setContrasena(clienteDTO.getContrasena());

        return mapDTO(iClienteRepository.save(cliente));
    }

    @Override
    public void delete(Long id) {

        Cliente cliente = iClienteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente", "Id", id));

        iClienteRepository.delete(cliente);
    }

    private Cliente mapEntity(ClienteDTO clienteDTO) {
        return mapper.convertValue(clienteDTO, Cliente.class);
    }

    private ClienteDTO mapDTO(Cliente cliente) {
        return mapper.convertValue(cliente, ClienteDTO.class);
    }

}
