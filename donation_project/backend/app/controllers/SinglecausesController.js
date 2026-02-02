
class SinglecausesController {

    async singlecauses(req, res) {

        try {

            res.render("singlecauses",{
                title: "Single Causes Page"
            })

        } catch (error) {

            console.log(error);
        }
    }
}

module.exports = new SinglecausesController();