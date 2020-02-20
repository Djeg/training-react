# Idées de routing complexes

Imaginons le routing suivant:

```
/user
/profile
/catalogues
/catalogues/:slug
/catalogues/:slug/produits
/catalogues/:slug/produits/:produit
/catalogues/:slug/produits/:produit/variant
/catalogues/:slug/produits/:produit/variant/:variant
```

## Arborescence :

Nous pouvons imaginer l'arbo suivante:

```
src/
  Component/
    App.js
    CatalogueList.js
    CatalogueDetail.js
    Product/
      App.js
      ProductDetail.js
```

## Un éxemple de découpage plus concret

App.js:

```js
import { CatalogueList } from './CatalogueList'
import { CatalogueDetail } from './CatalogueDetail'
import { App as ProduitApp } from './Product/App'

<Switch>
  <Route path="/catalogues" component={CatalogueList} />
  <Route path="/catalogues/:slug" render={() => 
    <Switch>
      <Route path="/" component={CatalogueDetail} />
      <Route path="/produits" component={ProduitApp} />
    </Switch>
  } />
</Switch>
```

Product/App.js

```js
import { ProduitList } from './ProduitList'
imporr { ProductDetail } from './ProductDetail'

<Switch>
  <Route path="/" component={ProduitList} />
  <Route path="/:id" component={ProduitDetail} />
</Switch>
```
