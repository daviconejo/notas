package br.com.sonner.webservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.sonner.webservice.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}
