package br.com.sonner.webservice.controller;

import br.com.sonner.webservice.model.Cliente;
import br.com.sonner.webservice.repository.ClienteRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/clientes")
@AllArgsConstructor
public class ClienteController {

	private final ClienteRepository clienteRepository;

	@GetMapping
	public List<Cliente> listarClientes() {

		return clienteRepository.findAll();

	}
	
	@PostMapping
	public ResponseEntity<Cliente> criarCliente(@RequestBody Cliente cliente, UriComponentsBuilder uriBuilder) {
		clienteRepository.save(cliente);
		
		URI uri = uriBuilder.path("/clientes/{id}").buildAndExpand(cliente.getId()).toUri();
		return ResponseEntity.created(uri).body(cliente);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Cliente> atualizarCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
		return clienteRepository.findById(id)
				.map(clienteFound -> {
					clienteFound.setCodigo(cliente.getCodigo());
					clienteFound.setNome(cliente.getNome());
					Cliente updated = clienteRepository.save(clienteFound);
					return ResponseEntity.ok().body(updated);
				})
				.orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> removerCliente(@PathVariable Long id) {
		Optional<Cliente> optional = clienteRepository.findById(id);
		if (optional.isPresent()) {
			clienteRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.notFound().build();
	}
}
