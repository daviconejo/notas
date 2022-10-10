package br.com.sonner.webservice.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import br.com.sonner.webservice.controller.ItensNotaController;
import br.com.sonner.webservice.repository.ItensNotaRepository;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import br.com.sonner.webservice.repository.NotaRepository;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Nota {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Long numeroDaNota;

	private LocalDate data;

	@ManyToOne
	private Cliente cliente;

	@OneToMany(mappedBy = "nota", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<ItensNota> itensNota;

	public List<ItensNota> getItensNota() {
		return itensNota;
	}

	public void setItensNota(List<ItensNota> itensNota) {
		this.itensNota = itensNota;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public Long getNumeroDaNota() {
		return numeroDaNota;
	}

	public void setNumeroDaNota(Long numeroDaNota) {
		this.numeroDaNota = numeroDaNota;
	}

	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

}
