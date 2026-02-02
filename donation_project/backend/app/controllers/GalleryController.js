
class GalleryController {

    async gallery (req, res) {

        try {

            res.render("gallery",{
                title:"Gallery Page"
            });

        } catch (error) {

            console.log(error)
        }
    }
}

module.exports = new GalleryController();