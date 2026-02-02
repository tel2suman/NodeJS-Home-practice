
class CausesController {

    async causes(req, res) {

        try {

            res.render("causes",{
                title: "Causes Page"
            });

        } catch (error) {

            console.log(error);
        }
    }
}

module.exports = new CausesController();