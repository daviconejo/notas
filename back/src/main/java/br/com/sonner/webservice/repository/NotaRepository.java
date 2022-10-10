package br.com.sonner.webservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sonner.webservice.model.Nota;
import org.springframework.stereotype.Repository;

@Repository
public interface NotaRepository extends JpaRepository<Nota, Long>{

}
