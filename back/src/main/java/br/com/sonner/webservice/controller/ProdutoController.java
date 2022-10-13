package br.com.sonner.webservice.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.sonner.webservice.model.Produto;
import br.com.sonner.webservice.repository.ProdutoRepository;

@RestController
@RequestMapping("/api/produtos")
@AllArgsConstructor
public class ProdutoController {
	

	private final ProdutoRepository produtoRepository;
	
	@GetMapping
	public List<Produto> listarProdutos() {
		return produtoRepository.findAll();
	}
	
	@PostMapping
	public ResponseEntity<Produto> criarProduto(@RequestBody Produto produto, UriComponentsBuilder uriBuilder) {
		produtoRepository.save(produto);
		
		URI uri = uriBuilder.path("/produtos/{id}").buildAndExpand(produto.getId()).toUri();
		return ResponseEntity.created(uri).body(produto);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Produto> atualizarProduto(@RequestBody Produto produto) {

		produto = produtoRepository.save(produto);
		return ResponseEntity.ok().body(produto);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> removerProduto(@PathVariable Long id) {
		Optional<Produto> optional = produtoRepository.findById(id);
		if (optional.isPresent()) {
			produtoRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.notFound().build();
	}

}
