
class HomeController {

    async index(req, res) {

        try {
            res.render("home",{
                title: "Home Page"
            });

        } catch (error) {

            console.log(error);
        }
    }
}

module.exports = new HomeController();