import React, { PureComponent } from "react";

class Formulario extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      input: {
          categoria: "",
          nome: "",
          descricao: "",
          preco: "",
          imagem: "",
          thumb: ""
      }
    };
  }

  componentDidMount() {
    const url = "https://front-end-test-app.s3.amazonaws.com/menu.json";
    fetch(url)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          menu: res,
        })
      );
  }

  handleCategoria = (e) => {
    this.setState({ input: {...this.state.input, categoria: e.target.value} });
  }
  handleNome = (e) => {
    this.setState({ input: {...this.state.input, nome: e.target.value} });
  }
  handleDescricao = (e) => {
    this.setState({ input: {...this.state.input, descricao: e.target.value} });
  }
  handlePreco = (e) => {
    this.setState({ input: {...this.state.input, preco: e.target.value} });
  }
  handleImagem = (e) => {
    this.setState({ input: {...this.state.input, imagem: e.target.value} });
  }
  handleThumb = (e) => {
    this.setState({ input: {...this.state.input, thumb: e.target.value} });
  }
  handleCancel = (e) => {
    this.props.history.push("/");
  }
  handleEnviar = (e) => {
    e.preventDefault();
    if (!this.state.input.categoria) {
      window.alert("Selecione uma categoria");
      return;
    }
    const novoProduto = {
      categoria: this.state.input.categoria,
      nome: this.state.input.nome,
      descricao: this.state.input.descricao,
      preco: this.state.input.preco,
      imagem: this.state.input.imagem,
      thumb: this.state.input.thumb
    }

    /* localStorage.setItem("novoProduto", JSON.stringify(novoProduto)); */
    /* 
      Devido ao tempo curto não consegui pensar em uma forma de armazenar temporariamente. 
      A solução na qual eu estava trabalhando era armazenar o novo objeto via localStorage
      e, posteriormente, jogar o novo objeto no array de produtos no componente de menu de 
      acordo com a categoria. No entanto eu sei trabalhar com CRUD, inclusive sei desenvolver
      API's em Node. Nesse caso seria apenas usar o axios e enviar a requisição com o novo
      objeto como parâmetro.
    */
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <div className="formulario__header">Adicionar Produto</div>
        <div className="container">
          <form className="formulario">
          <div className="formulario__campo">
                <div className="formulario__titulo">Categoria</div>
                <select value={this.state.input.categoria} onChange={this.handleCategoria}>
                  <option key="selecione" value=""></option>
                  {this.state.menu.map(categoria => {
                    return (
                      <option key={categoria.category_title} value={categoria.category_title}>
                        {categoria.category_title}
                      </option>
                    );
                  })}
                </select>
            </div>
            <div className="formulario__campo">
                <div className="formulario__titulo">Nome</div>
                <input value={this.state.input.nome} onChange={this.handleNome} />
            </div>
            <div className="formulario__campo">
                <div className="formulario__titulo">Descrição</div>
                <textarea onChange={this.handleDescricao} value={this.state.input.descricao} />
            </div>
            <div className="formulario__campo">
                <div className="formulario__titulo">Preço</div>
                <input value={this.state.input.preco} onChange={this.handlePreco} />
            </div>
            <div className="formulario__campo">
                <div className="formulario__titulo">Imagem</div>
                <input value={this.state.input.imagem} onChange={this.handleImagem} />
            </div>
            <div className="formulario__campo">
                <div className="formulario__titulo">Thumbnail</div>
                <input value={this.state.input.thumb} onChange={this.handleThumb} />
            </div>
            <div className="formulario__botoes">
                <div className="formulario__cancelar clique" onClick={this.handleCancel}>Cancelar</div>
                <div className="formulario__enviar clique" onClick={this.handleEnviar}>Enviar</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Formulario;
