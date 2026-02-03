
const Product = require('../models/product');

class ProductApiController {

    // create product
    async createProduct (req, res) {

        try {

            const {
              name,
              size,
              color,
              image,
              desc,
              category,
            } = req.body;

            const data = new Product({
              name,
              size,
              color,
              image,
              desc,
              category,
            });

            const product = await data.save();

            return res.status(201).json({
                success: true,
                message: "product created successfully",
                data: product,
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    //read product
    async readProduct(req, res) {

        try {

            const data = await Product.find();

            return res.status(200).json({
                success: true,
                message: "product list",
                total: data.length,
                data: data,
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    //edit product
    async editProduct(req, res) {

        try {

            const id = req.params.id;

            const data = await  Product.findById(id);

            return res.status(200).json({
                success: true,
                message: "product is ready to edit",
                data: data,
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

}


module.exports = new ProductApiController();