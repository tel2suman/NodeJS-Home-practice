
class NewsController {

    async news(req, res) {

        try {
            res.render("news", {
                title: "News Page"
            });

        } catch (error) {

            console.log(error);
        }
    }
}


module.exports = new NewsController();