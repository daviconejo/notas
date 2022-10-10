package br.com.sonner.webservice.model;

import br.com.sonner.webservice.repository.ItensNotaRepository;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@Table(name = "itens_nota")
public class ItensNota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Nota nota;

    private Long numeroItem;

    @ManyToOne
    private Produto produto;

    private Integer quantidade;

    private Double valorTotal;

    public Long getId() {
        return id;
    }

    public Nota getNota() {
        return nota;
    }

    public Long getNumeroItem() {
        return numeroItem;
    }

    public Produto getProduto() {
        return produto;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public Double getValorTotal() {
        return valorTotal;
    }

    public void setNota(Nota nota) {
        this.nota = nota;
    }

    public void setNumeroItem(Long numeroItem) {
        this.numeroItem = numeroItem;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public void setValorTotal(Double valorTotal) {
        this.valorTotal = valorTotal;
    }


}
