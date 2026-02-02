
class ContactController {

    async contact(req, res) {

        try {

            res.render("contact", {
                title: "Contact Page"
            });

        } catch (error) {

            console.log(error);
        }
    }
}


module.exports = new ContactController();