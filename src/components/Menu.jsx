import React, { PureComponent } from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

class Menu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
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

  handleAdd = () => {
    this.props.history.push("/adicionarProdutos");
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.state.menu.map(categoria => (
            <div className="categoria__container">
              <div className="categoria__nome" key={categoria.category_title}>{categoria.category_title}</div>
              {categoria.products.map(produto => (
                <div className="produto__container" key={produto.id}>
                  <img src={produto.thumbnail} />
                  <div className="produto__nome">{produto.title.toUpperCase()} - {produto.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                  <div className="produto__descricao">{produto.description}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="rodape">
          <div className="adicionar__produto clique" onClick={this.handleAdd}><AddCircleOutlineIcon />Adicionar produto</div>
        </div>
      </div>
    );
  }
}

export default Menu;
