export const createMessageTable = `
DROP TABLE IF EXISTS messages;
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  message VARCHAR NOT NULL
  )
  `;

  export const createUserTable = `
  DROP TABLE IF EXISTS users;
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    mobile BIGINT NOT NULL,
    storeaddress VARCHAR NOT NULL,
    landmark VARCHAR(30) NOT NULL,
    city VARCHAR(20) NOT NULL
    )
    `;

    export const createDummyProductTable = `
    DROP TABLE IF EXISTS products_dummy;
    CREATE TABLE IF NOT EXISTS products_dummy (
    id SERIAL PRIMARY KEY,
    categoryid SERIAL NOT NULL,
    name VARCHAR(20) NOT NULL,
    price INT NOT NULL,
    discountprice INT NOT NULL,
    url1 VARCHAR(20) NOT NULL,
    url2 VARCHAR(20) ,
    url3 VARCHAR(20) ,
    url4 VARCHAR(20) ,
    sellerid SERIAL NOT NULL
    )
        `;

    export const createProductTable = `
    DROP TABLE IF EXISTS products;
    CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    categoryid SERIAL NOT NULL,
    name VARCHAR(20) NOT NULL,
    price INT NOT NULL,
    discountprice INT NOT NULL,
    url1 VARCHAR(20) NOT NULL,
    url2 VARCHAR(20) ,
    url3 VARCHAR(20) ,
    url4 VARCHAR(20) ,
    sellerid SERIAL NOT NULL
    )
        `;

    export const createProductSoldTable = `
    DROP TABLE IF EXISTS products_sold;
    CREATE TABLE IF NOT EXISTS products_sold (
    id SERIAL PRIMARY KEY,
    productid SERIAL NOT NULL,
	buyerid SERIAL NOT NULL,
	sellerid SERIAL NOT NULL,
	ifreturn BOOLEAN DEFAULT false
    
    )
    `;
  
    export const createShopVisitTable = `
    DROP TABLE IF EXISTS shop_visit;
    CREATE TABLE IF NOT EXISTS shop_visit (
    id SERIAL PRIMARY KEY,
    productid SERIAL NOT NULL,
	sellerid SERIAL NOT NULL
    
    )
    `;

    export const createCategoryTable = `
    DROP TABLE IF EXISTS categories;
    CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
    
    )
    `;

export const insertMessages = `
INSERT INTO messages(name, message)
VALUES ('chidimo', 'first message'),
      ('orji', 'second message')
`;

export const dropMessagesTable = 'DROP TABLE messages';
