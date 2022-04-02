# Killed by tech
A graveyard for discontinued products and services from companies like Google, Apple and Microsoft.

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](/LICENSE)

## Contribute
Are you missing a product? Here's how to get it onto the site.

### General
In order to add a disconinued product to the site you'll need the following information about the product
* Name
* Company that produce it
* A description
* Release date
* Discontinued date
* Type of product (app, service, software or hardware)
* Source (a link to a resource that mentions that the product has been discontinued, Wikipedia or a news organization are great sources)

### How to: the easy way
[Create an issue here on GitHub](https://github.com/edvinlinden/killedby.tech/issues/new?assignees=edvinlinden&labels=&template=add-product.md&title=) using the issue type _Add product_. Whenever I update the site it will be added.

### How to: the DIY way
If you are familiar with git you can add the product yourself by creating a pull request.

1. Start by forking the repository
2. Create and switch to a new branch named after the product you want to add
3. Add the product to the appropriate JSON file based on the company located in `/src/assets/products/`
4. Commit your changes and create a pull request

