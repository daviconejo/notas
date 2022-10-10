package br.com.sonner.webservice.model;

import br.com.sonner.webservice.repository.ProdutoRepository;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Produtos")
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Long codigo;

	private String descricao;

	private Double valorUnidade;

	public Long getId() {
		return id;
	}

	public Long getCodigo() {
		return codigo;
	}

	public String getDescricao() {
		return descricao;
	}

	public Double getValorUnidade() {
		return valorUnidade;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public void setValorUnidade(Double valorUnidade) {
		this.valorUnidade = valorUnidade;
	}

	public Produto atualizar(Long id, ProdutoRepository repository) {
		Produto produto = repository.getReferenceById(id);

		produto.setCodigo(this.codigo);
		produto.setDescricao(this.descricao);
		produto.setValorUnidade(this.valorUnidade);

		return produto;
	}

}
