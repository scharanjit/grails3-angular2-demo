package ng2starter

class AppController {
    def index() {
        [baseUrl: grailsApplication.config.grails.serverURL]
    }
}
