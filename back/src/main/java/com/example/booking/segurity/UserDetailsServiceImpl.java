package com.example.booking.segurity;

import com.example.booking.entity.Usuario;
import com.example.booking.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private IUsuarioRepository iUsuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuario = iUsuarioRepository.findOneByEmail(email).orElseThrow(() -> new UsernameNotFoundException("No existe el usuario"));
        return new UserDetailsImpl(usuario);
    }
}
