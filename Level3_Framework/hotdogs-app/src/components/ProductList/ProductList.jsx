import React from "react";
import styles from "./ProductList.module.scss";
import filterByExpiration from "helpers/filterByExpiration";
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    };
  }

  componentWillMount() {
    fetch("https://formula-test-api.herokuapp.com/menu")
      .then(response => response.json())
      .then(data => {
        this.setState(() => {
          return { productList: filterByExpiration(data) };
        });
      });
  }
  render() {
    return (
      <section className={styles.product_list} id="catering">
        <ul className={styles.list}>
          {this.state.productList.map(
            ({ id, name, description, expirationDate, backgroundURL }) => (
              <li key={id} className={styles.item}>
                <div className={styles.text_wrapper}>
                  <p className={styles.headline}>{name}</p>
                  <span className={styles.text}>{description}</span>
                </div>

                <img
                  className={`${styles.img} lazyload`}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODY1cHgiIGhlaWdodD0iNzc0cHgiIHZlcnNpb249IjEuMSI+CiAgICA8cmVjdCB3aWR0aD0iNzc0IiBoZWlnaHQ9Ijg4NSIgeD0iMCIgeT0iMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIi8+Cjwvc3ZnPgo="
                  data-src={backgroundURL}
                  alt={name}
                />
              </li>
            )
          )}
        </ul>
      </section>
    );
  }
}

export default ProductList;
