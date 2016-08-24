package ng2starter

import grails.converters.JSON

class DataController {
    def products() {
        Map data = [data: 'List Of Products']
        render data as JSON
    }

    def about() {
        Map data = [data: 'This page contains about']
        render data as JSON
    }

    def contact() {
        Map data = [data: 'Contact us at blah blah.better don not contact ' ]
        render data as JSON
    }
}
