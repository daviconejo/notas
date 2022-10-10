package br.com.sonner.webservice.repository;

import br.com.sonner.webservice.model.ItensNota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItensNotaRepository extends JpaRepository<ItensNota, Long> {

    List<ItensNota> findByNotaId(Long notaId);
}