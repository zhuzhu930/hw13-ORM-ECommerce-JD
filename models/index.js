// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  //define another table to store the foreign keys
  through: {
    model: ProductTag, 
    unique: false
  },
  //define an alias when data is retrieved
  //as: 'product_tag'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag, 
    unique: false
  },
  //define an alias for when data is retrived
  //as: 'tag_product'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
