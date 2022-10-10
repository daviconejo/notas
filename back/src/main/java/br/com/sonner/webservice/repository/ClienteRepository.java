package br.com.sonner.webservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sonner.webservice.model.Cliente;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
