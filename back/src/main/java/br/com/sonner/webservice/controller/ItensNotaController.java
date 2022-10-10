package br.com.sonner.webservice.controller;

import br.com.sonner.webservice.model.ItensNota;
import br.com.sonner.webservice.repository.ItensNotaRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.transaction.Transactional;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/itensNota")
@AllArgsConstructor
public class ItensNotaController {

	private final ItensNotaRepository itensNotaRepository;
	
	@GetMapping("/{id}")
	public ResponseEntity<ItensNota> listarById(@PathVariable Long id) {
		Optional<ItensNota> itensNota = itensNotaRepository.findById(id);
		return itensNota.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());

	}
	
	@GetMapping
	public List<ItensNota> listarItensNota() {

		return itensNotaRepository.findAll();
	}
	
	@PostMapping
	@Transactional
	public ResponseEntity<ItensNota> criarItensNota(@RequestBody ItensNota itensNota, UriComponentsBuilder uriBuilder) {
		
		itensNotaRepository.save(itensNota);
		
		URI uri = uriBuilder.path("/itensNota/{id}").buildAndExpand(itensNota.getId()).toUri();
		return ResponseEntity.created(uri).body(itensNota);
		
	}
	
	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity<ItensNota> atualizarItensNota(@PathVariable Long id, @RequestBody ItensNota itensNota) {
		itensNota = itensNotaRepository.save(itensNota);
		return ResponseEntity.ok(itensNota);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> removerItensNota(@PathVariable Long id) {
		Optional<ItensNota> optional = itensNotaRepository.findById(id);
		if (optional.isPresent()) {
			itensNotaRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}
		
		return ResponseEntity.notFound().build();
		
	}
	
}
