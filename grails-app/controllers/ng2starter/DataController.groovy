package ng2starter

import grails.converters.JSON
import org.dom4j.Text

class DataController {
    def prod=[
            'Bajaj','Renault','Audi'
    ]

    def products() {
        Map data = [data: [prod]]
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
