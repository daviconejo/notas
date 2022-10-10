package br.com.sonner.webservice.model;

import br.com.sonner.webservice.repository.ClienteRepository;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cliente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Long codigo;

	private String nome;

	public Long getId() {
		return id;
	}

	public Long getCodigo() { return codigo; }

	public String getNome() { return nome; }

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

}
