
class AboutController {

    async about(req, res) {

        try {

            res.render("about",{
                title: "About Page"
            });

        } catch (error) {

            console.log(error);
        }
    }
}


module.exports = new AboutController();