package br.com.sonner.webservice.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

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

import br.com.sonner.webservice.model.ItensNota;
import br.com.sonner.webservice.model.Nota;
import br.com.sonner.webservice.repository.NotaRepository;

@RestController
@RequestMapping("/api/notas")
@AllArgsConstructor
public class NotaController {

	private final NotaRepository notaRepository;

	@GetMapping("/{id}")
	public ResponseEntity<Nota> listarById(@PathVariable Long id) {
		Optional<Nota> nota = notaRepository.findById(id);
		return nota.map(ResponseEntity::ok)
				.orElseGet(() -> ResponseEntity.notFound().build());
	}

	@GetMapping
	public List<Nota> listarNotas() {

		return notaRepository.findAll();

	}
	
	@PostMapping
	@Transactional
	public ResponseEntity<Nota> criarNota(@RequestBody @Valid Nota nota, UriComponentsBuilder uriBuilder) {

		for (ItensNota item : nota.getItensNota()) {
			item.setNota(nota);
		}
		notaRepository.save(nota);
		
		URI uri = uriBuilder.path("/notas/{id}").buildAndExpand(nota.getId()).toUri();
		return ResponseEntity.created(uri).body(nota);
	}
	
	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity<Nota> atualizarNota(@PathVariable Long id, @RequestBody Nota nota) {

		nota = notaRepository.save(nota);
		return ResponseEntity.ok().body(nota);

	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> removerNota(@PathVariable Long id) {
		Optional<Nota> optional = notaRepository.findById(id);
		if (optional.isPresent()) {
			notaRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}
		
		return ResponseEntity.notFound().build();
	}

}
